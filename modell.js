// MODEL ////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');

const model = {

    app: {
        
    },

    input:{
        newItem: {
            item: "",
            number: 1,
        }
    },
    
    
    data: {
        shoppingList: [
            {
                item: "bread",
                number: 4,
            },
            {
                item: "apple",
                number: 2,
            }
        ]
    },
}
// localStorage.setItem("shoppingList", model.data.shoppingList.item)

// console.log(localStorage.getItem(model.data.shoppingList))