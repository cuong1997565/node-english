// console.log(__dirname);
// console.log(__filename);
// var time = 0;
//
// var timer = setInterval(function () {
//    time += 2;
//    console.log(time + ' seconds has passed');
//    if (time > 5) {
//        clearTimeout(timer);
//    }
// }, 2000);

function sayHi() {
    console.log('hi');
}

sayHi();

var sayBye = function () {
    console.log('bye');
}

sayBye();


function callFunction(fun) {
    fun();
}

callFunction(sayBye);
