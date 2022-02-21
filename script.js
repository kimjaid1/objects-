'use strict'

document.write("<h1> Objects </h1>");

const drink1 = {
espresso: "regular",
milk: "whole milk",
flavor: "hazelnut", 
type: "latte",
order: function (){
    return("This order is complete, callout" + this.flavor + this.type )
}
};

console.log("this drink has", drink1.milk);

console.log(drink1.order());

function Coffee (type, size, flavor){
    this.type = type;
    this.size = size;
    this.flavor = flavor;
}

Coffee.prototype.topping ="whip cream"

const firstCoffee = new Coffee ('latte', 'medium', 'mocha' );
const secondCoffee = new Coffee ('americano', 'small', 'caramel');
const thirdCoffee = new Coffee ('macchiato', 'large', 'white mocha');

document.write(firstCoffee);
document.write(secondCoffee, Coffee.prototype);
document.write(thirdCoffee);