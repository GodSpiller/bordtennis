import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const inputcss =
  "appearance-none border border-gray-300 py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent";

const CreateAccountSchema = z
  .object({
    email: z.string().min(1, "Email is required").email(),
    name: z
      .string()
      .min(1, "Name is required")
      .refine((name) => {
        const exp = /^[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*$/;
        if (exp.test(name)) {
          return true;
        }
        return false;
      }, "Name contains illegal characters"),
    password: z.string().refine((password) => {
      const exp =
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
      if (exp.test(password)) {
        return true;
      }
      return false;
    }, "Password does not meet requirements"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword);

type FormFields = z.infer<typeof CreateAccountSchema>;

export function CreateAccount() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(CreateAccountSchema) });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    //send create account request
    //handle possible errors
  };

  return (
    <form className="flex flex-col w-80" onSubmit={handleSubmit(onSubmit)}>
      <input
        className={inputcss}
        {...register("email")}
        type="text"
        placeholder="Email"
      />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
      <input
        className={inputcss}
        {...register("name")}
        type="text"
        placeholder="Name"
      />
      {errors.name && <div className="text-red-500">{errors.name.message}</div>}
      <input
        className={inputcss}
        {...register("password")}
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      <input
        className={inputcss}
        {...register("confirmPassword")}
        type="password"
        placeholder="Repeat Password"
      />
      {errors.confirmPassword && (
        <div className="text-red-500">{errors.confirmPassword.message}</div>
      )}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Opretter konto" : "Opret konto"}
      </button>
    </form>
  );
}
