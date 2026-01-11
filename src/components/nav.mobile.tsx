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
import { MadeWithLove } from "./made-with-love";
import { Socials } from "./socials";

const NAV = [
  {
    title: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    title: "Technology",
    href: "/technology",
    icon: CpuIcon,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: MailIcon,
  },
];

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
          <DrawerTitle className="text-3xl font-bold">
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
            {NAV.map((item) => (
              <li key={item.href}>
                <Button
                  asChild
                  variant="ghost"
                  className="h-12 w-full justify-start p-0! text-lg"
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                >
                  <Link to={item.href}>
                    <item.icon className="size-5" />
                    {item.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <DrawerFooter className="p-0">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <MadeWithLove />
            </span>
            <span className="flex items-center gap-1">
              <Socials />
            </span>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
