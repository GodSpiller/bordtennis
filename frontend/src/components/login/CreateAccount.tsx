import { useState } from "react";

const inputcss =
  "appearance-none border border-gray-300 py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent";

export type CreateAccountForm = {
  email: string;
  password: string;
  secondPassword: string;
  name: string;
};

type Props = {
  validate: (accountInfo: CreateAccountForm) => void;
};

export function CreateAccount({ validate }: Props) {
  const [formState, setFormState] = useState<CreateAccountForm>({
    email: "",
    password: "",
    secondPassword: "",
    name: "",
  });

  return (
    <div className="flex flex-col w-80">
      <form className="flex flex-col">
        <label htmlFor="email">Email</label>
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
      <div className="flex flex-col">
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
      </div>
      <div className="flex flex-col">
        <label>Password</label>
        <input
          className={inputcss}
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
      </div>
      <div className="flex flex-col">
        <label>Repeat password</label>
        <input
          className={inputcss}
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
      </div>
      <button
        className="border border-grey hover:border-black rounded px-1"
        onClick={() => validate(formState)}
      >
        Create Account
      </button>
    </div>
  );
}
