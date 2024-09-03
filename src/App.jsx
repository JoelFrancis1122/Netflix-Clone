import { act, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {originals,action,comedy,horror, romance,scifi} from './urls'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className='App'>

      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={scifi} title="scifi" isSmall/>
      <RowPost url={horror} title="horror" isSmall/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={comedy} title="comedy" isSmall/>
      <RowPost url={romance} title="romance" isSmall/>
    
    <Footer/>
    </div>

  )
}

export default App
