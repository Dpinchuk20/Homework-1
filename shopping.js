/* Dennis Pinchuk
 * Javascript assignment
 * Funda
 * CS 188
 */ 

/*
Creates a shopping list and will display it on shoppingList.innerhtml
*/

window.onload = function() {

}


// Prints the shopping list
// An array of items
function printlist(list) {
  let item = prompt('What would you like to buy today?');
  let price = prompt('What is its price?');
  let count = prompt('How many do you want?');
  let totalTotal = 0;
  if (price != null && count != null) {
    totalTotal += parseInt(price) * parseInt(count); 
  }
  list = [{item:item, price:price, count:count}];
  while(true) {
    if (item == null || price == null || count == null){
        console.log(totalTotal);
        list.pop()
        break;
    }
    else {
      item = prompt('What would you like to buy today?');
      price = prompt('What is its price?');
      count = prompt('How many do you want?');
      if (price != null && count != null) {
            totalTotal += parseInt(price) * parseInt(count);
      }
      list.push({item:item, price:price, count:count})
      console.log(totalTotal);
    }
  for (let i = 0; i < list.length; i++){
       document.getElementById("shoppingList").innerHTML += "<tr><td>" + list[i].item + "</td><td>" + list[i].price + "</td><td>" + list[i].count;
  }  
}
