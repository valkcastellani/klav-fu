import React from 'react'
import './Button.css'
import { ButtonProps } from './ButtonProps'

const Button: React.FC<ButtonProps> = (props) => {
  return <button
    className="AppButton"
    onClick={props.onClick}
  >
    <i className={props.classIcon}></i>
    {/* { props.label || 'Nameless Button' } */}
    { props.children || 'Nameless button' }
    { props.appendIcon }
  </button>
}

export default Button