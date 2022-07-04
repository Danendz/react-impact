abstract class GachaСurrencies {
    static add(value: number): void { throw NotImplmentedError() };

    static remove(value: number): void { throw NotImplmentedError() }

    static get(): number { throw NotImplmentedError() };
}

export class Primogems extends GachaСurrencies {
    private static primogems: number = 1600;
    static add(value: number): void {
        this.primogems += value;
    }
    static remove(value: number): void {
        this.primogems -= value
    }
    static get(): number {
        return this.primogems;
    }
}

export class Wishes extends GachaСurrencies {
    private static wishes: number = 10;
    static add(value: number): void {
        this.wishes += value;
    }
    static remove(value: number): void {
        this.wishes -= value
    }
    static get(): number {
        return this.wishes;
    }
}

export class GenesisCrystals extends GachaСurrencies{
    private static crystals = 16000;
    static add(value: number): void {
        this.crystals += value;
    }
    static remove(value: number): void {
        this.crystals -= value
    }
    static get(): number {
        return this.crystals;
    }
}

function NotImplmentedError() {
    throw new Error("Function not implemented.");
}

