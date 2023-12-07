import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './nav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='flex w-full justify-center items-center'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <code className='font-medium text-5xl'>Learn React Hooks</code>

      <div className='flex mt-4 h-full'>
        <div className='w-40 flex-shrink-0'>
          <Nav />
        </div>
        <div className='flex-1 w-full h-full'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
