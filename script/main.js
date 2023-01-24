$(() => {
	let countryDatas = [];
	let countryDatas2 = [];
	let targetCountry;
	let name;
	let nativeName;
	let capital;
	let region;
	let population;
	let languages;
	let timeZone;
	let callingCode;
	let falgUrl;

	function getCountriesData() {
		$.ajax({
			url: "https://api.countrylayer.com/v2/all?access_key=863ebb94a829c966c70863f4769aa6c8",
			type: "GET",
			success: function (response) {
				countryDatas2 = response;
			},
			error: function (err) {
				console.log("error:");
				console.log(err);
			},
			async: false,
		});
	}

	function setFormSelectMenu() {
		for (const country of countryDatas) {
			$("#formSelectCountries").append(
				`<option value="${country.ccn3}">${country.name.common}</option>`
			);
		}
	}

	function getTargetCountryDatas() {
		name = targetCountry.name["official"];
		languages = Object.values(targetCountry.languages).join(", ");
		let firstLanguage = Object.keys(targetCountry.languages)[0];
		nativeName = targetCountry.name.nativeName[firstLanguage]["common"];
		capital = targetCountry.capital[0];
		region = targetCountry.region;
		population = targetCountry.population;
		timeZone = targetCountry.timezones[0];
		callingCode =
			targetCountry.idd.root.replace("+", "") +
			targetCountry.idd.suffixes[0];
		falgUrl = targetCountry.flags.png;
	}

	function renderPage() {
		let pageContent = `<div class="col-sm-12 col-md-4 mt-2">
        <div class="bg-secondary text-center text-white pb-1">
          <h4 class="py-2 text-white text-start fw-bold px-3">${name}</h4>
          <p class="lh-1 text-start ps-3 pe-0 fw-bold" style="color:yellow">Native Name: <span style="color:white">${nativeName}</span></p>
          <p class="lh-1 text-start ps-3 pe-0 fw-bold" style="color:yellow">Capital: <span style="color:white">${capital}</span></p>
          <p class="lh-1 text-start ps-3 pe-0 fw-bold" style="color:yellow">Region: <span style="color:white">${region}</span></p>
          <p class="lh-1 text-start ps-3 pe-0 fw-bold" style="color:yellow">Population: <span style="color:white">${population}</span></p>
          <p class="lh-1 text-start ps-3 pe-0 fw-bold" style="color:yellow">Languages: <span style="color:white">${languages}</span></p>
          <p class="lh-1 text-start ps-3 pe-0 fw-bold" style="color:yellow">TimeZone: <span style="color:white">${timeZone}</span></p>
        </div>
      </div>
      <div class="col-sm-12 col-md-4 mt-2">
        <div class="code bg-warning text-white h-100">
    
          <div class="bg-warning d-flex align-items-start justify-content-center">
            <h3 class="bg-dark text-center fw-bold w-100 py-3">Calling Code</h3>
          </div>
          <div class="bg-warning d-flex align-items-start justify-content-center">
            <h1 class="text-dark fw-bold py-5">${callingCode}</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4 mt-2">
        <div class="flag bg-light text-center text-white h-100 d-flex justify-content-center align-content-center">
          <img src=${falgUrl} alt="country flag">
        </div>
      </div>
	  <div class="footer row gx-2 pe-0">
        <div class="col-sm-12 col-md-4 mt-2">
          <div class="name bg-light text-center text-white h-100">
            <h3 class="bg-secondary py-3 fw-bold" style="color:yellow">
              Capital Weather Report
            </h3>
          </div>
        </div>
        <div class="col-sm-12 col-md-8 mt-2 pb-2 pe-0">
          <div class="code bg-dark text-center text-white h-100"></div>
        </div>
      </div>
    </div>
	`;

		$(".middle").html(pageContent);
	}

	getCountriesData();
	countryDatas.sort((a, b) => a.name.common.localeCompare(b.name.common));
	setFormSelectMenu();

	$("#formSelectCountries").on("change", function () {
		targetCountry = countryDatas.find(
			(country) => country.ccn3 === this.value
		);
		console.log(targetCountry);
		getTargetCountryDatas();
		renderPage();
	});

	function getCountriesData2() {
		var settings = {
			url: "https://api.countrylayer.com/v2/all?access_key=((1fc17f7ca99c35e902cbaf51a9675b53))",
			method: "GET",
			timeout: 0,
		};

		$.ajax(settings).done(function (response) {
			console.log(response);
		});
	}
	getCountriesData2();
	// console.log(getCountriesData2);
});
