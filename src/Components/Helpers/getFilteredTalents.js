export default class getFilteredTalents {
  static filteredTalentMaterials = (talentMaterials, name) => {
    if (talentMaterials) {
      return talentMaterials.payload.talentMaterials.filter(
        (element) =>
          element.characters.filter((char) => char.name.toLowerCase() === name)
            .length > 0
      );
    }
    return talentMaterials;
  };
  static filteredTalentBooks = (talentBooks, name) => {
    if (talentBooks) {
      return talentBooks.payload.talentBooks.filter(
        (element) =>
          element.characters.filter((char) => char.name.toLowerCase() === name)
            .length > 0
      );
    }
    return talentBooks;
  };
}
