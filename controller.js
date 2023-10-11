// CONTROLLER ///////////////////////////////////////////////////////////////////////////

function add() {
    const userInput = document.getElementById('user-input');
    let newItemValue = userInput.value;

    const newItem = {
        item: newItemValue,
        number: 1
    };

    model.data.shoppingList.push(newItem);

    newItemValue = '';
    
    
    updateView()
}

function removeAll() {
    model.data.shoppingList = []

    updateView()
}

function deleteItem(event) {
    // console.log(event.target.parentElement)
    model.data.shoppingList.splice([i], 1)
}

console.log(model.data.shoppingList.findIndex(indexcheck));

function indexcheck(value) {
return value>="bread";
}




Array.find












// function add() {
//     model.userInput.newItem.item = document.getElementById('userInput').value

//     model.data.shoppingList.push(model.userInput.newItem)
//     // console.log(model.data.shoppingList)
//     updateView()
// }