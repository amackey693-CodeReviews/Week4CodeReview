// Business Logic :

// For Pizza Constructor ---->
function Pizza (pizzaSize, pizzaType, extraToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaType = pizzaType;
  this.extraToppings = extraToppings;
  this.pizzaPrice = 0;
}
// size options - dropdown menu: sm, md, lg, xl
// type options - dropdown menu: meat lovers, hawaiian, vegetarian, cheese, pepperoni
// 
// ADD EXTRA TOPPINGS FUNCTIONALITY LATER:
// extra toppings - checklist : 10 options total 
// extraToppings, this.extraToppings = extraToppings;

// for Pizza Pricing ---->
Pizza.prototype.pizzaCost = function () {
  // for extra large pizzas 
  if ((this.pizzaSize === "xl" && this.pizzaType === "meat lovers" || this.pizzaSize === "xl" && this.pizzaType === "hawaiian" )) {
    this.pizzaPrice = 30;
  } 
  else if ((this.pizzaSize === "xl" && this.pizzaType === "vegetarian" || this.pizzaSize === "xl" && this.pizzaType === "cheese" || this.pizzaSize === "xl" && this.pizzaType === "pepperoni")) {
    this.pizzaPrice = 28;
  }
  // for large pizzas 
  if ((this.pizzaSize === "lg" && this.pizzaType === "meat lovers" || this.pizzaSize === "lg" && this.pizzaType === "hawaiian" )) {
    this.pizzaPrice = 26;
  } 
  else if ((this.pizzaSize === "lg" && this.pizzaType === "vegetarian" || this.pizzaSize === "lg" && this.pizzaType === "cheese" || this.pizzaSize === "lg" && this.pizzaType === "pepperoni")) {
    this.pizzaPrice = 24;
  }
  // for medium pizzas 
  if ((this.pizzaSize === "md" && this.pizzaType === "meat lovers" || this.pizzaSize === "md" && this.pizzaType === "hawaiian" )) {
    this.pizzaPrice = 20;
  } 
  else if ((this.pizzaSize === "md" && this.pizzaType === "vegetarian" || this.pizzaSize === "md" && this.pizzaType === "cheese" || this.pizzaSize === "md" && this.pizzaType === "pepperoni")) {
    this.pizzaPrice = 18;
  }
  // for small pizzas
  if ((this.pizzaSize === "sm" && this.pizzaType === "meat lovers" || this.pizzaSize === "sm" && this.pizzaType === "hawaiian" || this.pizzaSize === "sm" && this.pizzaType === "vegetarian" || this.pizzaSize === "sm" && this.pizzaType === "cheese" || this.pizzaSize === "sm" && this.pizzaType === "pepperoni")) {
    this.pizzaPrice = 16;
  }
  return this.pizzaPrice; 
}

Pizza.prototype.addToppings = function(){
  this.pizzaPrice = this.extraToppings + this.pizzaPrice;
}



// var pizza = new Pizza ("xl", "meat lovers", 5)
// // var pizzaPrice = pizza.pizzaCost();
// var total = pizza.addToppings();
// console.log("pizza", pizza)
// // console.log("price", price)
// console.log("total", total)

$(document).ready(function(){
  $("form.pizza").submit(function(event){
    event.preventDefault()
    var selectedSize = $("#pizza-size").val();
    var selectedType  = $("#pizza-type").val();
    var selectedToppings = $("input:checkbox[name=toppings]:checked").length;
    var pizza = new Pizza (selectedSize, selectedType, selectedToppings)
    var price = pizza.pizzaCost();
    $("#output").html("<p> Your Total Will Be:  $" + price + ".00 </p>")
   
    // $("input:checkbox[name=toppings]:checked").each(function(){
    //   var num = parseInt($(this).val());
    //   result += num;
    // })

    // console.log("pizza", pizza)
    // console.log("price", price)
    console.log(selectedToppings)
  });
  $("button#add").click(function(){
    $("#extra-toppings").slideToggle()
    
  });

  
});