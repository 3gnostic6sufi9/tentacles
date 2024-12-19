// components/ui/crt-effects.tsx
export function CRTEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_70%,rgba(0,0,0,0.3)_70%)] bg-[length:100%_4px] animate-scanlines" />

      {/* CRT flicker */}
      <div className="absolute inset-0 animate-flicker opacity-[0.15]" />

      {/* Screen glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.05),transparent_100%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.2)_100%)]" />
    </div>
  );
}
