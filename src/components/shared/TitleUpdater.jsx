"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function getTitleFromPath(pathname) {
  if (!pathname || pathname === "/") return "Home";

  const parts = pathname.split("/").filter(Boolean);

  // handle dynamic tutor page e.g. /tutors/123
  if (parts[0] === "tutors" && parts[1]) return `Tutor • ${parts[1]}`;

  const map = {
    login: "Login",
    register: "Register",
    "add-tutor": "Add Tutor",
    "booked-sessions": "Booked Sessions",
    "my-tutors": "My Tutors",
    profile: "Profile",
    tutors: "Tutors",
  };

  return map[parts[0]] || parts[0].replace(/-/g, " ")?.replace(/^./, (c) => c.toUpperCase()) || "MediQueue";
}

export default function TitleUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    const page = getTitleFromPath(pathname);
    const base = "MediQueue";
    document.title = page ? `${page} | ${base}` : base;
  }, [pathname]);

  return null;
}
