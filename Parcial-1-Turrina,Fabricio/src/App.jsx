import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [cancion, setCancion] = useState("");
  const [artista, setArtista] = useState("");

  const [show, setShow] = useState(false)
  const [showError, setShowError] = useState(false);

 // const onChangeCancion = (e) => setCancion(e.target.value);
 // const onChangeArtista = (e) => setArtista(e.target.value);

  const onSubmitForm = (e) => {
    
    e.preventDefault()
    if ((cancion.length >= 3 && !cancion.startsWith(" ")) && (artista.length >= 6 )) {
      setShow(true)
      setShowError(false)
    } else {
      setShow(false);
      setShowError(true)
    }
}

  return (
    <>
      <h1>Parcial Nº 1 de Frontend III </h1>

      <form onSubmit={onSubmitForm}>
        <label> Ingrese su cancion favorita:</label>
        <input type="text" onChange={(e) => setCancion(e.target.value)} />
        <label> Ingrese el artista de su cancion preferida:</label>
        <input type="text"  onChange={(e) => setArtista(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    
      {show ? (
        <Card cancion={cancion} artista={artista} />
      ) : (
        showError && <p style={{color:'red'}}>Por favor chequea que la información sea correcta</p>
      )}
    </>
  );
}


export default App
