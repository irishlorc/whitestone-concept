import type { Metadata } from "next";
import { site } from "@/lib/site";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "./globals.css";

const description =
  "Specialist fabric care, thoughtfully delivered in the UAE. Preserving the beauty, character and longevity of the textiles that matter.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "WHITESTONE — Specialist fabric care in the UAE",
  description,
  openGraph: {
    title: "WHITESTONE — Exceptional care for exceptional fabrics",
    description,
    type: "website",
    locale: "en_AE",
    images: ["/images/delicate.jpg"],
  },
};

// `lang` and `dir` live here so an Arabic (rtl) locale can be added later;
// the stylesheet uses logical properties throughout.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
