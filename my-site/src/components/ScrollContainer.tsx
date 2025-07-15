"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollContainerProps {
  children: any;
}

export default function ScrollContainer({
  children,
}: ScrollContainerProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = (e?: Event) => {
      console.log(e)
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const elementTop = rect.top + scrolled;
        const windowHeight = window.innerHeight;

        // Calculate parallax offset only when element is near viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const yPos = -(scrolled - elementTop);
          if (yPos < 0) {
            console.log("Stop!!!!!", yPos);
            setOffsetY(-yPos);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={elementRef}
      className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      {children}
    </div>
  );
}
