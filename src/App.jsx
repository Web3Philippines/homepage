import { Route, Routes, Navigate } from "react-router";
import "./App.css";
import "./styles/main.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import UnknownPage from "./pages/UnknownPage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app bg-white">
      <Header />
      <Navbar />
      <div className="mx-auto flex justify-center items-center w-10/12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<UnknownPage />} />
        </Routes>
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
}

export default App;
