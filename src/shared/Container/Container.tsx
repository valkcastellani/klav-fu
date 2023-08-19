import React, { CSSProperties } from 'react'
import './Container.scss'

const Container: React.FC<{ children: JSX.Element | JSX.Element[], style?: CSSProperties }> = (props) => {
  return (
    <>
      <div className="AppContainer" style={props.style}>
        {props.children}
      </div>
    </>
  );
}

export default Container
