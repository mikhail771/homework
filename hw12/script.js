'use strict';


function Burger(burger) {
    this.totalPrice = burger.price;
    this.totalCalories = burger.cal;
    const SMALL_BURGER = {
        price: 50,
        cal: 20
    };

    const BIG_BURGER = {
        price: 100,
        cal: 40
    };

    const CHEESE = {
        price: 10,
        cal: 20
    };

    const SALAD = {
        price: 20,
        cal: 5
    };

    const POTATOES = {
        price: 15,
        cal: 5
    };

    const CONDIMENT = {
        price: 15,
        cal: 0
    };

    const MAYO = {
        price: 20,
        cal: 5
    };
}
Burger.prototype.addTopping = function (addition) {
    this.recalculateTotalPrice(addition);
    this.recalculateTotalCalories(this, addition);
};

Burger.prototype.setTotalPrice = function (price) {
    this.totalPrice = price;
};

Burger.prototype.getTotalPrice =  function () {
    return this.totalPrice;
};

Burger.prototype.setTotalCalories = function (value) {
    this.totalCalories = value;
};

Burger.prototype.getTotalCalories = function () {
    return this.totalCalories;
};

Burger.prototype.recalculateTotalPrice = function (addition) {
    const oldPrice = this.getTotalPrice();
    const newPrice = oldPrice + this.addition.price;
    this.setTotalPrice(newPrice);
};

Burger.prototype.recalculateTotalCalories = function (addition) {
    const oldCalories = this.getTotalCalories();
    const newCalories = oldCalories + this. addition.cal;
    this.setTotalCalories(newCalories);
}


let burger = new Burger(this.SMALL_BURGER);
console.log(burger.totalCalories, burger.totalPrice);

burger.addTopping(this.CHEESE);
console.log(burger.totalCalories, burger.totalPrice);

burger.addTopping(this.SALAD);
console.log(burger.totalCalories, burger.totalPrice);

burger.addTopping(this.CONDIMENT);
console.log(burger.totalCalories, burger.totalPrice);
