import PropTypes from "prop-types";

export default function Modal({ title, action, children, close }) {
	return (
		<div tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100vh-1rem)] max-h-full flex justify-center items-center bg-black/50">
			<div className="relative w-full max-w-md max-h-full">
				<div className="relative bg-slate-100 rounded-lg shadow">
					<div className="flex items-center justify-between p-5 border-b rounded-t">
						<h3 className="text-xl font-medium text-slate-900">
							{title}
						</h3>
						<button
							type="button"
							className="
							text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center
							"
							onClick={close}
						>
							<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>

					<div className="p-6 space-y-6">
						{children}
					</div>

					<div className="flex items-center p-6 space-x-2 border-t border-slate-200 rounded-b gap-2">
						{action && <button type="button" className="
						bg-indigo-600 hover:bg-indigo-700 py-2 px-6 text-md text-gray-100 transition-all duration-200 rounded-md focus:ring-4 focus:outline-none focus:ring-slate-300
						font-medium
						">Update</button>}
						<button
							type="button" onClick={close}
							className="
							 bg-white hover:bg-slate-100 py-2 px-6 text-md text-slate-500 transition-all duration-200 rounded-md focus:ring-4 focus:outline-none focus:ring-slate-300
							 border border-slate-200 font-medium  hover:text-slate-900 focus:z-10
							"
						>
							{action ? 'Cancel' : 'Close'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
Modal.propTypes = {
	children: PropTypes.element.isRequired,
	title: PropTypes.string.isRequired,
	action: PropTypes.func,
	close: PropTypes.func
}