window.browzine = {
    api: "https://public-api.thirdiron.com/public/v1/libraries/75",
    apiKey: "c5635332-0b38-4ded-9adc-b16be01f079c",
  
    journalCoverImagesEnabled: true,
  
    journalBrowZineWebLinkTextEnabled: true,
    journalBrowZineWebLinkText: "View Journal Contents",
  
    acticleBrowZineWebLinkTextEnabled: true,
    articleBrowZineWebLinkText: "View Issue Contents",
  
    articlePDFDownloadLinkEnabled: true,
    articlePDFDownloadLinkText: "Download PDF",
  
    printRecordsIntegrationEnabled: true
  };
  
  browzine.script = document.createElement("script");
  browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
  document.head.appendChild(browzine.script);
  
  app.controller('prmSearchResultAvailabilityLineAfterController', function ($scope, $element) {
    window.browzine.primo.searchResult($scope);
  });