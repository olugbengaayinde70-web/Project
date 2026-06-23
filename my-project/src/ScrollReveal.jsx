import React, { useEffect, useRef, useState } from "react";

const DEFAULTS = {
  root: null,
  rootMargin: "0px 0px -10% 0px",
  threshold: 0.1,
};

/**
 * Usage:
 * <ScrollReveal className="..." delay={100}>
 *   ...
 * </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  durationMs = 650,
  once = true,
  ...observerOptions
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const options = { ...DEFAULTS, ...observerOptions };

    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) obs.disconnect();
        }
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, observerOptions.root, observerOptions.rootMargin, observerOptions.threshold]);

  const style = {
    transitionDuration: `${durationMs}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`${className} transform-gpu transition-all duration-[650ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

