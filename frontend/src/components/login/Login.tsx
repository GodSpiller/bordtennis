import { SubmitHandler, useForm } from 'react-hook-form';
const inputcss =
	'appearance-none border border-gray-300 py-2 px-4 my-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent';

type FormFields = {
	email: string;
	name: string;
	password: string;
	password2: string;
};

export function Login() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>();

	const onSubmit: SubmitHandler<FormFields> = async data => {
		//send create account request
		//handle possible errors
	};

	return (
		<form className="flex flex-col w-80" onSubmit={handleSubmit(onSubmit)}>
			<input className={inputcss} {...register('email')} type="text" placeholder="Email" />
			<input className={inputcss} {...register('password')} type="password" placeholder="Password" />
			<button disabled={isSubmitting} type="submit">
				{isSubmitting ? 'Opretter konto' : 'Opret konto'}
			</button>
		</form>
	);
}
