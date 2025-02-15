/* UC Library Search logo
 * Code adapted from CSU Central Package by David Walker
 * https://github.com/dswalker/csu-central-package/
 *
 */
app.component('prmSearchBarAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'SearchBarAfterController',
    templateUrl: 'custom/01UCD_INST-UCD/html/templates/prmSearchBarAfter.html',
});

app.controller('SearchBarAfterController', ['$location', '$window', function($location, $window){
  this.navigateToHomePage = function () {
    var params = $location.search();
    var vid = params.vid;
    var lang = params.lang || "en_US";
    var split = $location.absUrl().split('/discovery/');

    if (split.length === 1) {
      console.log(split[0] + ' : Could not detect the view name!');
      return false;
    }

    var baseUrl = split[0];
    $window.location.href = baseUrl + '/discovery/search?vid=' + vid + '&lang=' + lang;
    return true;
  };
}]);
