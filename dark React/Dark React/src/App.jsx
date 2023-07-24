import './App.css'
import { ThemeProvider } from './contexts/theme-context'
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button'
import { Card } from './card/card'

function App() {

  return (
      <ThemeProvider>
        <ThemeTogglerButton /> 
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ThemeProvider>
  )
}

export default App
