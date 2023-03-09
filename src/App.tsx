import React from 'react'
import { Features } from './components/Features'
import { Header } from './components/Header'
import { Pricing } from './components/Pricing'

const App = () => {
  return (
    <div className='App'>
        <Header/>
        <Features/>
        <Pricing/>
    </div>
  )
}

export default App