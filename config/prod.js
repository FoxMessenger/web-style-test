// psuedo code
var db = require('mysql-driver-thingy');
db.connect('localhost', 'sqlport');
// db.otherSetupFunctions();
console.log("Finished db setup. You should only see this message once! Cool.");

module.exports = db;