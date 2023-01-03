import { Folder } from 'phosphor-react'
import { useState } from 'react'
import { Archive } from './Archive'
import { Footer } from './Footer'
import { Tooltip } from './Tooltip'


function Container() {
  const [openModalFolder, setOpenModalFolder] = useState(false)
  return (
    <div className="h-screen bg-[#121214] bg-cover bg-monterey bg-no-repeat flex flex-col justify-between">
      <div className='flex flex-grow  items-center justify-center'>
        {openModalFolder && (
          <Archive changeOpened={() =>setOpenModalFolder(!openModalFolder)}/> 
        )}
      </div>
      <div className="text-gray-100 flex justify-center mb-3 bottom-0 fixed inset-x-0">
        <div className="flex gap-3 shadow-xl backdrop-filter backdrop-blur-md py-1 bg-gray-500/20 px-6 border border-gray-800 rounded-2xl">
          <div className="flex flex-col items-center">
            <Tooltip title="Finder">
              <button onClick={() =>setOpenModalFolder(!openModalFolder)}>
                <Folder size={50} weight="thin" />
              </button>
            </Tooltip>
            <div className='h-1 w-1 rounded-full bg-gray-500'></div>
          </div>
          <div className="flex flex-col items-center">
            <Folder size={50} weight="thin" />  
            <div className='h-1 w-1 rounded-full bg-gray-500'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container
