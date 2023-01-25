function renderPage() {
  let pageContent = `
		<div class="col-sm-12 col-md-4 mt-2">
        <div class="bg-secondary text-center text-white pb-1">
          <h4 class="py-2 text-white text-start fw-bold px-3">${name}</h4>
          <p class="lh-1 text-start ps-3 pe-0 fw-bold" style="color:yellow">Native Name: <span style="color:white">${nativeName}</span></p>
          <p class="lh-1 text-start ps-3 pe-0 fw-bold" style="color:yellow">Capital: <span style="color:white">${capital}</span></p>
          <p class="lh-1 text-start ps-3 pe-0 fw-bold" style="color:yellow">Region: <span style="color:white">${region}</span></p>
          <p class="lh-1 text-start ps-3 pe-0 fw-bold" style="color:yellow">Population: <span style="color:white">${population.toLocaleString(
            "en"
          )}</span></p>
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
            <h1 class="text-dark fw-bold py-5">${
              callingCode !== "No Info"
                ? callingCode
                : '<span style="color:red;"></span>'
            }</h1>
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
        <div class="col-sm-12 col-md-8 mt-2 pe-0">
          <div class="code bg-dark text-center text-white h-100"></div>
        </div>
      </div>
    </div>
	`;

  $(".middle").html(pageContent);
}
