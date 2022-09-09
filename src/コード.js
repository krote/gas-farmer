function myFunction() {
  Logger.log('Hello Gas!');
}

function getAmedas( param_pref_ja, param_address) {
    var requestUrl = "https://jjwd.info/api/v2/stations/search?pref_ja=" + param_pref_ja;
    if(param_address != null && param_address != ""){
      requestUrl += "&address=" + param_address;
    }
    var response = UrlFetchApp.fetch(requestUrl);
    var res = JSON.parse(response.getContentText());
  
  }