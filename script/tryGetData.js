function tryGetData(targetCountry, key, index = null) {
  try {
    if (index === null) {
      if (targetCountry[key]) return targetCountry[key];
      else return "no Info";
    } else return targetCountry[key][index];
  } catch (error) {
    return "No Info";
  }
}
