$(() => {
  let countryDatas = [];

  $("#formSelectCountries").on("change", function () {
    let selectedCountry = countryDatas.find(
      (country) => country.ccn3 === this.value
    );
    $.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${selectedCountry.capitalInfo.latlng[0]}&lon=${selectedCountry.capitalInfo.latlng[1]}&appid=8b2a11caa905079d877bc53c2c2c61b7`
    ).done((res) => {
      $("#weather").html(renderWeatherDesc(res.list[0]));
    });
    $("#map-wrapper").html(renderMap(selectedCountry.capital[0]));
  });
  function setFormSelectMenu() {
    for (const country of countryDatas) {
      $("#formSelectCountries").append(
        `<option value="${country.ccn3}">${country.name.common}</option>`
      );
    }
  }

  function getCountriesData() {
    $.ajax({
      url: "https://restcountries.com/v3.1/all",
      type: "GET",
      success: function (response) {
        countryDatas = response;
      },
      error: function (err) {
        console.log(err);
      },
      async: false,
    });
  }
  getCountriesData();
  setFormSelectMenu();
});
