import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';
import checkSelection from './utils/checkSelection'
import getSelectionCoords from './utils/getSelectionCoords'
import getSynonyms from './api/getSynonyms'

class App extends Component {
    constructor (props){
        super(props)
        this.state = {
            toolBarIsVisible: false,
            toolBarCoords: {},
            synonyms: []
        }
        this.showToolBar = this.showToolBar.bind(this)
        this.closeToolbar = this.closeToolbar.bind(this)
    }
    getText() {
        getMockText().then((result) => {
            console.log(result);
        });
    }
    showToolBar(){
        if(checkSelection()){
            this.setState({toolBarIsVisible: true, toolBarCoords: getSelectionCoords()})
            getSynonyms().then(data => this.setState({synonyms: data}))
        }
    }
    closeToolbar(){
       if(!checkSelection()){
        this.setState({toolBarIsVisible: false, synonyms: []})
       }
    }

    render() {
        let {toolBarIsVisible, toolBarCoords, synonyms} = this.state
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main className="editor">
                    <ControlPanel
                        visible={toolBarIsVisible}
                        position={toolBarCoords}
                        synonyms={synonyms}/>
                    <FileZone
                        editable={true}
                        showToolBar={this.showToolBar}
                        hideToolBar={this.closeToolbar}/>
                </main>
            </div>
        );
    }
}

export default App;
