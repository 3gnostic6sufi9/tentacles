"use client";

import { useState, useRef, useEffect } from "react";

interface CommandLineProps {
  onCommand: (command: string) => void;
  prompt?: string;
  disabled?: boolean;
}

export function CommandLine({
  onCommand,
  prompt = "$tentacles>",
  disabled = false,
}: CommandLineProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus();

    // Handle clicks anywhere in the terminal to focus input
    const handleClick = () => inputRef.current?.focus();

    // Store the current value of containerRef to use in cleanup
    const currentContainer = containerRef.current;

    currentContainer?.addEventListener("click", handleClick);

    return () => {
      currentContainer?.removeEventListener("click", handleClick);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onCommand(input.trim());
      setInput("");
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center space-x-2 font-mono text-sm md:text-base"
    >
      <span className="text-green-500 opacity-80">{prompt}</span>
      <form onSubmit={handleSubmit} className="flex-1">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={disabled}
          className="w-full bg-transparent text-white outline-none border-none focus:ring-0 font-mono"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
