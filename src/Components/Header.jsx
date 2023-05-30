import React, { useState } from "react";
import Hero from "./Hero";
import Nav_logo from "../assets/img/png/Nav_logo.png";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  if (showNav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <>
      {/* nav */}
      <nav className="mt-3">
        <div className=" container py_6">
          <div className="d-flex align-items-center justify-content-between">
            <a href="/">
              <img src={Nav_logo} alt="Nav_logo" />
            </a>
            <div className="d-none d-lg-flex align-items-center gap-4 gap-xl-5">
              <div className=" d-flex align-items-center gap-4 gap-xl-5">
                <a
                  href="/"
                  className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker nav_hover_line position-relative hover_clr_same"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker nav_hover_line position-relative hover_clr_same"
                >
                  Solutions
                </a>
                <a
                  href="/"
                  className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker nav_hover_line position-relative hover_clr_same"
                >
                  Cases
                </a>
                <a
                  href="/"
                  className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker nav_hover_line position-relative hover_clr_same"
                >
                  About Us
                </a>
                <a
                  href="/"
                  className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker nav_hover_line position-relative hover_clr_same"
                >
                  Blog
                </a>
                <a
                  href="/"
                  className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker nav_hover_line position-relative hover_clr_same"
                >
                  Contact Us
                </a>
              </div>
              <button className=" d-flex ff_Nunito fs_xsm fw-bold border_for_hover bg_yellow text-white rounded-2 py-2 px-4 w_157 get_in_hover">
                Get in Touch
              </button>
            </div>
            <button
              onClick={() => setShowNav(true)}
              className="btn border-0 d-lg-none"
            >
              <span className="bars"></span>
              <span className="bars"></span>
              <span className="bars"></span>
            </button>
          </div>
          {/* respove nav */}
          <div className={showNav ? "show_nav" : "hide_nav"}>
            <ul className="d-flex d-xl-none flex-column mb-5 align-items-center justify-content-center ps-0">
              <div className=" d-flex justify-content-between align-items-center w-100 mb-4">
                <a href="/">
                  <img src={Nav_logo} alt="Nav_logo" />
                </a>
                <button
                  onClick={() => setShowNav(false)}
                  className="btn btn-close p-3 rounded-5 text-white "
                ></button>
              </div>
              <div>
                <div className="d-flex flex-column mt-4 mt-lg-5 gap-4">
                  <a
                    href="/"
                    className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker position-relative hover_clr_same"
                  >
                    Home
                  </a>
                  <a
                    href="/"
                    className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker position-relative hover_clr_same"
                  >
                    Solutions
                  </a>
                  <a
                    href="/"
                    className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker position-relative hover_clr_same"
                  >
                    Cases
                  </a>
                  <a
                    href="/"
                    className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker position-relative hover_clr_same"
                  >
                    About Us
                  </a>
                  <a
                    href="/"
                    className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker  position-relative hover_clr_same"
                  >
                    Blog
                  </a>
                  <a
                    href="/"
                    className="text-nowrap ff_Nunito fw-bold fs_xsm text_blacker position-relative hover_clr_same"
                  >
                    Contact Us
                  </a>
                  <button className="  ff_Nunito fs_xsm fw-bold border_for_hover bg_yellow text-white rounded-2 py-2 px-4 w_157 get_in_hover">
                    Get in Touch
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {/* hero_section */}
      <Hero />
    </>
  );
};

export default Header;
