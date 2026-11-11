// Site-wide configurable details. Replace the bracketed placeholders with real values.
export const site = {
  name: "Whitestone",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsapp: "[WHATSAPP NUMBER]", // e.g. "+971 50 000 0000" — the WhatsApp button links out once this holds a real number
  email: "[EMAIL ADDRESS]",
  location: "[LOCATION], UAE",
  hours: "[OPENING HOURS]",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
};

const digits = site.whatsapp.replace(/\D/g, "");
export const waHref =
  digits.length >= 8 ? `https://wa.me/${digits}` : "#contact";
