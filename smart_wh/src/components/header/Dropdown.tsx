import React from 'react'
import './Dropdown.scss'

function Dropdown() {
  return (
    <div className="dropdown">
        <button className="drop-btn">Dropdown</button>
        <div className="drop-content">
            <a className='drop-item' href="#">Link 1</a>
            <a className='drop-item' href="#">Link 2</a>
            <a className='drop-item' href="#">Link 3</a>
        </div>
    </div>
  )
}

export default Dropdown