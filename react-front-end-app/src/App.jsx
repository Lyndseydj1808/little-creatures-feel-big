import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./mainPages/Home";
import About from "./mainPages/About";
import ParentDashboard from "./parentPages/ParentDashboard";
import FeelingFriends from "./games/FeelingFriends/FeelingFriends";
import MainGames from "./mainPages/MainGames";
import KindCreatures from "./games/KindCreatures/KindCreatures";
import ParentLogin from "./parentPages/ParentLogin";
import ParentCreateAccount from "./parentPages/ParentCreateAccount";
import CreateChildAccount from "./parentPages/CreateChildAccount";
import ChildAccounts from "./parentPages/ChildAccounts";
import ChooseAnAccount from "./childPages/ChooseAnAccount";
import Layout from "./components/Layout.jsx";
import AuthProvider from "./context/AuthProvider";
import ParentUpdateAccount from "./parentPages/ParentUpdateAccount.jsx";
import ParentUpdatePassword from "./parentPages/ParentUpdatePassword.jsx";
import UpdateChildAccount from "./parentPages/UpdateChildAccount.jsx";
import DeleteParent from "./parentPages/DeleteParent.jsx";
import DeleteChild from "./parentPages/DeleteChild.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        {/*all files between AuthProvider are included as 'children'*/}
        <Routes>
          <Route element={<Footer />}>
            <Route path="/" element={<Home />} />
            {/*Adds the nav bar to all pages (except home)*/}
            <Route element={<Layout />}>
              <Route path="/parent-login" element={<ParentLogin />} />
              <Route
                path="/parent-create-account"
                element={<ParentCreateAccount />}
              />
              <Route path="/parent-dashboard" element={<ParentDashboard />} />
              <Route
                path="/update-parent-account"
                element={<ParentUpdateAccount />}
              />
              <Route
                path="/update-password"
                element={<ParentUpdatePassword />}
              />
              <Route path="/delete-parent-account" element={<DeleteParent />} />
              <Route
                path="/update-child-account/:childId"
                element={<UpdateChildAccount />}
              />
              <Route
                path="/delete-child-account/:childId"
                element={<DeleteChild />}
              />
              <Route
                path="/create-child-account"
                element={<CreateChildAccount />}
              />
              <Route path="/child-accounts" element={<ChildAccounts />} />
              <Route path="/choose-an-account" element={<ChooseAnAccount />} />
              <Route path="/mini-games" element={<MainGames />} />
              <Route path="/mini-games/:childId" element={<MainGames />} />
              <Route
                path="/games/feeling-friends"
                element={<FeelingFriends />}
              />
              <Route
                path="/games/feeling-friends/:childId"
                element={<FeelingFriends />}
              />
              <Route path="/games/kind-creatures" element={<KindCreatures />} />
              <Route
                path="/games/kind-creatures/:childId"
                element={<KindCreatures />}
              />
              <Route path="/about" element={<About />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
