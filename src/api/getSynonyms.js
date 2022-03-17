export default function getSynonyms() {
  let sel = window.getSelection().toString()
  let stripedSel = sel.replace(/[^\w\s]|_/g, "") // check selected words and delete all punctuation symbols
                      .replace(/\s+/g, " ")
  let word = stripedSel.trim().split(' ')[0] // trim trailing spaces and split strings to separate words

  return fetch(`http://api.datamuse.com/words?ml=${word}&max=3`).then(res => res.json())
}
