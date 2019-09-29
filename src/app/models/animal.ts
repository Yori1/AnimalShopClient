export class Animal {
    constructor(
        private _id: number,
        private _name: String,
        private _kind: String
    ){}

    get id(): number {
        return this._id;
    }

    get name(): String {
        return this._name;
    }

    get kind(): String {
        return this.kind;
    }


}