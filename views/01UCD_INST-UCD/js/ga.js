import { getParameterByName } from './utils';

export function loadGoogleAnalytics(){

  angular.module('googleAnalytics', []);
  angular.module('googleAnalytics').run(['$rootScope', function ($rootScope) {

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
      ga('create', 'UA-65988958-7', 'auto');

      $rootScope.$on('$locationChangeSuccess', function(){
        if ( ga ) ga('send', 'pageview');
      });
  }])
}
  
  // Tracks if a record result is in the hathi trust
  // Attached to the prmSearchResultAvailabilityLineAfter component in browzine.js
  export function trackHathiFinds($scope, $element) {

    if ( !ga ) return false;

    // check for hathi full text
    let children = $element.children();
    for (let [k, child] of Object.entries(children)) {
      if (child.localName == "hathi-trust-availability") {
        let hathi_links = child.getElementsByTagName('a');
        if (hathi_links.length > 0) {
          let already_sent = $element.nativeElement.querySelector('ga-hathi-load')
          if (already_sent && already_sent.getAttribute('event-sent') == 'true') {
            return true
          }

          // send google analytics event
          let hathi_record = hathi_links[0].getAttribute('href');
          let primo_query = getParameterByName('query') ? getParameterByName('query') : '';
          ga('send', {
              hitType: 'event',
              eventCategory: 'Hathi Load',
              eventAction: hathi_record,
              eventLabel: primo_query
            });
          hathi_links[0].addEventListener("click", function(){
            ga('send', 'event', {
              eventCategory: 'Hathi Click',
              eventAction: hathi_record,
              eventLabel: primo_query,
              transport: 'beacon'
            });

          });
          //console.log("Event sent: ", hathi_record, primo_query);
          return true

        }
        return false
      }
    }
    return false
  }
  