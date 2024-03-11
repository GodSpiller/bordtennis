import { SubmitHandler, useForm } from "react-hook-form";
const inputcss =
  "appearance-none border border-gray-300 py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent";

type FormFields = {
  email: string;
  name: string;
  password: string;
  password2: string;
};

export function CreateAccount() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col w-80" onSubmit={handleSubmit(onSubmit)}>
      <input
        className={inputcss}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
            message: "Invalid email",
          },
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
      <input
        className={inputcss}
        {...register("name", {
          required: "Name is required",
          pattern: {
            value: /^[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*$/,
            message: "Name contained illegal characters",
          },
        })}
        type="text"
        placeholder="Name"
      />
      {errors.name && <div className="text-red-500">{errors.name.message}</div>}
      <input
        className={inputcss}
        {...register("password", {
          required: "Password required",

          pattern: {
            value:
              /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,
            message:
              "Password must contain at least one lowercase, uppercase, and one special character and must be at least 8 characters",
          },
          minLength: 8,
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      <input
        className={inputcss}
        {...register("password2", {
          required: "Password do not match",
          validate: (val: string) => {
            if (watch("password") !== val) {
              return "Your passwords do not match";
            }
          },
        })}
        type="password"
        placeholder="Repeat Password"
      />
      {errors.password2 && (
        <div className="text-red-500">{errors.password2.message}</div>
      )}
      <button type="submit">Opret Konto</button>
    </form>
  );
}
