import { Animal } from "../AbstractClass/Animal";
import { Edible } from "../InterfaceClass/Edible";

export class Chicken extends Animal implements Edible{
    makeSound(): string {
        return "Chicken: Cluck-Cluck!"
    }
    howEat(): string {
        return "Could be fried";        
    }
}