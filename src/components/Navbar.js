import React, { useCallback, useEffect, useState } from "react"

import { AiFillGithub } from "react-icons/ai"
import { RiLinkedinFill } from "react-icons/ri"
import { CgMenuRight, CgClose } from "react-icons/cg"

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [open, setOpen] = useState(false)

  const openHandle = () => {
    setOpen(prevOpen => {
      document.getElementsByTagName("body")[0].style.overflow = prevOpen
        ? "auto"
        : "hidden"
      document.getElementById("content").style.filter = prevOpen
        ? "none"
        : "blur(3px) brightness(0.7)"
      return !prevOpen
    })
  }

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset
    setVisible(prevScrollPos > currentScrollPos || prevScrollPos === 0)
    setPrevScrollPos(currentScrollPos)
  }, [prevScrollPos])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const resizeHandle = useCallback(() => {
    if (window.innerWidth > 768 && open) openHandle()
  }, [open])

  useEffect(() => {
    window.addEventListener("resize", resizeHandle)
    return () => window.removeEventListener("resize", resizeHandle)
  }, [resizeHandle])

  const navLink =
    "text-white text-base mx-4 my-0 transition-colors py-4 hover:text-turquoise-default md:inline"
  const iconLink =
    "text-white text-3xl mx-2 hover:text-turquoise-default md:inline"
  return (
    <header
      className="bg-gray-700 w-full h-16 flex items-center justify-center fixed transition z-10 pl-6 pr-3 xl:px-16"
      style={{
        transform: `translateY(${visible ? 0 : -4}rem)`,
        boxShadow: visible && "0 10px 30px -10px #374151",
      }}
    >
      <nav className="flex justify-between items-center w-full">
        <div className="navbar flex justify-between items-center">
          <a href="#home" className="text-4xl text-white mr-4">
            <h1>LOGO</h1>
          </a>
          <a href="#home" className={`hidden ${navLink}`}>
            <h2>Home</h2>
          </a>
          <a href="#about" className={`hidden ${navLink}`}>
            <h2>About</h2>
          </a>
          <a href="#projects" className={`hidden ${navLink}`}>
            <h2>Projects</h2>
          </a>
          <a href="#contact" className={`hidden ${navLink}`}>
            <h2>Contact</h2>
          </a>
        </div>
        <div className="navbar flex justify-evenly items-center">
          <a
            href="#resume"
            className={`${`hidden ${navLink}`} text-turquoise-default`}
          >
            <h2>Resume</h2>
          </a>
          <a
            href="https://github.com/arturmolenda"
            target="_blank"
            rel="noreferrer"
            className={`hidden ${iconLink}`}
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/artur-molenda-16950519a"
            target="_blank"
            rel="noreferrer"
            className={`hidden ${iconLink}`}
          >
            <RiLinkedinFill />
          </a>

          <button
            className="md:hidden block text-turquoise-default p-2 text-4xl z-20"
            onClick={openHandle}
            aria-hidden
          >
            <i
              className=" block transition"
              style={{
                transition: "300ms",
                transform: `rotate(${open ? -180 : 0}deg)`,
              }}
            >
              {open ? <CgClose /> : <CgMenuRight />}
            </i>
          </button>
        </div>
        <div
          className="absolute h-screen bg-gray-800 right-0 top-0 z-10"
          style={{
            transition: "250ms",
            transform: `translateX(${open ? 0 : 70}vw)`,
            width: "70vw",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <a
              onClick={openHandle}
              aria-hidden
              href="#home"
              className={`${navLink} w-full text-center text-2xl mb-2`}
            >
              <h2>Home</h2>
            </a>
            <a
              onClick={openHandle}
              aria-hidden
              href="#about"
              className={`${navLink} w-full text-center text-2xl mb-2`}
            >
              <h2>About</h2>
            </a>
            <a
              onClick={openHandle}
              aria-hidden
              href="#projects"
              className={`${navLink} w-full text-center text-2xl mb-2`}
            >
              <h2>Projects</h2>
            </a>
            <a
              onClick={openHandle}
              aria-hidden
              href="#contact"
              className={`${navLink} w-full text-center text-2xl mb-2`}
            >
              <h2>Contact</h2>
            </a>
            <div className="flex  mt-10">
              <a
                onClick={openHandle}
                aria-hidden
                href="https://github.com/arturmolenda"
                target="_blank"
                rel="noreferrer"
                className={`${iconLink}`}
              >
                <AiFillGithub />
              </a>
              <a
                onClick={openHandle}
                aria-hidden
                href="https://www.linkedin.com/in/artur-molenda-16950519a"
                target="_blank"
                rel="noreferrer"
                className={`${iconLink}`}
              >
                <RiLinkedinFill />
              </a>
            </div>
            <a
              onClick={openHandle}
              aria-hidden
              href="#contact"
              className={`${navLink} w-full text-center mt-2 mb-16 text-turquoise-default text-2xl`}
            >
              <h2
                style={{
                  display: "inline-block",
                  borderBottom: "2px solid #fff",
                  borderRadius: 8,
                  padding: 10,
                }}
              >
                Resume
              </h2>
            </a>
          </div>
        </div>
        {open && (
          <div
            className="absolute inset-0 h-screen w-screen"
            onClick={openHandle}
            aria-hidden
          />
        )}
      </nav>
    </header>
  )
}

export default Navbar
