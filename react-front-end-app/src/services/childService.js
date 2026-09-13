import { API_URL } from "./apiConfig";

export async function createChild(childData) {
  const response = await fetch(`${API_URL}/parent/child`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(childData),
  });

  if (!response.ok) {
    throw new Error("⚠️ Failed to create account");
  }

  const data = await response.json();
  return data;
}

export async function getChildAccounts() {
  const response = await fetch(`${API_URL}/parent/childList`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("⚠️ No child account found.");
  }

  const data = await response.json();
  return data;
}

export async function updateChildAccount(childId, updates) {
  const response = await fetch(`${API_URL}/parent/child/${childId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("⚠️ Error updating child account.");
  }

  const updatedChild = await response.json();
  return updatedChild;
}

export async function deleteChildAccount(childId) {
  const response = await fetch(`${API_URL}/parent/child/${childId}`, {
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
