import { CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav () {
  const {pathname} = useLocation()
  const routePaths = ['useState', 'useEffect', 'useMemo', 'useLayoutEffect']

  const isActive = (path: string) => {
    return path === pathname.split('/')[1] ? true : false;
  }

  const activeStyle: CSSProperties = {
    color: "cyan",
    fontSize: 20
  }
  return (
    <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
      {
        routePaths.map(path => (
          <Link to={path} style={isActive(path) ? activeStyle: {}} >{path}</Link>
        ))
      }
  </div>
  ) 
}
