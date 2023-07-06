export default function HeaderRow() {
  return (
    <div
      className='
          flex justify-between items-center gap-y-4 py-3 border-b border-solid border-slate-400 bg-slate-400/50 px-2
          font-medium
        '
    >
      <div className='flex-1  min-w-[240px] overflow-ellipsis whitespace-nowrap overflow-hidden'>
        Username
      </div>
      <div className='flex-1  min-w-[240px] overflow-ellipsis whitespace-nowrap overflow-hidden'>
        Name
      </div>
      <div className='flex-1  min-w-[240px] overflow-ellipsis whitespace-nowrap overflow-hidden'>
        Email
      </div>
      <div className='text-center min-w-[200px]'>Action(s)</div>
    </div>
  );
}
