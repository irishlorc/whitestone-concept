export default function Process() {
  return (
    <section
      id="approach"
      className="sec"
      aria-labelledby="pr-title"
      style={{ background: "#2E3620", color: "#F6F1E7" }}
    >
      <div className="wrap">
        <div className="g12" style={{ rowGap: "clamp(56px, 7vw, 104px)" }}>
          <div className="pr-head">
            <p
              className="label"
              style={{ margin: "0 0 22px", color: "#CFCBB4" }}
            >
              {"(03)   Craftsmanship & Process"}
            </p>
            <h2 id="pr-title" className="serif h-lg">
              {"Every fabric tells a story."}{" "}
              <span style={{ fontStyle: "italic", color: "#C9CDA9" }}>
                We help preserve it.
              </span>
            </h2>
          </div>
          <div className="pr-art">
            <div className="ph pr-main" style={{ background: "#262C1A" }}>
              <img
                src="/images/carpet.jpg"
                alt="Sunlight across the pile of a cream and sand rug"
                style={{ objectPosition: "78% 60%" }}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="ph pr-dot">
              <img
                src="/images/upholstery.jpg"
                alt="Green velvet cushion in close detail"
                style={{ objectPosition: "52% 34%", transform: "scale(1.6)" }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <ol
            className="pr-steps"
            style={{ listStyle: "none", margin: "0", padding: "0" }}
          >
            <li className="step">
              <span className="serif step-no">01</span>
              <div>
                <h3
                  style={{
                    margin: "0",
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Understand
                </h3>
                <p
                  className="body"
                  style={{
                    marginTop: "10px",
                    color: "#DDD8C4",
                    maxWidth: "430px",
                  }}
                >
                  We start with the fabric itself — its fibre, its weave, its
                  age and its condition — before anything else is decided.
                </p>
              </div>
            </li>
            <li className="step">
              <span className="serif step-no">02</span>
              <div>
                <h3
                  style={{
                    margin: "0",
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Consider
                </h3>
                <p
                  className="body"
                  style={{
                    marginTop: "10px",
                    color: "#DDD8C4",
                    maxWidth: "430px",
                  }}
                >
                  An approach is chosen for the material in front of us. Nothing
                  is treated by default.
                </p>
              </div>
            </li>
            <li className="step">
              <span className="serif step-no">03</span>
              <div>
                <h3
                  style={{
                    margin: "0",
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Care
                </h3>
                <p
                  className="body"
                  style={{
                    marginTop: "10px",
                    color: "#DDD8C4",
                    maxWidth: "430px",
                  }}
                >
                  The work is done patiently, with attention given to the
                  details most people never notice.
                </p>
              </div>
            </li>
            <li className="step">
              <span className="serif step-no">04</span>
              <div>
                <h3
                  style={{
                    margin: "0",
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Return
                </h3>
                <p
                  className="body"
                  style={{
                    marginTop: "10px",
                    color: "#DDD8C4",
                    maxWidth: "430px",
                  }}
                >
                  Your textiles go back to the rooms and the lives they were
                  made for.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
