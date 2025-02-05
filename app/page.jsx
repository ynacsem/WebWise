import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { FooterComponent } from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <div className="bg-white flex flex-col" id="hero">
        <Nav />
        <Hero  />
      </div>
      <div className="bg-yellow-50 flex flex-col">
        <Features id="features" />
        <Contact id="contact" />
      </div>

      <FooterComponent />
    </>
  );
}
