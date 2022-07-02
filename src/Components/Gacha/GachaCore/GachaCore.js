"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standartGacha = {
    standart5: ["diluc", "jean", "keqing", "mona", "qiqi"],
    standart4: [
        "amber",
        "barbara",
        "beidou",
        "bennet",
        "diona",
        "fischl",
        "kaeya",
        "lisa",
        "ningguang",
        "noelle",
        "razor",
        "rosaria",
        "sara",
        "sayu",
        "sucrose",
        "thoma",
        "xiangling",
        "xingqiu",
        "xinyan",
        "yanfei",
        "yun-jin",
    ],
    weaponStandart4: [
        "amenoma-kageuchi"
    ],
    standart3: [
        "ebony-bow"
    ]
};
const eventGacha = {
    event5: "arataki-itto",
    event4: ["gorou", "chongyun"]
};
class GachaCore {
    static getOneItem() {
        const random = this.getRandomNum(false, 100);
        this.user4StarPity += 1;
        this.user5StarPity += 1;
        if (this.user5StarPity >= 70) {
            this.userIncreasingChance += 0.1;
        }
        if (this.user5StarPity === this.Start5tity) {
            return ["5", this.get5star()];
        }
        if (this.user4StarPity === this.Star4Pity) {
            const random = this.getRandomNum(false, this.chanceToWin4StarItem);
            return ["4", this.get4Star(random)];
        }
        if (random <= this.chanceToWin5StarCharacter + this.userIncreasingChance) {
            return ["5", this.get5star()];
        }
        else if (random <= this.chanceToWin4StarItem) {
            return ["4", this.get4Star(random)];
        }
        else {
            return ["3", standartGacha.standart3[0]];
        }
    }
    static setBannerType(banner) {
        this.bannerType = banner;
    }
    static getTenItems() {
        const result = [];
        for (let i = 1; i <= 10; i++) {
            result.push(this.getOneItem());
        }
        return result;
    }
    static get5star() {
        this.user5StarPity = 0;
        switch (this.bannerType) {
            case 'event':
                return this.getEvent5Star();
            case 'standart':
                return this.getStandart5Star();
            default:
                return 'Что то пошло не так раз вы видите эту надпись';
        }
    }
    static getEvent5Star() {
        if (this.isEvent5StarGuaruntee) {
            this.isEvent5StarGuaruntee = false;
            return eventGacha.event5;
        }
        const random50 = Math.random() * 10;
        if (random50 >= 5) {
            this.isEvent5StarGuaruntee = true;
            return this.getStandart5Star();
        }
        else {
            return eventGacha.event5;
        }
    }
    static getStandart5Star() {
        const standart5 = standartGacha.standart5;
        return standart5[this.getRandomNum(true, standart5.length)];
    }
    static get4Star(random) {
        this.user4StarPity = 0;
        switch (this.bannerType) {
            case 'event':
                return this.getEvent4Star(random);
            case 'standart':
                return this.getStandart4Star();
            default:
                return 'Что то пошло не так раз вы видите эту надпись';
        }
    }
    static getEvent4Star(random) {
        if (random <= this.chanceToWin4Star || this.isEvent4StarGuaruntee) {
            if (this.isEvent4StarGuaruntee) {
                this.isEvent4StarGuaruntee = false;
                const event4 = eventGacha.event4;
                return event4[this.getRandomNum(true, event4.length)];
            }
            this.isEvent4StarGuaruntee = true;
            return this.getStandart4Star();
        }
        else {
            this.isEvent4StarGuaruntee = true;
            return standartGacha.weaponStandart4[0];
        }
    }
    static getStandart4Star() {
        let standart4;
        if (this.bannerType === 'event') {
            standart4 = standartGacha.standart4;
        }
        else {
            standart4 = [...standartGacha.standart4, ...eventGacha.event4];
        }
        return standart4[this.getRandomNum(true, standart4.length)];
    }
    static getRandomNum(isFloor, length) {
        if (isFloor) {
            return Math.floor(Math.random() * length);
        }
        return Math.random() * length;
    }
}
exports.default = GachaCore;
GachaCore.bannerType = 'event';
GachaCore.isEvent5StarGuaruntee = false;
GachaCore.isEvent4StarGuaruntee = false;
GachaCore.Start5tity = 90;
GachaCore.Star4Pity = 10;
GachaCore.chanceToWin5StarCharacter = 0.6;
GachaCore.chanceToWin4StarItem = 5.1;
GachaCore.chanceToWin4Star = 2.55;
GachaCore.user4StarPity = 0;
GachaCore.user5StarPity = 0;
GachaCore.userIncreasingChance = 0;
