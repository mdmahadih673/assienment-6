"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const pathname = usePathname();

    const links = [
        {
            href: "/Workouts",
            label: "Workouts",
        },
        {
            href: "/MyPlan",
            label: "My Plan",
        },
    ];

    return (
        <div className="flex items-center gap-1">
            {links.map((link) => {
                const active = pathname === link.href;

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${active
                            ? "bg-[#17300a] text-lime-500"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavLinks;