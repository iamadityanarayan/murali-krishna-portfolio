import "./menu.scss";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Icons from "../../assets/icons/Icons";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SocialMediaIcons from "../SocialIcons/SocialMediaIcons";

const Menu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();
  const naviagte = useNavigate();

  return (
    <>
      {location.pathname !== "/" ? (
        <div className="menu-2 left position-absolute">
          <div
            onClick={() => naviagte(-1)}
            className={`me-2 shadow-xl p-1 rounded-3 bg-dark cursor-pointer icon-size`}
          >
            <Icons icon="arrowBack" width="40" height="40" fill="white" />
          </div>
        </div>
      ) : (
        <div className="menu position-absolute">
          <div
            onClick={handleShow}
            className={`me-2 shadow-xl p-1 rounded-3 cursor-pointer icon-size`}
            // className={`me-2 shadow-xl p-1 ${location.pathname !== '/' ? 'bg-dark' : ''} rounded-3 cursor-pointer icon-size`}
          >
            {location.pathname !== "/" ? (
              <Icons icon="menuOpen" width="40" height="40" fill="white" />
            ) : (
              <Icons icon="menuOpen" width="40" height="40" fill="black" />
            )}
          </div>
          <Offcanvas
            show={show}
            placement="end"
            className="w-100 bg-menu"
            onHide={handleClose}
          >
            <div
              className="ms-auto me-4 cursor-pointer shadow-0 shadow-none border-0 mt-4"
              // closeVariant="white"
              onClick={handleClose}
            >
              <Icons width="40" height="40" icon="menuClose" />
            </div>
            <Offcanvas.Body>
              <div className="menu">
                <ul className="menu-group ms-auto pt-3 pt-md-5">
                  <Link
                    to="/"
                    onClick={handleClose}
                    className="_link bg-transparent border-0 text-white text-start"
                  >
                    Home
                  </Link>
                  <Link
                    to="/"
                    onClick={handleClose}
                    className="_link bg-transparent border-0 text-white text-start"
                  >
                    Work
                  </Link>
                  <Link
                    to="myPassion"
                    onClick={handleClose}
                    className="_link bg-transparent border-0 text-white text-start"
                  >
                    My Passion
                  </Link>
                  <Link
                    to="visualMuseum"
                    onClick={handleClose}
                    className="_link bg-transparent border-0 text-white text-start"
                  >
                    Visual Museum
                  </Link>
                </ul>
              </div>
              <SocialMediaIcons />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      )}
    </>
  );
};

export default Menu;
