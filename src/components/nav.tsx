import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Link } from "react-router";

export function Nav() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
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
