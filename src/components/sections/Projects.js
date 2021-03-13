import React from "react"
import ProjectItem from "../ProjectItem"
import Reveal from "react-reveal/Reveal"

const Projects = ({ projects }) => {
  return (
    <div id="projects" className="relative mb-12">
      <div className="min-h-screen flex flex-col items-start relative container mx-auto">
        <Reveal effect="header">
          <h2 className="text-4xl sm:text-5xl text-gray-400 text-center font-thin mx-auto p-4 mb-4 mt-20">
            My projects
          </h2>
        </Reveal>
        <div className="mt-8">
          {projects.map(project => (
            <ProjectItem
              key={project.id}
              title={project.title}
              description={project.description}
              demo={project.demo}
              code={project.code}
              techStack={project.techStack}
              image={project.image.asset.fluid}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
