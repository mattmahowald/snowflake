const csv = require("csvtojson");
const fs = require('fs');
const request = require('request')

const csvUrlPath = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQPxELXAmWEoN839yinWlwNBHBFzbBI3c0dx-vZZPV5C-fvIO-IvFJVDcNeLF_CwfLGZdn2siWSbpLc/pub?gid=741775966&single=true&output=csv';
const csvFilePath = './tracks.csv';

csv()
  .fromStream(request.get(csvUrlPath))
  .then((jsonObj) => {

    let resultObj = jsonObj.reduce((acc, curr) => {
      let key = Object.keys(curr)[0];
      acc[curr[key].id] = curr[key];
      return acc;
    }, {});

    let jsonContent = "export default " + JSON.stringify(resultObj);

    fs.writeFile("tracks.js", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });
  });