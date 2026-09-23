import React from 'react';
import { Outlet } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <>
    <Outlet />
        <footer>
        <p>Designed for children ages 4-8</p>
        <p>© 2026 Little Creatures Feel Big Created by Lyndsey Clarkson</p>
        <p>Images generated using AI - Nano Banana 2</p>
      </footer>
      </>
  )
}

