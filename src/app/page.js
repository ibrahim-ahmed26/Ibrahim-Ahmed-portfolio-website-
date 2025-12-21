import Aboutme from "./components/Aboutme";
import Body from "./components/Body";
import Header from "./components/header";

export const metadata = {
  title: "Ibrahim Ahmed - Front-End Developer",
  description: "Passionate Front-End Developer based in Cairo, Egypt. Specializing in React, Next.js, and Tailwind CSS.",
  keywords: ["Ibrahim Ahmed", "Front-End Developer", "React", "Next.js", "Tailwind CSS", "Web Developer", "Cairo"],
  authors: [{ name: "Ibrahim Ahmed" }],
  openGraph: {
    title: "Ibrahim Ahmed - Front-End Developer",
    description: "Passionate Front-End Developer based in Cairo, Egypt. Building responsive and user-friendly web interfaces.",
    url: "https://yourwebsite.com", 
    siteName: "Ibrahim Ahmed Portfolio",
    images: [
      {
        url: "/ibrahim-ahmed-SEO.png", 
        width: 1200,
        height: 630,
        alt: "Ibrahim Ahmed Portfolio"
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Body />
      <Aboutme/>
    </>
  );
}