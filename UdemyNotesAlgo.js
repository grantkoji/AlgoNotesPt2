

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

