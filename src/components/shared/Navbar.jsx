"use client";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { AiOutlineUser } from "react-icons/ai";

import {
  HomeIcon,
  UsersIcon,
  PlusCircleIcon,
  BookmarkIcon,
  CalendarDaysIcon,
  LogInIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log("Current user:", user);
   const isLoggedIn = !!user; 

  const handleLogout = async () => {
    await authClient.signOut();
    router.refresh();
  };
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);



  const navItems = [
    { title: "Home", href: "/", icon: HomeIcon },
    { title: "Tutors", href: "/tutors", icon: UsersIcon },
  ];

  const authItems = [
    { title: "Add Tutor", href: "/add-tutor", icon: PlusCircleIcon },
    { title: "My Tutors", href: "/my-tutors", icon: BookmarkIcon },
    {
      title: "My Booked Sessions",
      href: "/booked-sessions",
      icon: CalendarDaysIcon,
    },
  ];

  const mobileItems = [
    ...navItems,
    ...(isLoggedIn ? authItems.slice(0, 2) : []),
  ];

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-300 ${
          isHome && !scrolled
            ? "absolute top-0 bg-transparent text-white"
            : "fixed top-0 bg-white text-black shadow-md backdrop-blur-xl"
        }`}
      >
        <div className=" flex max-w-7xl mx-auto items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/">
            <Image src={logo} alt="logo" width={200} height={50} />
          </Link>

          <nav className={`hidden items-center gap-6 md:flex`}>
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex gap-2 items-center font-medium transition-colors hover:text-[#0d8a6c]"
              >
                {" "}
                {<item.icon />}
                {item.title}
              </Link>
            ))}

            {isLoggedIn &&
              authItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="font-medium transition-colors hover:text-[#0d8a6c]"
                >
                  {item.title}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-2">
            {user ? (
              <>
                <p className="hidden md:block font-medium mr-3">
                  Hello, {user.name.split(" ")[0]}
                </p>
                <Dropdown>
                  <Button aria-label="Menu" className="w-fit p-0">
                    <Avatar>
                      <Avatar.Image
                        referrerPolicy="no-referrer"
                        alt={user?.name}
                        src={user?.image}
                      />
                      <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                    </Avatar>
                  </Button>

                  <Dropdown.Popover>
                    <Dropdown.Menu
                      onAction={(key) => console.log(`Selected: ${key}`)}
                    >
                      <Dropdown.Item
                        id="profile"
                        onClick={() => router.push("/profile")}
                        textValue="Profile"
                      >
                        <Label className="cursor-pointer flex gap-2 items-center font-semibold">
                          {" "}
                          <AiOutlineUser />
                          Profile
                        </Label>
                      </Dropdown.Item>

                      <Dropdown.Item id="logout" onClick={handleLogout} textValue="Logout">
                        <Label className="text-red-600 cursor-pointer flex gap-2 items-center font-semibold">
                          <MdLogout />
                          Logout
                        </Label>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </>
            ) : (
              <div className="hidden items-center gap-2 md:flex">
                <Link href="/login" passHref>
                  <Button
                    size="xl"
                    className="bg-black px-6 py-5 hover:bg-[#0d8a6c]"
                  >
                    <span>Login</span>
                  </Button>
                </Link>
                <Link href="/register" passHref>
                  <Button size="xl" className="bg-black hover:bg-[#0d8a6c]">
                    <span>Register</span>
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-border bg-background/95 px-1 py-2 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-1">
          {mobileItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="inline-flex flex-1 flex-col items-center gap-1 rounded-xl px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}

          {!isLoggedIn ? (
            <Link
              href="/login"
              className="inline-flex flex-1 flex-col items-center gap-1 rounded-xl px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <LogInIcon className="h-5 w-5" />
              <span>Login</span>
            </Link>
          ) : (
            <Avatar>
              <Avatar.Image
                referrerPolicy="no-referrer"
                alt={user?.name}
                src={user?.image}
              />
              <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
            </Avatar>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
