const big = (num: number, num2: number) => {
	if (num > num2) return num;
	else return num2;
};
// console.log(big(3, 6));

const evenNum = (num: number): string => {
	if (num % 2 === 0) return "even";
	else return "odd";
};
// console.log(evenNum(8));

const strLength = (word: string): number => {
	return word.length;
};
// console.log(strLength('moshiko'));

const arrayBack = (num: number): number[] => {
	const nArray: number[] = [];
	for (let i = 1; i <= num; i++) {
		nArray.push(i);
	}
	return nArray;
};
// console.log(arrayBack(9));

const arrayBigest = (arr: number[]): number => {
	let temp: number = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > temp) temp = arr[i];
	}
	return temp;
};
// console.log(arrayBigest([3, 7, 4, 23]));

//צרו טיפוס Person עם מאפיינים
// Name - string
// Age- number
// isStudent - boolean

type Person = {
	name: string;
	age: number;
	isStudent: boolean;
};

const printPerson = (person: Person): void => {
	console.log(`Name: ${person.name}`);
	console.log(`Age: ${person.age}`);
	console.log(`Is Student: ${person.isStudent}`);
};

const person1: Person = {
	name: "david",
	age: 21,
	isStudent: true,
};
// printPerson(person1);

const isMinor = (person: Person): boolean => {
	if (person.age < 18) return true;
	else return false;
};

// console.log(isMinor(person1));

// צרו Interface בשם Book עם מאפיינים
// Title - string
// Author - string
// Year - number

interface Book {
	title: string;
	author: string;
	year: number;
}

type Reader = Person & {
	favoriteBook: Book;
};

const reader1: Reader = {
	name: "Alice",
	age: 30,
	isStudent: false,
	favoriteBook: {
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		year: 1945,
	},
};

const reader2: Reader = {
	name: "meg",
	age: 40,
	isStudent: false,
	favoriteBook: {
		title: "The Great",
		author: "F. Scott Fitzgerald",
		year: 1977,
	},
};

const oldestReader = (reader1: Reader, reader2: Reader): string => {
	if (reader1.age > reader2.age) return reader1.name;
	else return reader2.name;
};
// console.log(oldestReader(reader1,reader2));

const oldestBook = (reader1: Reader, reader2: Reader): string => {
	if (reader1.favoriteBook.year < reader2.favoriteBook.year)
		return reader1.favoriteBook.title;
	else return reader2.favoriteBook.title;
};
console.log(oldestBook(reader1,reader2));
