import Link from "next/link";
import { Navbar, Text } from "@/components/material";
import ThemeButton from "./theme-button";

export default function Header({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Navbar className="p-2 border-none bg-palette-white dark:bg-palette-black text-palette-black dark:text-palette-white">
        <div className="flex justify-between items-center">
          <div className="flex-grow-0 ml-2">
            <Link href="/">
              <Text variant="h5">
                Hello, world!
              </Text>
            </Link>
          </div>
          <div className="flex-grow-1"/>
          <div className="flex-grow-0">
            <ThemeButton className="bg-palette-yellow dark:bg-palette-purple text-palette-white dark:text-palette-white"/>
          </div>
        </div>
      </Navbar>
    </div>
  );
}