import {Button, Drawer} from "@heroui/react";
import { CgMenu } from "react-icons/cg";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaUserPlus,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ handleLogout, pathname, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", icon: FaHouseChimney, href: "/" },
    { title: "Tutors", icon: FaChalkboardTeacher, href: "/tutors" },
  ];

  const authItems = [
    { title: "Add Tutor", icon: FaUserPlus, href: "/add-tutor" },
    { title: "My Tutors", icon: FaUsers, href: "/my-tutors" },
    {
      title: "Booked Sessions",
      icon: FaCalendarAlt,
      href: "/booked-sessions",
    },
    { title: "Profile", icon: FaUser, href: "/profile" },
  ];
  return (
    <div>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button className="bg-transparent text-black">
          <CgMenu />
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link key={item.title} href={item.href}>
                      <button
                        onClick={() => setIsOpen(false)}
                        className={`w-full cursor-pointer flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default ${
                          pathname === item.href ? "text-green-600" : ""
                        }`}
                        type="button"
                      >
                        {item.icon && <item.icon className="size-5" />}
                        {item.title}
                      </button>
                    </Link>
                  ))}
                  {user && (
                    <>
                      {authItems.map((item) => (
                        <Link key={item.title} href={item.href}>
                          <button
                            onClick={() => setIsOpen(false)}
                            className={`w-full cursor-pointer flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default ${
                              pathname === item.href ? "text-green-600" : ""
                            }`}
                            type="button"
                          >
                            {item.icon && <item.icon className="size-5" />}
                            {item.title}
                          </button>
                        </Link>
                      ))}
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          handleLogout();
                        }}
                        className=" cursor-pointer flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-600 transition-colors hover:bg-default"
                        type="button"
                      >
                        <MdLogout className="size-5 font-semibold" />
                        Logout
                      </button>
                    </>
                  )}
                </nav>
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default MobileMenu;