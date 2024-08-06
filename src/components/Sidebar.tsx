"use client";

import React from "react";

import { SidebarLinks } from "@/models";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {SidebarLinks.map((s) => {
          const isActive = pathName === s.route || pathName.startsWith(`${s.route}/`);

          return (
            <Link
              href={s.route}
              key={s.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                { "bg-blue-1": isActive }
              )}
            >
              <Image src={s.imgUrl} alt={s.label} width={24} height={24} className="w-auto h-auto" />
              <p className="text-lg font-semibold max-lg:hidden">{s.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
