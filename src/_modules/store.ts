export default class Store {
    constructor(private format: Format) { }

    add() {
        if (this.format == Format.Compressed) {
            console.log('compressed')
        }
    }
}

export enum Format {
    Compressed
}