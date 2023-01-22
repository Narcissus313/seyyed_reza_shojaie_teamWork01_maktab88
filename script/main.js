$(() => {
  let countryDatas = [];

  $("#formSelectCountries").on("change", function () {});
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
  setFormSelectMenu();
});
