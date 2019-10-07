import { Animal } from "./animal";

 export interface IAdvertisement {
             id: number,
         description: String,
         price: number,
         animalBeingSold: Animal,
        imageUrl: string
}