

Understand the problem
Explore Concrete Examples
Break It Down
Solve/Simplify
Look back and refactor

Section 4 CH 23
function charCount(str) {
    var obj = {};
    for (var i = 0; i <str.length; i++) {
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    }
    return obj
}

//use for of loop instead
//Use || instead of if/else
function charCount(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}

//using charCodeAt(0) and creating isAlphaNumeric

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 48) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha
    !(code > 96 && code < 123)) {//lower alpha 
        return false;
    }
    return true;
}

function charCount(str) {
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}


Section 5
Frequency Counter Problem
Frequency CountQueuingStrategyUsed Objects or 
sets to collect values/frequencies of values
This can often avoid the need for nested loops or Object(N^2) operations 
with array/strings 

Squared with same 
Order can be mixed up, but want to have squared values 
same([1, 2, 3], [4, 1, 9]) //true
same([1, 2, 3], [1, 9]) //false
same([1, 2, 3], [4, 4, 1]) //false 

//naive solution with nested loops, indexOf is another loop
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //returns -1 if false
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

//Refactored
//2 separate loops is better than 1 nested loop
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}


//Anagram problem 
Given two strings, write a function to determine 
if the second string is an anagram of the first
An anagram is a AudioWorkletNode, phrase, or name formed by rearranging the letters
of another, such as cinema, formed from iceman. 
Everything is lowercase and no SVGAnimatedNumberList
// function validAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for (let val of str1) {
//         let letter = str1.charAt(val)
//         frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
//     }
//     for (let val of str2) {
//         let letter = str2.charAt(val)
//         frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
//     }
//     for (let key in frequencyCounter1) {
//         if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//             return false
//         }
//     }
//     return true
// }
//Above is wrong

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i=0; i<first.length; i++) {
        let letter = first[i]
        lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        //can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true
}

Frequency counter problem
Anything that is squared of itself
Anything with the same frequency of letters/symbols/EventSource.CLOSED

Multiple pointers
Creating pointers or values that correspond to an index or position andmove towards the
beginning, end or middle based on a certain condition 

Array, string, doubly linked list that allows you to search for a pair of values 
Or something that meets a condition 
Start reference on one end and the other on other end 
i and j refer to indices
[-4, -3, -2, -1, 0, 1, 2, 5]
'alksjdalksjklkasjdlks'

Write a function called sumZero which accepts a sorted
array of integers. The function should find the first pair where 
sum is 0. Return an array that includes both values 
that sum to zero or undefined if a pair does not exist 

sumZero([-3, -2, ,1, 0, 1, 2, 3])
//naive solution
function sumZero(arr) {
    for (let i=0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

//Refactor
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            retur [arr[left], arr[right]]
        } else if(sum > 0) {
            right--;
        } else {
            left ++
        }
    }
}

//Naive solution for counting unique values
function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    let count = 0
    for (let i=0; i < arr.length; i++) {
      let j = i + 1
      let boolean = true
      while (j < arr.length && boolean === true) {
          let diff = arr[i] - arr[j];
          if (diff === 0) {
              boolean = false
              count++
          }  else {
              j++
          }
      }
    }
  
        return (arr.length - count)
    
  }

  function countUniqueValues(arr){
    if(arr.length === 0) {
        return 0
    }
    var i = 0;
    for (var j = 1; j < arr.length ; j++) {
        if (arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
  }
  [1,1,2,3,3,4,5,6,6,7]


function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null
    } 
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++) {
        temp = 0;
        for (let j=0; j < num; j++) {
            temp += arr[i+j];
        }
        if (temp > max) {
            max = temp
        }
    }
    return max
}

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
        tempSum += arr[i]
    }
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

Two points starting from the left

Updating first pointer only on condition

Two unique values that do not match 

// function countUniqueValues(arr) {
//     var i = 0;
//     for (var j=1; j < arr.length; j++) {
//         arr[i] arr[j]
//     }
// }
// [1, 1, 2, 3,]

Longest string of unique characters 
'hellothere'

Looks like it's going to be our longest string of unique charactes '
Finding a max subarray sum 

Divide and Conquer 
Binary search 
Pick a large array 
If it's sorted' Need a sorted array for this to work 
If we knew the value we were looking for is large 


function search(arr, val) {
    for (i=0; i< arr.length; i++){
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}

Binary search
Takes in sorted array

function binarySearch(arr, val) {
    let min = 0;
    let max = array.length - 1
    while (min <= max) {
        let middle = Math.floor((min+max) / 2);
        let currentElement = array[middle];
    
        if (array[middle] < val) {
            min = middle + 1;
        } else if (array[middle > val]) {
            max = middle - 1;
        } else {
            return middle
        }
    }
    return -1;
}


sameFrequency
Given two positive integers, find out if 
the two numbers have the same frequency of digits 

Time: O(N)

sameFrequency(182,281) //true
sameFrequency(34,14) //false

function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    let num1String = num1.toString()
    let num2String = num2.toString()
    if (num1String.length !== num2String.length) {
        return false;
    }
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    for (let val of num1String){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    
    for (let val of num2String){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
      }
   return true;
  }

  function areThereDuplicates(arr) {
    // good luck. (supply any arguments you deem necessary.)
    let frequencyCounter = {}
    for (let i=0; i < arr.length; i++) {
      let value = arr[i]
      frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
    }
    
  //   for (let i=0; i< frequencyCounter.length; i++) {
  //       if (frequencyCounter[i] > 1) {
  //           return true
  //       }
  //   }
      for (let key in frequencyCounter) {
          if (frequencyCounter[key] > 1) {
              return true;
          }
        }
  
    return false;
  }
  


  function areThereDuplicates(arr) {
    let frequencyCounter = {}
    for (let i=0; i < arr.length; i++) {
      let value = arr[i]
      frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
    }
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            return true;
        }
    }
  
    return false;
  }
  

sameFrequency solution

function sameFrequency(num1, num2) {
    let strNum1 = num1.toString()
    let strNum2 = num2.toString()
    if (strNum1.length !== strNum2.length) return false;

    let countNum1={}
    let countNum2={}

    for(let i=0; i<strNum1.length; i++) {
        countNum1[strNum[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }
    for(let i=0; i<strNum2.length; i++) {
        countNum2[strNum[i]] = (countNum2[strNum2[i]] || 0) + 1;
    }
    for (let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
    }
    return true
}

areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}
areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

function averagePair(arr, avg){
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        let thisAvg = (arr[start] + arr[end])/2
      if(thisAvg === avg){
          return true
      } else if (thisAvg < avg){
          start++
      } else {
          end--
      }
    }
    
  
    return false
  }

  averagePair Solution
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}

function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let i1 = 0
    let j2 = 0
    if (!str1) return true;
    while (j2 < str2.length) {
        if(str1[i1] === str2[j2]) i1++;
        if(i1 === str1.length) return true;
        j2++
    }
    return false
        
   
    
  }


  function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
        tempSum += arr[i]
    }
    for (let j=num; j< arr.length; j++){
      tempSum = tempSum - arr[j-num] + arr[j]
      maxSum = Math.max(maxSum, tempSum)
        
    }
    return maxSum;
  }

  function minSubArrayLen(arr, num){
    let minLength = Infinity;
    let start = 0;
    let end = 0;
    let total = 0;
    while (start < arr.length){
          
    if(total < num && end < arr.length) {
        total = total + arr[end]
        end++
    } else if (total >= num){
        minLength = Math.min(minLength, end - start)
        total = total - arr[start]
        start++
    } else {
        break
    }
    }
  
 
    
    
    return minLength === Infinity ? 0: minLength;
    
}

