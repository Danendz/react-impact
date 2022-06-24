import axios from "axios";

export default class CharacterService{
    static async getCharacters(){
        try{
            const names = await axios.get('https://api.genshin.dev/characters');
            const iconLink = 'https://api.genshin.dev/characters/';
            
            const charObj = names.data.map((name) =>{
                return {name: name, icon: iconLink + name + '/icon'}
            })

            return charObj;

        }catch(e){
            console.log(e)
        }
    }
    static async getCharacterData(name){
        const link = 'https://api.genshin.dev/characters/' + name;
        const characterData = await axios.get(link);
        characterData.data['card'] = link + "/card"
        return characterData.data;
    }
}