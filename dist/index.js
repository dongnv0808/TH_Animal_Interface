"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chicken_1 = require("./Animals/Chicken");
const Tiger_1 = require("./Animals/Tiger");
const Apple_1 = require("./Fruits/Apple");
const Orange_1 = require("./Fruits/Orange");
let animals = [];
animals[0] = new Tiger_1.Tiger();
animals[1] = new Chicken_1.Chicken();
animals.forEach((item) => {
    console.log(item.makeSound());
    if (item instanceof Chicken_1.Chicken) {
        console.log(item.howEat());
    }
});
let fruits = [];
fruits[0] = new Apple_1.Apple();
fruits[1] = new Orange_1.Orange();
fruits.forEach(item => {
    console.log(item.howEat());
});
