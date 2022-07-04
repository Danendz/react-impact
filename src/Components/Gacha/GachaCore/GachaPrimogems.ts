export default class PrimogemsCounter {
    private static primogems: number = 1600;

    public static addPrimogems(value: number): void {
        this.primogems += value;
    }

    public static removePrimogems(value: number): void {
        this.primogems -= value;
    }

    public static getPrimogems(): Number {
        return this.primogems;
    }
}