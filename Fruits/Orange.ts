import { Fruit } from "../AbstractClass/Fruit";

export class Orange extends Fruit{
    howEat(): string {
        return "Orange could be juiced";
    }
}