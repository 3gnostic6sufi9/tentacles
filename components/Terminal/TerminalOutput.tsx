"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface OutputLine {
  id: string;
  content: string | React.ReactNode;
  type?: "error" | "success" | "warning" | "system" | "ascii";
  glitch?: boolean;
}

interface TerminalOutputProps {
  lines: OutputLine[];
}

export function TerminalOutput({ lines }: TerminalOutputProps) {
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new lines are added
    outputRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return (
    <div className="space-y-1 font-mono text-sm md:text-base">
      {lines.map((line) => (
        <div
          key={line.id}
          className={cn(
            "transition-opacity whitespace-pre-wrap",
            line.type === "error" && "text-red-500",
            line.type === "success" && "text-green-500",
            line.type === "warning" && "text-yellow-500",
            line.type === "system" && "text-blue-500",
            line.type === "ascii" && "text-white opacity-90",
            line.glitch && "animate-glitch"
          )}
        >
          {line.content}
        </div>
      ))}
      <div ref={outputRef} />
    </div>
  );
}
