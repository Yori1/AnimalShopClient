import { Animal } from './animal';

export class Advertisement {
    constructor(
        private _id: number,
        private _description: String,
        private _price: number,
        private _animalBeingSold: Animal
    ){}

    get id(): number {
        return this._id;
    }

    get description(): String {
        return this._description;
    }

    get price(): number {
        return this._price;
    }

    get animalBeingSold(): Animal {
        return this._animalBeingSold;
    }
}