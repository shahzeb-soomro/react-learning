import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header({name}) {
  return <h2>{name} Header</h2>
}
function Footer({year}) {
  return (
  <>
  <h2>Footer</h2>
    <h3>Copyright {year}</h3>
    </>
  
  )
}

function App() {
  let name  = "Shahzeb Baig Soomro"
  return (
    <>
    <Header name="Mr." />
      <h1>Hello {name.toUpperCase()}</h1>
    <Footer year = '2025'/>
    </>
  )
}

export default App
