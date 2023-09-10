/**
 *  Create a react logo in css that looks like a react logo
 *
 */

import React from "react"

import "./react-logo.css"

const ReactLogo = () => (
  <div className="box">
    <div className="center"></div>
    <div className="ring-1">
      <div className="ring-copy-1"></div>
    </div>
    <div className="ring-2">
      <div className="ring-copy-2"></div>
    </div>
    <div className="ring-3">
      <div className="ring-copy-3"></div>
    </div>
  </div>
)

export default ReactLogo
