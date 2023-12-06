import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {UseLayoutEffectDemo1, UseLayoutEffectDemo2} from './hooks/builtin/useLayoutEffect-demo.tsx'
import UseStateDemo from './hooks/builtin/useState-demo.tsx'
import UseEffectDemo from './hooks/builtin/useEffect-demo.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "useLayoutEffect",
    element: (
      <div style={{display: 'flex', gap: 20}}>
        <UseLayoutEffectDemo1 />
        <UseLayoutEffectDemo2 />
      </div>
    )
  },
  {
    path: 'useState',
    element: (
      <UseStateDemo />
    )
  },
  {
    path: 'useEffect',
    element: (
      <UseEffectDemo  />
    )
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
