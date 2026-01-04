import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Footer } from "./footer";

export function Nav() {
  const isMobile = useIsMobile();

  return isMobile ? <NavMobile /> : <NavOther />;
}

export function NavMobile() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="left">
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
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
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Pages</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  to="/technology"
                  className="hover:bg-accent flex flex-col gap-1 rounded-md p-2"
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                >
                  <h4 className="font-medium">Technology</h4>
                  <p className="text-muted-foreground text-sm">Some stuff I have worked with</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:bg-accent flex flex-col gap-1 rounded-md p-2"
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                >
                  <h4 className="font-medium">Contact Me</h4>
                  <p className="text-muted-foreground text-sm">Let's connect!</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <DrawerFooter className="p-0">
          <Footer />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export function NavOther() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-xs flex-col gap-1">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/technology">
                    <h4>Technology</h4>
                    <p className="text-muted-foreground">Some stuff I have worked with</p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/contact">
                    <h4>Contact Me</h4>
                    <p className="text-muted-foreground">Let's connect!</p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
