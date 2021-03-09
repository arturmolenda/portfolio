import * as React from "react"
import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0" style={{ backgroundColor: "#303339" }} />
      <Navbar />
      <div
        id="content"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
