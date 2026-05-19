//Array declaring and defimimg
const arr = [1, 2, 3, 4, 5, "harshita"]; // can be herterogeneous

//Array methods
arr.push(6);        //add element at the end
arr.pop();          //remove element from the end
arr.shift();        //remove element from the beginning
arr.unshift(0);     //add element at the beginning
arr.length;         //length of the array
arr.indexOf(2);     //index of the element
arr.includes(2);    //check if element exists
arr.slice(1, 3);    //return new array with elements from index 1 to 3
arr.splice(1, 2);   //remove element from the array
arr.splice(1, 0, 2); //add element at the array

arr.join();         //convert array to string
