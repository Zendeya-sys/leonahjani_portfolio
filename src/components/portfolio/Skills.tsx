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
              <span className="text-charcoal">My Skills</span> &amp; Tools
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            The everyday stack behind my design work, campaigns, automation and performance
            reporting.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap gap-3 sm:gap-4">
          {tools.map((tool, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <li key={tool.name}>
                <span
                  title={`${tool.name} — ${tool.label}`}
                  className="tool-pill"
                >
                  <Icon size={18} strokeWidth={2} className="shrink-0" />
                  {tool.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
