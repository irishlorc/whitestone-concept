import { site } from "@/lib/site";

export default function Footer() {
  const { whatsapp, email, location } = site;
  return (
    <footer
      style={{
        background: "#262C1A",
        color: "#F6F1E7",
        paddingBlock: "72px 32px",
      }}
    >
      <div className="wrap">
        <div className="ft-top">
          <img
            src="/images/lockup.png"
            alt="Whitestone"
            style={{
              width: "min(380px, 72%)",
              height: "auto",
              display: "block",
            }}
            loading="lazy"
            decoding="async"
          />
          <div className="ft-cols">
            <nav
              aria-label="Footer"
              className="ft-col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                fontWeight: "300",
              }}
            >
              <span
                className="label"
                style={{ color: "#C5C1AA", marginBottom: "10px" }}
              >
                Explore
              </span>
              <a className="ft-link" href="#services">
                Services
              </a>
              <a className="ft-link" href="#approach">
                Our Approach
              </a>
              <a className="ft-link" href="#about">
                About
              </a>
              <a className="ft-link" href="#contact">
                Contact
              </a>
            </nav>
            <div
              className="ft-col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                fontWeight: "300",
                minWidth: "0",
                overflowWrap: "anywhere",
              }}
            >
              <span
                className="label"
                style={{ color: "#C5C1AA", marginBottom: "10px" }}
              >
                Enquiries
              </span>
              <span style={{ paddingBlock: "9px" }}>{email}</span>
              <span style={{ paddingBlock: "9px" }}>{whatsapp}</span>
              <span style={{ paddingBlock: "9px" }}>{location}</span>
            </div>
          </div>
        </div>
        <div
          className="ft-base"
          style={{
            marginTop: "64px",
            paddingTop: "22px",
            borderTop: "1px solid rgba(246,241,231,0.18)",
            fontSize: "13px",
            fontWeight: "300",
            color: "#C5C1AA",
          }}
        >
          <span>© 2026 Whitestone. All rights reserved.</span>
          <span>Specialist fabric care · United Arab Emirates</span>
        </div>
      </div>
    </footer>
  );
}
