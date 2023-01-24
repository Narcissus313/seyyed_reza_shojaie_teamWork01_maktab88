const renderMap = function (...params) {
  if (params.length == 2) {
    return `<div class="mapouter">
      <div class="gmap_canvas">
        <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=${params[0]},${params[1]}+(Teamwork)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ><a href="https://www.maps.ie/distance-area-calculator.html"
          >distance maps</a
        ></iframe
      ></iframe
        ><a href="https://www.whatismyip-address.com/divi-discount/"
          >divi discount</a
        ><br />
        <a href="https://www.embedgooglemap.net">embedgooglemap.net</a
        >
      </div>
    </div>`;
  } else {
    return `<div class="mapouter">
      <div class="gmap_canvas">
        <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=${params[0]}+(Teamwork)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ><a href="https://www.maps.ie/distance-area-calculator.html"
          >measure distance on map</a
        ></iframe
      ></iframe
        ><a href="https://www.whatismyip-address.com/divi-discount/"
          >divi discount</a
        ><br />
        <a href="https://www.embedgooglemap.net">embedgooglemap.net</a
        >
      </div>
    </div>`;
  }
};
