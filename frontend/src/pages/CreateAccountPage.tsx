import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateAccount,
  CreateAccountForm,
} from "../components/login/CreateAccount";

const inputcss =
  "appearance-none border border-gray-300 py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent";

type InvalidInput = {
  email: string;
  name: string;
  password: string;
  passwordMatch: string;
};

export function CreateAccountPage() {
  const [invalidInput, setInvalidInput] = useState<InvalidInput>({
    email: "",
    name: "",
    password: "",
    passwordMatch: "",
  });
  const navigate = useNavigate();

  const emailValidation = new RegExp(
    "/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/"
  );

  const passwordValidation = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const nameValidation = new RegExp("/^[A-Za-z\u00C0-\u017Fs'-]+$/");

  const validateAccount = (accountInfo: CreateAccountForm) => {
    if (!emailValidation.test(accountInfo.email)) {
      console.log("Email is not valid");
    }

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
