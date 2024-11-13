"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import { fetchMetadataa, MetadataResponse, saveMetadata } from "@/pages/api/editmeta";
export const runtime = "edge";

const EditableMetadataPage = () => {
  const router = useRouter();
  const [metadata, setMetadata] = useState<MetadataResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [key, setKey] = useState<string>("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const metadataKey = query.get("key");
    console.log("Metadata Key:", metadataKey);
    if (metadataKey) {
      setKey(metadataKey);
      fetchMetadata(metadataKey);
    }
  }, []);
  const fetchMetadata = async (metadataKey: string) => {
    try {
      const data = await fetchMetadataa(metadataKey);
      console.log("Fetched Data:", data);
      setMetadata(data);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };
  const handleSave = async () => {
    if (!metadata) return;

    console.log("Saving Metadata:", metadata);

    try {
      await saveMetadata(key, metadata);
      router.push("/manage/meta");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!metadata) return;
    const { name, value } = e.target;

    if (name === "title") {
      if (value.length > 60) {
        setTitleError("Page title should not exceed 60 characters.");
      } else {
        setTitleError(null); // Clear title error if input is within valid range
      }
    }

    if (name === "description") {
      if (value.length > 160) {
        setDescriptionError("Meta description should not exceed 160 characters.");
      } else {
        setDescriptionError(null); // Clear description error if input is within valid range
      }
    }

    setMetadata({
      ...metadata,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpenGraphChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMetadata((prev) => ({
      ...prev!,
      openGraph: {
        ...prev?.openGraph,
        [name]: value,
      },
    }));
  };

  const handleTwitterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMetadata((prev) => ({
      ...prev!,
      twitter: {
        ...(prev?.twitter || { card: "", title: "" }),
        [name]: value,
      },
    }));
  };

  if (error) return <p className="text-red-600 mb-4">{error}</p>;
  if (!metadata) return console.log("no metadata");

  return (
    <div className="p-14 min-h-screen container">
      <h2 className="text-2xl font-semibold mb-4 text-center">Edit Metadata</h2>
      <div className="flex items-center justify-center">
        <div className="w-4/5 bg-white p-6">
          <div>
            <label className="block mb-2">Page Title (30-60 characters)</label>
            <input type="text" name="title" value={metadata.title} onChange={handleChange} className="border rounded px-2 py-1 w-full mb-4 text-gray-500" />
            {titleError && <p className="text-red-600 text-sm mb-4">{titleError}</p>}
          </div>
          <div>
            <label className="block mb-2">Meta Description (150-160 characters)</label>
            <textarea name="description" value={metadata.description} onChange={handleChange} className="border rounded px-2 py-1 w-full mb-4 text-gray-500" />
            {descriptionError && <p className="text-red-600 text-sm mb-4">{descriptionError}</p>}
          </div>
          <div>
            <label className="block mb-2">Robots</label>
            <input
              type="text"
              name="robots"
              value={metadata.robots || ""}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full mb-4 text-gray-500"
            />
          </div>

          <h3 className="text-xl font-semibold mt-4 mb-2">SEO</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Locale</label>
              <input
                type="text"
                name="locale"
                value={metadata.openGraph?.locale || ""}
                onChange={handleOpenGraphChange}
                className="border rounded px-2 py-1 w-full mb-4 text-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2">Type</label>
              <input
                type="text"
                name="type"
                value={metadata.openGraph?.type || ""}
                onChange={handleOpenGraphChange}
                className="border rounded px-2 py-1 w-full mb-4 text-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2">URL</label>
              <input
                type="text"
                name="url"
                value={metadata.openGraph?.url || ""}
                onChange={handleOpenGraphChange}
                className="border rounded px-2 py-1 w-full mb-4 text-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2">Site Name</label>
              <input
                type="text"
                name="siteName"
                value={metadata.openGraph?.siteName || ""}
                onChange={handleOpenGraphChange}
                className="border rounded px-2 py-1 w-full mb-4 text-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2">SEO Title (50-60 characters)</label>
              <input
                type="text"
                name="title"
                value={metadata.openGraph?.title || ""}
                onChange={handleOpenGraphChange}
                className="border rounded px-2 py-1 w-full mb-4 text-gray-500"
              />
              {titleError && <p className="text-red-600 text-sm mb-4">{titleError}</p>}
            </div>
            <div>
              <label className="block mb-2">SEO Description</label>
              <textarea
                name="description"
                value={metadata.openGraph?.description || ""}
                onChange={handleOpenGraphChange}
                className="border rounded px-2 py-1 w-full mb-4 text-gray-500"
              />
              {descriptionError && <p className="text-red-600 text-sm mb-4">{descriptionError}</p>}
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-4 mb-2">Twitter</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Twitter Card</label>
              <input
                type="text"
                name="card"
                value={metadata.twitter?.card || ""}
                onChange={handleTwitterChange}
                className="border rounded px-2 py-1 w-full mb-4 text-gray-500"
              />
            </div>
            <div>
              <label className="block mb-2">Twitter Title</label>
              <input
                type="text"
                name="title"
                value={metadata.twitter?.title || ""}
                onChange={handleTwitterChange}
                className="border rounded px-2 py-1 w-full mb-4 text-gray-500"
              />
            </div>
          </div>

          {/* <PrimaryButton text="Save" onClick={handleSave} className="mt-4" /> */}
          <PrimaryButton text="Save" onClick={handleSave} className="mt-4" disabled={Boolean(error || titleError || descriptionError)} />

          <PrimaryWhiteButton text="Cancel" href="/manage/meta" className="mt-4 ml-4" />
        </div>
      </div>
    </div>
  );
};

export default EditableMetadataPage;
