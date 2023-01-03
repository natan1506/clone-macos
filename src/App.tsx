
import DraggableCore from 'react-draggable';
import { Code, Folder, Gear } from 'phosphor-react'
import { useState } from 'react'
import { Archive } from './components/Archive'
import { CodeEditor } from './components/CodeEditor'
import { Tooltip } from './components/Tooltip'

import './styles/main.css'

function App() {
  const [openModalFolder, setOpenModalFolder] = useState(false)
  const [openModalCodeEditor, setOpenModalCodeEditor] = useState(false)

  const handleDarkMode = () => {
    if (localStorage.theme === 'dark'){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'light')
      // setThemeActived('light')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'dark')
      // setThemeActived('dark')
    }
  }

  return (
    <div 
      className="transition-all min-h-screen bg-[#121214] bg-cover dark:bg-montereyDark bg-montereyLight bg-no-repeat flex flex-col justify-between"
    >
      <div 
        className='max-h-screen max-w-screen' 
      >
        <DraggableCore>
          <div>
            {openModalFolder && ( 
              <Archive 
                changeOpened={() =>setOpenModalFolder(!openModalFolder)}
              /> 
            )} 
          </div>
        </DraggableCore>

        <DraggableCore>
          <div>
            {openModalCodeEditor && (
              <CodeEditor 
                changeOpened={() =>setOpenModalCodeEditor(!openModalCodeEditor)}
              />
            )}
          </div>
        </DraggableCore>

      </div>

      <div className="dark:text-gray-100 text-gray-800 flex justify-center mb-3 bottom-0 fixed inset-x-0">
        <div className="flex gap-3 shadow-xl backdrop-filter backdrop-blur-md py-1 px-6 border dark:border-gray-800 border-gray-400 rounded-2xl bg-opacity-60 bg-[#e2e3e5] dark:bg-[#3a3946] dark:bg-opacity-30">
          <div className="flex flex-col items-center">
            <Tooltip title="Finder">
              <button onClick={() =>setOpenModalFolder(!openModalFolder)}>
                <Folder size={50} weight="thin" />
              </button>
            </Tooltip>
            {openModalFolder && (
              <div className='h-1 w-1 rounded-full bg-gray-500'></div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <Tooltip title="Code Editor">
              <button onClick={() =>setOpenModalCodeEditor(!openModalCodeEditor)}>
                <Code size={50} weight="thin" />
              </button>
            </Tooltip>
            {openModalCodeEditor && (
              <div className='h-1 w-1 rounded-full bg-gray-500'></div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <Tooltip title="Dark Mode">
              <button onClick={handleDarkMode}>
                <Gear size={50} weight="thin" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

