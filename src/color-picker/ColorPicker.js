import React, {Component} from 'react'
import './ColorPicker.css'

export default class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorList: [ '000000', '993300', '333300', '003300',
                  '003366', '000066', '333399', '333333',
                  '660000', 'FF6633', '666633', '336633',
                  '336666', '0066FF', '666699', '666666',
                  'CC3333', 'FF9933', '99CC33', '669966',
                  '66CCCC', '3366FF', '663366', '999999',
                  'CC66FF', 'FFCC33', 'FFFF66', '99FF66',
                  '99CCCC', '66CCFF', '993366', 'CCCCCC',
                  'FF99CC', 'FFCC99', 'FFFF99', 'CCffCC',
                  'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF' ]
    }
  }

  render(){
    return (
      <div className="color-picker" id="color-picker">
        {this.state.colorList.map((color, index) => (
          <button
            key={index}
            className="color-picker--item"
            style={{background: `#${color}`}}
            onClick={() => this.props.clickHandler(color)}>
          </button>
        ))}
      </div>
    )
  }
}