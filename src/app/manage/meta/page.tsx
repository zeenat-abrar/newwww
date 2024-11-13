"use client";
import { IconArrowLeft, IconBrandTabler } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Login from "@/app/manage/login/page";
import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/metadata/sidebar";
import { fetchMetadata, fetchRouteMappings, MetadataEntry, RouteMappings } from "@/pages/api/meta";

export const runtime = "edge";

interface MetadataValue {
  title: string;
  description: string;
}

export default function ManageMetaWithSidebar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setPassword("");
    setUsername("");
    router.push("/manage/login");
  };

  const links = [
    { label: "Dashboard", href: "/manage/meta", icon: <IconBrandTabler className="icon-class" /> },
    // { label: "Logout", href: "/manage/login", icon: <IconArrowLeft className="icon-class" /> },
    {
      label: "Logout",
      onClick: handleLogout,
      icon: <IconArrowLeft className="icon-class" />,
    },
  ];

  const router = useRouter();
  const pathname = usePathname();
  const [metadata, setMetadata] = useState<MetadataEntry[]>([]);
  const [routeMappings, setRouteMappings] = useState<RouteMappings>({});
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const [open, setOpen] = useState(false);

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const fetchMetadataAndRoutes = async () => {
    try {
      console.log("Fetching metadata and route mappings...");

      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      // Fetch route mappings
      const routeMappingsData: RouteMappings = await fetchRouteMappings(token);
      console.log("Fetched route mappings:", routeMappingsData);
      setRouteMappings(routeMappingsData);

      // Fetch metadata
      const metadataData: MetadataEntry[] = await fetchMetadata(token);
      console.log("Fetched metadata:", metadataData);
      setMetadata(metadataData);
    } catch (err) {
      console.error("Error fetching metadata or route mappings:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      fetchMetadataAndRoutes();
    } else {
      console.log("Please log in or sign up to access this page.");
      setIsAuthenticated(false);
      router.push("/manage/login");
    }
  }, []);

  const getMetadataByKey = (key: string): MetadataValue | undefined => {
    const entry = metadata.find((item) => item.key === key);
    return entry ? entry.value : undefined;
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortDirection(event.target.value as "asc" | "desc");
    setCurrentPage(1);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredAndSortedEntries = Object.keys(routeMappings)
    .map((route) => {
      const metaKey = routeMappings[route];
      const metaValue = getMetadataByKey(metaKey);
      return { route, metaKey, title: metaValue?.title, description: metaValue?.description };
    })
    .filter((entry) => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      return (
        entry.route.toLowerCase().includes(lowerSearchTerm) ||
        (entry.title && entry.title.toLowerCase().includes(lowerSearchTerm)) ||
        (entry.description && entry.description.toLowerCase().includes(lowerSearchTerm))
      );
    })
    .sort((a, b) => {
      if (a.route && b.route) {
        return sortDirection === "asc" ? a.route.localeCompare(b.route) : b.route.localeCompare(a.route);
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredAndSortedEntries.length / itemsPerPage);
  const currentEntries = filteredAndSortedEntries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen"
    >
      <div>
        {isAuthenticated ? (
          <div className="flex">
            {pathname !== "/manage/login" && (
              <div className="sticky top-0 h-screen z-20">
                <Sidebar open={open} setOpen={setOpen}>
                  <SidebarBody>
                    <div className="flex flex-col">
                      {open ? <Logo /> : <LogoIcon />}
                      <div className="mt-8 flex flex-col gap-2">
                        {links.map((link, idx) => (
                          <SidebarLink key={idx} link={link} />
                        ))}
                      </div>
                    </div>
                  </SidebarBody>
                </Sidebar>
              </div>
            )}
            <div className="flex-1 p-6 bg-white shadow rounded-lg">
              <div className="sticky top-0 z-10 bg-white pb-4">
                <h2 className="text-2xl font-semibold mb-4 text-center">Manage Metadata</h2>
                <div className="flex mb-4 items-center justify-between">
                  <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} className="border p-2 rounded w-1/3 mr-4" />
                  <select value={sortDirection} onChange={handleSortChange} className="border p-2 rounded">
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <div className="table-container">
                  <table className="table w-full">
                    <thead>
                      <tr className="sticky top-0 bg-ivviolet-600 text-white">
                        <th className="px-4 py-2 sticky top-0 z-10">Route</th>
                        <th className="px-4 py-2 sticky top-0 z-10">Meta Key</th>
                        <th className="px-4 py-2 sticky top-0 z-10">Title</th>
                        <th className="px-4 py-2 sticky top-0 z-10">Description</th>
                        <th className="px-4 py-2 sticky top-0 z-10">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentEntries.map(({ route, metaKey, title, description }, index) => (
                        <tr key={metaKey} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-ivviolet-200 transition duration-200`}>
                          <td className="border px-4 py-2 text-center">{route}</td>
                          <td className="border px-4 py-2 text-center">{metaKey}</td>
                          <td className="border px-4 py-2 text-center">{title || "No Title"}</td>
                          <td className="border px-4 py-2 text-center">{description || "No Description"}</td>
                          <td className="border px-4 py-2 text-center">
                            <PrimaryButton text="Edit" href={`/manage/editable-metadata?key=${metaKey}`} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="sticky bottom-0 z-10 bg-white mt-4 flex justify-between py-2">
                <PrimaryButton text="Previous" onClick={() => handlePageChange(currentPage - 1)} className="disabled:opacity-50" disabled={currentPage === 1} />
                <div>
                  Page {currentPage} of {totalPages}
                </div>
                <PrimaryButton
                  text="Next"
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="disabled:opacity-50"
                  disabled={currentPage === totalPages}
                />
              </div>
            </div>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </section>
  );
}

const Logo = () => (
  <Link href="#" className="flex items-center space-x-2">
    <div className="h-5 w-6 rounded">
      <Image
        src="https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png"
        className="rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
    </div>
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Infoveave
    </motion.span>
  </Link>
);

const LogoIcon = () => (
  <Link href="#" className="flex items-center space-x-2">
    <div className="h-5 w-6 rounded">
      <Image
        src="https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png"
        className="rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
    </div>
  </Link>
);
