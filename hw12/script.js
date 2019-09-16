'use strict';
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

function Burger(burger) {
    this.totalPrice = burger.price;
    this.totalCalories = burger.cal;

}
Burger.prototype.addTopping = function (addition) {
    recalculateTotalPrice(this, addition);
    recalculateTotalCalories(this, addition);
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

function recalculateTotalPrice(burger, addition) {
    const oldPrice = burger.getTotalPrice();
    const newPrice = oldPrice + addition.price;
    burger.setTotalPrice(newPrice);
}

function recalculateTotalCalories(burger, addition) {
    const oldCalories = burger.getTotalCalories();
    const newCalories = oldCalories + addition.cal;
    burger.setTotalCalories(newCalories);
}

let burger = new Burger(SMALL_BURGER);
console.log(burger.totalCalories, burger.totalPrice);

burger.addTopping(CHEESE);
console.log(burger.totalCalories, burger.totalPrice);

burger.addTopping(SALAD);
console.log(burger.totalCalories, burger.totalPrice);

burger.addTopping(CONDIMENT);
console.log(burger.totalCalories, burger.totalPrice);
