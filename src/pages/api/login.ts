import type { NextApiRequest, NextApiResponse } from "next";

export const runtime = "edge";

type LoginResponse = {
  token?: string;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<LoginResponse>) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { username, password } = req.body;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = (await response.json()) as LoginResponse;
      res.status(200).json(data);
    } else {
      const errorData = (await response.json()) as LoginResponse;
      res.status(response.status).json({ message: errorData.message || "Login failed. Please check your credentials." });
    }
  } catch (error) {
    console.error("Login API error:", error);
    res.status(500).json({ message: "An unknown error occurred" });
  }
}
