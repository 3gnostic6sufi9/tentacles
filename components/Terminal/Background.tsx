"use client";

export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Scanlines */}
      <div className="absolute inset-0 bg-scanlines opacity-10" />

      {/* CRT flicker */}
      <div className="absolute inset-0 animate-flicker bg-gradient-to-b from-transparent to-black opacity-5" />

      {/* Glitch overlay */}
      <div className="absolute inset-0 animate-glitch-overlay mix-blend-difference opacity-[0.02]" />
    </div>
  );
}
