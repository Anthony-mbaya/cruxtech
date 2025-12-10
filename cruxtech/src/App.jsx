// this is where all pages are integrated
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { MainPage } from "./pages/mainpage"
function App() {
  return(
    <Router>
      <MainPage />
    </Router>
  )
}

export default App