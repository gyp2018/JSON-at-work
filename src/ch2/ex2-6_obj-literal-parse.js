var json = '{' +
  '"firstName": "Larson",' +
  '"lastName": "Richard",' +
  '"email": "larsonricard@ecratic.com",' +
  '"about": "Incididunt mollit cupidatat magna excepteur do tempor ex non ...",' +
  '"company": "Ecratic",' +
  '"tags": [' +
    '"json",' +
    '"rest",' +
    '"api",' +
    '"oauth"' +
  '],' +
  '"registered": true' +
'}';

var speaker = JSON.parse(json);

console.log('speaker.firstName = ' + speaker.firstName);
