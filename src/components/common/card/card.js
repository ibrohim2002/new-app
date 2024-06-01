import React from 'react'
import './styles.css'

export default function Card({info}) {
  return (
    <div>
        <div>
            </div>{info.name}
    <img className='card-img' src={info.previewImage} alt="" /></div>
  )
}
