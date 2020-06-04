fs = require('fs');

var path = 'C:/Users/karaverm/Desktop/sample.json';

function readJSON(filename, callback){
  fs.readFile(filename, 'utf8', function (err, res){
    if (err) return callback(err);
	console.log(res);
    callback(null, JSON.parse(res));
  });
}

readJSON(path, chimp);

function chimp(x, func){
	console.log(func);
}

