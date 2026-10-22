// 01. Solve Me First
// Write a function that returns the sum of two integers.
// /**
//   * @param {number} a
//   * @param {number} b
//   * @return {number}
//   */

var solveMeFirst = function(a, b) {
 	return a+b;
 };
 console.log(solveMeFirst(5,7), '1stmath')
// Expected Input: "a: 2, b: 3"
// Expected Output: 5
// 02. Multiply
// Write a function that returns the product of two numbers.
// /**
//   * @param {number} a
//   * @param {number} b
//   * @return {number}
//   */
var multiply = function(a, b) {
 	return a*b;
 };
console.log(multiply(5,7), '2ndmath')

// Expected Input: "a: 4, b: 5"
// Expected Output: 20

// 03. Even or Odd
// Write a function that returns "Even" when a number is even and "Odd" when it is odd.
// /**
//   * @param {number} number
//   * @return {string}
//   */
var evenOrOdd = function(number) {

   return number%2 === 0 ? 'even' : 'Odd'; 
 	
 };
console.log(evenOrOdd(5), '3rdmath')
// Expected Input: "number: 7"
// Expected Output: "Odd"

// 04. Return Negative
// Return the negative value of a number. If it is already negative, keep it negative.
// /**
//   * @param {number} number
//   * @return {number}
//   */
var makeNegative = function(number) {
 	return number>0 ? -number : number
 };
 console.log(makeNegative(-7), "4th")
// Expected Input: "number: 8"
// Expected Output: -8

// 05. Opposite Number
// Return the opposite of a given number.
// /**
//   * @param {number} number
//   * @return {number}
//   */
var opposite = function(number) {
 	return  -number;
 };
 console.log(opposite(-8), '5th')
// Expected Input: "number: -7"
// Expected Output: 7

// 06. Simple Array Sum
// Return the sum of all integers in an array.
// /**
//   * @param {number[]} ar
//   * @return {number}
//   */
var simpleArraySum = function(ar) {
 	return ar.reduce((sum,num)=> sum + num, 0)
 };
 console.log(simpleArraySum([1, 2, 3, 8]), '6th')
// Expected Input: "ar: [1, 2, 3, 4]"
// Expected Output: 10

// 07. sleepIn
// Return true if it is not a weekday or you are on vacation.
// /**
//   * @param {boolean} weekday
//   * @param {boolean} vacation
//   * @return {boolean}
//   */
var sleepIn = function(weekday, vacation) {
 	return !weekday || vacation;
 };
 console.log(sleepIn( true,  false), '7th')
// Expected Input: "weekday: true, vacation: false"
// Expected Output: false

// 08. monkeyTrouble
// Two monkeys are in trouble if both are smiling or neither is smiling. Return true in that case.
// /**
//   * @param {boolean} aSmile
//   * @param {boolean} bSmile
//   * @return {boolean}
//   */
// if two monkeys both smnile ot both not smile the danger
var monkeyTrouble = function(aSmile, bSmile) {
 	return aSmile === bSmile;
 };
 console.log(monkeyTrouble(true, true), '8th')
// Expected Input: "aSmile: true, bSmile: true"
// Expected Output: true

// 09. sumDouble
// Return the sum of two integers, but return double the sum when they are equal.
// /**
//   * @param {number} a
//   * @param {number} b
//   * @return {number}
//   */
var sumDouble = function(a, b) {
   return a === b ? 2 * (a + b) : a + b;	
 };
// Expected Input: "a: 3, b: 3"
// Expected Output: 12

// 10. diff21
// Return the absolute difference between n and 21, doubling it when n is greater than 21.

var diff21 = function(n) {
   var diff = Math.abs(n - 21);
  return n > 21 ? diff * 2 : diff;	
 };

// Expected Input: "n: 25"
// Expected Output: 8

// 11. parrotTrouble
// Return true when a talking parrot is causing trouble outside the allowed hours of 7 through 20.

var parrotTrouble = function(talking, hour) {

    return talking && (hour < 7 || hour > 20);	

 };
// Expected Input: "talking: true, hour: 6"
// Expected Output: true

// 12. makes10
// Return true if either number is 10 or their sum is 10.
var makes10 = function(a, b) {
  return a === 10 || b === 10 || a + b === 10;
};

// 13. nearHundred
// Return true if n is within 10 of 100 or within 10 of 200.
var nearHundred = function(n) {
  return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;
};

// 14. posNeg
// Return true when one number is positive and the other is negative. 
// If negative is true, both must be negative.
var posNeg = function(a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  }
  return (a < 0 && b > 0) || (a > 0 && b < 0);
};

// 15. notString
// Add "not " to the beginning of a string unless it already starts with "not".

var notString = function(str) {
  return str.startsWith("not") ? str : "not " + str;
};

// 16. Compare the Triplets
// Compare two three-element score arrays and return how many points each person earns.
var compareTriplets = function(a, b) {
  var points = [0, 0];

  for (var i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      points[0]++;
    } else if (a[i] < b[i]) {
      points[1]++;
    }
  }

  return points;
};

// 17. A Very Big Sum
// Return the sum of all values in an integer array.
var aVeryBigSum = function(ar) {
  return ar.reduce((sum, num) => sum + num, 0);
};

// 18. Staircase
// Create a right-aligned staircase of height n using # characters.
var staircase = function(n) {
  var lines = [];

  for (var i = 1; i <= n; i++) {
    lines.push(" ".repeat(n - i) + "#".repeat(i));
  }

  return lines.join("\n");
};

// 19. Grading Students
// Round a grade up to the next multiple of 5 when it is close enough; 
// keep grades below 38 unchanged.

var gradingStudents = function(grades) {
  return grades.map(function(grade) {
    if (grade < 38) {
      return grade;
    }

    var nextMultipleOf5 = Math.ceil(grade / 5) * 5;

    if (nextMultipleOf5 - grade < 3) {
      return nextMultipleOf5;
    }

    return grade;
  });
};

// 20. Time Conversion
// Convert a 12-hour AM/PM time string into 24-hour format.

var timeConversion = function(s) {
  var period = s.slice(-2);
  var time = s.slice(0, -2);
  var parts = time.split(":");

  var hour = parseInt(parts[0], 10);
  var minute = parts[1];
  var second = parts[2];

  if (period === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else {
    if (hour !== 12) {
      hour += 12;
    }
  }

  return String(hour).padStart(2, "0") + ":" + minute + ":" + second;
};

// 21. String Repeat
// Return a string repeated exactly n times.

var repeatStr = function(n, s) {
  return s.repeat(n);
};

// 22. Reversed Strings
// Return the given string with its characters in reverse order.

var solution = function(str) {
  return str.split("").reverse().join("");
};

// 23. Sum of Positive
// Return the sum of all positive numbers in an array. Return 0 if there are none.
var positiveSum = function(arr) {
  return arr.reduce(function(sum, num) {
    return num > 0 ? sum + num : sum;
  }, 0);
};

// 24. Grasshopper - Summation
// Return the sum of all integers from 1 through n.
var summation = function(num) {
  return (num * (num + 1)) / 2;
};

// 25. Convert a Boolean to a String
// Convert a boolean value into the string "true" or "false".
var booleanToString = function(b) {
  return b ? "true" : "false";
};









