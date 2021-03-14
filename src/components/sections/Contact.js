import React, { useState } from "react"
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"
import { RiLinkedinFill } from "react-icons/ri"
import Reveal from "react-reveal/Reveal"

const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const clearForm = () => {
    setName("")
    setEmail("")
    setMessage("")
  }

  const encode = data =>
    Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")

  const handleSubmit = e => {
    e.preventDefault()
    setSuccess(false)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", name, email, message }),
    })
      .then(() => {
        setSuccess(true)
        clearForm()
      })
      .catch(error => {
        clearForm()
        console.log(error)
      })
  }

  const fieldStyles =
    "w-full rounded my-1 p-3 text-xl bg-gray-200 text-gray-900"
  return (
    <div id="contact" className="relative mb-20">
      <div className="flex flex-col items-start relative container mx-auto z-10">
        <Reveal effect="header">
          <h2 className="text-4xl sm:text-5xl text-gray-400 text-center font-thin mx-auto p-4 mb-4 mt-20">
            Contact me
          </h2>
        </Reveal>
        <Reveal effect="contact">
          <div className="contact flex flex-col w-10/12 sm:w-full sm:max-w-md mx-auto">
            <form
              className="flex flex-col"
              data-netlify="true"
              netlify
              name="contact-form"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={fieldStyles}
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={fieldStyles}
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                className={fieldStyles}
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
              />

              <button
                type="submit"
                style={{ transition: "250ms" }}
                className={
                  "py-2.5 mt-4 rounded-lg w-full border-2 border-turquoise-default text-turquoise-default hover:bg-turquoise-transparent"
                }
              >
                Send
              </button>
            </form>
            {success && (
              <p className="text-green-400 text-center mt-7 font-semibold">
                Thanks for your message!
              </p>
            )}
            <div className="p-4 bg-gray-800 w-full mt-8 rounded-xl text-gray-200 text-xl font-thin relative">
              <div className="mb-2 p-2 border-b border-turquoise-dark flex items-center">
                <FaMapMarkerAlt className="text-turquoise-dark mr-8 text-2xl sm:text-3xl" />{" "}
                <span className="text-lg sm:text-xl">Toruń | Poland</span>
              </div>
              <div className="mb-2 p-2 flex items-center">
                <FaEnvelope className="text-turquoise-dark mr-8 mt-1 text-2xl sm:text-3xl" />{" "}
                <span className="text-lg sm:text-xl">
                  a.p.molenda@gmail.com
                </span>
              </div>
              <div className="p-5 flex justify-around items-center bg-gray-900 rounded-xl text-4xl sm:text-5xl text-turquoise-default">
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
