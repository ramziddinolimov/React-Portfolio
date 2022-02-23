import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

import Main from './components/Main'

function App() {
  return <>

  <GlobalStyle/>
  <ThemeProvider theme={lightTheme}>
  
    <Switch>
        <Route exact path="/" component={Main}/>
    </Switch>

  </ThemeProvider>
    
    </>
    
}

export default App

