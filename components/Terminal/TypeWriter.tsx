"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

export function TypeWriter({ text, delay = 50, onComplete }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <div className="whitespace-pre-wrap">
      {displayText}
      <span className="animate-blink">_</span>
    </div>
  );
}
