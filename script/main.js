$(() => {
  let countryDatas = [];
  let countriesNames = [];

  function fillCountriesNames() {
    for (const country of countryDatas) {
      countriesNames.push(country["name"]["common"]);
    }
    countriesNames.sort((a, b) => a.localeCompare(b));
  }

  function setFormSelectMenu() {
    for (const country of countriesNames) {
      if (country !== "Iran") {
        $("#formSelectCountries").append(
          `<option value="${country}">${country}</option>`
        );
      } else {
        $("#formSelectCountries").append(
          `<option class="text-danger fs-5 fst-italic" value="${country}"><a class="text-Success">${country}</a></option>`
        );
      }
    }
  }

  function getCountriesData() {
    $.ajax({
      url: "https://restcountries.com/v3.1/all",
      type: "GET",
      success: function (response) {
        console.log(response[0]);
        countryDatas = response;
      },
      error: function (err) {
        console.log(err);
      },
      async: false,
    });
  }

  getCountriesData();
  fillCountriesNames();
  setFormSelectMenu();
});
