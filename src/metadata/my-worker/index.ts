import bcrypt from "bcryptjs";
import { jwtVerify, SignJWT } from "jose";
export const runtime = "edge";

const SECRET_KEY = new TextEncoder().encode("your_secret_key");

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});

interface MetadataPayload {
  key?: string;
  value?: Record<string, number>;
}

interface Credentials {
  username: string;
  password: string;
}

interface RouteMappings {
  [route: string]: string;
}

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (request.method === "OPTIONS") {
    return handleCors(new Response(null, { status: 204 }));
  }

  let response: Response;

  try {
    switch (request.method) {
      case "GET":
        response = await handleGetRequests(path, request);
        break;

      case "POST":
        if (path === "/signup") {
          response = await handleSignup(request);
        } else if (path === "/login") {
          response = await handleLogin(request);
        } else {
          response = new Response(JSON.stringify({ error: "Invalid endpoint" }), { status: 404 });
        }
        break;

      case "PUT":
        response = await handlePutRequest(path, request);
        break;

      default:
        response = new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405 });
    }
  } catch (err) {
    let errorMessage = "An unknown error occurred";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    response = new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }

  return handleCors(response);
}

async function handleGetRequests(path: string, request: Request): Promise<Response> {
  if (path === "/route-mappings" || path.includes("metadata")) {
    const isValid = await validateToken(request);
    if (!isValid) {
      console.log("Unauthorized access attempt with token:", request.headers.get("Authorization"));
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
  }

  console.log("Handling GET request for path:", path);

  try {
    const routeMappings = (await METADATA_STORE.get("routeMappings", { type: "json" })) as RouteMappings;
    if (path === "/route-mappings") {
      console.log("Fetched route mappings:", routeMappings);
      return new Response(JSON.stringify(routeMappings), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (routeMappings && routeMappings[path]) {
      const metadataKey = routeMappings[path];
      const value = await METADATA_STORE.get(metadataKey);
      if (!value) {
        return new Response(JSON.stringify({ error: "Metadata not found" }), { status: 404 });
      }
      return new Response(value, { status: 200, headers: { "Content-Type": "application/json" } });
    }

    if (path.includes("metadata")) {
      const allKeys = await METADATA_STORE.list();
      console.log("All keys in KV:", allKeys);
      const allData = await Promise.all(
        allKeys.keys.map(async ({ name }) => {
          const value = await METADATA_STORE.get(name);
          return { key: name, value: value ? JSON.parse(value) : null };
        })
      );
      return new Response(JSON.stringify(allData), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ error: "Path not mapped" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error fetching route mappings or metadata:", error);
    return new Response(JSON.stringify({ error: "Error fetching data" }), { status: 500 });
  }
}

async function handlePutRequest(path: string, request: Request): Promise<Response> {
  const { key, value }: MetadataPayload = await request.json();

  if (!key || !value) {
    return new Response(JSON.stringify({ error: "Key and value required" }), { status: 400 });
  }

  await METADATA_STORE.put(key, JSON.stringify(value));
  return new Response(JSON.stringify({ message: "Metadata updated" }), { status: 200 });
}

async function handleSignup(request: Request): Promise<Response> {
  const { username, password }: Credentials = await request.json();

  if (!username || !password) {
    return new Response(JSON.stringify({ error: "Username and Password required" }), { status: 400 });
  }

  const userKey = `user_${username}`;
  const existingCredentials = await METADATA_STORE.get(userKey, { type: "json" });

  if (existingCredentials) {
    return new Response(JSON.stringify({ error: "Username is already registered" }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const credentials = { username, password: hashedPassword };

  await METADATA_STORE.put(userKey, JSON.stringify(credentials));
  return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 200 });
}

async function handleLogin(request: Request): Promise<Response> {
  const { username, password }: Credentials = await request.json();

  if (!username || !password) {
    return new Response(JSON.stringify({ error: "Username and password required" }), { status: 400 });
  }

  const userKey = `user_${username}`;
  const storedCredentialsJson = await METADATA_STORE.get(userKey, { type: "text" });

  if (!storedCredentialsJson) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 403 });
  }

  const storedCredentials: Credentials = JSON.parse(storedCredentialsJson);

  if (!(await bcrypt.compare(password, storedCredentials.password))) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 403 });
  }

  const token = await new SignJWT({ username }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("1h").sign(SECRET_KEY);

  return new Response(JSON.stringify({ message: "Login successful", token }), { status: 200 });
}

async function validateToken(request: Request): Promise<boolean> {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) return false;

  const token = authHeader.split(" ")[1];
  if (!token) return false;

  try {
    await jwtVerify(token, SECRET_KEY);
    return true;
  } catch (error) {
    console.error("Token validation failed:", error);
    return false;
  }
}

function handleCors(response: Response): Response {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}
