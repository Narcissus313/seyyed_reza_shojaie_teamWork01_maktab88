$(() => {
  let countryDatas = [];
  $("#formSelectCountries").on("change", function () {
    let targetCountry = countryDatas.find(
      (country) => country.ccn3 === this.value
    );
    console.log(targetCountry);
    $(".middle").html(renderPage(getTargetCountryDatas(targetCountry)));
    if (Object.keys(targetCountry.capitalInfo).length) {
      $.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${targetCountry.capitalInfo.latlng[0]}&lon=${targetCountry.capitalInfo.latlng[1]}&appid=8b2a11caa905079d877bc53c2c2c61b7`
      )
        .done((res) => {
          $("#weather").html(renderWeatherDesc(res.list[0]));
        })
        .fail(() => {
          alert("Please Check you internet connection!");
        });
      $("#map-wrapper").html(
        renderMap(
          targetCountry.capitalInfo.latlng[0],
          targetCountry.capitalInfo.latlng[1]
        )
      );
    } else {
      $("#weather").html(renderWeatherDesc());
      $("#map-wrapper").html(renderMap(targetCountry.name.official));
    }
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
        alert("Please Check you internet connection!");
      },
      async: false,
    });
  }
  getCountriesData();
  countryDatas.sort((a, b) => a.name.common.localeCompare(b.name.common));
  setFormSelectMenu();
});
