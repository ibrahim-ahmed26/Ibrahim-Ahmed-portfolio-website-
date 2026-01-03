import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: {
    default: "Ibrahim Ahmed – Front-End Developer",
    template: "%s | Ibrahim Ahmed",
  },
  description:
    "Ibrahim Ahmed is a Front-End Developer based in Cairo, Egypt, specializing in React, Next.js, and Tailwind CSS.",
  keywords: [
    "Ibrahim Ahmed",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Cairo",
  ],
  authors: [{ name: "Ibrahim Ahmed" }],
  creator: "Ibrahim Ahmed",
  metadataBase: new URL("https://ibrahim-ahmed-portfolio-website.vercel.app"),

  verification: {
    google: "_2QpKM58NR8BEjT1oSQsQskU3NVjdGF2tHw63GYkZ7U",
  },

  openGraph: {
    title: "Ibrahim Ahmed – Front-End Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern UI development.",
    url: "https://ibrahim-ahmed-portfolio-website.vercel.app",
    siteName: "Ibrahim Ahmed Portfolio",
    images: [
      {
        url: "/ibrahim-ahmed-SEO.png",
        width: 1200,
        height: 630,
        alt: "Ibrahim Ahmed Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "https://ibrahim-ahmed-portfolio-website.vercel.app",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ibrahim Ahmed",
    jobTitle: "Front-End Developer",
    url: "https://ibrahim-ahmed-portfolio-website.vercel.app",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "Egypt",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Frontend Development",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1e293b",
              color: "#fff",
              border: "1px solid #334155",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
