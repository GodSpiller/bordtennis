import { useState } from "react";
import { InvalidInput } from "../../pages/CreateAccountPage";
const inputcss =
  "appearance-none border border-gray-300 py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent";

export type CreateAccountForm = {
  email: string;
  password: string;
  secondPassword: string;
  name: string;
};

type AccountFormError = {
  email: boolean;
  password: boolean;
  secondPassword: boolean;
  name: boolean;
};

export function CreateAccount() {
  const [formState, setFormState] = useState<CreateAccountForm>({
    email: "",
    password: "",
    secondPassword: "",
    name: "",
  });

  const [error, setErrors] = useState<AccountFormError>({
    email: false,
    password: false,
    secondPassword: false,
    name: false,
  });

  function validate() {
    if (
      valid("email" as keyof CreateAccountForm) &&
      valid("name" as keyof CreateAccountForm) &&
      valid("password" as keyof CreateAccountForm) &&
      valid("secondPassword" as keyof CreateAccountForm)
    ) {
      console.log("inputs are valid");
    } else {
      console.log("not valid");
    }
  }

  function valid(key: keyof CreateAccountForm) {
    switch (key) {
      case "email": {
        const emailValidation = new RegExp(
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/
        );
        if (!emailValidation.test(formState.email)) {
          console.log("email not valid");
          setErrors({ ...error, email: true });
          return false;
        }
        setErrors({ ...error, email: false });
        break;
      }
      case "name": {
        const nameValidation = new RegExp(
          /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
        );
        if (!nameValidation.test(formState.name)) {
          console.log("name not valid");
          setErrors({ ...error, name: true });
          return false;
        }
        setErrors({ ...error, name: false });
        break;
      }
      case "password": {
        const passwordValidation = new RegExp(
          /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
        );
        if (!passwordValidation.test(formState.password)) {
          console.log("password not valid");
          setErrors({ ...error, password: true });
          return false;
        }
        setErrors({ ...error, password: false });
        break;
      }
      case "secondPassword": {
        if (formState.password !== formState.secondPassword) {
          console.log("passwords do not match valid");
          setErrors({ ...error, secondPassword: true });
          return false;
        }
        setErrors({ ...error, secondPassword: false });
        break;
      }
    }
    return true;
  }

  return (
    <div className="flex flex-col w-80">
      <form className="flex flex-col">
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <input
          className={inputcss}
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
        ></input>
      </form>
      <form className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          className={inputcss}
          id="name"
          name="name"
          type="text"
          value={formState.name}
          onChange={(e) =>
            setFormState({
              ...formState,
              name: e.target.value,
            })
          }
        ></input>
      </form>
      <form className="flex flex-col">
        <label htmlFor="password1">Password</label>
        <input
          className={inputcss}
          autoComplete=""
          id="password1"
          name="password1"
          type="password"
          required={true}
          minLength={8}
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value,
            })
          }
        ></input>
      </form>
      <form className="flex flex-col">
        <label htmlFor="password2">Repeat password</label>
        <input
          className={inputcss}
          autoComplete=""
          id="password2"
          name="password2"
          type="password"
          required={true}
          minLength={8}
          value={formState.secondPassword}
          onChange={(e) =>
            setFormState({
              ...formState,
              secondPassword: e.target.value,
            })
          }
        ></input>
      </form>
      <button
        className="border border-grey hover:border-black rounded px-1"
        onClick={() => validate()}
      >
        Create Account
      </button>
    </div>
  );
}
