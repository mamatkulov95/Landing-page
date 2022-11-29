import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import ClientPage from "./Components/ClientPage/ClientPage";
import Gallery from "./Components/Gallery/Gallery";
import Partners from "./Components/Partners/Partners";
import Testimonial from "./Components/Testimonials/Testimonial";
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
      <Partners />
      <Testimonial />
      <CallToAction />
    </div>
  );
}

export default App;
