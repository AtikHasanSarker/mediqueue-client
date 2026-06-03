"use client";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { AiOutlineUser } from "react-icons/ai";
import { FaUsers, FaUserPlus, FaCalendarAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import MobileMenu from "./MobileMenu";
import MobileNav from "./MobileNav";
import { ThemeToggle } from "../ThemeToggle";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

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
    { title: "Home", href: "/", icon: FaHouseChimney },
    { title: "Tutors", href: "/tutors", icon: FaUsers },
  ];

  const authItems = [
    { title: "Add Tutor", href: "/add-tutor", icon: FaUserPlus },
    { title: "My Tutors", href: "/my-tutors", icon: FaUsers },
    {
      title: "Booked Sessions",
      href: "/booked-sessions",
      icon: FaCalendarAlt,
    },
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
                className={`flex gap-2 items-center font-medium transition-colors hover:text-[#0d8a6c] ${
                  pathname === item.href ? "text-green-600 font-semibold" : ""
                }`}
              >
                {" "}
                {<item.icon />}
                {item.title}
              </Link>
            ))}

            {user &&
              authItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`hidden lg:flex gap-2 items-center font-medium transition-colors hover:text-[#0d8a6ded] ${
                    pathname === item.href ? "text-green-600 font-semibold" : ""
                  }`}
                >
                  {<item.icon />}
                  {item.title}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {user ? (
              <>
                <div className="hidden md:flex">
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
                          id="userName"
                          onClick={() => router.push("/profile")}
                          textValue={user.name}
                        >
                          <Label className="font-semibold">
                            <p className="font-medium mr-3 hidden lg:block">
                              Hello, {user.name.split(" ")[0]}
                            </p>
                          </Label>
                        </Dropdown.Item>

                        <Dropdown.Item
                          id="profile"
                          onClick={() => router.push("/profile")}
                          textValue="Profile"
                        >
                          <Label className="cursor-pointer flex gap-2 items-center font-semibold">
                            <AiOutlineUser />
                            Profile
                          </Label>
                        </Dropdown.Item>

                        <Dropdown.Item
                          id="logout"
                          onClick={handleLogout}
                          textValue="Logout"
                        >
                          <Label className="text-red-600 cursor-pointer flex gap-2 items-center font-semibold">
                            <MdLogout />
                            Logout
                          </Label>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Popover>
                  </Dropdown>
                </div>
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

            {/* for mobile view */}
            <div className="lg:hidden">
              <MobileMenu
                handleLogout={handleLogout}
                user={user}
                pathname={pathname}
              />
            </div>
          </div>
        </div>
      </header>

      <MobileNav user={user} pathname={pathname} />
    </>
  );
};

export default Navbar;
