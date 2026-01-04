import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { CpuIcon, HomeIcon, MailIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent } from "./ui/tooltip";

export function NavDesktop() {
  return (
    <nav className="flex flex-row items-center gap-1">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" asChild className="bg-card rounded-full">
            <Link to="/">
              <HomeIcon />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Home</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" asChild className="bg-card rounded-full">
            <Link to="/technology">
              <CpuIcon />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Technology</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" asChild className="bg-card rounded-full">
            <Link to="/contact">
              <MailIcon />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Contact</TooltipContent>
      </Tooltip>
    </nav>
  );
}
