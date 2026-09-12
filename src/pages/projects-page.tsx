import { ExternalLinkButton } from "@/components/external-link-button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "@/hooks/use-theme";
import { PROJECTS } from "@/lib/projects";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export function ProjectsPage() {
  const { actual } = useTheme();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-4">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-muted-foreground text-lg">Some things I've built on my own time.</p>
      </div>
      <div className="flex w-full max-w-2xl flex-col gap-4">
        {PROJECTS.map((project) => (
          <Card key={project.name} className="relative gap-3 p-6">
            {project.url && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <ExternalLinkButton
                    href={project.url}
                    icon={<SquareArrowOutUpRightIcon />}
                    label={`Visit ${project.name}`}
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                  />
                </TooltipTrigger>
                <TooltipContent>Visit {project.name}</TooltipContent>
              </Tooltip>
            )}
            <div className="flex items-center gap-4">
              {project.logo && (
                <img
                  src={actual === "dark" ? (project.logoDark ?? project.logo) : project.logo}
                  alt={`${project.name} logo`}
                  className="size-12 shrink-0 rounded-md object-contain"
                />
              )}
              <h2 className="text-2xl font-bold">{project.name}</h2>
            </div>
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
