import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import programmingSvg from "../../images/undraw_programming.svg"
import shapeSvg from "../../images/hero_shape.svg"

import Reveal from "react-reveal/Reveal"

const Home = () => {
  return (
    <div id="home" className="mb-12">
      <Reveal effect="home">
        <div
          className="home min-h-screen flex flex-col items-start relative section-container"
          style={{ zIndex: 5 }}
        >
          <div className="text-white px-4" style={{ marginTop: "20vh" }}>
            <h3 className="text-3xl">Hi, I'm</h3>
            <h1 className="text-8xl text-turquoise-dark font-bold">
              Artur Molenda
            </h1>
            <h3 className="text-4xl text-gray-300 font-bold">
              Front end Web Developer
            </h3>
            <h4 className="text-xl font-bold mt-4 text-turquoise-dark">
              I like to build websites.
            </h4>
          </div>
          <AnchorLink to="/#projects">
            <button
              style={{ transition: "250ms" }}
              className="ml-4 mt-8 px-7 py-3 border-2 border-turquoise-default rounded text-xl text-turquoise-default hover:bg-turquoise-transparent"
            >
              My Projects
            </button>
          </AnchorLink>
          <img
            className="absolute bottom-0"
            src={programmingSvg}
            alt="hero-type"
          />
        </div>
      </Reveal>
      <img
        className="absolute bottom-0 left-0 top-8"
        src={shapeSvg}
        alt="hero-shape"
      />
    </div>
  )
}

export default Home
