import './App.css'
import { ShowGithubUser } from './ShowGithubUser'
import { Welcome } from './Welcome'
import { Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name={"Sergio"}/>}/>
        <Route path='users/:username' element={<ShowGithubUser username={"SergioGagliano"}/>}/>
      </Routes>
    </>
  )
}

export default App
