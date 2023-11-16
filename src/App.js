import "./App.css";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Showcase from "./components/Layout/Showcase";
import Services from "./components/Layout/Services";

function App() {
  return (
    <div classname="main">
      <Header />
      <Hero />
      <Showcase />
      <Services />
    </div>
  );
}

export default App;
