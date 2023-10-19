// VIEW /////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
let html = /*HTML*/ `
<h1>Banan Liste</h1>
<input autofocus="true" id="user-input" onchange="" type="text" placeholder="legg til vare" >
<input id="user-input-amount" placeholder="1" type="number" min="1">
<button onclick="add()">Legg til</button>
<button onclick="removeAll()">Fjern alt</button>
<ol>${updateList()}</ol>
`
app.innerHTML = html
}
function updateList(){
    let listFeed = [];
    for(let i = 0; i < model.data.shoppingList.length; i++) {
        listFeed += /*HTML*/`<li id=${i}>${model.data.shoppingList[i].item} x ${model.data.shoppingList[i].number} 
        <button onclick="deleteItem(this)">Fjern</button>
        <!--<button onclick="edit()">Endre</button>-->
        </li>
        `}
    return listFeed;
}