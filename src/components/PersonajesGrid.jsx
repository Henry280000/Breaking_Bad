import React from 'react'
import Spinner from './Spinner'
import PersonajeItem from './PersonajeItem'

const PersonajesGrid = ({items, isLoading}) => {
  console.log('PersonajesGrid - isLoading:', isLoading, 'items:', items.length)
  
  return isLoading ? (
    <Spinner />
  ):(
    <section className='cards'>
        {items.map((item) => (
            <PersonajeItem key={item.char_id} item={item}/>
        ))}
    </section>
  )
}

export default PersonajesGrid