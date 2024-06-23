import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
function App() {
  return (
    <main id="app" className="w-full h-screen flex flex-col gap-2 items-center relative ">
      <Router>
        <Header />
        <div className="content flex flex-col items-center justify-center py-20 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
