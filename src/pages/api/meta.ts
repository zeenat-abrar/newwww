import { NextApiRequest, NextApiResponse } from "next";

export const runtime = "edge";

export type MetadataValue = {
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
};

export type MetadataEntry = {
  id: string;
  name: string;
  key: string;
  value: MetadataValue;
};

export type RouteMappings = {
  [key: string]: string;
};

// Function to fetch route mappings
export async function fetchRouteMappings(token: string): Promise<RouteMappings> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER_BASE_URL}/route-mappings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch route mappings: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchMetadata(token: string): Promise<MetadataEntry[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER_BASE_URL}/metadata`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch metadata: ${response.statusText}`);
  }

  return response.json();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from header

  if (!token) {
    res.status(401).json({ message: "Authorization token missing" });
    return;
  }

  try {
    if (req.method === "GET" && req.query.type === "route-mappings") {
      // Fetch route mappings
      const routeMappings = await fetchRouteMappings(token);
      res.status(200).json(routeMappings);
    } else if (req.method === "GET" && req.query.type === "metadata") {
      // Fetch metadata
      const metadata = await fetchMetadata(token);
      res.status(200).json(metadata);
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
