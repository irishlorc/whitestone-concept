export default function Statement() {
  return (
    <section aria-labelledby="st-title" style={{ background: "#F6F1E7" }}>
      <div className="st-ph">
        <img
          className="par"
          src="/images/delicate.jpg"
          alt="Ivory silk and embroidered lace draped over sage linen in dappled sunlight"
          style={{
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "60% 40%",
          }}
          loading="lazy"
          decoding="async"
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            insetInline: "0",
            bottom: "0",
            height: "46%",
            background:
              "linear-gradient(0deg, #F6F1E7 0%, rgba(246,241,231,0.86) 34%, rgba(246,241,231,0) 100%)",
          }}
        ></div>
      </div>
      <div className="wrap st-copy">
        <h2 id="st-title" className="serif h-xl" style={{ color: "#2E3620" }}>
          Made to be lived with.
          <br />
          <span style={{ fontStyle: "italic", color: "#4A5232" }}>
            Cared for to last.
          </span>
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            marginTop: "32px",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "block",
              flex: "1",
              height: "1px",
              background: "rgba(42,42,34,0.3)",
            }}
          ></span>
          <img
            src="/images/emblem-dark.png"
            alt=""
            style={{ height: "40px", width: "auto", display: "block" }}
            loading="lazy"
            decoding="async"
          />
          <span
            className="only-m"
            aria-hidden="true"
            style={{
              flex: "1",
              height: "1px",
              background: "rgba(42,42,34,0.3)",
            }}
          ></span>
        </div>
      </div>
    </section>
  );
}
