import React from 'react'

const PersonajeItem = ({ item }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x300/333/fff?text=' + encodeURIComponent(item.name)
  }

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img 
            src={item.img} 
            alt={item.name} 
            onError={handleImageError}
          />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li><strong>Actor:</strong> {item.portrayed}</li>
            <li><strong>Apodo:</strong> {item.nickname}</li>
            <li><strong>Fecha de nacimiento:</strong> {item.birthday}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PersonajeItem