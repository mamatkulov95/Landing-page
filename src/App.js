import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import ClientPage from "./Components/ClientPage/ClientPage";
import Gallery from "./Components/Gallery/Gallery";
import CallToAction from "./Components/CallToAction/CallToAction";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <ClientPage />
      <Gallery />
      <CallToAction />
    </div>
  );
}

export default App;
