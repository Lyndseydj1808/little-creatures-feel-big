import { React, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { deleteChildAccount } from "../services/childService";
import { getChildAccounts } from "../services/childService";

export default function DeleteChild() {
  const { childId } = useParams();
  const navigate = useNavigate();
  const [deleteFeedback, setDeleteFeedback] = useState("");

  const handleDelete = async () => {
    try {
      const allChildren = await getChildAccounts(); //gets the list of children
      const child = allChildren.find((c) => c.childId === Number(childId)); //finds the child account from the list that matches
      await deleteChildAccount(childId);
      navigate("/child-accounts");
    } catch (error) {
      setDeleteFeedback("⚠️ Error deleting account");
    }
  };
  return (
    <div>
      <div className="delete-account-section">
        <p className="delete-message">
          {" "}
          ***Clicking this button will PERMANENTLY DELETE this child account!
          Only click this button if you are SURE you want to DELETE this child
          account!***
        </p>
        <button className="delete-account" type="button" onClick={handleDelete}>
          DELETE ACCOUNT
        </button>
        {deleteFeedback && <p className="delete-feedback">{deleteFeedback}</p>}
        <Link className="back-to-button" to="/child-accounts">
          ⬅️ Back to Child Accounts
        </Link>
      </div>
    </div>
  );
}
