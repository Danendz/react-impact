export const downloadMediaContent = async (link) => {
  try {
    const res = await fetch(link);
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  } catch (e) {
    console.log(e);
  }
};
