import Link from 'next/link';
import React from 'react';
import { Avatar} from "@heroui/react";
import { MdLogin } from 'react-icons/md';
import { FaHouseChimney,} from "react-icons/fa6";
import { FaUsers, FaCalendarAlt } from "react-icons/fa";


const MobileNav = ({ user }) => {
  const navItems = [
    { title: "Home", href: "/", icon: FaHouseChimney },
    { title: "Tutors", href: "/tutors", icon: FaUsers },
  ];

  const authItems = [
    {
      title: "Sessions",
      href: "/booked-sessions",
      icon: FaCalendarAlt,
    },
  ];
  const mobileItems = [
    ...navItems,
    ...(user? authItems : []),
  ];
  return (
    <div>
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

          {!user ? (
            <Link
              href="/login"
              className="inline-flex flex-1 flex-col items-center gap-1 rounded-xl px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <MdLogin className="h-5 w-5" />
              <span>Login</span>
            </Link>
          ) : (
            <Link href="/profile">
              <Avatar>
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user?.name}
                  src={user?.image}
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;