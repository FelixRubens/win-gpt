import { useState } from 'react';
import './App.css'
import { Context } from './context';
import Container from './pages/container';

function App() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <Context.Provider value={{
      messages, setMessages,
      loading, setLoading
    }}>
      <Container />
    </Context.Provider>
  )
}

export default App;
