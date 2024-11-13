import { Metadata } from "next";
import { getFallbackMetadata } from "@/metadata/utils/fallbackMapping";
export const runtime = "edge";
interface AboutMetadataResponse {
  title: string;
  description: string;
  robots: string;
  openGraph: {
    locale: string;
    type?: string;
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter: {
    card: "summary" | "summary_large_image" | "player" | "app";
    title: string;
    description: string;
  };
}

export async function generatemetadata(slug: string): Promise<Metadata> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER_BASE_URL}/${slug}`, {
      cache: "no-store", // Ensures the fetch request bypasses any cache
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = (await response.json()) as AboutMetadataResponse;
    return {
      title: data.title,
      description: data.description,
      robots: data.robots,
      openGraph: {
        locale: data.openGraph.locale,
        title: data.openGraph.title,
        description: data.openGraph.description,
        url: data.openGraph.url,
        siteName: data.openGraph.siteName,
        images: data.openGraph.images,
      },
      twitter: {
        card: data.twitter.card,
        title: data.twitter.title,
        description: data.twitter.description,
      },
    };
  } catch (error) {
    console.error(`Failed to fetch metadata for ${slug}:`, error);
    return getFallbackMetadata(slug);
  }
}
