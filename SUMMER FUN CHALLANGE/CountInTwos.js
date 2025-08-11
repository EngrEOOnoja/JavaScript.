/*6.Counting by Twos
Count only even numbers, like 2, 4, 6! Start with 2 in a box and show it. Add 2
each time and show the next number, like “4,” “6,” up to 10. Repeat until you
reach 10.*/

function countInTwos(digit){
	for(digit = 0; digit < 10;){
	digit += 2
	console.log(digit);

	}
	return digit

}


let digit = 10;
let result = countInTwos(digit);

