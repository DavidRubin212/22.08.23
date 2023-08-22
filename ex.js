var big = function (num, num2) {
    if (num > num2)
        return num;
    else
        return num2;
};
// console.log(big(3, 6));
var evenNum = function (num) {
    if (num % 2 === 0)
        return "even";
    else
        return "odd";
};
// console.log(evenNum(8));
var strLength = function (word) {
    return word.length;
};
// console.log(strLength('moshiko'));
var arrayBack = function (num) {
    var nArray = [];
    for (var i = 1; i <= num; i++) {
        nArray.push(i);
    }
    return nArray;
};
// console.log(arrayBack(9));
var arrayBigest = function (arr) {
    var temp = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > temp)
            temp = arr[i];
    }
    return temp;
};
var printPerson = function (person) {
    console.log("Name: ".concat(person.name));
    console.log("Age: ".concat(person.age));
    console.log("Is Student: ".concat(person.isStudent));
};
var person1 = {
    name: "david",
    age: 21,
    isStudent: true,
};
// printPerson(person1);
var isMinor = function (person) {
    if (person.age < 18)
        return true;
    else
        return false;
};
var reader1 = {
    name: "Alice",
    age: 30,
    isStudent: false,
    favoriteBook: {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1945,
    },
};
var reader2 = {
    name: "meg",
    age: 40,
    isStudent: false,
    favoriteBook: {
        title: "The Great",
        author: "F. Scott Fitzgerald",
        year: 1977,
    },
};
var oldestReader = function (reader1, reader2) {
    if (reader1.age > reader2.age)
        return reader1.name;
    else
        return reader2.name;
};
// console.log(oldestReader(reader1,reader2));
var oldestBook = function (reader1, reader2) {
    if (reader1.favoriteBook.year < reader2.favoriteBook.year)
        return reader1.favoriteBook.title;
    else
        return reader2.favoriteBook.title;
};
// console.log(oldestBook(reader1, reader2));
