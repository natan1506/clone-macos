import { House } from 'phosphor-react'
import { useState } from 'react'

interface ArchiveProps {
  changeOpened: () => void
  rest?: any
}

export function Archive ({ changeOpened, ...rest }: ArchiveProps) {
  const [isResize, setIsResize] = useState(false)

  const handleChangeOpenedModal = () =>{
    changeOpened()
  }
  const resizeWindow = () => {
    setIsResize(!isResize)
  }

  const resize = isResize ? "w-full h-full top-0 left-0" : "h-80 w-[39rem]"

  return (
    <div
      className={["flex rounded-lg border dark:border-gray-700 border-gray-400 shadow-xl transition-all dark:text-gray-200 text-gray-700", resize].join(" ")}
      {...rest}
    >
      <div 
        className="w-[157px] bg-clip-padding backdrop-filter backdrop-blur-xl border-r border-gray-400 dark:border-gray-900 bg-opacity-60 px-6 bg-[#e2e3e5] dark:bg-[#3a3946] dark:bg-opacity-30 rounded-tl-lg rounded-bl-lg"
      >
        <div className='mt-4 flex gap-2'>
          <div className='cursor-pointer h-3 w-3 rounded-full bg-[#fc4645]' onClick={handleChangeOpenedModal}></div>
          <div className='cursor-pointer h-3 w-3 rounded-full bg-[#fcaf24]' onClick={handleChangeOpenedModal}></div>
          <div className='cursor-pointer h-3 w-3 rounded-full bg-[#28c132]' onClick={resizeWindow}></div>
        </div>
        <ul className='mt-4 text-sm'>
          <li className='flex gap-2 items-center'>
            <House size={20} className='text-[#fc707c]'/> Home
          </li>
          <li>teste</li>
          <li>teste</li>
        </ul>
      </div>
      <div className="flex flex-col flex-1">
        <div className="h-10 flex items-center p-3 rounded-tr-lg dark:bg-[#2f3033] bg-[#f1f1f2]">
          <span className="bold">header</span>
        </div>
        <div className="flex flex-col flex-grow p-3 rounded-br-lg dark:bg-[#191a1e] bg-[#ffff]">

          <span>card</span>
          <span>card</span>
          <span>card</span>
          <span>card</span>
          <span>card</span>
        </div>
      </div>
    </div>
  )
}