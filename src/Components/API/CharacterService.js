import axios from "axios";

const apiLink1 = "https://api.genshin.dev/";
const apiLink2 = "https://genshin-app-api.herokuapp.com/api";
export default class CharacterService {
  static async getCharacters() {
    const link = apiLink1 + "characters/";
    try {
      const names = await axios.get(link);
      const characterData = await axios.all(
        names.data.map(async (name) => {
          const character = await this.getCharacterData(name);
          return character.data;
        })
      );

      const charObj = names.data.map((name, index) => {
        return {
          name: name,
          icon: link + name + "/icon",
          data: characterData[index],
        };
      });

      return charObj;
    } catch (e) {
      console.log(e);
    }
  }

  static async getWeapons() {
    const link = apiLink1 + "weapons/";
    try {
      const weapons = await axios.get(link);
      const weaponsData = await axios.all(
        weapons.data.map(async (name) => {
          const weapon = await this.getWeaponData(name);
          return weapon.data;
        })
      );

      const weaponObj = weapons.data.map((name, index) => {
        return {
          name: name,
          icon: link + name + "/icon",
          data: weaponsData[index],
        };
      });

      return weaponObj;
    } catch (e) {
      console.log(e);
    }
  }
  static async getWeaponData(name) {
    const link = apiLink1 + "weapons/" + name;
    try {
      const weaponData = await axios.get(link);
      return weaponData;
    } catch (e) {
      console.log(e);
    }
  }
  static async getCharacterData(name) {
    const link = apiLink1 + "characters/" + name;
    try {
      const characterData = await axios.get(link);
      characterData.data["card"] = link + "/card";
      characterData.data["gacha-splash"] = link + "/gacha-splash";
      characterData.data["trueName"] = name;
      return characterData;
    } catch (e) {
      console.log(e);
    }
  }
  static async getTalentMaterials() {
    const link = apiLink2 + "/talentmaterials?infoDataSize=all";
    try {
      const allTalents = await axios.get(link);
      return allTalents.data;
    } catch (e) {
      console.log(e);
    }
  }
  static async getTalentBooks() {
    const link = apiLink2 + "/talentbooks?infoDataSize=all";
    try {
      const allBooks = await axios.get(link);
      return allBooks.data;
    } catch (e) {
      console.log(e);
    }
  }
}
