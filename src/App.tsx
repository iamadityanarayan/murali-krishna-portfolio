import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import BackToTop from "./components/BackToTop/BackToTop";
import Menu from "./components/Menu/Menu";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyPassion from "./pages/MyPassion/MyPassion";
import VisualMuseum from "./pages/VisualMuseum/VisualMuseum";
import { useRef } from "react";
// import 'animate.css';
const App = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Menu handleClick={handleClick} />
      <Routes>
        <Route path="/" element={<Home handleClick={handleClick} ref={ref} />} />
        <Route path="/myPassion" element={<MyPassion />} />
        <Route path="/visualMuseum" element={<VisualMuseum />} />
      </Routes>
      <BackToTop />
    </>
  );
};

export default App;
