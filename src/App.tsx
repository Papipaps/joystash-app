import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/molecules/About";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home";
import Navbar from "./components/organisms/Navigation/Navbar";
import Showcase from "./components/pages/Showcase";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
