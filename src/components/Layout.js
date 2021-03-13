import * as React from "react"
import Navbar from "./Navbar"
import shapeSvg from "../images/contact_shape.svg"
import "./layout.scss"

const Layout = ({ children, resumeUrl }) => {
  return (
    <div className="relative">
      <Navbar resumeUrl={resumeUrl} />
      <div id="content" style={{ overflowX: "hidden" }}>
        <main>{children}</main>
        <footer className="mt-12 mb-5 relative">
          <div className="z-10 text-center relative text-gray-400 font-medium">
            © {new Date().getFullYear()} Built by{" "}
            <a
              href="https://github.com/arturmolenda"
              className="text-turquoise-dark"
              target="_blank"
              rel="noreferrer"
            >
              Artur Molenda
            </a>
          </div>
          <img
            className="absolute -bottom-5 left-0"
            src={shapeSvg}
            alt="hero-shape"
          />
        </footer>
      </div>
    </div>
  )
}

export default Layout
