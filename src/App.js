import "./App.css";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Showcase from "./components/Layout/Showcase";
import Services from "./components/Layout/Services";
import Pricing from "./components/Layout/Pricing";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div classname="main">
      <Header />
      <Hero />
      <Showcase />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
