import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { AppProvider } from "providers/AppProvider"
import { useCounter } from "hooks"
import { Button } from "@mui/material"
import { useStore } from "store/useStore"

export const App = () => {
  const { count, increaseCounter } = useCounter()

  const { signIn, signOut } = useStore((state) => state.auth)

  return (
    <AppProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="contained" onClick={increaseCounter}>
          count is {count}
        </Button>

        <Button variant="contained" onClick={signIn}>
          Login
        </Button>
        <Button variant="contained" onClick={signOut}>
          Logout
        </Button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button>djdjdj</button>
      </div>
      <p className="read-the-docs bg-black">Click on the Vite and React logos to learn more</p>
    </AppProvider>
  )
}
