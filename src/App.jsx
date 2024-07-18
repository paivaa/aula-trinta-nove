import Container from './componentes/Container'
import { DarkModeProvider } from './contexto/DarkModeContext'
import { LanguageProvider } from './contexto/LanguageModeContext'
import './App.css'

function App() {


  return (
    <>
     <DarkModeProvider>
      <LanguageProvider>
      <Container/>
      </LanguageProvider>
     </DarkModeProvider>
    </>
  )
}

export default App
