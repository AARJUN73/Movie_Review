import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div>
        <h1>404 not found the page</h1>
        <h2><Link to="/portal/home">Back to HomePage</Link></h2>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSzHq8dAutye3iv-UI5_zFVZAhz09-lMNhdqUy31pfw&s'/>
    </div>
  )
}
