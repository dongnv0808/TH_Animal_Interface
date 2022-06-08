import { Chicken } from "./Animals/Chicken";
import { Tiger } from "./Animals/Tiger";
import { Apple } from "./Fruits/Apple";
import { Orange } from "./Fruits/Orange";

let animals = [];
animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item) => {
    console.log(item.makeSound());
    if(item instanceof Chicken){
        console.log(item.howEat());
    }
})

let fruits = [];
fruits[0] = new Apple();
fruits[1] = new Orange();
fruits.forEach(item => {
    console.log(item.howEat());
})