import Aboutme from "./components/Aboutme";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Body />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
