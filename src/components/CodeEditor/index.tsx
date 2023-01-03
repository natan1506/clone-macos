import { useEffect, useState } from "react"
import { CodeEditorWindow } from "./CodeEditorWindow"

interface CodeEditorProps {
  changeOpened: () => void
  rest?: any
}

export function CodeEditor({changeOpened, rest}: CodeEditorProps) {
  const [isResize, setIsResize] = useState(false)
  const [theme, setTheme] = useState<string | null>()
  const handleChangeOpenedModal = () =>{
    changeOpened()
  }

  const resizeWindow = () => {
    setIsResize(!isResize)
  }

  useEffect(() => {
    const themeLocal = localStorage.getItem('theme')

    setTheme(themeLocal)
  }, [])

  const resize = isResize ? "W-full h-full top-0 left-0" : "h-80 w-[39rem]"

  return (
    <div
      className={["flex flex-col rounded-lg border dark:border-gray-700 border-gray-400 shadow-xl transition-all dark:text-gray-200 text-gray-700", resize].join(" ")}
      {...rest}
    >
      <div className="bg-[#e2e3e5] dark:bg-[#3a3946] px-6 rounded-t-lg flex items-center">
        <div className='my-4 flex gap-2'>
          <div className='cursor-pointer h-3 w-3 rounded-full bg-[#fc4645]' onClick={handleChangeOpenedModal}></div>
          <div className='cursor-pointer h-3 w-3 rounded-full bg-[#fcaf24]' onClick={handleChangeOpenedModal}></div>
          <div className='cursor-pointer h-3 w-3 rounded-full bg-[#28c132]' onClick={resizeWindow}></div>
        </div>
        <div className="flex justify-center flex-1">
          <span>Editor</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 bg-[#181522] rounded-b-lg overflow-hidden">
        <CodeEditorWindow themeLocal={theme}/>
      </div>
    </div>
  )
}