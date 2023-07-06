import { func } from "prop-types";

export default function TitleBar({togglePopup}) {
  return (
    <div className='flex justify-between items-center mb-4'>
      <h1 className='text-3xl mb-5 font-medium'>Users</h1>
      <button
        className='
          bg-emerald-700 hover:bg-emerald-800 py-2 px-6 text-lg text-gray-100 transition-all duration-200 rounded-lg
          flex gap-2 items-center
        '
        onClick={togglePopup}
      >
        <svg
          height='24'
          width='24'
          viewBox='0 0 48 48'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z'
            fill='rgb(243 244 246)'
          />
        </svg>
        Add New
      </button>
    </div>
  );
}
TitleBar.propTypes = {
  togglePopup: func
}