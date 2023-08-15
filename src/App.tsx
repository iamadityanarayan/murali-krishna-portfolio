import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import BackToTop from "./components/BackToTop/BackToTop";
import Menu from "./components/Menu/Menu";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyPassion from "./pages/MyPassion/MyPassion";
import VisualMuseum from "./pages/VisualMuseum/VisualMuseum";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import RoutesLoader from "./components/Loaders/RoutesLoader";
import { CircleLoaderComponent } from "./components/Loaders/CircleLoaderComponent ";
// import 'animate.css';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let x = true;
    if (x) {
      setLoading(true);
      const timer = setTimeout(() => {
        // setLoading(false);
        setIsLoading(!isLoading);
      }, 1000);
      return () => clearTimeout(timer);
    }
    return () => {
      x = false;
    };
  }, []);

  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return (
      <>
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass="d-flex vh-100 justify-content-center w-100 align-items-center py-5"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
      </>
    );
  }

  return (
    <Suspense
      fallback={
        <>
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
          Error: Something went wrong!!
        </>
      }
    >
      {loading ? (
        <>
          <RoutesLoader />
          {/* <CircleLoaderComponent /> */}
        </>
      ) : (
        <>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myPassion" element={<MyPassion />} />
            <Route path="/visualMuseum" element={<VisualMuseum />} />
          </Routes>
          <BackToTop />
        </>
      )}
    </Suspense>
  );
};

export default App;
