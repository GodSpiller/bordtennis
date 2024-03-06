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
    console.log("validate:");
    console.log({ accountInfo });
  };

  return (
    <div>
      <CreateAccount validate={validateAccount} />
    </div>
  );
}
