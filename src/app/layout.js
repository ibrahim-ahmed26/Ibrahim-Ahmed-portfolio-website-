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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
