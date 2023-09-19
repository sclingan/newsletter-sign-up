// import { useState } from 'react'
import './App.css'
import Header from './header'
import Section from './section'
import Form from './form'
import Success from './success'

function App() {

  return (
      <main>
        <Header />
        <h1 className='sr-only'>Newsletter sign up</h1>
        <div>
        <Section />
        <Form />
        <Success />
        </div>
    </main>
  )
}

export default App
