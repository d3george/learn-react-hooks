import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UseLayoutEffectDemo  from './hooks/builtin/useLayoutEffect-demo.tsx'
import UseStateDemo from './hooks/builtin/useState-demo.tsx'
import UseEffectDemo from './hooks/builtin/useEffect-demo.tsx'
import UseMemoDemo from './hooks/builtin/useMemo-demo.tsx'
import UseCallback from './hooks/builtin/useCallback-demo.tsx'
import UseRefDemo from './hooks/builtin/useRef-demo.tsx'
import UseReducerDemo from './hooks/builtin/useReducer-demo.tsx'
import UseImperativeHandleDemo from './hooks/builtin/useImperativeHandle-demo.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "useLayoutEffect", element: ( <UseLayoutEffectDemo />) },
      { path: 'useState', element: ( <UseStateDemo />) },
      { path: 'useEffect', element: ( <UseEffectDemo  />) },
      { path: 'useMemo', element: ( <UseMemoDemo />) },
      { path: 'useCallback', element: ( <UseCallback />) },
      { path: 'useRef', element: ( <UseRefDemo />) },
      { path: 'useReducer', element: ( <UseReducerDemo />) },
      { path: 'useImperativeHandle', element: ( <UseImperativeHandleDemo />) },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
