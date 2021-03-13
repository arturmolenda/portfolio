import React from "react"
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"
import { RiLinkedinFill } from "react-icons/ri"
import Reveal from "react-reveal/Reveal"

const Contact = () => {
  const fieldStyles =
    "w-full rounded my-1 p-3 text-xl bg-gray-200 text-gray-900"
  return (
    <div id="contact" className="relative mb-20">
      <div className="flex flex-col items-start relative container mx-auto z-10">
        <Reveal effect="header">
          <h2 className="text-5xl text-gray-400 text-center font-thin mx-auto p-4 mb-4 mt-20">
            Contact me
          </h2>
        </Reveal>
        <Reveal effect="contact">
          <div className="contact flex flex-col w-10/12 sm:w-full sm:max-w-md mx-auto">
            <form className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={fieldStyles}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={fieldStyles}
                required
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                className={fieldStyles}
                required
              />

              <button
                style={{ transition: "250ms" }}
                className={
                  "py-2.5 mt-4 rounded-lg w-full border-2 border-turquoise-default text-turquoise-default hover:bg-turquoise-transparent"
                }
              >
                Send
              </button>
            </form>
            <div className="p-4 bg-gray-800 w-full mt-8 rounded-xl text-gray-200 text-xl font-thin relative">
              <div className="mb-2 p-2 border-b border-turquoise-dark flex items-center">
                <FaMapMarkerAlt className="text-turquoise-dark mr-8 text-3xl" />{" "}
                Toruń | Poland
              </div>
              <div className="mb-2 p-2 flex items-center">
                <FaEnvelope className="text-turquoise-dark mr-8 mt-1 text-3xl" />{" "}
                a.p.molenda@gmail.com
              </div>
              <div className="p-5 flex justify-around items-center bg-gray-900 rounded-xl text-5xl text-turquoise-default">
                <a
                  href="https://github.com/arturmolenda"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-turquoise-dark"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/artur-molenda-16950519a"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-turquoise-dark"
                >
                  <RiLinkedinFill />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Contact
