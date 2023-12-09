import { useReducer } from "react";

interface State {
  count: number;
  error?: string
}

interface Action {
  type: 'INCREMENT' | 'DECREMENT' | 'CUSTOM INCREMENT';
  payload?: Pick<State, 'count'>

}
function reducer(state: State, action: Action) {
  const {type} = action

  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    case 'CUSTOM INCREMENT':
      return {
        ...state,
        count: state.count + action.payload!.count
      }
  }
}
export default function UseReducerDemo () {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  return  (
    <div className="flex flex-col items-center">
      <div>Count: {state.count}</div>
      {state.error && (<div className="mb-2 text-red-500">{state.error}</div>)}
      <button className="mb-2 w-40" onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
      <button className="mb-2 w-40" onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
      <button className="w-40" onClick={() => dispatch({type: 'CUSTOM INCREMENT', payload:{count: 3} })}>Custom Increment + 3</button>
    </div>
  )
}
