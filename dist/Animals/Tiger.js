"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiger = void 0;
const Animal_1 = require("../AbstractClass/Animal");
class Tiger extends Animal_1.Animal {
    makeSound() {
        return "Tiger: Roarrrrr!";
    }
}
exports.Tiger = Tiger;
