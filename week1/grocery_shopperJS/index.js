var shopper = {
  groceryName   : "Grocery List: ",
  groceryItems  : 5,
  listComplete  : true,
  groceryCart   : ["Eggs", "Bread", "Milk", "Bananas", "Lettuce"],
  listCart      : function() {
        return this.groceryName + this.groceryCart + " " + "Items: " + this.groceryItems;
    }    
};
console.log(shopper.listCart());


