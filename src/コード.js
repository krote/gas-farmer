const ss = SpredsheetApp.openById("14DOT3AB2vCMQFLmaQTfr8bKIFHYjStsXDyKPQvDA_kA");
function doGet() {
    const htmlTemplate = HtmlService.createTemplateFromFile('index');
    const title = ss.getName();
    htmlTemplate.title = title;
    return htmlTemplate.evaluate().setTitle(title);
}

function getAmedas( param_pref_ja, param_address) {
    var requestUrl = "https://jjwd.info/api/v2/stations/search?pref_ja=" + param_pref_ja;
    if(param_address != null && param_address != ""){
      requestUrl += "&address=" + param_address;
    }
    var response = UrlFetchApp.fetch(requestUrl);
    var res = JSON.parse(response.getContentText());
    return res;
  }