findLongestSubstring Solution
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

Take an array and look at each Element,
One element at a time, eliminating everything else after it

Is it odd? 
Taking one problem
Doing it over and over on a smaller piece until you getComputedStyle
to the ending, called the base case  
2 essential components of recursive function 

function countDown(num){
    if(num<=0){
        console.log("All done!")
        return;
    }
    console.log(num)
    num--
    countDown(num)
}


The call stack
It's a stack data structure'
Any time you remove from whatever's on top
Any time a function is invoked it is placed pushed on the top of the stack'
klj

function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

You have 5 seconds and that's it
email person re job '
8 people
1 blog pulse
keep committing
Fill out sheet 

Know you will never feel like doing something
Start walking start moving 
5 seconds 
If you start walking if you want to talk to SVGComponentTransferFunctionElement
Send an email to someone 

function same(array1, array2){
    //If the lengths of the two arrays are different, they cannot hold the same values
    if(array1.length !== array2.length){
        return false;
    }
    //Iterate through array1
    for(let i=0; i < array1.length; i++){
        //use .indexOf to find the index in array2 whose value matches array1[i]
        let correctIndex = array2.indexOf(array1[i]);
        if (correctIndex === -1){
         //if correctIndex is -1, then the array1[i] value is not inside array2
            return false;
        } else { 
        //if correctIndex is inside array2, use splice to remove that value from array2
            array2.splice(correctIndex,1);
        }
    }
    //We already established that array1 and array2 are the same length
    //If we go through each element in array1 and find a matching index in array2,
    //while removing those matching elements in array2, the two arrays are the same.
    return true;
}


function same(array1, array2){
    //If the lengths of the two arrays are different, they cannot hold the same values
    if(array1.length !== array2.length){
        return false;
    }
    // Create object literals to store the number of times an element appears in each array
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    //Iterate through the first array
    for (let i=0; i < array1.length; i++) {
        let val = array1[i];
        if (frequencyCounter1[val]) {
            //If the element is repeated, add its frequency to the counter object
            frequencyCounter1[val] = frequencyCounter1[val] + 1;
        } else {
            //If the element is found for the first time, start its count at 1
            frequencyCounter1[val] = 1;
        }
    } 
    //Iterate through the second array
    for (let i=0; i < array2.length; i++) {
        let val = array2[i];
        //A cleaner way to check if the element is repeated, add its frequency to the 
        //counter object. If the element is found for the first time, start its count at 1
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            //If the key in frequencyCounter1 does not appear as a key in frequencyCounter2
            return false;
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            //If the frequencies of the key (element value in original array) in both counters does not match
            return false;
        }
    }
    //We already established that array1 and array2 are the same length
    //If we go through each key of the elements in frequencyCounter1 and establish that same key
    //exists in frequencyCounter2 with their frequencies being the same, the two arrays are holding the same
    //values the same number of times
    return true;
}


What is recursion? 
A function that calls itself 
Again and again on a smaller list

Recursion occurs all over the place 
Can have a function calling itself over and over inside a nested 
JSON.parse and JSON.stringify are recursion 
document.getElementById and DOM traversal algorithms
Object traversal 
We will see it with more complex data structures 

It's sometimes a cleaner alternative to iteration '

To write effective recursive code that doesnt break
Functions are waiting for other functions to occur 
If you have a function called first then have a second function 
Theres a thing called a call stack
A data structure called a stack 
When a function is invoked, it is placed on the top of the call stack 
When a function ends the compiler will remove the function from the stack 

You put something on top, when you remove something you remove from the top 
The removal is a pop 

random item from array 
return arrayName[Math.floor(Math.random()*arrayName.length)]

Recursive functions keep pushing a new function onto the call stack obver and over again

2 things in any recursive function 
1) Base case: the condition when the recursion ends
This is the most important concept to understand

2) Different input. the recursive call that I'm calling '
over and over again with a different piece of data
What I would want to do is change the list and chop off one number 
at the beginning and try to do the same thing until
We hit an empty list

Our first recursive function

Countdown

function countDown(num) {
    if(num <= 0){
        console.log('all done');
        return;
    }
    console.log(num)
    num--;
    countDown(num)
}
Javascript uses the cll stack to manage function invocagtions

Ch. 44: Our Second Recursive function 
Base case almost always involves conditional and it returns something
There is an endpoint . 
Base case is if(num===1)
recursive call is return num + sumRange(num-1)


function sumRange(num){
    if(num === 1) return 1
    return num + sumRange(num-1)
}




This function is returning over and over again.
Going to keep returning num: 3 + sumRange(2)
    num: 3 + 2 + sumRange(1)
    num: 3 + 2 + 1 




Ch. 45: Writing factorial iteratively
4 * 3 * 2 * 1

//Factorial without recursion
function factorial(num){
    let total = 1; 
    for (let i = num; i > 0; i--){
        total *= i
    }
    return total
}

Ch. 46: Writing factorial recursively

//Factorial with recursion
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1)
}



if(num === 1) return 1; is base case 
return num * factorial(num-1); is recursive call

Ch 47.
What goes wrong with recursive solutions:
1) no base case
2) returning the wrong thing or forgetting to return something in the first case

if(num === 1) console.log(1); is base case...result would be maximum call stack size exceeded
Importance of returning is what recursion is built on

Waiting and primed on a chain. 
Add and multiply someting to keep going until we get to the original one called facotrial 2

Stack overflow: More than maximum number of calls have been exceeded
See Stack overflow message means recursion is not stopping 

Ch 48: Helper Method recursion

Helper Method recursion is just a pattern where we have an outer function that 
is not recursive that calls an inner function which is recursive
 

function outer(input){
    var outerScopedVariable = []
    function helper(helperInput){
        //modify the outerScopedVariable
        helper(helperInput--)
        helper(input)

        return outerScopredVariable;
    }
}

function collectOddValues(arr){
    let result = [];
    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)

    return result
}

We do this b/c if we try to define result = [], resets it every time
Helper method recursion helps us push into an array

Graph section of course will use helper method recursion

Ch 49: Pure Recursion
No nested function helper method 


function collectOddValues(array){
    let newArr = []
    if (array.length === 0){
        return newArr
    }
    if(array[0] % 2 !== 0){
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues(array.slice(1)));
    return newArr;
}

[1, 2, 3, 4, 5]

newArr = [1].concat(collectOddValues([2,3,4,5]))
newArr = [1].concat([]).concat(collectOddValues([3,4,5]))
newArr = [1].concat([]).concat([3]).concat(collectOddVales([4,5]))



Pure Recursion Tips
For arrays, use methods like slice, the spread operator, and concat
that makes copies of arrays so you do not mutate them
This will allow you to accumulate some sort of result
Strings are immutable so you will need to use methods like slice, substr or substring to make copies of strings 
To make copies of objects, use Object.assign or the spread operator


ch 50: Recursion Problem Set

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    if(exponent === 0){
        return 1;
    }
    return base * power(base, exponent-1)
}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    if(num === 0) return 1;
    return num * factorial(num-1)
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array){
    if(array.length === 0) return 1;
    return array[0] * productOfArray(array.slice(1))
}




