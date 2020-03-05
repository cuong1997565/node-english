var  fs = require('fs');

// var readMe = fs.readFileSync('readme.txt','utf8');
// // console.log(readMe);
//
// fs.writeFileSync('write.txt', readMe);


// fs.readFile('readme.txt','utf8', function (err, data) {
//    fs.writeFileSync('write12.txt', data);
//    console.log(data);
// });

// delete file named 'sample.txt'
// fs.unlink('red.txt', function (err) {
//    if (err) throw err;
//    // if no error, file has been deleted successfully
//    console.log('File deleted!');
// });


// fs.mkdir('stuff', function (err) {
//    if (err) throw err;
//    fs.readFile('readme.txt','utf8', function (err, data) {
//       if (err) throw err;
//       fs.writeFile('./stuff/data.txt', data);
//    });
// });

fs.unlink('./stuff/data.txt', function (err) {
   if (err) throw err;
   fs.rmdir('stuff');
   console.log('remove file');
});
