// CONTROLLER ///////////////////////////////////////////////////////////////////////////

function add() {
    const userInput = document.getElementById('user-input');
    const userInputAmount = document.getElementById('user-input-amount');
    let newItemValue = userInput.value;
    let newItemAmount = userInputAmount.value;

    if (newItemValue === "") {
        alert("DU MÅ SKRIVE INN NOE!!")
        return
    }

    const newItem = {
        item: newItemValue,
        number: (newItemAmount || 1)
    };

    model.data.shoppingList.push(newItem);

    newItemValue = '';
    
    updateView()
    document.getElementById("user-input").focus()
}

function removeAll() {
    model.data.shoppingList = []

    updateView()
}




function deleteItem(event) {

    const i = event.parentElement.id

    model.data.shoppingList.splice([i], 1)

    updateView()
}

function edit() {
    const i = event.parentElement.id
    console.log(event.parentElement.id)

    userInput = model.data.shoppingList[i].item
    userInputAmount = model.data.shoppingList[i].number

}