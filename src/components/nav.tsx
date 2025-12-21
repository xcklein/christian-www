import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
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
import { GithubIcon, LinkedinIcon, MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function Nav() {
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return isMobile ? (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="left">
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-6" aria-describedby={undefined}>
        <DrawerHeader className="mb-4 p-0">
          <DrawerTitle className="text-2xl font-bold">Menu</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Playground</h3>
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
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Socials</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  to="https://github.com/xcklein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-accent flex flex-row items-center gap-1 rounded-md p-2"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  to="https://linkedin.com/in/xcklein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-accent flex flex-row items-center gap-1 rounded-md p-2"
                >
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  ) : (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Playground</NavigationMenuTrigger>
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
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Socials</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-1">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="https://github.com/xcklein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-1"
                  >
                    <GithubIcon />
                    GitHub
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="https://linkedin.com/in/xcklein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-1"
                  >
                    <LinkedinIcon />
                    LinkedIn
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
