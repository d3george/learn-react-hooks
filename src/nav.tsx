import { CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav () {
  const {pathname} = useLocation()
  const routePaths = ['useState', 'useEffect', 'useMemo', 'useCallback', 'useLayoutEffect']

  const isActive = (path: string) => {
    return path === pathname.split('/')[1] ? true : false;
  }

  const activeStyle: CSSProperties = {
    color: "palevioletred",
    fontSize: 20
  }
  return (
    <div className="flex flex-col gap-2 justify-start items-start my-2">

      {
        routePaths.map(path => (
          <Link key={path} to={path} style={isActive(path) ? activeStyle: {}} >{path}</Link>
        ))
      }
  </div>
  ) 
}
