export default function getSelectionCoords() {
  let sel = window.getSelection(), range, rect;
  let x = 0, y = 0;

  range = sel.getRangeAt(0).cloneRange();
  if (range.getClientRects) {

      if (range.getClientRects().length>0){
          rect = range.getClientRects()[0];
          x = rect.left;
          y = rect.top;
         }
      }
  return { x: x, y: y };
}