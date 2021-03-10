import React from "react"
import readingSvg from "../../images/undraw_reading.svg"
import { FiTool } from "react-icons/fi"

const About = () => {
  const paragraph = "text-xl text-gray-300 p-4"
  const textTurquoise = "text-turquoise-default"
  const listItem = "flex items-center text-lg text-white"
  const ListIcon = <FiTool className="text-turquoise-default mr-4" />

  return (
    <div id="about" className="relative">
      <div className="min-h-screen flex flex-col items-start relative container mx-auto">
        <h2 className="header border-b-2 border-turquoise-dark text-5xl text-gray-400 text-center font-thin mt-32 mx-auto p-4">
          About me
        </h2>
        <div className="flex flex-col items-center justify-center xl:flex-row">
          <div className="about-l mx-16 md:mx-32 mt-10">
            <p className={`${paragraph} text-2xl`}>
              Hey! I'm <span className={textTurquoise}>Artur</span>, a web
              developer mostly focused on frontend development (and some backend
              too!).
            </p>
            <p className={paragraph}>
              I'm based in a beautiful{" "}
              <span className={textTurquoise}>Toruń, Poland</span>
            </p>
            <p className={paragraph}>
              Building websites as well as more challenging web applications is
              my passion. In my projects I always try to make everything perfect
              to the last pixel. Technologies I'm most fond of are{" "}
              <span className={textTurquoise}>React</span> and{" "}
              <span className={textTurquoise}>Gatsby</span>, although I'm higly
              motivated to learn any tool or library that will be best for a
              given task.
            </p>
            <p className={paragraph}>
              Here are technologies that I've been using recently:
            </p>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(auto, 200px))",
                marginLeft: 20,
                listStyle: "none",
              }}
            >
              <li className={listItem}>{ListIcon} Javascript (ES6+)</li>
              <li className={listItem}>{ListIcon} HTML & CSS</li>
              <li className={listItem}>{ListIcon} ReactJS</li>
              <li className={listItem}>{ListIcon} GatsbyJS</li>
              <li className={listItem}>{ListIcon} NodeJS</li>
              <li className={listItem}>{ListIcon} MongoDB</li>
            </ul>
          </div>
          <img
            className="about-r sm:w-8/12 lg:w-6/12 xl:w-5/12"
            style={{ filter: "brightness(0.7)" }}
            src={readingSvg}
            alt="hero-shape"
          />
        </div>
      </div>
    </div>
  )
}

export default About
