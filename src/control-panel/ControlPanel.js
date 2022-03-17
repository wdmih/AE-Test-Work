import React, { Component } from 'react';
import './ControlPanel.css';
import SynonymsList from '../synonyms-list/SynonymsList'
import ColorPicker from './../color-picker/ColorPicker'

import editorActions from './ControlPanelActions'

class ControlPanel extends Component {
    render() {
        let {makeBold, makeItalic, makeUnderline, makeUndo, makeRedo, setColor, replaceText} = editorActions
        let {visible, position, synonyms} = this.props
        return (
            <div id="control-panel" className={`control-panel ${visible ? 'active' : ''}`} style={{left: `${position.x}px`, top: `${position.y - 30}px`}}>
                <div id="format-actions" className='format-actions'>
                    <button className="format-action" type="button" onClick={makeBold}><b>B</b></button>
                    <button className="format-action" type="button" onClick={makeItalic}><i>I</i></button>
                    <button className="format-action" type="button" onClick={makeUnderline}><u>U</u></button>
                    <button className="format-action" type="button" onClick={makeUndo}><span>&#x21BA;</span></button>
                    <button className="format-action" type="button" onClick={makeRedo}><span>&#x21BB;</span></button>
                    <ColorPicker clickHandler={setColor}/>
                </div>
                <SynonymsList list={synonyms} clickHandler={replaceText}/>
            </div>
        );
    }
}

export default ControlPanel;
