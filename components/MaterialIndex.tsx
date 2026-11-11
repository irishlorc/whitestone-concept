export default function MaterialIndex() {
  return (
    <div
      aria-hidden="true"
      style={{
        overflow: "hidden",
        borderBlock: "1px solid rgba(42,42,34,0.14)",
        paddingBlock: "20px",
        background: "#F6F1E7",
      }}
    >
      <div
        className="marq serif"
        style={{
          fontStyle: "italic",
          fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)",
          color: "#4A5232",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ paddingInlineEnd: "40px" }}>
          {
            "Linen  —  Velvet  —  Silk  —  Wool  —  Bouclé  —  Cotton  —  Lace  —  Cashmere  —  Jacquard  —"
          }
        </span>
        <span style={{ paddingInlineEnd: "40px" }}>
          {
            "Linen  —  Velvet  —  Silk  —  Wool  —  Bouclé  —  Cotton  —  Lace  —  Cashmere  —  Jacquard  —"
          }
        </span>
      </div>
    </div>
  );
}
