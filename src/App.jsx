import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [attrici, setAttrici] = useState([])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
