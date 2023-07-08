import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { bool, func, object } from "prop-types";
import { toast } from 'react-toastify';
import { userSchema } from "../utils";
import UserForm from "./UserForm";
import Modal from "./Modal";

const emptyUser = {
	username: "",
	name: "",
	email: "",
	phone: "",
	website: "",
	// address: {}
}
export default function UserPopup({ userData, close }) {
	const formData = userData ?? emptyUser;

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(userSchema),
		defaultValues: formData,
	})
	const onSubmit = async (data) => {
		try {
			fetch(`https://jsonplaceholder.typicode.com/users/${formData.id}`, {
				method: 'PUT',
				body: JSON.stringify(data),
			}).then(() => {
				toast.info('Users data saved successfully');
				close();
			});
		} catch (err) {
			toast.error('Something went wrong');
		}
	}

	return (
		<Modal
			title='Add/Update User Information'
			close={close}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<UserForm {...{ register, errors }} />

				<div
					className="
						flex flex-col sm:flex-row justify-end items-center mt-4 pt-4 
						border-t border-slate-200 gap-4
					"
				>
					<button
						onClick={handleSubmit(onSubmit)}
						type="submit"
						className="
							bg-indigo-600 hover:bg-indigo-700 py-2 px-6 text-md text-gray-100 transition-all duration-200
							rounded-md focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium w-full sm:w-fit
						"
					>
						Update
					</button>

					<button
						type="button" onClick={close}
						className="
							 bg-white hover:bg-slate-100 py-2 px-6 text-md text-slate-500
							 transition-all duration-200 rounded-md focus:ring-4 focus:outline-none focus:ring-slate-300
							 border border-slate-200 font-medium  hover:text-slate-900 focus:z-10 w-full sm:w-fit
							"
					>
						Cancel
					</button>
				</div>
			</form>
		</Modal >
	)
}

UserPopup.propTypes = {
	loadingUserData: bool,
	userData: object,
	submit: func,
	close: func,
}
