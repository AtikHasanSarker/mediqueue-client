"use client";


import Link from "next/link";
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  HomeIcon,
  UsersIcon,
  PlusCircleIcon,
  BookmarkIcon,
  CalendarDaysIcon,
  LogInIcon,
  UserIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isLoggedIn = false; // Replace with real auth state in your app

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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white text-black shadow-md backdrop-blur-xl "
            : "bg-transparent text-white absolute top-0 "
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
                className="flex gap-2 items-center font-medium transition-colors hover:text-teal-400"
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
                  className="font-medium transition-colors hover:text-foreground"
                >
                  {item.title}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-2">
            {!isLoggedIn ? (
              <div className="hidden items-center gap-2 md:flex">
                <Link href="/login" passHref>
                  <Button
                    size="xl"
                    className="px-6 py-5 hover:bg-teal-500"
                  >
                    <span>Login</span>
                  </Button>
                </Link>
                <Link href="/register" passHref>
                  <Button
                    size="xl"
                    className="hover:bg-teal-500"
                  >
                    <span>Register</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full p-0"
                  >
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Signed in as Jane Doe</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/logout">Logout</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
            <Link
              href="/profile"
              className="inline-flex flex-1 flex-col items-center gap-1 rounded-xl px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <UserIcon className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
