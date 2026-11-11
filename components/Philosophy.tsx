export default function Philosophy() {
  return (
    <section
      id="about"
      className="sec"
      aria-labelledby="ph-title"
      style={{ background: "#F6F1E7" }}
    >
      <div className="wrap">
        <div className="g12" style={{ rowGap: "clamp(48px, 6vw, 88px)" }}>
          <div className="ph-head">
            <p
              className="label"
              style={{ margin: "0 0 22px", color: "#5E594B" }}
            >
              {"(01)   The Whitestone Philosophy"}
            </p>
            <h2
              id="ph-title"
              className="serif h-xl"
              style={{ color: "#2E3620" }}
            >
              Care is in
              <br />
              {"the"}{" "}
              <span style={{ fontStyle: "italic", color: "#4A5232" }}>
                details.
              </span>
            </h2>
          </div>
          <div className="ph-copy">
            <p className="serif lede">
              No two fabrics are alike. Each has its own fibre, its own weave,
              its own way of ageing.
            </p>
            <p
              className="body"
              style={{ marginTop: "20px", color: "#5E594B", maxWidth: "420px" }}
            >
              We begin by looking closely — at the material, the texture, the
              way a piece was made and the life it has lived. Only then do we
              decide how it should be cared for.
            </p>
          </div>
          <figure className="ph-img">
            <div className="ph">
              <img
                src="/images/upholstery.jpg"
                alt="The woven arm of a cream sofa, close enough to see each thread"
                style={{
                  objectPosition: "92% 70%",
                  transform: "scale(1.35)",
                  transformOrigin: "90% 70%",
                }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>
          <div className="ph-terms">
            <div
              style={{
                borderTop: "1px solid rgba(42,42,34,0.3)",
                paddingTop: "16px",
              }}
            >
              <p
                className="serif"
                style={{
                  margin: "0",
                  fontStyle: "italic",
                  fontSize: "1.7rem",
                  lineHeight: "1.1",
                  color: "#2E3620",
                }}
              >
                Material
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  fontWeight: "300",
                  color: "#5E594B",
                }}
              >
                What it is made of, and what that asks of us.
              </p>
            </div>
            <div
              style={{
                borderTop: "1px solid rgba(42,42,34,0.3)",
                paddingTop: "16px",
              }}
            >
              <p
                className="serif"
                style={{
                  margin: "0",
                  fontStyle: "italic",
                  fontSize: "1.7rem",
                  lineHeight: "1.1",
                  color: "#2E3620",
                }}
              >
                Texture
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  fontWeight: "300",
                  color: "#5E594B",
                }}
              >
                The hand, the pile, the surface worth keeping.
              </p>
            </div>
            <div
              style={{
                borderTop: "1px solid rgba(42,42,34,0.3)",
                paddingTop: "16px",
              }}
            >
              <p
                className="serif"
                style={{
                  margin: "0",
                  fontStyle: "italic",
                  fontSize: "1.7rem",
                  lineHeight: "1.1",
                  color: "#2E3620",
                }}
              >
                Construction
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  fontWeight: "300",
                  color: "#5E594B",
                }}
              >
                How it was woven, stitched, lined and finished.
              </p>
            </div>
            <div
              style={{
                borderTop: "1px solid rgba(42,42,34,0.3)",
                paddingTop: "16px",
              }}
            >
              <p
                className="serif"
                style={{
                  margin: "0",
                  fontStyle: "italic",
                  fontSize: "1.7rem",
                  lineHeight: "1.1",
                  color: "#2E3620",
                }}
              >
                Individuality
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  fontWeight: "300",
                  color: "#5E594B",
                }}
              >
                The piece in front of us, never the category.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
