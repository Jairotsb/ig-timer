import { ThemeProvider } from 'styled-components'

import { Button } from './components/Button'
import { defaultTheme } from './theme/default'
import { GlobalStyle } from './global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="danger" />
      <Button variant="success" />
      <Button variant="secondary" />
      <Button variant="primary" />
      <Button variant="danger" />

      <GlobalStyle />
    </ThemeProvider>
  )
}
