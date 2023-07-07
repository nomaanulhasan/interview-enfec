import { string, func, number, bool } from "prop-types";

export default function UserRow({
  id, username, name, email, openUpdateUserPopup, deleteUser, isDeleting
}) {
  return (
    <div
      className='
        flex justify-between items-center gap-y-4 py-2 border-b border-solid border-slate-400 px-2
      '
    >
      <div className='flex-1  min-w-[240px] overflow-ellipsis whitespace-nowrap overflow-hidden'>
        {username}
      </div>
      <div className='flex-1  min-w-[240px] overflow-ellipsis whitespace-nowrap overflow-hidden'>
        {name}
      </div>
      <div className='flex-1  min-w-[240px] overflow-ellipsis whitespace-nowrap overflow-hidden'>
        {email}
      </div>
      <div className='flex gap-4 min-w-[200px]'>
        <button
          className='
            bg-indigo-600 hover:bg-indigo-700 py-2 px-6 text-lg text-gray-100 transition-all duration-200 rounded-lg
            flex gap-2 items-center
          '
          onClick={() => openUpdateUserPopup(id)}
        >
          <svg
            height='24'
            width='24'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z'
              fill='rgb(243 244 246)'
            />
          </svg>
          Update
        </button>
        <button
          className='
            bg-rose-800 hover:bg-rose-950 py-2 px-6 text-lg text-gray-100 transition-all duration-200 rounded-lg
            flex gap-2 items-center
          '
          onClick={() => deleteUser(id)}
          disabled={isDeleting}
        >
          {isDeleting ? (
            <svg
              height='24'
              width='24'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className="animate-spin"
            >
              <line strokeWidth="2" stroke='rgb(243 244 246)' x1="12" x2="12" y1="2" y2="6" />
              <line strokeWidth="2" stroke='rgb(243 244 246)' x1="12" x2="12" y1="18" y2="22" />
              <line strokeWidth="2" stroke='rgb(243 244 246)' x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
              <line strokeWidth="2" stroke='rgb(243 244 246)' x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
              <line strokeWidth="2" stroke='rgb(243 244 246)' x1="2" x2="6" y1="12" y2="12" />
              <line strokeWidth="2" stroke='rgb(243 244 246)' x1="18" x2="22" y1="12" y2="12" />
              <line strokeWidth="2" stroke='rgb(243 244 246)' x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
              <line strokeWidth="2" stroke='rgb(243 244 246)' x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
            </svg>
          ) : (
            <svg
              height='24'
              width='24'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.922,4.851a11.806,11.806,0,0,0-4.12-1.07,4.945,4.945,0,0,0-9.607,0A12.157,12.157,0,0,0,3.18,4.805,1.943,1.943,0,0,0,2,6.476,1,1,0,0,0,3,7.49H21a1,1,0,0,0,1-.985A1.874,1.874,0,0,0,20.922,4.851ZM11.976,2.01A2.886,2.886,0,0,1,14.6,3.579a44.676,44.676,0,0,0-5.2,0A2.834,2.834,0,0,1,11.976,2.01Z'
                fill='rgb(243 244 246)'
              />
              <path
                d='M19.5,8.99H4.5a.5.5,0,0,0-.5.5v12.5a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V9.49A.5.5,0,0,0,19.5,8.99Zm-9.25,11.5a.75.75,0,0,1-1.5,0V11.865a.75.75,0,0,1,1.5,0Zm5,0a.75.75,0,0,1-1.5,0V11.865a.75.75,0,0,1,1.5,0Z'
                fill='rgb(243 244 246)'
              />
            </svg>
          )}

          Delete
        </button>
      </div>
    </div>
  );
}

UserRow.propTypes = {
  id: number.isRequired,
  username: string.isRequired,
  name: string.isRequired,
  email: string.isRequired,
  openUpdateUserPopup: func,
  deleteUser: func,
  isDeleting: bool,
}
