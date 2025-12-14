import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Socials</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="https://github.com/xcklein">GitHub</NavigationMenuLink>
            <NavigationMenuLink href="https://linkedin.com/in/xcklein">LinkedIn</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
