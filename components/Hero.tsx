export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      style={{ background: "#F6F1E7", paddingBlock: "36px 72px" }}
    >
      <div className="wrap">
        <div
          className="hero-meta"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "6px 12px",
            flexWrap: "wrap",
            paddingBottom: "28px",
            color: "#5E594B",
          }}
        >
          <span className="label">Specialist fabric care</span>
          <span className="label">United Arab Emirates</span>
        </div>
        <div className="g12">
          <div className="hero-head">
            <h1
              id="hero-title"
              className="serif h-hero"
              style={{ color: "#2E3620" }}
            >
              <span className="h-line">
                <span>Exceptional</span>
              </span>
              <span className="h-line">
                <span>care for</span>
              </span>
              <span className="h-line h-indent">
                <span style={{ fontStyle: "italic", color: "#4A5232" }}>
                  exceptional
                </span>
              </span>
              <span className="h-line">
                <span>fabrics.</span>
              </span>
            </h1>
          </div>
          <div className="hero-foot">
            <p className="body" style={{ maxWidth: "440px", color: "#4C483C" }}>
              Specialist fabric care, thoughtfully delivered in the UAE.
              Preserving the beauty, character and longevity of the textiles
              that matter.
            </p>
            <div className="hero-cta">
              <a className="btn btn-olive" href="#services">
                Explore Our Services
              </a>
              <a className="btn btn-line" href="#contact">
                Make an Enquiry
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="ph hero-main">
              <img
                className="kb"
                src="/images/curtain.jpg"
                alt="Ivory and olive linen curtains falling in soft window light"
                style={{ objectPosition: "66% 50%" }}
                decoding="async"
              />
            </div>
            <div className="ph hero-chip">
              <img
                src="/images/delicate.jpg"
                alt="Embroidered ivory lace in close detail"
                style={{ objectPosition: "74% 42%", transform: "scale(1.5)" }}
                decoding="async"
              />
            </div>
            <span className="label hero-cap" style={{ color: "#5E594B" }}>
              Linen · Lace · Light
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
