import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [attrici, setAttrici] = useState([]); //lo state è vuoto perchè la richiesta get non è ancora partita

  useEffect(() => {
    axios.get(' https://lanciweb.github.io/demo/api/actresses/').then(res => {
      setAttrici(res.data)
      console.log(res.data)
    })

  }, [])


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
