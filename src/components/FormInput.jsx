import PropTypes from "prop-types"

export default function FormInput({register, name, errors}) {
	return (
		<div className="flex flex-col">
			<label htmlFor={name} className="mb-1 capitalize">{name}</label>
			<input
				{...register(name)}
				className={`p-2 rounded-md border ${errors[name] ? 'border-red-200' : 'border-slate-300'}`}
				name={name}
				id={name}
				type="text"
			/>
			{errors[name] && <small className="text-red-700 ">{errors[name]?.message}</small>}
		</div>
	)
}

FormInput.propTypes = {
	register: PropTypes.func,
	errors: PropTypes.object,
	name: PropTypes.string,
}
