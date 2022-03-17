export default function checkSelection(){
  let sel = window.getSelection()
  if (sel.type === 'Range') {
    if (sel.focusOffset - sel.anchorOffset !== 0){ // need to check if something that was selected has some length
      return true
      } else {
        return false
      }
  }
}