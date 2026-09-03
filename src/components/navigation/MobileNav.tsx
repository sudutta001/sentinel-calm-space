"use client";

import { Link } from "@tanstack/react-router";
import { Home, LineChart, ShieldCheck, SquarePen } from "lucide-react";

const items = [
  { label: "Home", to: "/dashboard", icon: Home },
  { label: "Check-in", to: "/checkin", icon: SquarePen },
  { label: "Wellbeing", to: "/wellbeing", icon: LineChart },
  { label: "Privacy", to: "/privacy", icon: ShieldCheck },
];

export function MobileNav() {
  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {items.map((item) => (
          <li key={item.to} className="flex-1">
            <Link
              to={item.to}
              className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-medium text-muted-foreground transition-colors data-[status=active]:text-primary"
            >
              <item.icon aria-hidden="true" className="size-5" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
