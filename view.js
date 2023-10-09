// VIEW /////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
let html = /*HTML*/ `
<h1>DETTE ER EN liste</h1>
<input id="inputValue" type="text" placeholder="legg til task">
<button onclick="add()">Legg til</button>
<button onclick="removeAll()">Fjern alt</button>

<ol>
   ${updateList()}
</ol>
`
app.innerHTML = html
}






function updateList(){

    let listFeed = "";

    for(let i = 0; i < model.data.shoppingList.length; i++) {
        
        listFeed += `<li>${model.data.shoppingList[i].item}</li>`
    
    console.log(i + " " + model.data.shoppingList[i].item)
    }
    
    return listFeed
}


