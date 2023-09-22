import './App.css'
import Header from './header'
import Section from './section'
import Form from './form'
import Success from './success'
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  
  return (
      <main>
        <Header />
        <h1 className='sr-only'>Newsletter sign up</h1>
        <div>
        <Section />
        <Form email={email} setEmail={setEmail}/>
        <Success email={email}/>
        </div>
    </main>
  )
}

export default App
