const ss = SpreadsheetApp.openById("14DOT3AB2vCMQFLmaQTfr8bKIFHYjStsXDyKPQvDA_kA");
function doGet() {
    const htmlTemplate = HtmlService.createTemplateFromFile('index');
    const title = ss.getName();
    htmlTemplate.title = title;
    return htmlTemplate.evaluate().setTitle(title);
}

function getSheetData() {
    const sh = ss.getSheetByName("設定");
    const response = JSON.stringify(sh.getDataRange().getValues());
    return response
}

function getVarieties() {
    const sh = ss.getSheetByName("品種");
    const response = JSON.stringify(sh.getDataRange().getValues());
    return response; 
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