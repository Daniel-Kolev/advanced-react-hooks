// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  const { type, step } = typeof action === 'function' ? action(state) : action
  switch (type) {
    case 'INCREMENT': 
    return { count: state.count + step}
    case 'DECREMENT':
      return { count: state.count - step}
    default:
      throw new Error(`Unhandled action type ${type}`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {count: initialCount})

  const increment = () => setState({ type: 'INCREMENT', step })
  const decrement = () => setState({ type: 'DECREMENT', step })
  return <>
    <span>{state.count}</span>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </>
}

function App() {
  return <Counter />
}

export default App
