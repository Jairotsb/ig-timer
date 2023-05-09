import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

// import { Button } from "./components/Button";
import { defaultTheme } from './theme/default'
import { GlobalStyle } from './global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
