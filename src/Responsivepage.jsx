import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Discount from "./components/Discount";
import HappyCustomer from "./components/HappyCustomer";
import About from "./components/About";
import Footer from "./components/Footer";
import "../src/assets/css/style.css";

export default function Responsivepage() {
  return (
    <>
      <Menu />
      <Hero />
      <Collections />
      <Discount />
      <HappyCustomer />
      <About />
      <Footer />
    </>
  );
}