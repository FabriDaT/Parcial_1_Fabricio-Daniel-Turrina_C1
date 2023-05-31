import React from 'react'

const Card = ({artista, cancion}) => {
  return (
    <div className='card'>
    <h3>Hola! tu cancion favorita es : {cancion} </h3> 
    <h3>que es interpretada por : {artista} </h3>
    </div>
  )
}

export default Card