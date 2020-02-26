/* Dennis Pinchuk
 * Javascript assignment
 * Funda
 * CS 188
 */ 

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">

    <title>Prices for Groceries</title>

    <link rel="stylesheet" href="">
    <!--[if lt IE 9]>
      <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>           
    <![endif]-->

  </head>

  <body>
      <h1>Prices </h1>


<div class="form">
  <label for="item">Add item to list: </label><input type="text" id="item">
  <button id="submit">Submit item</button>
  <button id="clear">Clear items</button>
</div>

<ul id="list">

</ul>


  </body>

  <script>
   var itemInput = document.getElementById("item");
   var clear = document.getElementById("clear");
   var submit = document.getElementById("submit");
   var list = document.getElementById("list");

   function addItem() {
     var currentItem = itemInput.value;
     var listItem = document.createElement("li");
     listItem.innerHTML = currentItem;

     list.appendChild(listItem);

     itemInput.value = "";
   }

   submit.onclick = addItem;

   clear.onclick = function() {
     list.innerHTML = "";
     itemInput.value = "";
   }

  </script>
</html>
