import React from "react";
import { MenuItem as MenuItemType } from "../data/menu";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const variants = item.variants;

  return (
    <div
      style={{
        background: "#FFF8F3",
        borderRadius: "20px",
        padding: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        display: "flex",
        gap: "14px",
        alignItems: "center",
        transition: "box-shadow 0.2s ease",
      }}
    >
      {/* Left: Dish Image */}
      <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "14px",
          overflow: "hidden",
          background: "#F0EBE1",
          flexShrink: 0,
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23F0EBE1'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%23D4AF37'>No Image</text></svg>";
          }}
        />
      </div>

      {/* Right: Name, description, price */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "90px",
          paddingTop: "2px",
          paddingBottom: "2px",
        }}
      >
        {/* Name */}
        <h3
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: 600,
            fontSize: "14.5px",
            color: "#1E1E1E",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {item.name}
        </h3>

        {/* Description */}
        {item.description && (
          <p
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 400,
              fontSize: "11.5px",
              color: "#687280",
              lineHeight: 1.5,
              margin: "6px 0 0",
            }}
          >
            {item.description}
          </p>
        )}

        {/* Price */}
        <div style={{ marginTop: "8px" }}>
          {variants && variants.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {variants.map((v, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "11px",
                      color: "#687280",
                    }}
                  >
                    {v.name}:
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "#b71c1c",
                    }}
                  >
                    ₹{v.price}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <span
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#b71c1c",
              }}
            >
              ₹{item.price ?? 0}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
