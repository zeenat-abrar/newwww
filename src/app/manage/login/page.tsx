"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import PrimaryButton from "@/components/ui/buttons/primary-button";

export const runtime = "edge";

interface LoginResponse {
  token: string;
}

interface ErrorResponse {
  error: string;
}

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data: LoginResponse = await response.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
          router.push("/manage/meta");
        } else {
          const errorData: ErrorResponse = await response.json();

          setError(errorData.error || "Login failed. Please check your credentials.");
        }
      } else {
        const errorData: ErrorResponse = await response.json();
        setError(errorData.error || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };

  // const handleLogin = async (event: React.FormEvent) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch("/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     const data = (await response.json()) as LoginResponse;

  //     if (response.ok && data.token) {
  //       localStorage.setItem("token", data.token);
  //       router.push("/manage/meta");
  //     } else {
  //       setError("Login failed. Please check your credentials.");
  //     }
  //   } catch (error) {
  //     setError(error instanceof Error ? error.message : "An unknown error occurred");
  //   }
  // };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setError(null);

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="fixed inset-0 flex items-center justify-center min-h-screen overflow-hidden"
    >
      <div className="bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-lg p-8 w-full max-w-md mx-auto transition-all duration-300 hover:scale-105">
        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            required
          />
          <PrimaryButton text="Login" onClick={handleLogin} />
          {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
        </form>
      </div>
    </section>
  );
}
