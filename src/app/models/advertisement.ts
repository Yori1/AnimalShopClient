import { Animal } from './animal';

export class Advertisement  {
    constructor(
        public id: number,
        public description: String,
        public price: number,
        public animalBeingSold: Animal
            ){}


}
