import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CpuIcon, HomeIcon, MailIcon, MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Footer } from "./footer";

export function NavMobile() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="bg-sidebar hover:bg-sidebar-accent! rounded-full shadow"
        >
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-6" aria-describedby={undefined}>
        <DrawerHeader className="mb-4 p-0">
          <DrawerTitle className="text-2xl font-bold">
            <Link
              to="/"
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              christian.gg
            </Link>
          </DrawerTitle>
        </DrawerHeader>
        <nav>
          <ul className="flex flex-col gap-1">
            <li>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start p-0!"
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                <Link to="/">
                  <HomeIcon />
                  Home
                </Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start p-0!"
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                <Link to="/technology">
                  <CpuIcon />
                  Technology
                </Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start p-0!"
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                <Link to="/contact">
                  <MailIcon />
                  Contact
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
        <DrawerFooter className="p-0">
          <Footer className="p-0" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
