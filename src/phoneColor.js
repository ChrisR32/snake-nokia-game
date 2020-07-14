import React, { Component } from 'react';
import Green from './Green';

class phoneColor extends Component {
    render() {
        return( 
            <>
                     <div className="snake-logo"></div>

<div className="title-name"><p className="top-heading">Nokia</p><p className="middle-heading">5110</p><p className="bottom-heading">Tribute</p></div>
        
        <div className="color-back"></div>
        <div className="color-border"><p></p></div>

          <div className="color-picker-left">
            <div className="yellow"></div>
            <br/>
            <div className="purple"></div>
          </div>
          <div className="color-picker">
          <Green/>
            <br/>
            <div className="blue"></div>
          </div>
          <div className="color-picker-right">
            <div className="orange"></div>
            <br/>
            <div className="pink"></div>
          </div>
          

          </>
  )
}
}

export default phoneColor;