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
}

const eventGacha = {
    event5: "arataki-itto",
    event4: ["gorou", "chongyun"]
};
export default class GachaCore {
    private static bannerType: string = 'event'
    private static isEvent5StarGuaruntee: boolean = false;
    private static isEvent4StarGuaruntee: boolean = false;
    private static Start5tity: Number = 90;
    private static Star4Pity: Number = 10;
    private static chanceToWin5StarCharacter: number = 0.6;
    private static chanceToWin4StarItem: number = 5.1;
    private static chanceToWin4Star: Number = 2.55;
    private static user4StarPity: number = 0;
    private static user5StarPity: number = 0;
    private static userIncreasingChance: number = 0;

    public static getOneItem(): Array<String> {


        const random: Number = this.getRandomNum(false, 100);
        this.user4StarPity += 1;
        this.user5StarPity += 1;

        if (this.user5StarPity >= 70) {
            this.userIncreasingChance += 0.1;
        }

        if (this.user5StarPity === this.Start5tity) {
            return ["5", this.get5star()];
        }

        if (this.user4StarPity === this.Star4Pity) {
            const random: Number = this.getRandomNum(false, this.chanceToWin4StarItem);
            return ["4", this.get4Star(random)];
        }

        if (random <= this.chanceToWin5StarCharacter + this.userIncreasingChance) {
            return ["5", this.get5star()];
        }

        else if (random <= this.chanceToWin4StarItem) {
            return ["4", this.get4Star(random)];
        }
        else {
            return ["3", standartGacha.standart3[0]]
        }
    }

    public static setBannerType(banner: string): void {
        this.bannerType = banner;
    }

    public static getTenItems(): Array<Array<String>> {
        const result: Array<Array<String>> = [];
        for (let i = 1; i <= 10; i++) {
            result.push(this.getOneItem())
        }
        return result;
    }

    private static get5star(): String {
        this.user5StarPity = 0
        switch (this.bannerType) {
            case 'event':
                return this.getEvent5Star();
            case 'standart':
                return this.getStandart5Star();
            default:
                return 'Что то пошло не так раз вы видите эту надпись'
        }
    }

    private static getEvent5Star(): String {
        if (this.isEvent5StarGuaruntee) {
            this.isEvent5StarGuaruntee = false;
            return eventGacha.event5;
        }

        const random50 = Math.random() * 10;
        if (random50 >= 5) {
            this.isEvent5StarGuaruntee = true;
            return this.getStandart5Star();
        } else {
            return eventGacha.event5
        }
    }

    private static getStandart5Star(): String {
        const standart5: Array<string> = standartGacha.standart5;
        return standart5[this.getRandomNum(true, standart5.length)]
    }

    private static get4Star(random: Number): String {
        this.user4StarPity = 0;
        switch (this.bannerType) {
            case 'event':
                return this.getEvent4Star(random);
            case 'standart':
                return this.getStandart4Star();
            default:
                return 'Что то пошло не так раз вы видите эту надпись'
        }
    }

    private static getEvent4Star(random: Number): String {
        if (random <= this.chanceToWin4Star) {
            if (this.isEvent4StarGuaruntee) {
                this.isEvent4StarGuaruntee = false;
                const event4: Array<string> = eventGacha.event4;
                return event4[this.getRandomNum(true, event4.length)]
            }
            this.isEvent4StarGuaruntee = true;
            return this.getStandart4Star();
        } else {
            return standartGacha.weaponStandart4[0]
        }
    }

    private static getStandart4Star(): String {
        let standart4: Array<string>
        if (this.bannerType === 'event') {
            standart4 = standartGacha.standart4;
        } else {
            standart4 = [...standartGacha.standart4, ...eventGacha.event4]
        }
        return standart4[this.getRandomNum(true, standart4.length)]

    }

    private static getRandomNum(isFloor: Boolean, length: number): number {
        if (isFloor) {
            return Math.floor(Math.random() * length)
        }
        return Math.random() * length
    }

}
