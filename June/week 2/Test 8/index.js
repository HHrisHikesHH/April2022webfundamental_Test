"use strict"
// Q. Write a function to check if geekster exists in your array var list = ['geek', 'geekster', 'geeky'];If it exists  add some code to find the index of geekster and remove that item.

// var list = ['geek', 'geekster', 'geeky'];
// const key = "geekster";

// const find = arr =>{
//     let ans;
//     arr.forEach(element => {
//         if(element===key)
//         ans = "exist";
//     });
//     return ans;
// }
// let ans = find (list);


// if(ans==="exist") {
//     for(let i=0;i<list.length;i++){
//     if(list[i]===key){
//         console.log("The given key",ans);
//         console.log(`The index of "${key}" is ${i}`);

//         if(i===0)
//         console.log("Deleted Item",list.splice(i,i+1));
//         else
//         console.log("Deleted Item",list.splice(i,i));

//         console.log("New Array",list);

//     }}}
// else
// console.log("Item not Found");

// ----------------------------------------------------------------

// Q. What is the length of these arraysA. var arr1 = [,,,]; B. var arr2 = new Array(3)C. var arr3 = [1,2,3,4,5]D. var array = [ [1,2,3], [4,5,6]  ];E. var array[0].length = [ [1,2,3], [4,5,6]  ];

// var arr1 = [,,,]; 
// var arr2 = new Array(3);
// var arr3 = [1,2,3,4,5];
// var array = [ [1,2,3], [4,5,6] ];

// console.log("Length of array arr1 is",arr1.length);
// console.log("Length of array arr2 is",arr2.length);
// console.log("Length of array arr3 is",arr3.length);
// console.log("Length of array array is",array.length);
// console.log("Length of array array[0] is",array[0].length);

// ----------------------------------------------------------------

// Q. Find the index position of b in this array var arr= ['a','b','c','d'];
// var arr = ['a','b','c','d'];
// let key = "b";
// for(let i = 0;i < arr.length;i++){
//         if(arr[i]===key){
//             console.log(`The index of "${key}" is ${i}`);
//         }}

// ----------------------------------------------------------------

// Q. What will be returned if you look for the index of something that does not exist?

// console.log("It will return undefined value");
// var arr = ['a','b','c','d'];
// let key = "q";
// const find = (arr,key)=>{
// for(let i = 0;i < arr.length;i++){
//         if(arr[i]===key){
//             return i;
//         }}}
// console.log(find(arr,key));


// ----------------------------------------------------------------

// Q. Find the nth largest element in a sorted array

// var arr = [4,3,5,7,9,1];
// console.log("Given Array",arr);
// let arrSort = arr.sort();
// console.log("Sorted Array",arrSort);
// let nth = 4;
// if(nth===1)
// console.log(`The ${nth}st largest element in array arr is ${arrSort[nth-1]}`);
// else if(nth===2)
// console.log(`The ${nth}nd largest element in array arr is ${arrSort[nth-1]}`);
// else if(nth===3)
// console.log(`The ${nth}rd largest element in array arr is ${arrSort[nth-1]}`);
// else
// console.log(`The ${nth}th largest element in array arr is ${arrSort[nth-1]}`);
 
 
