function getTargetCountryDatas(targetCountry) {
  let officialName;
  let nativeName;
  let capital;
  let region;
  let population;
  let languages;
  let timeZone;
  let callingCode;
  let falgUrl;
  officialName = targetCountry.name.official;
  if (targetCountry.languages) {
    languages = Object.values(targetCountry.languages).join(", ");
    let firstLanguage = Object.keys(targetCountry.languages)[0];
    nativeName = targetCountry.name.nativeName[firstLanguage]["common"];
  } else {
    languages = "No Info";
    nativeName = officialName;
  }
  capital = tryGetData(targetCountry, "capital");
  region = tryGetData(targetCountry, "region");
  population = tryGetData(targetCountry, "population");
  timeZone = tryGetData(targetCountry, "timezones", 0);
  if (targetCountry.idd.root)
    callingCode =
      targetCountry.idd.root.replace("+", "") + targetCountry.idd.suffixes[0];
  else callingCode = "No Info";
  falgUrl = targetCountry.flags.png;
  return {
    officialName,
    nativeName,
    capital,
    region,
    population,
    languages,
    timeZone,
    callingCode,
    falgUrl,
  };
}
