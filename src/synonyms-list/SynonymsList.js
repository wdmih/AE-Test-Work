import React, {Component} from 'react'
import './SynonymsList.css'

class SynonymsList extends Component {
  render (){
    return (
      <div className="word-synonyms">
        <div className="list">
          {this.props.list.map((listItem, index) => (
            <button className="list-item" key={index} onClick={() => this.props.clickHandler(listItem.word)}>{listItem.word}</button>
          ))}
        </div>
      </div>
    )
  }
}

export default SynonymsList