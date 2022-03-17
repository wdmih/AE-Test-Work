import React, {Component} from 'react'
import './FileZone.css'

import editorActions from '../control-panel/ControlPanelActions'

class FileZone extends Component {
    render() {
        let {editable} = this.props
        return (
            <div id="file-zone">
                <div
                    id="file"
                    contentEditable={editable}
                    onMouseUp={this.props.showToolBar}
                    onKeyUp={this.props.showToolBar}
                    onKeyDown={(e)=> editorActions.setIndent(e)}
                    onClick={this.props.hideToolBar}
                    >
                </div>
            </div>
        );
    }
}

export default FileZone;
