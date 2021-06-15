import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <header>
        <div className="menu">Menu here</div>
        <nav>Nav links here</nav>
      </header>
      {/* <main>{children}</main>
      <footer></footer> */}
    </div>
  )
}

export default Layout
