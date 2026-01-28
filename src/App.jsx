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
            <ul className="list-unstyled flex-wrap d-flex gap-3">
              {attrici.map(attrice => {
                return (
                  <li key={attrice.id}>
                    <div className="card" style={{ width: "18rem" }}>
                      <img src="..." class="card-img-top" alt="..."></img>
                      <div className="card-body">
                        <h5 className="card-title">{attrice.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{attrice.birth_year}</h6>
                        <p>Nazionalità: {attrice.nationality}</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                      </div>
                    </div>
                  </li>)
              })}
            </ul>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
