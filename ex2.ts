const evenTotal = (arr: number[]): number => {
	let counter: number = 0;
	arr.forEach((element) => {
		if (element % 2 === 0) counter += element;
	});
	return counter;
};
// console.log(evenTotal([2, 5, 8, 5]));

type Giometri = {
	length: number;
	width: number;
};

const rectangle:Giometri = {
    length:22,
    width:10
}

const field = (rect:Giometri):number |string => {
    return 'the radios'+' '+ rect.length * rect.width
}
// console.log(field(rectangle));

const isPalindrome = (str:string):boolean => {
    if(str === reverse(str))
}