import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [attrici, setAttrici] = useState([]); //lo state è vuoto perchè la richiesta get non è ancora partita
  const [attori, setAttori] = useState([]);

  useEffect(() => {
    axios.get('https://lanciweb.github.io/demo/api/actresses/').then(res => {
      setAttrici(res.data)
      console.log(res.data)
    })
  }, []) //adesso la costante "attrici" è stata aggiornata, andando a prendere i dati tramite axios.

  useEffect(() => {
    axios.get('https://lanciweb.github.io/demo/api/actors/').then(res => {
      setAttori(res.data)
      console.log(res.data)
    })
  }, []);


  return (
    <>
      <div className="container">
        <h1 className="text-center">Attrici e attori famosi</h1>
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              {attrici.map(attrice => <li>{attrice.name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
