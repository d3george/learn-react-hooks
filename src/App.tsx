import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Learn React Hooks</h1>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Link to="useLayoutEffect">useLayoutEffect</Link>
        <Link to="useState">useState</Link>
      </div>
    </>
  )
}

export default App
