"use client";

import { useState, type FormEvent } from "react";
import { site, waHref } from "@/lib/site";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const notSent = !sent;
  const { whatsapp, email, location, hours } = site;
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    // Set NEXT_PUBLIC_FORM_ENDPOINT to post enquiries as JSON (Formspree, a route handler, etc.).
    // Without it the form only shows the confirmation state — nothing is sent.
    if (site.formEndpoint) {
      try {
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(String(res.status));
      } catch {
        setError(true);
        return;
      }
    }
    setSent(true);
  };
  const reset = () => setSent(false);
  return (
    <section
      id="contact"
      className="sec"
      aria-labelledby="ct-title"
      style={{ background: "#EFE7D8" }}
    >
      <div className="wrap">
        <div className="g12">
          <div className="ct-left">
            <p
              className="label"
              style={{ margin: "0 0 22px", color: "#5E594B" }}
            >
              {"(04)   Enquiries"}
            </p>
            <h2
              id="ct-title"
              className="serif h-lg"
              style={{ color: "#2E3620" }}
            >
              {"Your fabrics deserve"}{" "}
              <span style={{ fontStyle: "italic", color: "#4A5232" }}>
                exceptional
              </span>{" "}
              {"attention."}
            </h2>
            <p
              className="body"
              style={{ marginTop: "26px", maxWidth: "440px", color: "#5E594B" }}
            >
              Tell us a little about the piece — what it is, what it is made of,
              and what concerns you. We will come back to you personally.
            </p>
            <div
              className="ct-wa"
              style={{
                marginTop: "36px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <a className="btn btn-line" href={waHref}>
                {"Message us on WhatsApp"}{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </a>
              <span style={{ fontSize: "14px", color: "#5E594B" }}>
                {whatsapp}
              </span>
            </div>
            <dl className="ct-meta">
              <div
                style={{
                  borderTop: "1px solid rgba(42,42,34,0.3)",
                  paddingTop: "14px",
                }}
              >
                <dt className="label" style={{ color: "#5E594B" }}>
                  Email
                </dt>
                <dd style={{ margin: "8px 0 0", fontSize: "16px" }}>{email}</dd>
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(42,42,34,0.3)",
                  paddingTop: "14px",
                }}
              >
                <dt className="label" style={{ color: "#5E594B" }}>
                  Location
                </dt>
                <dd style={{ margin: "8px 0 0", fontSize: "16px" }}>
                  {location}
                </dd>
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(42,42,34,0.3)",
                  paddingTop: "14px",
                }}
              >
                <dt className="label" style={{ color: "#5E594B" }}>
                  Hours
                </dt>
                <dd style={{ margin: "8px 0 0", fontSize: "16px" }}>{hours}</dd>
              </div>
            </dl>
          </div>
          <div className="ct-form">
            {notSent && (
              <>
                <form
                  onSubmit={submit}
                  aria-label="Enquiry form"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "26px",
                  }}
                >
                  <div className="fld">
                    <label htmlFor="f-name">Your name</label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="f-email">Email</label>
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="f-phone">Phone (optional)</label>
                    <input
                      id="f-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="f-type">What needs care?</label>
                    <select id="f-type" name="type">
                      <option>Upholstery</option>
                      <option>Carpet or rug</option>
                      <option>Curtains or drapery</option>
                      <option>A delicate textile</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="fld">
                    <label htmlFor="f-msg">Tell us about it</label>
                    <textarea
                      id="f-msg"
                      name="message"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  {error && (
                    <p
                      role="alert"
                      style={{
                        margin: "0",
                        fontSize: "15px",
                        color: "#8A3B2A",
                      }}
                    >
                      Something went wrong sending your enquiry. Please try
                      again or message us on WhatsApp.
                    </p>
                  )}
                  <button
                    type="submit"
                    className="btn btn-olive"
                    style={{ marginTop: "8px", alignSelf: "flex-start" }}
                  >
                    Send Enquiry
                  </button>
                </form>
              </>
            )}
            {sent && (
              <>
                <div
                  role="status"
                  className="ct-done"
                  style={{ borderTop: "1px solid #3B4426", paddingTop: "28px" }}
                >
                  <p
                    className="serif"
                    style={{
                      margin: "0",
                      fontStyle: "italic",
                      fontSize: "3rem",
                      lineHeight: "1.05",
                      color: "#4A5232",
                    }}
                  >
                    Thank you.
                  </p>
                  <p
                    className="body"
                    style={{
                      marginTop: "16px",
                      color: "#5E594B",
                      maxWidth: "400px",
                    }}
                  >
                    Your enquiry has been received. We will be in touch
                    personally.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    style={{
                      marginTop: "24px",
                      background: "none",
                      border: "0",
                      padding: "0",
                      minHeight: "44px",
                      font: "inherit",
                      fontSize: "15px",
                      textDecoration: "underline",
                      textUnderlineOffset: "6px",
                      cursor: "pointer",
                      color: "#2A2A22",
                    }}
                  >
                    Send another enquiry
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
