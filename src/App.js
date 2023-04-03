import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Layer1 from "./components/Layer1/Layer1";
import Layer2 from "./components/Layer2/Layer2";
import Offering from "./components/Offering/Offering";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Layer1 />
      <Layer2 />
      <Offering />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
