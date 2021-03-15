import React from "react"
import Img from "gatsby-image"
import { RiExternalLinkFill } from "react-icons/ri"
import { AiFillGithub } from "react-icons/ai"
import Reveal from "react-reveal/Reveal"

const ProjectItem = ({ demo, code, title, description, techStack, image }) => {
  const btnLink =
    "mr-4 pl-3 pr-5 py-2 flex items-center justify-between border-2 border-turquoise-default rounded text-lg sm:text-xl text-turquoise-default hover:bg-turquoise-transparent"
  return (
    <Reveal effect="project-item">
      <div className="flex flex-col-reverse xl:flex-row relative w-11/12 mx-auto mb-10 dropshadow">
        <div className="flex flex-col flex-auto p-5 xl:pr-7 relative bg-gray-800 rounded-lg xl:w-2/3">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="text-turquoise-default hover:underline"
          >
            <h3 className="text-xl sm:text-2xl">{title}</h3>
          </a>
          <p className="my-4 text-gray-200 text-base sm:text-lg font-thin p-3 bg-gray-700 rounded">
            {description}
          </p>
          <div className="border-t border-gray-600 mb-3" />
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-wrap mb-8">
              {techStack.map(item => (
                <p key={item} className="text-gray-400 font-medium mr-3">
                  {item}
                </p>
              ))}
            </div>
            <div className="flex">
              <a href={demo} target="_blank" rel="noreferrer">
                <button style={{ transition: "250ms" }} className={btnLink}>
                  <RiExternalLinkFill className="mr-3" />
                  Demo
                </button>
              </a>
              <a href={code} target="_blank" rel="noreferrer">
                <button style={{ transition: "250ms" }} className={btnLink}>
                  <AiFillGithub className="mr-3" />
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden w-full flex items-center my-auto transition relative -bottom-2 xl:bottom-0 xl:-left-2 scale">
          <a href={demo} target="_blank" rel="noreferrer" className="w-full">
            <Img fluid={image} />
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default ProjectItem
