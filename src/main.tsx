import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UseLayoutEffectDemo  from './hooks/builtin/useLayoutEffect-demo.tsx'
import UseStateDemo from './hooks/builtin/useState-demo.tsx'
import UseEffectDemo from './hooks/builtin/useEffect-demo.tsx'
import UseMemoDemo from './hooks/builtin/useMemo-demo.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "useLayoutEffect",
    element: (
      <UseLayoutEffectDemo />
    )
  },
  { path: 'useState', element: ( <UseStateDemo />) },
  { path: 'useEffect', element: ( <UseEffectDemo  />) },
  { path: 'useMemo', element: ( <UseMemoDemo />) }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
