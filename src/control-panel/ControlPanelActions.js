import checkSelection from '../utils/checkSelection'

class EditorActions {
  makeBold() {
    document.execCommand('bold', false, '')
  }
  makeItalic(){
    document.execCommand('italic', false, '')
  }
  makeUnderline(){
    document.execCommand('underline', false, '')
  }
  makeUndo(){
    document.execCommand('undo', false, '')
  }
  makeRedo(){
    document.execCommand('redo', false, '')
  }
  setColor(colorStr) {
    document.execCommand('forecolor', false, colorStr)
  }
  replaceText(word){
    if (checkSelection()) {
      document.execCommand('insertText', false, word)
    }
  }
  setIndent(e){
    if(e.keyCode === 9){
      e.preventDefault()
      document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;')
    }
  }

}
let editorAction = new EditorActions()
export default editorAction