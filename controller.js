// CONTROLLER ///////////////////////////////////////////////////////////////////////////
addLocalstorage()
function addLocalstorage(){
    if(localStorage.key('shoppingList') === null){
        localStorage.setItem('shoppingList','[]')
        console.log('No local key found. Generating key "shoppingList"')
    } else{
        model.data.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
        updateView();
    }
}
function add() {
    let userInput = document.getElementById('user-input').value;
    let userInputAmount = document.getElementById('user-input-amount').value;
    if (userInput === "") {
        alert('DU MÅ SKRIVE INN NOE!!')
        return
    }
    let newItem = {
        item: userInput,
        number: (userInputAmount || 1)
    };
    model.data.shoppingList.push(newItem);
    updateView()
    document.getElementById('user-input').focus()
    localStorage.setItem('shoppingList',JSON.stringify(model.data.shoppingList))
}
function removeAll() {
    model.data.shoppingList = [];
    updateView();
    localStorage.removeItem('shoppingList');
}
function deleteItem(event) {
    const i = event.parentElement.id;
    model.data.shoppingList.splice([i], 1);
    updateView();
    localStorage.setItem('shoppingList',JSON.stringify(model.data.shoppingList));
}
function edit() {
    const i = event.parentElement.id;
    console.log(event.parentElement.id);
    userInput = model.data.shoppingList[i].item;
    userInputAmount = model.data.shoppingList[i].number;
}