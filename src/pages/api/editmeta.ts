import { NextApiRequest, NextApiResponse } from "next";

export const runtime = "edge";

export interface MetadataResponse {
  title: string;
  description: string;
  robots?: string;
  openGraph?: {
    locale?: string;
    type?: string;
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{
      url?: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    card: string;
    title: string;
  };
}

// Fetch metadata
export async function fetchMetadataa(metadataKey: string): Promise<MetadataResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER_BASE_URL}/${metadataKey}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch metadata: ${response.statusText}`);
  }
  return response.json();
}

// Save metadata
export async function saveMetadata(key: string, metadata: MetadataResponse): Promise<void> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER_BASE_URL}/${key}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ key, value: metadata }),
  });

  if (!response.ok) {
    throw new Error("Failed to update metadata");
  }
}

// Wrapper handler function to use as default export
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const metadataKey = req.query.key as string;
      const data = await fetchMetadataa(metadataKey);
      res.status(200).json(data);
    } else if (req.method === "PUT") {
      const { key, metadata } = req.body;
      await saveMetadata(key, metadata);
      res.status(200).json({ message: "Metadata saved successfully" });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
}
