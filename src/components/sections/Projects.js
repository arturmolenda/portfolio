import React from "react"
import ProjectItem from "../ProjectItem"

const Projects = ({ projects }) => {
  return (
    <div id="projects" className="relative">
      <div className="min-h-screen flex flex-col items-start relative container mx-auto">
        <h2 className="header text-5xl text-gray-400 text-center font-thin mt-32 mx-auto p-4 mb-4">
          Some of my projects
        </h2>
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
