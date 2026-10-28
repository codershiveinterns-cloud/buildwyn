import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import "./globals.css";

const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex-sans" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

export const metadata = {
  metadataBase: new URL("https://buildwyn.com"),
  icons: { icon: { url: "/assets/favicon.svg", type: "image/svg+xml" } },
};

export const viewport = { themeColor: "#121417" };

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Buildwyn LLC",
  foundingDate: "2026",
  founder: { "@type": "Person", name: "Devendra Singh Sankhla", jobTitle: "Founder" },
  url: "https://buildwyn.com",
  email: "hello@buildwyn.com",
  address: { "@type": "PostalAddress", streetAddress: "30 N Gould St, Ste R", addressLocality: "Sheridan", addressRegion: "WY", postalCode: "82801", addressCountry: "US" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Lets CSS hide reveal targets before first paint; without JS everything stays visible */}
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
