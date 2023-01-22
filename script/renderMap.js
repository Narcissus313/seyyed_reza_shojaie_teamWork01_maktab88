const renderMap = function (capitalName) {
  return `<div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="727"
          height="507"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=${capitalName}&t=&z=7&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe
        ><a href="https://www.whatismyip-address.com/divi-discount/"
          >divi discount</a
        ><br /><style>
          .mapouter {
            position: relative;
            text-align: right;
            height: 507px;
            width: 727px;
          }</style
        ><a href="https://www.embedgooglemap.net">embedgooglemap.net</a
        ><style>
          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            height: 507px;
            width: 727px;
          }
        </style>
      </div>
    </div>`;
};
