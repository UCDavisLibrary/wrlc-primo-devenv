var app = angular.module('viewCustom', ['angularLoad', 'hathiTrustAvailability', 'externalSearch']);
var ucdlibVersion = "2.0.0-alpha4";

//global functions
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

