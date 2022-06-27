const colors = {
  Cryo: "52, 152, 219",
  Geo: "243, 157, 18",
  Anemo: "46, 204, 112",
  Electro: "156, 89, 182",
  Pyro: "231, 77, 60",
  Hydro: "41, 127, 185",
};

const visions = {
  Cryo: "https://muakasan.github.io/genshin-portraits/assets/cryo.png",
  Geo: "https://muakasan.github.io/genshin-portraits/assets/geo.png",
  Anemo: "https://muakasan.github.io/genshin-portraits/assets/anemo.png",
  Electro: "https://muakasan.github.io/genshin-portraits/assets/electro.png",
  Pyro: "https://muakasan.github.io/genshin-portraits/assets/pyro.png",
  Hydro: "https://muakasan.github.io/genshin-portraits/assets/hydro.png",
};

export default class VisionHelper {
  static async getColorWithAlpha(vision, alpha) {
    const currentVisionColor = colors[vision];
    return `rgba(${currentVisionColor}, ${alpha})`;
  }
  static async getVisionImgs(currentVision) {
    return visions[currentVision];
  }
}
