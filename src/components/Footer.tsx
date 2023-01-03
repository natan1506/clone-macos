import { Folder, Circle } from 'phosphor-react'

export function Footer() {
  return (
    <div className="text-gray-100 flex justify-center mb-3 ">
      <div className="flex gap-3 shadow-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 px-6 border border-gray-800 rounded-2xl p-1">
        <div className="flex flex-col items-center">
          <Folder size={50} weight="thin" />  
          <div className='h-1 w-1 rounded-full bg-gray-500'></div>
        </div>
        <div className="flex flex-col items-center">
          <Folder size={50} weight="thin" />  
          <div className='h-1 w-1 rounded-full bg-gray-500'></div>
        </div>
      </div>
    </div>
  )
}