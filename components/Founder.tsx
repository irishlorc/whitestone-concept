export default function Founder() {
  return (
    <section
      className="sec"
      aria-labelledby="fd-title"
      style={{ background: "#EFE7D8" }}
    >
      <div className="wrap">
        <div className="g12">
          <figure className="fd-img">
            <div className="ph">
              <img
                src="/images/founder.jpg"
                alt="Rebecca Jashek, founder of Whitestone"
                style={{ objectPosition: "58% 28%" }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>
          <div className="fd-copy">
            <p
              className="label"
              style={{ margin: "0 0 20px", color: "#5E594B" }}
            >
              The Founder
            </p>
            <h2
              id="fd-title"
              className="serif h-xl"
              style={{ color: "#2E3620" }}
            >
              Rebecca
              <br />
              <span style={{ fontStyle: "italic", color: "#4A5232" }}>
                Jashek
              </span>
            </h2>
            <p
              style={{
                margin: "22px 0 0",
                fontSize: "13px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#5E594B",
              }}
            >
              Founder, Whitestone
            </p>
            <div
              className="cx"
              style={{
                marginTop: "32px",
                borderTop: "1px solid rgba(42,42,34,0.3)",
                paddingTop: "22px",
                maxWidth: "500px",
              }}
            >
              <p className="serif lede">
                [FOUNDER NOTE — two or three sentences from Rebecca, in her own
                words, on why Whitestone exists.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
