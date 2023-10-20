// CONTROLLER ///////////////////////////////////////////////////////////////////////////
addLocalstorage()
function addLocalstorage(){
    if(localStorage.key('shoppingList') === null){
        localStorage.setItem('shoppingList','[]');
        console.log('No local key found. Generating key "shoppingList"');
    } else{
        model.data.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
        updateView();
    }
}
function add() {
    let userInput = document.getElementById('user-input').value;
    let userInputAmount = document.getElementById('user-input-amount').value;
    if (userInput === "") {
        alert('DU MÅ SKRIVE INN NOE!!');
        return;
    }
    let newItem = {
        item: userInput,
        number: (userInputAmount || 1)
    };
    model.data.shoppingList.push(newItem);
    updateView();
    document.getElementById('user-input').focus();
    saveShoppingList();
}
function removeAll() {
    model.data.shoppingList = [];
    updateView();
    localStorage.removeItem('shoppingList');
}
function deleteItem(clickedItem) {
    const i = clickedItem.parentElement.id;
    model.data.shoppingList.splice([i], 1);
    updateView();
    saveShoppingList();
}
function addOne(clickedItem) {
    model.data.shoppingList[clickedItem.parentElement.id].number+=1;
    updateView();
    saveShoppingList();
}
function subtractOne(clickedItem) {
    const id = clickedItem.parentElement.id;
    model.data.shoppingList[id].number-=1;
    if(model.data.shoppingList[id].number===0){
        deleteItem(clickedItem);
    } else{
        saveShoppingList();
    }
    updateView();
}
function saveShoppingList(){
    localStorage.setItem('shoppingList',JSON.stringify(model.data.shoppingList));
}