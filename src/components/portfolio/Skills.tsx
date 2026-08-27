import {
  PenTool,
  Figma,
  Image,
  Scissors,
  Film,
  Shapes,
  Layers,
  Aperture,
  Gauge,
  Workflow,
  Mail,
  Send,
} from "lucide-react";
import { tools } from "./data";

const icons = [
  PenTool,
  Figma,
  Image,
  Scissors,
  Film,
  Shapes,
  Layers,
  Aperture,
  Gauge,
  Workflow,
  Mail,
  Send,
];

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
              My Skills &amp; Tools
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            The everyday stack behind my design work, campaigns, automation and performance
            reporting.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {tools.map((tool, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={tool.name} className="card-surface group p-5 sm:p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary-dark transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-sm font-bold tracking-tight sm:text-base">{tool.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {tool.label}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
