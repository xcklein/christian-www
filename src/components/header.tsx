import Link from "next/link";
import { Navbar, Type } from "@/components/material";
import ThemeButton from "./theme-button";

export default function Header({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Navbar className="p-2 border-none bg-palette-white dark:bg-palette-black text-palette-black dark:text-palette-white">
        <div className="flex justify-between items-center">
          <div className="flex-grow-0">
            <Link href="/">
              <Type>
                Christian
              </Type>
            </Link>
          </div>
          <div className="flex-grow-1"/>
          <div className="flex-grow-0">
            <ThemeButton/>
          </div>
        </div>
      </Navbar>
    </div>
  );
}