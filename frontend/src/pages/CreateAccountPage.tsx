import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateAccount,
  CreateAccountForm,
} from "../components/login/CreateAccount";

const inputcss =
  "appearance-none border border-gray-300 py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent";

export type InvalidInput = {
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

  return (
    <div>
      <CreateAccount />
    </div>
  );
}
