// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

function useCount() {
    const countContext = React.useContext(CountContext)
    if (!countContext) throw new Error("Can't use context without provider")
    return countContext
}

function CountProvider({props}) {
  const [count, setCount] = React.useState(0)
  return <CountContext.Provider value={[count, setCount]} {...props}/>
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