Recursive range accepts a number and adds up all the numbers from 0 to the 
number passed in the function 
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
    if (num === 0) return 0;
    return num+recursiveRange(num-1)
}

Recursive function caled fib which accepts a number and returns the 
nth number in the Fibonacci sequence 
Fibonacci sequence starts with 1,1 then adds last two numbers for next number

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


//wrong
// function fib(num){
//   // add whatever parameters you deem necessary - good luck! 
//   let fibResult = [1, 1]
//   if(num === 1 || num === 2){
//       return 1;
//   }
//   function fibAdd(index){
//       if(num - 1 === index){
//           return fibResult[index-1] +fibResult[index-2];
          
//       } 
//       fibResult.push(fibResult[index-1] + fibResult[index - 2])
//       fibAdd(index+1)
//   }
//   fibAdd(2)
// }

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}


function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    let newArr = []
    function capArr(array){
        if (array.length === 0){
            return;
        }
        newArr.push(array[0].charAt(0).toUpperCase()+array[0].slice(1))
        capArr(array.slice(1))
    }
    capArr(arr)
    return newArr
  }
  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }

  function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
    let newArr=[]
    function capArray(array){
        if (array.length === 0){
            return;
        }
        newArr.push(array[0].toUpperCase())
        capArray(array.slice(1))
    }
    
    
    capArray(arr)
    return newArr
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

  stringifyNumbers Solution

  function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }

  The Array.isArray() method determines whether the passed value is an Array.
  function collectStrings(obj){
    let arrayString = []
    for (var key in obj){
        if(typeof obj[key] === 'string'){
            arrayString.push(obj[key])
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
             arrayString = arrayString.concat(collectStrings(obj[key]));
        }
        
    }
    return arrayString
    
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])

capitalizeWords Solution

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
nestedEvenSum Solution

function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}
capitalizeFire Solution

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}
stringifyNumbers Solution

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}
collectStrings Solution: Pure Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}


Ch 57: Linear Search

Look at every element in order and see if it is what we want
Keep going until we find it or weree at the end

usernames.indexOf('tom')
usernames.includes('tom')
function linearSearch(arr, value){
    // add whatever parameters you deem necessary - good luck!
    for (let i=0; i<arr.length;i++){
        if (arr[i] === value){
            return i;
        }
    }
    return -1
  }

  Linear search Big O
  Best case O(1)
  Average case O(n)
  Worst case O(n)

Binary search is muc faster form of search
Rather than eliminating one element at a time, you can eliminate half of the remaining elements at
a time 
Binary search only works on sorted arrays
    Number lowest to highest or highest to lowest
    Or strings alphabetically sorted

This is a very short array in the grand scheme of things
Tiniest fraction of a second we are saving with binary search 
Binary search works by picking a halfway point and guess roughly 
States[29]
Check the middle sorted.
Check if its greater than or less than 

Implementation is done with divide and conquer 


Accepts a sorted array and a value
Create a left pointer at the start of the array and a right pointer
at the end of the array
Left is 0, right is array.length-1 
Loop over and over.
While the left pointer comes before the right pointer 
Create a pointer in the middle  
Check in each loop:
1) have I found the element
2) left is positioned before right value 
2a) Createa  pointer in the middle 
3) Is the element in the middle greater than or less than value
 a) if middle value is too small, move the left pointer up
 b) if middle value is too large, move the right pointer down 
 if you never Left at the beginning, right is the end
Check if its bigger than or less than
eliminate, make a new left and keep current right
Check middle point if its on the right side or left side
ch 62: solution

function binarySearch(array, value){
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((end + start) / 2)
    while (array[middle] !== value && start <= end){
       if (array[middle] > value){
           end = middle - 1
       } else if (array[middle] < value) {
           start = middle + 1
       } 
       //if(value<array[middle]) end = middle - 1;
       //else start = middle + 1;
       middle = Math.floor((end + start) / 2)
    }
    if (array[middle] === value){
        return middle;
    } else {
        return -1;
    }
    //return arr[middle] === value ? middle: -1;
    
  }
  
  Big O for binary search is O(log n) for worst case and average case
  Best case is O(1)
  
  Ch 64: Naive String Search
  
  Suppose I want to count the number of times
  
  Long string we are searching for: 
//   And we are looking for a smaller string inside of it
Loop over longer string
Loop over shorter string
If the characgers don't natch, break out of the inner loop
If the characters do match, keep going
If you complete the inner loop and find a match, increment the count of matches
REturn the count'
function naiveSeach(long, short){
    let count = 0;
    for (let i=0; i < long.length; i++){
        for (let j=0; j< short.length; j++){
            if (short[j] !== long[i+j]){
                break
            } 
            if (j === short.length - 1) {
                count ++
            }
        }
    }
    return count
}

Javascript .sort()
Takes in and converts everything to a string and looks 
at unicode to compare and sort them

The built in sort method accepts an optional comparator function
You can use this comparator function to tell JavaScript how you want it to sort

The comparator looks at pairs of elements (a and b),
determines their sort order based on the return value

If it returns a negative number, a should come before b
If it returns a positive number, a should come after b
If it returns 0, a and b are the same as far as the sort is concerned

function compareByLen(str1, str2){
    return str2.length - str1.length
}

arrayName.sort(compareByLen)

Bubble sort. 
Compare two elements, higher element goes toward the top 

function swap (arr, idx1, idx2){
    let temp = arr[idx1]
    arr [idx1] = arr[idx2]
    arr [idx2] = temp
}

//Using ES6
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

Start looping from with a variable called i at the end of the array 
towards the beginning
Start an inner loop with a variable called j from the beginning until i - 1
If arr[j] > arr[j+1], swap those two values!
Return the sorted array

