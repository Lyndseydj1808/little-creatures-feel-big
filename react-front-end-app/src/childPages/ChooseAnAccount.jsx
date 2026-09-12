import React, { useCallback, useState, useEffect } from "react";
import { API_URL } from "../services/apiConfig";
import LoadingSpinner from "../components/LoadingSpinner";
import HomeButton from "../components/HomeButton";
import ChildAccounts from "../parentPages/ChildAccounts";

export default function ChooseAnAccount() {
return (
<main className="choose-account-contianer">
  <ChildAccounts />
</main>
);
}