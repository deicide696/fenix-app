import "./App.css"
import { AppProvider } from "providers/AppProvider"

import { RouterProvider } from "react-router-dom"
import { router } from "router"

export const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}