function bubbleSort(arr){
    let noSwaps;
    for (var i = arr.length; i > 0; i--){
        noSwaps = true;
        for (var j = 0; j < i-1;j++){
            if (arr[j] > arr[j+1]){
                //swap
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}

function bubbleSort(arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
        for (let i = arr.length; i > 0; i--){
            for (let j = 0; j< i -1; j++) {
                if (arr[j] > arr[j+1]){
                    swap(arr, j, j+1)
                }
            }
        }
    return arr
}


Bubble sort best case is O(n) Worst case is O(n^2) Average case is O(n^2)
Bubble sort is good if you are nearly sorted already


Selection sort
Similar to bubble sort, but insead of first placing large values into sorted
position, it plaes small values into sorted position.
Selection sort finds the minium, swaps it to the end, then places at the 
beginning

Stay at the first index 
Compare it to all of them. Keep going and comparing until we find which one is the smallest
And we then swap the first element with the smallest element
Then we start from 44 

function selectionSort(arr){
   for (let i = 0; i < arr.length; i++){
       let lowest = i;
       for (let j = i + 1; j < arr.length; j++){
        if (arr[j] < arr[lowest]) {
            lowest = j
        }
       }
       if (i !== lowest){
        var temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp
        }
   }
   return arr
}

Ch 79: Insertion Sort

Gradually sorts as we're going through each of the elements in the array'
Sort the first two, then the first 3, then the first 4 

Start by picking the second element in the array:
Now compare to one before it and swap if necessary
Continue to next element and if it is in  the incorrect order, iterate through
The sorted portion (i.e. the left side) to place the element in the correct place.
Repeat until the array is sorted 

//Gotta look up what's going on with insertionSort
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}

Bubble sort:
Best case O(n), Avg O(n^2), Worst O(n^2), Space complexity O(1)
Insertion Sort:
Best case O(n), Avg O(n^2), Worst O(n^2), Space complexity O(1)
Selection Sort:
Best case O(n^2), Avg O(n^2), Worst O(n^2), Space complexity O(1)


Merge Sort

These sorts are much faster, but also much more challenging to understand

Use merge sort to change O(n^2)
Turning into O(n log n)

There's a tradeoff between efficiency and simplicity'
The more efficient algorithms are much less simple,
and generally take longer to understand 

When a function calls itself either directly or indirectly, it is said to be making a recursive call. . We can view a recursive routine as consisting of two parts.
The recursive case. When the instance of the problem is still too large to solve directly, we split the problem into two or more smaller parts. It must be the case that the entire problem can be solved if each of the subproblems are solved.
The basis (or ground) case. When the instance of the problem is small enough to be solved directly, we solve it. If the routine is a function, return the result of this subproblem to the function which called it.



The basic idea behind solving problems via recursion is to break the instance of the problem into smaller and smaller pieces until the pieces are so small they can be solved trivially.
A function that calls itself
Again and again on a smaller list
Recursion occurs all over the place
Can have a function calling itself over and over inside a nested
JSON.parse and JSON.stringify are recursion
document.getElementById and DOM traversal algorithms
Object traversal
We will see it with more complex data structures
Recursion can be a sometimes cleaner alternative to iteration. Functions are waiting for other functions to occur. If you have a function called first, then have a second function.
Recursion occurs most in a call stack.
It's sometimes a cleaner alternative to iteration '
To write effective recursive code that doesnt break
Functions are waiting for other functions to occur
If you have a function called first then have a second function
Theres a thing called a call stack
A data structure called a stack
Recursive functions keep pushing a new function onto the call stack over and over again. When a function is invoked, it is placed on the top of the call stack. When a function ends the compiler will remove the function from the stack. You put something on top, when you remove something you remove from the top (removal is a pop in JavaScript).
What I would want to do is change the list and chop off one number
at the beginning and try to do the same thing until
We hit an empty list
ase case almost always involves conditional and it returns something
There is an endpoint .ß


Merging two sorted arrays 
1 array that is returned . 
Logic for this one maes sessionStorage. 

First implement a function responsible for merging two sorted arrays
Given two arrays which are sorted, this helper function should create a new array which import {  } from "also sorted 
and consists of all of the elements in the two input rrays
O(n+m) time and O(n+m) space and should not modify the parameters passsd in

Create an empty array, take a look at the smallest values in each input array
While there are still values we havent looked at...array  
   If the value in the first array is smaller than the value in the second array 
   push the value in the first array into our results and move on to the next value in the first 
   array. If the value in the first array is larger than the value in the second array, push
   the value in the second array into our results and move on to the next value in the second array 
   Once we exhaustone array, push in all remaining values from the other array 
   
   merge ([1, 10, 50], [2, 14, 99, 100])
   
   [1, 10, 50] [2, 14, 99, 100]
   
   [1, 2, 10, 14, 50, 99, 100]

   function merge(arr1, arr2){
       let results = []
       let i = 0
       let j = 0
        while(i < arr1.length && j < arr2.length){
            if(arr2[j] > arr1[i]){
                results.push(arr1[i]);
                i++;
            } else {
                results.push(arr2[j]);
                j++;
            }
        }
        while (i < arr1.length) {
            results.push(arr1[i]);
            i++
        }
        while (j < arr2.length){
            results.push(arr2[j]);
            j++
        }
       return results; 
   }

   mergeSort Pseudocode 
   Break up the array into halves until you have arrays that are empty or havve one element
   Use slice to go from beginning to middle array and from middle array to end 

   Break up array nto halves recursively until you hit the end. 

   Once you have smaller sorted arrays, merge those arrays withother sorted arrays until you are back at the full 
   length of the array
   Once the array has been merged back together, return the merged (and sorted!) array 


function merge(arr1, arr2){
    let results = []
    let i = 0
    let j = 0
     while(i < arr1.length && j < arr2.length){
         if(arr2[j] > arr1[i]){
             results.push(arr1[i]);
             i++;
         } else {
             results.push(arr2[j]);
             j++;
         }
     }
     while (i < arr1.length) {
         results.push(arr1[i]);
         i++
     }
     while (j < arr2.length){
         results.push(arr2[j]);
         j++
     }
    return results; 
}

function mergeSort(arr){
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)

}

mergeSort([10, 24, 76, 73, 1, 9])

Using slice
var arr= [10, 24, 76, 73, 72, 1, 9]
arr.slice

Math.floor

Merge Sort
Time Complexity Best case O(n logn)
Time Complexity AVerage case O(n log n)
Time Complexity Worst case O(n log n)
Space complexity O(n)

[8] [3] [5] [4]
    [8, 3] [5, 4]
    [3, 4, 5, 8]
    Takes log n steps, each step goes through n operations to sort
        Thus O(n log n) time complexity
   
   
Ch 92 Quick sort: 
Like merge sort exploit fact that arrays of 0 or 1 element are always sorted
Works by selecting one element (called the 'pivot') and finding the index here the pivot 
should end up in the sorted array 

[5, 2, 1, 8, 4, 7, 6, 3]
Take 5 
[3, 2, 1, 4, 5, 7, 6, 8]
We know 5 is in the correct spot 4
Now we repeat process on left side 
Take 3 
[2, 1, 3, 4, 5, 7, 6, 8]
Take 2
Now we repeat process 
[1, 2, 3, 4, 5, 7, 6, 8]
Take 1 
Take 4 

We keep track of which elements are less than 11 
swap 
        
Pivot should be the median value in the data set ";
Pivot Pseudocode "
3 arguments: array, start index (default 0), end index (default array.length -1) 
Grab pivot from start of array
Store pviot index in a variable 
Loop through array from start until end 
    If pivot > current element, imcrement the pivot index variable and then 
    swap the current element and then wap the current element with the element 
    as the pivot index
    swap the starting element (i.e. the pivot) with the pivot index 
    dljdfjakldja;jf

function pivot(arr, start=0; end=arr.length -1){
    var pivot = arr[start];
    var swapIdx = start;
    function swap(array, i, j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    for (var i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

quicksort pseudocode 
Checking if start and end points are equal to one another
Call pivot helper on array
When helper returns to you the updated pivot index, recursively call the 
pivot helper on the subarray to the left of that index, and the subarray 
to the right of that index
Your base case occurs wehn you consider a subarray with less than 2 elements
function quickSort(arr, left,=0, right = arr.length-1){
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left 
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, end)
    }
    return arr;
}

Worst case, quicksort is O(n^2)
That is if you make the start of the array the beginning of the pivot 
If you pivot along the middle every time, then you can avoid picking the 
first one every time 

Instead, pick a random number or pick the median for the pick sort 
Average time for quick sort is O(n log(n))

Bubble sort: O(n^2)
Insertion Sort: O(n^2)
Selection Sort: O(n^2)
Quick Sort: O(n log(n))
Merge Sort: O(n log(n))

Other types of sorting algorithms that are not comparison algorithms 

Radix Sort Ch 99:
Radix sort is a special sorting algorithm that works on lists of numbers

It never makes comparisons between elements

It exploirts the fact that information about the size of a number is encoded
in the number of digits. 
More digits means a bigger number 

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
Group them into buckets based off the number 
Number on the right most positions 
No matter how many digits are in it, we group them into bucketas based on its right 
Most digits 
Then form into a list keeping them in the order with 1's, then 2's and so on 
Then we repeat the process looking at digit to left 
Second digit 
Means we can have 07 and 408 both in the 0 column 

PUtting things in buckets, but when removing them they are rmeoved in the same 
Order that they are placed in the bucket 

//returns the digit in num at the given place value 
function getDigit(num, i){
    //using Math.abs so I can also use negative numbers 
    //0 as i for single digit
    //1 as i for tens
    //2 as i for hundreds 
    return Math.floor(Math.abs(num)/ Math.pow(10,i)) % 10;
}

digitCount 
returns the number of digits in a given number 

function digitCount(num){
    //b/c Math.log10(0) is -Infinity
    if (num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(MaxDigits, digitCount(nums[i]));
    }
    return maxDigits
}

Radix sort 
Pseudocode 
define a function that accwepts a list of numbers 
Figure out how many digits the largest number has
Loop from k=0 up to this largest number of digits 
For each iteration of the loop: 
    Create buckets for each digit (0 to 9)
    Place each number in the corresponding bucket based on its 
    kth digit
Replace our existing array with values in our buckets, starting
With 0 and going up to 9
Return list at the end

function getDigit(num, i){
    //using Math.abs so I can also use negative numbers 
    //0 as i for single digit
    //1 as i for tens
    //2 as i for hundreds 
    return Math.floor(Math.abs(num)/ Math.pow(10,i)) % 10;
}

//helper
function digitCount(num){
    //b/c Math.log10(0) is -Infinity
    if (num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
//helper
function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(MaxDigits, digitCount(nums[i]));
    }
    return maxDigits
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length:10}, () => [])
                //Another way to write [[] 10 times]
        for let(i = 0; i < nums.length; i++){
            // digitBuckets[getDigit(nums[i], k)].push(nums[i])
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
        ///use the spread operator to wind up with the values turned 
        //into an array 

    }
    return nums;
}

