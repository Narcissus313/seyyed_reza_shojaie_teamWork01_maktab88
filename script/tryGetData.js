function tryGetData(targetCountry, key, index = null) {
  try {
    if (index === null) return targetCountry[key];
    else return targetCountry[key][index];
  } catch (error) {
    return "No Info";
  }
}
