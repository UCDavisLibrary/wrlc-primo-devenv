import 'primo-explore-external-search';
import 'primo-explore-hathitrust-availability';
import { loadGoogleAnalytics } from "./ga";
import setExternalSearchValues from './external-search';
import setSearchBarAfter from './search-bar-after';
import setSearchResultAvailabilityAfter from './search-result-availability-line-after';


loadGoogleAnalytics();

// Increment version before release
// Doesn't actually bust the cache, but can be helpful info
var ucdlibVersion = "2.0.0-alpha6";
window.ucdlibVersion = ucdlibVersion;

// register our angular app
const REQUIRED_MODULES = [
  'angularLoad', 
  'hathiTrustAvailability', 
  'externalSearch',
  'googleAnalytics'
];
var app = angular.module('viewCustom', REQUIRED_MODULES);

// Customize the app
setExternalSearchValues(app);
setSearchBarAfter(app);
setSearchResultAvailabilityAfter(app);

// Add any templates to cache
//import('./customTemplates').then((customTemplates) => {
//  customTemplates();
//});
//let customTemplates = await import('./customTemplates');
//customTemplates();



