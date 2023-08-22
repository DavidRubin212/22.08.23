var evenTotal = function (arr) {
    var counter = 0;
    arr.forEach(function (element) {
        if (element % 2 === 0)
            counter += element;
    });
    return counter;
};
var rectangle = {
    length: 22,
    width: 10
};
var field = function (rect) {
    return 'the radios' + ' ' + rect.length * rect.width;
};
// console.log(field(rectangle));
var isPalindrome = function (str) {
    if (str === reverse(str))
        ;
};
