import PropTypes from "prop-types";
import FormInput from "./FormInput";

export default function UserForm({ register, errors }) {
	return (
		<div className="flex flex-col gap-4">
			<FormInput {...{ register, errors, name: 'username' }} />
			<FormInput {...{ register, errors, name: 'name' }} />
			<FormInput {...{ register, errors, name: 'email' }} />
			<FormInput {...{ register, errors, name: 'phone' }} />
			<FormInput {...{ register, errors, name: 'website' }} />
			{/*
				// TODO: Need to use Geolocation API for capturing user address
				<FormInput {...{register, errors, name:'address'}} /> */
			}
		</div>
	)
}

UserForm.propTypes = {
	register: PropTypes.func,
	errors: PropTypes.object,
}
