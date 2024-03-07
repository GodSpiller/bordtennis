import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateAccount,
  CreateAccountForm,
} from "../components/login/CreateAccount";

const inputcss =
  "appearance-none border border-gray-300 py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent";

export function CreateAccountPage() {
  const navigate = useNavigate();
  const validateAccount = (accountInfo: CreateAccountForm) => {
    //const c = new RegExp("^.{8,32}$");

    const passwordValidation = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    const nameValidation = new RegExp("/^[A-Za-z\u00C0-\u017Fs'-]+$/");

    if (!nameValidation.test(accountInfo.name)) {
      console.log("name is not valid");
    }

    if (!passwordValidation.test(accountInfo.password)) {
      console.log("password is not valid");
    }

    if (!(accountInfo.password === accountInfo.secondPassword)) {
      console.log("Passwords do not match");
    }
  };

  return (
    <div>
      <CreateAccount validate={validateAccount} />
    </div>
  );
}
