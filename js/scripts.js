// Business Logic :

// For Pizza Constructor ---->
function Pizza (pizzaSize, pizzaType, extraToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaType = pizzaType;
  this.extraToppings = extraToppings;
  this.pizzaPrice = 0;
}

// for Pizza Pricing ---->
Pizza.prototype.pizzaCost = function () {
  // for extra large pizzas 
  if ((this.pizzaSize === "xl" && this.pizzaType === "meat lovers" || this.pizzaSize === "xl" && this.pizzaType === "hawaiian" )) {
    this.pizzaPrice = 30 + this.extraToppings;
  } 
  else if ((this.pizzaSize === "xl" && this.pizzaType === "vegetarian" || this.pizzaSize === "xl" && this.pizzaType === "cheese" || this.pizzaSize === "xl" && this.pizzaType === "pepperoni")) {
    this.pizzaPrice = 28 + this.extraToppings;
  }
  // for large pizzas 
  if ((this.pizzaSize === "lg" && this.pizzaType === "meat lovers" || this.pizzaSize === "lg" && this.pizzaType === "hawaiian" )) {
    this.pizzaPrice = 26 + this.extraToppings;
  } 
  else if ((this.pizzaSize === "lg" && this.pizzaType === "vegetarian" || this.pizzaSize === "lg" && this.pizzaType === "cheese" || this.pizzaSize === "lg" && this.pizzaType === "pepperoni")) {
    this.pizzaPrice = 24 + this.extraToppings;
  }
  // for medium pizzas 
  if ((this.pizzaSize === "md" && this.pizzaType === "meat lovers" || this.pizzaSize === "md" && this.pizzaType === "hawaiian" )) {
    this.pizzaPrice = 20 + this.extraToppings;
  } 
  else if ((this.pizzaSize === "md" && this.pizzaType === "vegetarian" || this.pizzaSize === "md" && this.pizzaType === "cheese" || this.pizzaSize === "md" && this.pizzaType === "pepperoni")) {
    this.pizzaPrice = 18 + this.extraToppings;
  }
  // for small pizzas
  if ((this.pizzaSize === "sm" && this.pizzaType === "meat lovers" || this.pizzaSize === "sm" && this.pizzaType === "hawaiian" || this.pizzaSize === "sm" && this.pizzaType === "vegetarian" || this.pizzaSize === "sm" && this.pizzaType === "cheese" || this.pizzaSize === "sm" && this.pizzaType === "pepperoni")) {
    this.pizzaPrice = 16 + this.extraToppings;
  }
  return this.pizzaPrice; 
}
// var pizza = new Pizza ("xl", "meat lovers", 5)
// // var pizzaPrice = pizza.pizzaCost();
// var total = pizza.addToppings();
// console.log("pizza", pizza)
// // console.log("price", price)
// console.log("total", total)

// Constructor for User Input 
function DeliveryInfo (firstName, lastName, streetAddress, cityStateZip) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.streetAddress = streetAddress;
  this.cityStateZip = cityStateZip;
  this.phoneNumber = phoneNumber;
}


$(document).ready(function(){
  $("form.pizza").submit(function(event){
    event.preventDefault()
    for delivery info 
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var phoneNumber = $("#phone-number").val();
    var streetAddress = $("#street-address").val();
    var cityStateZip = $("#city-state-zip").val();
    var deliveryInfo = new DeliveryInfo (firstName, lastName, phoneNumber, streetAddress, cityStateZip)

    // for pizza info
    var selectedSize = $("#pizza-size").val();
    var selectedType  = $("#pizza-type").val();
    var selectedToppings = $("input:checkbox[name=toppings]:checked").length;
    var pizza = new Pizza (selectedSize, selectedType, selectedToppings)
    var price = pizza.pizzaCost();
    // Button for SUBMITTING ORDER
    $("button#submit-order").click(function(){
      $("#order").hide();
      $("#pizza-output").html("<p> Your Total Will Be:  $" + price + ".00 </p>")
    });

    // console.log("pizza", pizza)
    // console.log("price", price)
    // console.log(selectedToppings)
  });

  // Button for MENU DISPLAY
  $("button#menu").click(function(){
    $("#pizza-menu").slideToggle();
  });
  // Button for PLACE ORDER
  $("button#order-pizza").click(function(){
    $("#order").slideToggle();
    $("#pizza-menu").slideUp();
    $("button#menu").show();
  });
  // Button for EXTRA TOPPINGS
  $("button#add").click(function(){
    $("#extra-toppings").slideToggle();
  });
});