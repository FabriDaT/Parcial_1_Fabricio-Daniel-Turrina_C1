import { useState } from 'react'

import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Parcial Nº 1 de Frontend III </h1>
      <Card></Card>
      <form></form>
    </>
  )
}

export default App
