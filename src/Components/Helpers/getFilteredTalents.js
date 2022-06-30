const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default class getFilteredTalents {
  static filteredTalentsByName = (talents, name) => {
    if (talents) {
      const talent = talents["message"].toLowerCase().includes("materials")
        ? "talentMaterials"
        : "talentBooks";
      console.log();

      return talents.payload[talent].filter(
        (element) =>
          element.characters.filter((char) => char.name.toLowerCase() === name)
            .length > 0
      );
    }
    return talents;
  };
  static filteredTalentBooksToday = (talents) => {
    if (talents) {
      const date = new Date();

      const dayOfWeek = weekday[date.getDay()];
      return talents.payload['talentBooks'].filter(
        (element) =>
          element.farmingDays.filter(
            (day) => day.toLowerCase() === dayOfWeek.toLowerCase()
          ).length > 0
      );
    }
    return talents;
  };
}
