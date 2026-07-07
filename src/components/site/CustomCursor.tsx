import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFinePointer || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setActive(!!t?.closest("a,button,[role='button'],input,textarea,select,label"));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.classList.add("has-custom-cursor");
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[70] h-2 w-2 rounded-full bg-primary transition-transform duration-100"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0) scale(${active ? 0 : 1})`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed z-[70] h-10 w-10 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm transition-[transform,width,height] duration-200 ease-out"
        style={{
          transform: `translate3d(${pos.x - (active ? 24 : 20)}px, ${pos.y - (active ? 24 : 20)}px, 0) scale(${active ? 1.6 : 1})`,
          boxShadow: "0 0 24px rgba(0,200,150,0.35)",
        }}
        aria-hidden
      />
    </>
  );
}
