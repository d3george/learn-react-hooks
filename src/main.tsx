import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {UseLayoutEffectDemo1, UseLayoutEffectDemo2} from './hooks/builtin/useLayoutEffect-demo.tsx'
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
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
