import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />{" "}
        {/*Outlet is needed to create the blank space for the actual page to render*/}
      </main>
    </>
  );
}
