import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getChildAccounts, updateChildAccount } from "../services/childService";

export default function UpdateChildAccount() {
  const { childId } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [creatureChoice, setCreatureChoice] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [formFeedback, setFormFeedback] = useState("");

  useEffect(() => {
    async function loadChildData() {
      try {
        const allChildren = await getChildAccounts(); //gets the list of children
        const child = allChildren.find((c) => c.childId === Number(childId)); //finds the child account from the list that matches
        if (child) {
          setName(child.name);
          setAge(child.age);
          setCreatureChoice(child.creatureChoice);
        }
      } catch (error) {
        setFormFeedback("⚠️ Error loading account. Please try again.");
      }
    }
    loadChildData();
  }, [childId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateChildAccount(childId, {
        name,
        age,
        creatureChoice,
      });
      setFormSubmit(true);
      setFormFeedback("Account updated succesfully");
    } catch (error) {
      setFormFeedback("⚠️ Error updating account. Please try again.");
    }
  };

  return (
    <main className="update-child-account-container">
      {!formSubmit && (
        <div className="update-child-form">
          <h1>Update Child Account</h1>
          <h2>Please provide updated information. </h2>
          <form className="form parent-form" onSubmit={handleSubmit}>
            <label htmlFor="childName">Child's Name</label>
            <input
              className="form-input parent-form-input"
              type="text"
              id="childName"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter child's name"
            />
            <label htmlFor="childAge">Child's Age</label>
            <input
              className="form-input parent-form-input"
              type="number"
              id="childAge"
              min="1"
              max="17"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              placeholder="Enter child's age"
            />
            <label htmlFor="creature-choice">Choose A Creature</label>
            <select
              className="creature-choice-select"
              name="chooseCreature"
              id="creature-choice"
              value={creatureChoice}
              onChange={(event) => setCreatureChoice(event.target.value)}
            >
              <option value="">Select a creature</option>
              <option value="Unicorn">🦄 Unicorn</option>
              <option value="Dragon">🐉 Dragon</option>
              <option value="Llama">🦙 Llama</option>
              <option value="Peacock">🦚 Peacock</option>
              <option value="Phoenix">🐦‍🔥 Phoenix</option>
            </select>
            <button className="form-button save-button" type="submit">
              Save
            </button>
          </form>
        </div>
      )}
      {formSubmit && <div className="feedback">{formFeedback}</div>}
      <Link className="back-to-button" to="/child-accounts">
        ⬅️ Back to Child accounts
      </Link>
         <div className="delete-account-section">
        <Link className="delete-account" to={`/delete-child-account/${childId}`}>
          Delete Account
        </Link>
        </div>
    </main>
  );
}
