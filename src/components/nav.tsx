import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router";

export function Nav() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Playground</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-1">
              <NavigationMenuLink asChild>
                <Link to="/screensaver">Screensaver</Link>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Socials</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-1">
              <NavigationMenuLink href="https://github.com/xcklein">GitHub</NavigationMenuLink>
              <NavigationMenuLink href="https://linkedin.com/in/xcklein">
                LinkedIn
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
