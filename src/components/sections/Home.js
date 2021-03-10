import React from "react"
import programmingSvg from "../../images/undraw_programming.svg"
import shapeSvg from "../../images/hero_shape.svg"

const Home = () => {
  return (
    <div id="home">
      <div
        className="min-h-screen flex flex-col items-start relative section-container"
        style={{ zIndex: 5 }}
      >
        <div className="text-white px-4" style={{ marginTop: "20vh" }}>
          <h3 className="text-3xl">Hi, I'm</h3>
          <h1 className="text-8xl text-turquoise-dark font-bold">
            Artur Molenda.
          </h1>
          <h3 className="text-4xl text-gray-300 font-bold">
            Front end Web Developer
          </h3>
          <h4 className="text-xl font-bold mt-4 text-turquoise-dark">
            I like to build websites.
          </h4>
        </div>
        <a href="#projects">
          <button
            style={{ transition: "250ms" }}
            className="ml-4 mt-8 px-7 py-3 border-2 border-turquoise-default rounded text-xl text-turquoise-default hover:bg-turquoise-transparent"
          >
            My Projects
          </button>
        </a>
        <img
          className="absolute bottom-0"
          src={programmingSvg}
          alt="hero-type"
        />
      </div>
      <img
        className="absolute bottom-0 left-0"
        src={shapeSvg}
        alt="hero-shape"
      />
    </div>
  )
}

export default Home
