import axios from "axios";

export default class CharacterService {
  static async getCharacters() {
    try {
      const iconLink = "https://api.genshin.dev/characters/";
      const names = await axios.get(iconLink);
      const characterData = await axios.all(
        names.data.map(async (name) => {
          const character = await this.getCharacterData(name);
          return character.data;
        })
      );
      const charObj = names.data.map((name, index) => {
        return {
          name: name,
          icon: iconLink + name + "/icon",
          data: characterData[index],
        };
      });
      return charObj;
    } catch (e) {
      console.log(e);
    }
  }
  static async getCharacterData(name) {
    const link = "https://api.genshin.dev/characters/" + name;
    const characterData = await axios.get(link);
    characterData.data["card"] = link + "/card";
    characterData.data["gacha-splash"] = link + "/gacha-splash";
    characterData.data["trueName"] = name;
    return characterData;
  }
}
