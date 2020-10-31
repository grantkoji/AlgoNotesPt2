

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
    for(let i=0; i< array1.length; i++){
        //use .indexOf to find the index in array2 whose value matches array1[i]
        let correctIndex = array2.indexOf(array1[i])
        if (correctIndex === -1){
         //if correctIndex is -1, then the array1[i] value is not inside array2
            return false;
        } else { 
        //if correctIndex is inside array2, use splice to remove that value from array2
            array2.splice(correctIndex,1)
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
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //Iterate through the first array
    for (let i=0; i < array1.length; i++) {
        let val = array1[i]
        if (frequencyCounter1[val]) {
            //If the element is repeated, add its frequency to the counter object
            frequencyCounter1[val] = frequencyCounter1[val] + 1
        } else {
            //If the element is found for the first time, start its count at 1
            frequencyCounter1[val] = 1
    }
        }
        }
    //Iterate through the second array
    for (let i=0; i < array2.length; i++) {
        let val = array2[i]
        //A cleaner way to check if the element is repeated, add its frequency to the 
        //counter object. If the element is found for the first time, start its count at 1
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            //If the key in frequencyCounter1 does not appear as a key in frequencyCounter2
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            //If the frequencies of the key (element value in original array) in both counters does not match
            return false
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


j is 45 and undefined 