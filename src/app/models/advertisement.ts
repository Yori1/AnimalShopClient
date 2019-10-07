import { Animal } from './animal';
import { IAdvertisement } from './advertisement-interface'

export class Advertisement implements IAdvertisement {
    constructor(
        public id: number,
        public description: String,
        public price: number,
        public animalBeingSold: Animal,
       public imageUrl: string
    ){}


}