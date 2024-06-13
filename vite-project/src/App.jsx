import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Provider} from 'react-redux'
import viteLogo from '/vite.svg'
import './App.css'
import store from './core/store/store'
import CarComponent from './components/carComponent/carComponent'

function App() {

  return (
    <Provider
    store={store}
    >
     <CarComponent/>
    </Provider>
  )
}

export default App
