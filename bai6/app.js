var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/read.txt','utf8');

var myWriteStream = fs.createWriteStream(__dirname + '/read12.txt','utf8');

//
// myReadStream.on('data', function(chumk){
//    console.log('new chunk received');
//    console.log(chumk);
// });

myReadStream.on('data', function (chumk) {
    myWriteStream.write(chumk);
});
