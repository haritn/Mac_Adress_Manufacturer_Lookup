function lookupMacManufacturer(input) {
  var response = UrlFetchApp.fetch("https://api.macvendors.com/" + input);
  return response.getContentText();
}
