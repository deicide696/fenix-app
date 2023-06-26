import { PropsWithChildren } from "react"
import { ThemeProvider } from "@emotion/react"
import theme from "theme/theme"

export const AppProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
