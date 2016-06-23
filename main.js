





var arr = [1,2,3,4,5,6,7,8,9,10];

// give me a new array of all of the even numbers

var newarr = arr.filter(function(value){
 	if (value % 2===0){
		return true
 	}  else {
	 return false
	}
})

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    return string.split("").reverse().join("");
}

var reverse = function(string){
	
}
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////   |   ___}              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////    ______               _   _                 ////
////   |  ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum (num1, num2) {
	return num1 + num2;
}


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
function avg (num1, num2, num3) {
	return (num1 +num2 +num3) /3
}



// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
function getlangth (str) {
	return str.length
}



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
function greaterthan (par1, par2) {
	return par2 > par1 ;
}



// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet (par) {
	return "Hello, "+ par + "!";
}



// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
function madlib (adj1, adj2, noun, verb) {
	return "The " + adj1 + " brown " + noun +" "+ verb + " over the " + adj2 + " dog";
}



///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
var arr = [1,2,3,4,5,6,7,8,9,10];

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if (num1 > num2) {
    	return num1;
    } else {
    	return num2;
    }
    		
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    // if (num1 > num2) {
    // 	if (num1 > num3) {
    // 		return num1;
    // 	}
    // }
    // if (num2 > num1) {
    // 	if (num2 > num3) {
    // 		return num2;
    // 	}
    // }
    // if (num3 > num1) {
    // 	if (num3 > num2) {
    // 		return num3;
    // 	}
    // }
    // return num1;
    return Math.max(num1, num2, num3);
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
	char = char.toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    	return true;
    } else {
    	return false;
    }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var phrasearr = phrase.split("");
    var newphrase = '';

    phrasearr.foreach(function(char){
        if (char !== ' '){
            if (!isvowel(char)) {
                newphrase += char + 'o' + char;
            }else {
                newphrase =+ char;
            }
        }
    })
    return newphrase;
}



// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    return str.split("").reverse().join("");
}



console.log


// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
var largest = numbers.reduce(function(a,b){
    return a>b?a:b;
});



// ---------------------------
// 2. Find longest string
// ---------------------------
var longest = strings.reduce(function(a,b){
    return a.length > b.length ? a:b
})



// ---------------------------
// 3. Find even numbers
// ---------------------------
var even = numbers.filter(function(value){
    return value % 2 ===0;
})


// ---------------------------
// 4. Find odd numbers
// ---------------------------
var odd = numbers.filter(function(value){
    return value % 2 ===1;
})

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var isarr = strings.filter(function(value){
return value.indexof("is") !== -1;
})


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
var joinedarr = numbers.concat(strings);




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
var jsinstructors = instructors.filter(function(value){
    return value.teaches === 'javaScript'