Radix Sort
Time Complexity (best) O(nk)
Average: O(nk)
Worst: O(nk)
Space complexity O(n+k)

B/c of ways computers store info 
O(nk) becomes O(n log n)
Saying this is same as n log n
If saying radix sort is not as fast as it should be 

classes
SyntaxError
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//The method to create new objects must be called ocnstructor

//The class keyword creates a constant, so y ou cannot redefine it.
//Watch out for the syntax as well

//Whatever is passed in when a new student is creted, assign those two properties to that student 

//Creating objects from classes
We use the new keyword

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lstName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.targies >= 3) {
            return "You are expelled!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }
}

let firstStudent = new Student("Colt", "Steele")
let secondStudent = new Student("Blue", "Steele")

let John = new Student("John", "Smith", 3rd)

John.firstName => "John"
Can also update his grade
John.grade = 2nd

John => Student (firstName: "John", lastName: "Smith", grade: 2nd)
John.fullName() => "Your full name is John Smith"
John.markLate() => "John has been late 2 times"
j is 45 and undefined 

secondStudent.addScore(92)
=> 92
secondStudent.addScore(87)
=> [92, 87]
secondStudent.calculateAverage()
=> 89.5

Using static 

static methods cannot be called through a class instance. 
Static methods are for utility funcitons for out method 

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lstName}`;
    }
    static enrollStudents(...students){
        // maybe send an email here
    }
}

Student.enrollStudents([John, secondStudent])

firstStudent.EnrollStudents()

static distance(a,b){
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
}

const p1 = new Point(5,5)
const p2 = new Point(10, 10)
Point.distance(p1, p2)
    static makes it a class method 
Instance methods are called on an individual instance

How we'll be using classes ' Well be defining a class
class DataStructure(){
    constructor(){
        //what default properties should it have?
    }
    someInstanceMethod(){
        // what should each object created from this class be able to do?
    }
}

We will be using constructor and isntance methods quite a bit 
We will amost never be using static methods 

Most of it will follow this pattern 

Class datastructure/instance method 

One gotcha with 'this'
Inside all oof our instanc emthods and constructor, the keyword 'this' refers 
to the object created from that class (also known as an instance)

Classes are bluepreints that when created make objects known as instances 

Classes are created with the newq keyword 

The constructor function is a special function that gets run when the class is instantitaed

Instance methods can be added to classes similar to methods in objects

Class methods can be added using the static keyword 

Going to use this class keyword in almost every data structure we make 

Singly Linked List Ch. 110
Singly linked list class for DataTransferItemList

A linked list is a bunch of elements with no indices that are pointing to the next element 
A Headers, tail, and length property 
Each element is a node, each node has a value and a pointer to another node or null 

Head is like index 0
Tail is like list.length 
Each item points to the next item
A bunch of nodes pointing to other nodes 

Singly linked list points to next node 
Doubly linked list points to next node and previous node 

Connected via nodes with a next pointer 
Random Access is not allowed 

Arrays are indexed in order, insertion and deletion can be expensiven, can quickly be accessed
at a specific index 

class Node )
()
for )

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var first = new Node("Hi")
first.next = newNode("there")
first.next.next = new Node("there")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you")

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
    push(val){
       
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")

Pushing into Singly Linked List 
Push a value 
Creat a new node using the value passed to the function
If there is no head property on the list, set the head and tail to be the newly cdreated node
If there is a head, set the next property on the tail to be the new node 
And set the tail property on the list to be the newly created node 
Increment the length by one

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
    push(val){
       var newNode = new Node(val)
       if(!this.head) {
           this.head = newNode;
           this.tail = this.head
       } else {
           this.tail.next = newNode;
           this.tail = newNode
       }
       this.length++;
       return this;
    }
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val;)
            current = current.next
        }
    }
}
list.push(99)
list.head => "Hi
list.head.next"
list.head
list.head.next

Popping pseudocode 
If there are no nodes in the list, return undefined 
Loop through the list until you reach the tail 
Set the next property of the 2nd to last node to be null 
Decrement the length of the list by 1
Return the value of the node removed 

//with pop
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
    push(val){
       var newNode = new Node(val)
       if(!this.head) {
           this.head = newNode;
           this.tail = this.head
       } else {
           this.tail.next = newNode;
           this.tail = newNode
       }
       this.length++;
       return this;
    }
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val;)
            current = current.next
        }
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current; 
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
        //can also do if(this.head === this.tail)
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head 
        this.head = currentHead.next 
        this.length--
        if(this.length === 0) {
            //can also do if(this.head === this.tail)
                this.tail = null;
            }
        return currentHead 
            //this is an old head that we just shifted off 
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("!")

list.pop()

Reassigning new head, it's O(1 time)

Shifting pseudocode 

If there are not nodes, return undefined 
Store the current head property in a variable 
Set the head property to be the current head's next property
Decrement the length by 1
Return the value of the node removed 


Unshifting ch 117
Add a new node to the beginning of the LInked List
Take the old head, point the new head at the old head and move the new head.
This function should accept a value 
Create a new node using the value passed to the function 
If there is no head property on the list, set the head and tail to be the newly
created node 
Otherwise set the newly created node's next property to be the current head propetry on the list 
Set the head property on the list to be that ' newly created node 

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
    push(val){
       var newNode = new Node(val)
       if(!this.head) {
           this.head = newNode;
           this.tail = this.head
       } else {
           this.tail.next = newNode;
           this.tail = newNode
       }
       this.length++;
       return this;
    }
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val;)
            current = current.next
        }
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current; 
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
        //can also do if(this.head === this.tail)
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head 
        this.head = currentHead.next 
        this.length--
        if(this.length === 0) {
            //can also do if(this.head === this.tail)
                this.tail = null;
            }
        return currentHead 
            //this is an old head that we just shifted off 
    }

    unshift(val){
        var newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
            
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >- this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index){
            current = current.next
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index)
        if (foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

}

Get pseudocodeThis function should accept an index 
If the index is less than zero or greater than or equal to the length of the list, return null
Loop through the list until you reach the index and return the node at that specific index 

var list = new SinglyLinkedList()
list.push("Hello")
counter 
list.push("Goodbye") current equals this, counter is 0
list.push("!") current equal this, counter is 1
list.push("<3") current equals this, counter is 2
list.push("eyes") current equals this, counter is 3 

This is when counter is equal to the index, 3, so now we just return current ('eyes')

list.get(100) => null
list.get(3) => "eyes"

Set pseudocode 
This function should accept a value and an index 
Use your get function to find the specific node
If the node is not found, return false
If the node is found, set the value of that node to be the value passed 
to the function and return true

list.set(3, "!!!") => Node {val "!!!"}
list.set(numberThatDoesNotExist, "...") => false 

Insert, allows me to insert at a specific index 
Pseudocode:
If the index is less than zero or greater than the length, return false 
If the index is the same as the length, push a new node to the end of the list 
If the index is 0, unshift a new node to the start of the list
Otherwise, using the get method, access the node at the index -1 
Set the next property on that node to be the new node 
Set the next property on the new node to be the previous next 
Increment the length
Return true  

insert(index, val){
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
                                //If I want to return true here 
                            //{this.push(val)
                            //return true}
        if (index === 0) return !!this.unshift(val)
                            //If I want to return true here 
                            //{this.unshift(val)
                            //return true}
        var prev = this.getIndex(index - 1)
        var newNode = new.Node(val)
        var temp = prev.next
        prev.next = newNode 
        newNode.next = temp
        this.length++
        return true;
}

Remove pseudocode 
If the index is less than zero or greater than the length, return undefiend
If the index is the same as length-1, pop 
If the index is 0, shift
Otherwise, using the get method, access the node at the index -1
Set the next property on that node to be the next of the next node
Decrement the length
Return the value of the node removed 

remove(index){
    if(index < 0 || index >= this.length) return undefined //or false 
    if(index === 0) return this.shift();
    if(index === this.length) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next; 
    previousNode.next = removed.next 
    this.length--;
    return removed;
}


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
    push(val){
       var newNode = new Node(val)
       if(!this.head) {
           this.head = newNode;
           this.tail = this.head
       } else {
           this.tail.next = newNode;
           this.tail = newNode
       }
       this.length++;
       return this;
    }
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val;)
            current = current.next
        }
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current; 
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
        //can also do if(this.head === this.tail)
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head 
        this.head = currentHead.next 
        this.length--
        if(this.length === 0) {
            //can also do if(this.head === this.tail)
                this.tail = null;
            }
        return currentHead 
            //this is an old head that we just shifted off 
    }

    unshift(val){
        var newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
            
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >- this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index){
            current = current.next
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index)
        if (foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
                                //If I want to return true here 
                            //{this.push(val)
                            //return true}
        if (index === 0) return !!this.unshift(val)
                            //If I want to return true here 
                            //{this.unshift(val)
                            //return true}
        var prev = this.getIndex(index - 1)
        var newNode = new.Node(val)
        var temp = prev.next
        prev.next = newNode 
        newNode.next = temp
        this.length++
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined //or false 
        if(index === 0) return this.shift();
        if(index === this.length) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next; 
        previousNode.next = removed.next 
        this.length--;
        return removed;
    }
    print(){
        var arr = [];
        var current = this.head; 
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    reverse(){
        var node = this.Head 
        this.head = this.tail 
        this.tail = node
        var prev = null 
        //prev is null to make sure the end of our list, the tail is null
        var next; 
        for(i=0; i<this.length; i++){
            //can also do a while loop here
            next = node.next
            node.next = prev
            prev = node; 
            node = next;
        }
        return this;
    }
}

list.remove(0)
list.remove(-1) => undefined //or false if I want it to 
list.remove(15)

Reverse 
Reversing the linked list in place!
Swap the head and the tail 
Create a variable called next 
Create a variable called prev 
Create a variable called node and initialize it to the head property 
Loop through the list 
Set next to be the next property on whatever node is; 
Set the next property on the node to be whatever prev is;
Set prev to be the value of the node variable; 
Set the node variable to be the value of the next variable 

Helper method called print
//to help us see what is happening in reverse 
print(){
    var arr = [];
    var current = this.head; 
    while(current){
        arr.push(current.val)
        current = current.next
    }
    console.log(arr)
}
reverse(){
    var node = this.Head 
    this.head = this.tail 
    this.tail = node
    var prev = null 
    //prev is null to make sure the end of our list, the tail is null
    var next; 
    for(i=0; i<this.length; i++){
        //can also do a while loop here
        next = node.next
        node.next = prev
        prev = node; 
        node = next;
    }
    return this;
}


Big O of Singly Linked List 
Insertion O(1)
Removal It depeends...O(1) or O(n)
Searching - O(n)
Acceess - O(n)

Singly Linked Lists excel at insertion and deletion compared to arrays 

Above is Singly LInked Lists:
Next is Doubly Linked Lists 

Each node is pointing to its previous node and the next node
The head is pointing to null for its previous node 
The tail is pointing to null for its next node 
Almost always a trade off between more memory and more flexibility 
)

Node and Doubly Linked Lists 
Node
-val 
-prev
-next 

DoublyLinkedList
-head
-tail 
-length 

class Node{
    constructor(val){
        this.val = val;
        this.next = null; 
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        newNode = new Node(val);
        if(this.length===0) {
            this.head = newNode;
            this.tail = newNode;
        } else { 
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
        //return the entire list 
    }  
    pop(){
        if(!this.head) return undefined;
        // or can use if(this.length === 0) return undefined;
        var poppedNode = this.tail;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        } else {
        this.tail = poppedNode.prev; 
        this.tail.next = null; 
        poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(this.length===0) return undefined;
        let oldHead = this.head;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        } else {
        this.head = oldHead.next; 
        this.head.prev = null;
        oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = newNode(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let current, count;
        if(index <= this.length / 2){
            count = 0; 
            current = this.head; 
            while(count != index){
                current = current.next 
                count++;
            }
        } else{
            count = this.length - 1;
            current = this.tail; 
            while(count !== index){
                current = current.prev; 
                count--;
            }
        }
        return current;=
    }
    set(index, val){
        let foundNode = this.get(index);
        if (foundNode != null){
            foundNode.val = val;
            return true;
        } return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index===0)return this.unshift(val);
        if(index === this.length) return this.push(val);
        
        //keep variable declarations a space apart
        let newNode = new Node(val);
        let beforeNode= this.get(index-1)
        let afterNode = beforeNode.next;

        //keep combined operations together
        beforeNode.next = newNode, newNode.prev = beforeNode;
        afterNode.prev = newNode, newNode.next = afterNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.prev = null, removedNode.next = null;
        this.length--;
        return removedNode;
    }
}

first = new Node(12);
first.next = new Node(13);
first.next.prev = first

Adding push to the end of the doubly linked list 
Create new node with the value passed to the function 
If the head property is null set the head and tail to be the newly created node
If not, set the next property on the tail to be that node 
Set the previous property on the newly created node to be the tail 
Set the tail to be the newly created node 
Increment the length
Return the Doubly Linked List

push(val){
    newNode = new Node(val);
    if(this.length===0) {
        this.head = newNode;
        this.tail = newNode;
    } else { 
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++;
    return this;
    //return the entire list 
}  

Pop pseudocode 
If there is no head, return undefined.
Store the current tail in a variable to be returned later 
If the length is 1, set the head and tail to be null 
Update the tail to be the previous Node 
Set the new Tail's next to null'
decrement the length 
Return the value removed 
WHen I sever the tie, need to remove both references 
    Technically not a problem unless someone finds theother node and
    Go to .prev will return them to list even if it's supposed to be popped off'
pop(){
    if(!this.head) return undefined;
    // or can use if(this.length === 0) return undefined;
    var poppedNode = this.tail;
    if(this.length===1){
        this.head = null;
        this.tail = null;
    } else {
    this.tail = poppedNode.prev; 
    this.tail.next = null; 
    poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
}


Shift
Find the head, make its .next the new head 
New head .prev is null 
Old head .next is null 

If length is 0, return undefined
Store the current head property in a variable, we'll call it old head'
If the length is one 
    Set the head to be null 
    set the tail to be null 
Update the head to be the next of the old head 
Set the head's prev property to be null'
Set the old head's next to be null'
Decrement the length 
return old head 

shift(){
    if(this.length===0) return undefined;
    let oldHead = this.head;
    if(this.length===1){
        this.head = null;
        this.tail = null;
    } else {
    this.head = oldHead.next; 
    this.head.prev = null;
    oldHead.next = null;
    }
    this.length--;
    return oldHead;
}


Unshift will be added to beginning of doubly linked list 
Point new node at the current head, point old head a current new head 
Create a node node with value passed in
If length is 0
    Set the head to be the new node 
    Se tthe tail to be the new node 
Otherwise 
    Set the prev property on the head of the list to be the new node 
    Set the new node.next to the old head 
    Set the new node as the new head 

unshift(val){
    let newNode = newNode(val);
    if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
}

Get pseudocode; 
If the index is less than 0 or greater or equal to the length, return null
If the index is less than or equal to half the length of the list 
    Loop through the list starting from the head and loop towards the middle 
    Return the node once it is found 
If the index is greater than half the length of the list 
    Loop through the list starting from the tail and loop towards the middle
    Return the node once it is found 
get(index){
    if(index < 0 || index >= this.length) return null;
    let current, count;
    if(index <= this.length / 2){
        count = 0; 
        current = this.head; 
        while(count != index){
            current = current.next 
            count++;
        }
    } else{
        count = this.length - 1;
        current = this.tail; 
        while(count !== index){
            current = current.prev; 
            count--;
        }
    }
    return current;=
}

Set
Create a variable which is the result of the get method at the index passed to the function 
    If the get method returns a valid node, set the value of that node to be the value 
    passed to the function 
    Return true
Otherwise, return false 

set(index, val){
    let foundNode = this.get(index);
    if (foundNode != null){
        foundNode.val = val;
        return true;
    } return false;
}

Insert 
    Adding a node in a Doubly Linked List by a certain position 
    Creates a new node at that value and inserts a new node to the linked list 
    Can use get method to find the appropriate place to retrieve and get index

If the index is less than zero or greater than or equal to rthe length return false 
If the index is 0, unshift 
If the index is the same as the length, push 
Otherwise, use get method to access the index -1
Set the next and prev proeprties on the correcvt nodes to link everything togetherInc
Increment the length 
Return true

insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index===0)return this.unshift(val);
    if(index === this.length) return this.push(val);
    let newNode = new Node(val);
    let foundNode = this.get(index - 1)
    let beforeNode= this.get(index-1)
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    newNode.next = afterNode;
    this.length++;
    return true;
}

Remove pseudocode 
If the index is less than zero or greater than or equal to the length, return undefined 
If index is 0, shift
If index is same as the length-1, pop;
Use the get method to retrieve the item to be removed 
Update the next and prev properties to remove the found node from the list 
Set next and prev to null on the found node 
Subtract one from length 
Return removed node

remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null, removedNode.next = null;
    this.length--;
    return removedNode;
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        newNode = new Node(val);
        if(this.length===0) {
            this.head = newNode;
            this.tail = newNode;
        } else { 
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
        //return the entire list 
    }  
    pop(){
        if(!this.head) return undefined;
        // or can use if(this.length === 0) return undefined;
        var poppedNode = this.tail;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        } else {
        this.tail = poppedNode.prev; 
        this.tail.next = null; 
        poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(this.length===0) return undefined;
        let oldHead = this.head;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        } else {
        this.head = oldHead.next; 
        this.head.prev = null;
        oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = newNode(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let current, count;
        if(index <= this.length / 2){
            count = 0; 
            current = this.head; 
            while(count != index){
                current = current.next 
                count++;
            }
        } else{
            count = this.length - 1;
            current = this.tail; 
            while(count !== index){
                current = current.prev; 
                count--;
            }
        }
        return current;=
    }
    set(index, val){
        let foundNode = this.get(index);
        if (foundNode != null){
            foundNode.val = val;
            return true;
        } return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index===0)return this.unshift(val);
        if(index === this.length) return this.push(val);
        
        //keep variable declarations a space apart
        let newNode = new Node(val);
        let beforeNode= this.get(index-1)
        let afterNode = beforeNode.next;

        //keep combined operations together
        beforeNode.next = newNode, newNode.prev = beforeNode;
        afterNode.prev = newNode, newNode.next = afterNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();x
        if(index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        //let beforeNode = removedNode.prev 
        // let afterNode = removedNode.next
        // beforeNode.next = afterNode;
        // afterNode.prev = beforeNode;
        removedNode.prev = null, removedNode.next = null;
        this.length--;
        return removedNode;
    }
}

Doubly Linked Lists
Insertion O(1)
Removal O(1)
Searching O(N)
    Technically, searching is O(N/2), but that's still O(N)'
    //Because used divide and conquer
Access O(N)

Recap:
Doubly Linked Lists are almost identical to singly linked lists except there is an additional poitner to previous nodes 
Our web history is a doubly linked list 
Doubly Linked Lists are better for finding nodes and can be done in half the time 
) However, they do take up more memory considering the extra pointer

Stacks and queues are abstract data structures. 
Stacks are last in, first out.
Like a stack of plates, you pile up, and the top most thing is removed first  
LIFO

Queues are first in, first out. 

function factorial(x) {
    if (x===0) return 1;
    return x * factorial(x-1);
}
This is actually creating a stack. The last thing added in is the frist thing removed 

Where stacks are used 

Managing function invocations 
Undo/Redo 
Routing (the history object) is treated like a stack. 

Trees and graphs, some of the algorithms use stacks and also queues to store history of things, things
they want to come back to. 

He's calling his stack inside an alogirhm as he's calling things and removing from stack 

Theres more than one way to implement a stack 

Ch 152.
Creating a stack with an array: 
The last thing added in is the first thing removed 
The first thingg added is the last thing removed 
Can use a built in array/list datatype 

var stack = []
stack.push("google.com") 
stack.push("instagram")
stack.push("youtube")
stack // ["google", "instagram", "youtube"]
stack.pop() will remove from the end of the array 

Can also use built in array methods. 
Were adding from the end and removing from the end 

stack = []
stack.unshift("create new file")
stack.unshift("resize file")
stack.shift() 
Removes the last thing we put in. 

Using shift/unshift is more inefficient because you havve to re-index everything 
everytime you unshift to add to the array 
Whereas push/pop just takes care of the end of the array 

Non-array methods are ultimately preferred for efficiency if you dont need the indices of the array

Linked List Implementation 
Array Implementation 

Doesnt mean its better  

Should be able to initialize a new stack 
var stack = new Stack()
stack.push() //returns size 
stack.pop() //returns last in, first out

pushing pseudocode 
funciton should accept a value 
Create a new node with that value 
If there are no nodes in the stack, set the firs tand last property to be the newly created nodde
If there is at least one node, createa  variable that stores the current firs troperty on the stafk
Reset the firse tpropety to be the newly created node
Set the next property on the node to be the previously created variable
Increment the size of the stack by 1 


Pop pseudocode
If there are no nodes in the stack, return null 
Create a temporary ariable to store the first property on the stack 
If tehre is only 1 node, set the first and last property to be null
If there is more than one node, set the first property to be the next proeprty on the 
current first 
Decrement the size by 1
Return the value of the removed node 
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(size===0){ //or (!this.first)
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size
    }
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
//we are adding and rmeoving from the beginning of the list
//but we are calling it push and pop b/c it is taking care of the end of
//what we are adding to the list
    
In a stack, push and pop are supposed to be constant time 
but in a singly linked list, pop is not a constant time 
Had to loop over the entire list in that 

Big O of stacks
Insertion - O(1)
Removal - O(1)
Searching O(N)
Access O(N)

So stacks are really useful for insertion and removal .

Stacks are a LIFO data scructure wehre the alst value in is always the first one. 

Stacks ar eused to handle function invocations (the call stack) for operations like undo/redo and for
routing (remember pages you have visited and go back/forward) and much more 

They are not a built in data structure in JS but are relatively simple to implement 

Ch 155
Intro to queues 
These are taught together and grouped together in one section, stacks and queues 

What is a queue 
Adding data in and moving data out. Instead of last in/first out 
This is First In First out

Queues are in waiting in a line 
Online game, queue structure for who is going to get added into a game first 

How do we use them in programming?
Background tasks
Uploading resources 
Printing/Task processing 

Add something in is en queue 
Removing something is de queue 

Creating queues using arrays 
)
var q = []
q.push("First")
q.push("Second")

q.shift() ///this is a queue 


or go the other way 
var q = []
q.unshift("Second")
q.unshift("First")
q.pop() //"Second"

First in/first out. Could do unshift combined with pop 
Or push combined with shift 
Both give first in/first out 
If the list is 10000 items means re indexing the entire queue every time 
Popping from the end is preferred 
But there is no way around re-indexing this whether we are .shift() in example 1 
or if we are .unshift() in example 2 


eqneue psuedocode 

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(this.size ===0){
            this.first = newNode;
            this.last = newNode;
            
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;
        let temp = this.first;
        if (this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

}

//so we have done the same thing with dequeue as in stacks 
deque is same as pop() from stack (which popped from beginning of list)
Difference is enqueue is adding to end of the list whereas 
stack has added to teh beginning with its push 

can either add to end and remove from beginning 
Or add to beginning and remove from end 

En queue is adding to end 
De queue is removing from beginning 

Big O of queues 
Insertion O(1)
Removal O(1)
Searching O(N)
Access O(N)

Queues are FIFO data structure, all elements are first in first out 
Quees are useful for processing tasks and are foundational for more complex data structures 

Not just a novelty to show us, they will be resurfacing
Insertion and Removal can be done in O(1)

Trees
Classic data structure taught in CS classes throughout the world
A step up from Linked Lists, but also a bit more interesting
Define what a tree is
Compare and contrast trees and lists
Explain the differences between trees, binary tress, and binary search trees 

3 categories 
Implement operations on binary search trees 

BST, Binary Search Tree 

First 
What is a tree?
Tree is a data structure that consists of nodes in a parent/child relationship 
Branches from one node to another node 
Branching structures, hence the name tree 
Branch splits, and that branch can split off of main, original branch 
Really like a tree upside down with branches going down 

Lists - linear //only one path, one line through our datastructure 
Trees - nonlinear //they can branch, we can have more than one pathway in a tree

A singly linked list is a special case of a tree 
2 to 12 to 11 
Some rules for Trees 
All arrows have to point down in a tree 
Only one root for the tree, cannot have two roots 

Root - top node in a tree 
Child - a node directly connected to another node when moving away from the Root 
Parent - the converse notion of a child
Siblings - a group of nodes with the same parent
Leaf - node with no children 
Edge - The connection betweene one node and another. 

Lots of different applications 
HTML DOM 
Parent/Child relationship between HTML elements 
Browser has response, parses it 
Chrome get an interactive way of viewing different nodes 
Corresponding JS object for each of those nodes 
Document.body 
It's actually a body that has many different things and you can look at a list of children '

DOM is a tree structure 
Network routing is also a tree structure 
Tic tac toe is tree structure, the game board as it changes
Artificial Intelligence is a tree structure  
Computers with folders in operating system is a tree

Data that contains a lot of duplicates 
Majority is not a good way of putting it 
Tons of trees 
Heaps 

Binary Search Trees are trees with at most 2 children 
BST 
Sorted in a particular order 
BST's are used to store data that can be compared, taht is sortable'
Could be stirngs, could be any other piece of data that is comparable. 
This is how they work. Take any node on a tree, all items that are less than this node are located 
to the left of it
Any item that is greater than it is located to the right 
6 node all numbers left to it are less than it 
to right of 6 are all numbers greater than it 

BST
Every parent node has at most two children 
Every node to left of parent node is always less than parent 
Every node to right of parent node is always greater than node 

If root node has 3 children, then it is not a binary search tree 

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right(9);

Insert pseudocode

Steps iteratively or recursively 
iteratively is easier
Create a new node 
Starting at the root
    Check if there is a root,, if not, the root now becomes that new node 
    If there is a root, check if the value of the new node 
        is greater than or less than the value of the root 
    If it is greater 
        check to see if there is a node to the right 
            If there is, move to that node and repeat these steps
            If there is not, add that node as the right property
    If it is less
        Check to see if there is a node to the left
            If there is, move to that node and repeat these steps
            If there is not, add that node as the left property 

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value)
        if(this.root===null) {
            this.root = newNode
            return this
        } else {
            let current = this.root;
            while(true){
                if(value===current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value) {
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }   
    find(value){
        if(this.root === null) return false;
        let current = this.root,
             found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)

Big O of BST 
Insertion - O (log n) ...for best and average case
Searching - O(log n) ...for best and average case 

not guaranteed 
B/c there are some binary search tree configurations that are very slow
Let's say a tree becomes a linked list' Would be O(n)
Fix would be to change the root so values to the rigth and left are larger and smaller than it 

kdljddjk






