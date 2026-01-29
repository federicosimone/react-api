import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {


  const [attrici, setAttrici] = useState([]); //lo state è vuoto perchè la richiesta get non è ancora partita
  const [attori, setAttori] = useState([]);
  const [search, setSearch] = useState("")

  function mounted() {


    const urlAttrici = 'https://lanciweb.github.io/demo/api/actresses/';
    const urlAttori = 'https://lanciweb.github.io/demo/api/actors/';

    axios.get(urlAttrici).then(res => {
      setAttrici(res.data)

      console.log(res.data)

    }).catch(error => {

      console.log(error.message)
    });

    axios.get(urlAttori).then(res => {

      setAttori(res.data)

      console.log(res.data)

    }).catch(error => {

      console.log(error.message)

    });

  }
  useEffect(mounted, [])


  return (
    <>
      <div className="container">
        <h1 className="text-center">Attrici e attori famosi</h1>
        <input placeholder='Cerca qui...' type="text" className='form-control' onChange={e => {
          setSearch(e.target.value)
        }} />
        {!search ? "" : <p className="text-center mt-3">Stai cercando <strong>{search}</strong></p>}

        <div className="row">
          <div className="col-6">

            <ul className="list-unstyled flex-wrap d-flex gap-3 mt-4">
              {attrici.map(attrice => {
                return (
                  <li key={attrice.id}>
                    <div className="card card-bg" style={{ width: "14rem" }}>
                      <img src={attrice.image} className="card-img-top cardImage" alt="..."></img>
                      <div className="card-body">
                        <h5 className="card-title">{attrice.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{attrice.birth_year}</h6>
                        <p className="card-text"><strong>Nazionalità: </strong>{attrice.nationality}</p>
                        <p className="card-text"><strong>Biography:</strong> {attrice.biography}</p>
                        <p className="card-text"><strong>Awards:</strong> {attrice.awards}</p>
                        <div className="card-text"><strong>Film più famosi: </strong><ul className="list-unstyled"> {attrice.most_famous_movies.map(movie => <li>{movie}</li>)} </ul></div>
                      </div>
                    </div>
                  </li>)
              })}
            </ul>
          </div>
          <div className="col-6">
            <ul className="list-unstyled flex-wrap d-flex gap-3 mt-4">
              {attori.map(attore => {
                return (
                  <li key={attore.id}>
                    <div className="card card-bg" style={{ width: "14rem" }}>
                      <img src={attore.image} className="card-img-top cardImage" alt="actor-image"></img>
                      <div className="card-body">
                        <h5 className="card-title">{attore.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{attore.birth_year}</h6>
                        <p className="card-text"><strong>Nazionalità:</strong> {attore.nationality}</p>
                        <p className="card-text"><strong>Biography:</strong> {attore.biography}</p>
                        <p className="card-text"><strong>Awards:</strong> {attore.awards.map(award => { award })}</p>
                        <div className="card-text"><strong>Film più famosi:</strong> <ul className="list-unstyled"> {attore.known_for.map(movie => <li>{movie}</li>)} </ul></div>
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
