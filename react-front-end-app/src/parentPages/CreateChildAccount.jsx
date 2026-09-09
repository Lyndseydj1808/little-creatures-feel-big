import React from "react";
import { useState } from "react";
import HomeButton from "../components/HomeButton";
import ParentDashboardButton from "../components/ParentDashboardButton";
import { createChild } from "../services/childService";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function CreateChildAccount() {
  const [formSubmit, setFormSubmit] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [creatureChoice, setCreatureChoice] = useState("");
  const [formValidationFeedback, setFormValidationFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ageNumber = Number(age); //converts useState age (which is always stored as a string) to a number
    if (!name || !age) {
      setFormValidationFeedback("⚠️ Please enter name and age.");
    } else if (ageNumber >= 18 || ageNumber <= 0) {
      setFormValidationFeedback("⚠️ Please enter a valid age.");
    } else {
      try {
        await createChild({ name, age: ageNumber, creatureChoice });
        setFormSubmit(true);
        setFormValidationFeedback("");
      } catch (error) {
        console.error(error);
        setFormValidationFeedback(
          "⚠️ Something went wrong creating your account. Please try again.",
        );
      }
    }
  };
  return (
    <main className="create-child-account-container">
      {formValidationFeedback && (
        <div className="form-validation-feedback">{formValidationFeedback}</div>
      )}
      {!formSubmit && (
        <section className="form">
          <div className="create-account">
            <header>
              <h1>Make A Child Account</h1>
              <h2> You can make a seperate account for each child.</h2>
            </header>
            <form className="parent-form" onSubmit={handleSubmit}>
              <label htmlFor="childName">Child's Name</label>
              <input
                className="parent-form-input"
                type="text"
                id="childName"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter child's name"
              />
              <label htmlFor="childAge">Child's Age</label>
              <input
                className="parent-form-input"
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
                <option value="Pheonix">🐦‍🔥 Phoenix</option>
              </select>
              <button className="save-button" type="submit">
                Save
              </button>
            </form>
          </div>
        </section>
      )}

      {formSubmit && (
        <section className="form-feedback-section">
          <div className="form-submit-feedback">{`Thank you! We hope ${name} has so much fun exploring Little Creatures Feel Big!`}</div>
          <Link className="child-accounts" to="/child-accounts">
            Child Accounts
          </Link>
        </section>
      )}

      <ParentDashboardButton />
      <HomeButton />
    </main>
  );
}
