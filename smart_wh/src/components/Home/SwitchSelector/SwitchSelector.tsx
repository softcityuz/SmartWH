import React from 'react'
import "./SwithcSelector.scss"
const DATA = ['Nazorat va tahlil', 'Ombor', 'Sotishni ko’paytirish', 'Sotishni ko’paytirish']

interface Props {
    onClick: (index: number) => void
    text: string
    index: number
    length: number
}

function SwitchSelector() {

    const Button = ({index, text, onClick, length }: Props) => (
        <div className={`selector-button ${index===0?'selector-button-left-rounded': ''} ${index===length-1?'selector-button-rigth-rounded':''}` } onClick={()=>onClick(index)}>{text}</div>
    )


  return (
    <div className='selector'>
        {
            DATA.map((item, index) => (
                <Button key={index} text={item} onClick={(index) => {}} index = {index} length={DATA.length} />
            ))
        }
    </div>
  )
}

export default SwitchSelector