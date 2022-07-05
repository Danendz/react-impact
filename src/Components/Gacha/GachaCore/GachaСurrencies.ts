import React, {useState} from 'react';

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
    static set(value: number){
        this.primogems = value;
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
    static set(value: number){
        this.wishes = value;
    }
}


export class GenesisCrystals extends GachaСurrencies{
    private static crystals: number = 16000;
    static add(value: number): void {
        this.crystals += value;
    }
    static remove(value: number): void {
        this.crystals -= value
    }
    static get(): number {
        return this.crystals;
    }
    static set(value: number){
        this.crystals = value;
    }
}

function NotImplmentedError() {
    throw new Error("Function not implemented.");
}

