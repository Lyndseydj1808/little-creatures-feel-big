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
import TimeLimit from "./parentPages/TimeLimit";
import ChooseAnAccount from "./childPages/ChooseAnAccount";
import Layout from './components/Layout.jsx'

function App() {
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] =
    useState(
      "",
    ); /*havent incorporated age anywhere yet but hope to in the future */

  const onUpdateChild = (name, age) => {
    setChildName(name);
    setChildAge(age);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<Layout />}>
        <Route path="/parent-login" element={<ParentLogin />} />
        <Route path="/parent-create-account" element={<ParentCreateAccount />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route
          path="/parent-create-account"
          element={<ParentCreateAccount />}
        />
        <Route path="/create-child-account" element={<CreateChildAccount onUpdateChild={onUpdateChild} childName={childName} />} />
        <Route path="/child-accounts" element={<ChildAccounts />} />
        <Route path="/time-limit" element={<TimeLimit />} />
        <Route path="/choose-an-account" element={<ChooseAnAccount />} />
        <Route
          path="/mini-games"
          element={<MainGames childName={childName} />}
        />
        <Route
          path="/games/feeling-friends"
          element={<FeelingFriends childName={childName} />}
        />
        <Route
          path="/games/kind-creatures"
          element={<KindCreatures childName={childName} />}
        />
        <Route path="/about" element={<About childName={childName} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
