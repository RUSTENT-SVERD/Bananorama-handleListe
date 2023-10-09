// CONTROLLER ///////////////////////////////////////////////////////////////////////////

function add() {
    model.input.newItem.item = inputValue.value

    model.data.shoppingList.push(model.input.newItem)
    // console.log(model.data.shoppingList)
    updateView()
}
