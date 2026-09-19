import { API_URL } from "./apiConfig";

export async function createParent(parentData) {
  const response = await fetch(`${API_URL}/parent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(parentData),
  });

  if (!response.ok) {
    throw new Error("⚠️ Failed to create account");
  }

  const data = await response.json();
  return data;
}

export async function updateParentAccount(updates) {
  const response = await fetch(`${API_URL}/parent/updateParent`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("⚠️ Error updating account.");
  }

  const updatedParent = await response.json();
  return updatedParent;
}

export async function updateParentPassword(update) {
  const response = await fetch(`${API_URL}/parent/updatePassword`, {
    method: "PUT",
      headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(update),
  });

    if (!response.ok) {
    throw new Error("⚠️ Error updating account.");
  }

  }

export async function deleteParentAccount() {
  const response = await fetch(`${API_URL}/parent/deleteParent`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("⚠️ Error deleting account.");
  }

  return true;
}

export async function loginParent(credentials) {
  const response = await fetch(`${API_URL}/parent/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", //sends the session cookie
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("⚠️ Email and/or Password is incorrect.");
  }

  const data = await response.json();
  return data;
}

export async function logoutParent() {
  const response = await fetch(`${API_URL}/parent/logout`, {
    method: "POST",
    credentials: "include",
  });

     if (!response.ok) {
    throw new Error("⚠️ Error logging out.");
  }
}

export async function getParent() {
  const response = await fetch(`${API_URL}/parent/me`, {
    method: "GET",
    credentials: "include",
  });

   if (!response.ok) {
    throw new Error("⚠️ Please login.");
  }

  const data = await response.json();
  return data;

}

