"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Slide {
  id: number;
  title: string;
  titleBold: string;
  subtitle: string;
  subtitleLine2: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Great Taste.",
    titleBold: "Pure Veg.",
    subtitle: "Fresh ingredients.",
    subtitleLine2: "Made with love.",
    image: "/images/carousel/burger.png",
  },
  {
    id: 2,
    title: "Cheesy Bliss.",
    titleBold: "Baked Fresh.",
    subtitle: "Hot bubbling cheese",
    subtitleLine2: "in every single bite.",
    image: "/images/carousel/pizza.png",
  },
  {
    id: 3,
    title: "Crispy &",
    titleBold: "Golden Fries.",
    subtitle: "Perfect seasoning,",
    subtitleLine2: "cooked to order.",
    image: "/images/carousel/fries.png",
  },
  {
    id: 4,
    title: "Rich &",
    titleBold: "Creamy Shakes.",
    subtitle: "Indulge in our",
    subtitleLine2: "signature flavors.",
    image: "/images/carousel/shake.png",
  },
  {
    id: 5,
    title: "Premium",
    titleBold: "Paneer Burger.",
    subtitle: "Soft paneer patty",
    subtitleLine2: "with exotic spices.",
    image: "/images/carousel/paneer-burger.png",
  },
  {
    id: 6,
    title: "Grilled to",
    titleBold: "Perfection.",
    subtitle: "Crispy loaded sandwich",
    subtitleLine2: "with melted cheese.",
    image: "/images/carousel/sandwich.png",
  },
];

export default function PromoCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setIsTransitioning(false);
      }, 320);
    }, 3800);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const handleDot = (index: number) => {
    if (index === current || isTransitioning) return;
    stopTimer();
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 320);
    setTimeout(startTimer, 360);
  };

  const slide = slides[current];

  return (
    <div style={{ padding: "12px 16px 8px", background: "#FFF8F3" }}>
      <div
        style={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          height: "175px",
          /* Solid dark background — visible on the left where image is transparent */
          background: "#111111",
        }}
        onMouseEnter={stopTimer}
        onMouseLeave={startTimer}
      >
        {/* Image — slightly smaller, flush to right edge */}
        <img
          key={slide.id}
          src={slide.image}
          alt={`${slide.title} ${slide.titleBold}`}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "65%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? "scale(1.02)" : "scale(1)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            zIndex: 0,
          }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.opacity = "0";
          }}
        />

        {/* Gradient: solid card bg on left → fades into image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background:
              "linear-gradient(to right, #111111 0%, #111111 32%, rgba(17,17,17,0.85) 44%, rgba(17,17,17,0.3) 58%, rgba(17,17,17,0.0) 72%)",
          }}
        />

        {/* Layer 3 — Text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px 0 36px 22px",
            maxWidth: "55%",
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? "translateY(5px)" : "translateY(0)",
            transition: "opacity 0.32s ease, transform 0.32s ease",
          }}
        >
          {/* Title */}
          <div
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: 1.2,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              marginBottom: "10px",
            }}
          >
            <span style={{ display: "block" }}>{slide.title}</span>
            <span style={{ display: "block" }}>{slide.titleBold}</span>
          </div>

          {/* Gold accent line */}
          <div
            style={{
              width: "24px",
              height: "2px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #D4AF37, #f0d06a)",
              marginBottom: "10px",
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 400,
              fontSize: "11px",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.52)",
            }}
          >
            <span style={{ display: "block" }}>{slide.subtitle}</span>
            <span style={{ display: "block" }}>{slide.subtitleLine2}</span>
          </div>
        </div>

        {/* Dots — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "14px",
            left: "22px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            zIndex: 10,
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDot(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: index === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "999px",
                background:
                  index === current ? "#ffffff" : "rgba(255,255,255,0.32)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition:
                  "width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
