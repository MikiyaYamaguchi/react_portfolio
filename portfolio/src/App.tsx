import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Top from "./pages/Top";
import Works from "./pages/Works";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/about" element={<About />} />
            <Route path="/works/" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
