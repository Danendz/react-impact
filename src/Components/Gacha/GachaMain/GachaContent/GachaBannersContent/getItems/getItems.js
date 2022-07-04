import GachaCore from "../../../../GachaCore/GachaCore.ts";
import {Primogems, Wishes} from "../../../../GachaCore/GachaСurrencies";

export const getItems = (amountItems, weapons, characters) => {
  let items;
  
  if (amountItems === 10) {
    takeWishes(1600)
    items = GachaCore.getTenItems();
  } else {
    takeWishes(160) 
    items = [GachaCore.getOneItem()];
  }

  const itemsRarity = items.map((item) => item[0]);
  const itemsNames = items.map((item) => item[1]);
  const maxRarity = Math.max(...itemsRarity);
  const videoType = "wish" + maxRarity + "Star" + amountItems;

  const chars = itemsNames.map((name) =>
    characters.find((char) => char.name === name)
  );
  const weapon = itemsNames.map((name) =>
    weapons.find((char) => char.name === name)
  );
  const charsResult = chars.filter((char) => char !== undefined);
  const weaponResult = weapon.filter((weap) => weap !== undefined);
  return [[...charsResult, ...weaponResult], videoType];
};

const takeWishes = (cost) => {
  const totalWishes = Wishes.get();

  if(cost > totalWishes * 160){
    cost -= totalWishes;
    Wishes.remove(totalWishes)
    Primogems.remove(cost)
  }else{
    const wishesCost = totalWishes - (((totalWishes * 160) - cost) / 160)
    Wishes.remove(wishesCost)
  }
}