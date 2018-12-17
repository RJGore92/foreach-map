function sortAndPrint(groceries) {
  console.log(groceries);
  groceries.sort();
  console.log(groceries);
}


$(document).ready(function() {
  $("form#form-a").submit(function(event) {

    $("div#output-div").empty();

    var groceries = [];

    var groceryOne = $("input#grocery-one").val();
    var groceryTwo = $("input#grocery-two").val();
    var groceryThree = $("input#grocery-three").val();
    var groceryFour = $("input#grocery-four").val();
    var groceryFive = $("input#grocery-five").val();

    groceries.push(groceryOne, groceryTwo, groceryThree, groceryFour, groceryFive);

    sortAndPrint(groceries);
    $("div#output-div").prepend(
      "<h5>Grocery List</h5>" +
      "<ul id='grocery-list'></ul>"
    )
    groceries.forEach(function(grocery) {
      $("ul#grocery-list").append("<li>"+grocery+"</li>")
    });
    event.preventDefault();
  });
});
