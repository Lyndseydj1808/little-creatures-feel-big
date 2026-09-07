import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">🏠 Home </Link>
      <Link to="/parent-dashboard">Parent Dashboard</Link>
      <Link to="/choose-an-account">Let's Play!</Link>
      <Link to="/about">About/Contact</Link>
    </nav>
  )
}
