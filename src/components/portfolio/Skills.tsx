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
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8 lg:p-10">
          <p className="eyebrow text-primary">Capabilities</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            <span className="text-charcoal">Technologies I</span>{" "}
            <span className="text-primary">Use</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            A focused creative and marketing toolkit for building polished
            brands, campaigns, and digital experiences.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3 sm:gap-4">
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
      </div>
    </section>
  );
}
