import React, { useCallback, useEffect, useState } from "react"

import { AiFillGithub } from "react-icons/ai"
import { RiLinkedinFill } from "react-icons/ri"
import { CgMenuRight, CgClose } from "react-icons/cg"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Navbar = ({ resumeUrl }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [open, setOpen] = useState(false)
  const [linkClicked, setLinkClicked] = useState(false)

  const anchorLinkClick = () => {
    setLinkClicked(true)
    setOpen(false)
    setTimeout(() => {
      setLinkClicked(false)
      setVisible(true)
    }, 550)
  }

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

  const hamburgerMenuLinkClick = () => {
    openHandle()
    anchorLinkClick()
  }

  const navLink =
    "text-white text-base mx-4 my-0 transition-colors py-4 hover:text-turquoise-default md:inline"
  const iconLink =
    "text-white text-3xl mx-2 hover:text-turquoise-default md:inline"
  const menuLink = "w-full text-center text-xl sm:text-2xl mb-2 mb-2"

  return (
    <header
      className="bg-gray-800 w-full h-16 flex items-center justify-center fixed pl-6 pr-3 xl:px-16"
      style={{
        transition: "250ms",
        transform: `translateY(${visible || linkClicked ? 0 : -4}rem)`,
        boxShadow: (visible || linkClicked) && "0 10px 30px -10px #374151",
        zIndex: 1111,
      }}
    >
      <nav className="flex justify-between items-center w-full">
        <div className="navbar flex justify-between items-center">
          <AnchorLink
            onAnchorLinkClick={anchorLinkClick}
            to="/#home"
            className="text-4xl text-white mr-4"
          >
            <h1>LOGO</h1>
          </AnchorLink>
          <AnchorLink
            onAnchorLinkClick={anchorLinkClick}
            to="/#home"
            className={`hidden ${navLink}`}
          >
            <h2>Home</h2>
          </AnchorLink>
          <AnchorLink
            onAnchorLinkClick={anchorLinkClick}
            to="/#about"
            className={`hidden ${navLink}`}
          >
            <h2>About</h2>
          </AnchorLink>
          <AnchorLink
            onAnchorLinkClick={anchorLinkClick}
            to="/#projects"
            className={`hidden ${navLink}`}
          >
            <h2>Projects</h2>
          </AnchorLink>
          <AnchorLink
            onAnchorLinkClick={anchorLinkClick}
            to="/#contact"
            className={`hidden ${navLink}`}
          >
            <h2>Contact</h2>
          </AnchorLink>
        </div>
        <div className="navbar flex justify-evenly items-center">
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
          <a
            onClick={anchorLinkClick}
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className={`${`hidden ${navLink}`} text-turquoise-default`}
          >
            <h2>Resume</h2>
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
          className="absolute h-screen bg-gray-900 right-0 top-0 z-10"
          style={{
            transition: "250ms",
            transform: `translateX(${open ? 0 : 70}vw)`,
            width: "70vw",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <AnchorLink
              aria-hidden
              onAnchorLinkClick={hamburgerMenuLinkClick}
              to="/#home"
              className={`${navLink} ${menuLink}`}
            >
              <h2>Home</h2>
            </AnchorLink>
            <AnchorLink
              aria-hidden
              onAnchorLinkClick={hamburgerMenuLinkClick}
              to="/#about"
              className={`${navLink} ${menuLink}`}
            >
              <h2>About</h2>
            </AnchorLink>
            <AnchorLink
              aria-hidden
              onAnchorLinkClick={hamburgerMenuLinkClick}
              to="/#projects"
              className={`${navLink} ${menuLink}`}
            >
              <h2>Projects</h2>
            </AnchorLink>
            <AnchorLink
              aria-hidden
              onAnchorLinkClick={hamburgerMenuLinkClick}
              to="/#contact"
              className={`${navLink} ${menuLink}`}
            >
              <h2>Contact</h2>
            </AnchorLink>
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
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
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
