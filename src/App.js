import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import ClientPage from "./Components/ClientPage/ClientPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <ClientPage />
    </div>
  );
}

export default App;
