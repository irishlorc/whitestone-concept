"use client";

import { useState } from "react";

const fabrics = [
  "Woven upholstery",
  "Patterned rug",
  "Linen drapery",
  "Silk & lace",
];

export default function Services() {
  const [active, setActive] = useState(0);
  const on = (i: number) => (active === i ? "on" : "");
  const [c0, c1, c2, c3] = [on(0), on(1), on(2), on(3)];
  const [a0, a1, a2, a3] = [0, 1, 2, 3].map((i) => active === i);
  const [pick0, pick1, pick2, pick3] = [0, 1, 2, 3].map(
    (i) => () => setActive(i),
  );
  const activeNo = `0${active + 1}`;
  const activeFabric = fabrics[active];
  return (
    <section
      id="services"
      className="sec"
      aria-labelledby="svc-title"
      style={{ background: "#F6F1E7" }}
    >
      <div className="wrap">
        <div
          className="sec-head"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "20px",
            marginBottom: "clamp(36px, 5vw, 72px)",
          }}
        >
          <div>
            <p
              className="label"
              style={{ margin: "0 0 22px", color: "#5E594B" }}
            >
              {"(02)   Specialist Care"}
            </p>
            <h2
              id="svc-title"
              className="serif h-lg"
              style={{ color: "#2E3620" }}
            >
              Four disciplines,
              <br />
              <span style={{ fontStyle: "italic", color: "#4A5232" }}>
                one standard.
              </span>
            </h2>
          </div>
          <p className="body" style={{ maxWidth: "340px", color: "#5E594B" }}>
            From the sofa at the centre of a room to the most delicate heirloom
            — each is cared for on its own terms.
          </p>
        </div>
        <div className="g12">
          <div className="svc-list">
            <div className={`svc-item ${c0}`}>
              <div className="ph svc-ph">
                <img
                  src="/images/upholstery.jpg"
                  alt="Arm of a cream woven sofa with a green velvet cushion"
                  style={{ objectPosition: "70% 50%" }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <button
                type="button"
                className="svc-row"
                aria-pressed={a0}
                onClick={pick0}
                onMouseEnter={pick0}
                onFocus={pick0}
              >
                <span className="label" style={{ color: "#5E594B" }}>
                  01
                </span>
                <span>
                  <span className="serif svc-name">Upholstery Care</span>
                  <span className="svc-desc">
                    Sofas, armchairs and seating — the pieces a room is built
                    around, and the ones that are lived on most.
                  </span>
                </span>
                <span className="svc-arr" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
            <div className={`svc-item ${c1}`}>
              <div className="ph svc-ph">
                <img
                  src="/images/carpet.jpg"
                  alt="Cream and sand patterned rug with a green fringed throw"
                  style={{ objectPosition: "30% 50%" }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <button
                type="button"
                className="svc-row"
                aria-pressed={a1}
                onClick={pick1}
                onMouseEnter={pick1}
                onFocus={pick1}
              >
                <span className="label" style={{ color: "#5E594B" }}>
                  02
                </span>
                <span>
                  <span className="serif svc-name">Carpet & Rug Care</span>
                  <span className="svc-desc">
                    Woven, knotted and tufted floor coverings, with respect for
                    their fibres, dyes and structure.
                  </span>
                </span>
                <span className="svc-arr" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
            <div className={`svc-item ${c2}`}>
              <div className="ph svc-ph">
                <img
                  src="/images/curtain.jpg"
                  alt="Ivory and olive linen curtains in soft window light"
                  style={{ objectPosition: "60% 50%" }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <button
                type="button"
                className="svc-row"
                aria-pressed={a2}
                onClick={pick2}
                onMouseEnter={pick2}
                onFocus={pick2}
              >
                <span className="label" style={{ color: "#5E594B" }}>
                  03
                </span>
                <span>
                  <span className="serif svc-name">Curtain & Drapery Care</span>
                  <span className="svc-desc">
                    Sheers, linings and full-length drapes — kept true to their
                    fall, their colour and their light.
                  </span>
                </span>
                <span className="svc-arr" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
            <div className={`svc-item ${c3}`}>
              <div className="ph svc-ph">
                <img
                  src="/images/delicate.jpg"
                  alt="Ivory silk and embroidered lace draped over sage linen"
                  style={{ objectPosition: "65% 50%" }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <button
                type="button"
                className="svc-row"
                aria-pressed={a3}
                onClick={pick3}
                onMouseEnter={pick3}
                onFocus={pick3}
              >
                <span className="label" style={{ color: "#5E594B" }}>
                  04
                </span>
                <span>
                  <span className="serif svc-name">Delicate Textile Care</span>
                  <span className="svc-desc">
                    Silks, lace, fine weaves and treasured pieces that ask for a
                    slower, lighter hand.
                  </span>
                </span>
                <span className="svc-arr" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>
          <div className="svc-view" aria-hidden="true">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "240px 240px 18px 18px",
                aspectRatio: "4 / 5.4",
                background: "#E4D9C4",
              }}
            >
              <img
                className={`svc-img ${c0}`}
                src="/images/upholstery.jpg"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <img
                className={`svc-img ${c1}`}
                src="/images/carpet.jpg"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <img
                className={`svc-img ${c2}`}
                src="/images/curtain.jpg"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <img
                className={`svc-img ${c3}`}
                src="/images/delicate.jpg"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "14px",
                color: "#5E594B",
              }}
            >
              <span className="label">
                {activeNo} {"/ 04"}
              </span>
              <span className="label">{activeFabric}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
