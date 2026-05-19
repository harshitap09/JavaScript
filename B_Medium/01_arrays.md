# JavaScript Array Methods (Prototype) — Minimal Notes + Examples

> Arrays store multiple values in a single variable.

---

## Accessing Elements

### `at(index)`
Returns element at index (supports negative indexing).
Example:
[10, 20, 30].at(-1)  // 30

---

## Adding / Removing Elements

### `push(...items)`
Adds items to the end. Returns new length.
Example:
const arr = [1, 2];
arr.push(3);  // 3
// arr = [1, 2, 3]

### `pop()`
Removes last element and returns it.
Example:
const arr = [1, 2, 3];
arr.pop();  // 3
// arr = [1, 2]

### `unshift(...items)`
Adds items to the beginning.
Example:
const arr = [2, 3];
arr.unshift(1);
// arr = [1, 2, 3]

### `shift()`
Removes first element and returns it.
Example:
const arr = [1, 2, 3];
arr.shift();  // 1
// arr = [2, 3]

### `splice(start, deleteCount, ...items)`
Adds/removes elements directly in original array.
Example:
const arr = [1, 2, 3];
arr.splice(1, 1, 99);
// arr = [1, 99, 3]

### `toSpliced(start, deleteCount, ...items)`
Like `splice()` but returns a new array without modifying original.
Example:
[1, 2, 3].toSpliced(1, 1, 99)
// [1, 99, 3]

---

## Copying / Extracting

### `slice(start, end?)`
Returns part of array as new array.
Example:
[1, 2, 3, 4].slice(1, 3)  // [2, 3]

### `concat(...arrays)`
Combines arrays into a new array.
Example:
[1, 2].concat([3, 4])  // [1, 2, 3, 4]

### `copyWithin(target, start, end?)`
Copies part of array inside same array.
Example:
[1, 2, 3, 4].copyWithin(0, 2)
// [3, 4, 3, 4]

### `with(index, value)`
Returns new array with one changed value.
Example:
[1, 2, 3].with(1, 99)
// [1, 99, 3]

---

## Searching / Checking

### `includes(value)`
Checks if array contains value.
Example:
[1, 2, 3].includes(2)  // true

### `indexOf(value)`
Returns first matching index or -1.
Example:
[1, 2, 3].indexOf(2)  // 1

### `lastIndexOf(value)`
Returns last matching index or -1.
Example:
[1, 2, 1].lastIndexOf(1)  // 2

### `find(callback)`
Returns first matching element.
Example:
[1, 2, 3].find(x => x > 1)  // 2

### `findIndex(callback)`
Returns index of first matching element.
Example:
[1, 2, 3].findIndex(x => x > 1)  // 1

### `findLast(callback)`
Returns last matching element.
Example:
[1, 2, 3, 4].findLast(x => x % 2 === 0)
// 4

### `findLastIndex(callback)`
Returns index of last matching element.
Example:
[1, 2, 3, 4].findLastIndex(x => x % 2 === 0)
// 3

### `every(callback)`
Returns true if ALL elements pass condition.
Example:
[2, 4, 6].every(x => x % 2 === 0)
// true

### `some(callback)`
Returns true if AT LEAST ONE element passes condition.
Example:
[1, 3, 4].some(x => x % 2 === 0)
// true

---

## Iteration / Transformation

### `forEach(callback)`
Runs function for each element.
Example:
[1, 2, 3].forEach(x => console.log(x))

### `map(callback)`
Creates new array after transforming elements.
Example:
[1, 2, 3].map(x => x * 2)
// [2, 4, 6]

### `filter(callback)`
Returns new array with matching elements only.
Example:
[1, 2, 3, 4].filter(x => x % 2 === 0)
// [2, 4]

### `flat(depth?)`
Flattens nested arrays.
Example:
[1, [2, [3]]].flat(2)
// [1, 2, 3]

### `flatMap(callback)`
Maps + flattens one level.
Example:
[1, 2, 3].flatMap(x => [x, x * 2])
// [1, 2, 2, 4, 3, 6]

---

## Reducing

### `reduce(callback, initialValue?)`
Reduces array to single value (left → right).
Example:
[1, 2, 3].reduce((a, b) => a + b, 0)
// 6

### `reduceRight(callback, initialValue?)`
Reduces array from right → left.
Example:
["a", "b", "c"].reduceRight((a, b) => a + b)
// "cba"

---

## Sorting / Reversing

### `sort(compareFn?)`
Sorts original array.
Example:
[3, 1, 2].sort()
// [1, 2, 3]

### `toSorted(compareFn?)`
Returns sorted copy without modifying original.
Example:
[3, 1, 2].toSorted()
// [1, 2, 3]

### `reverse()`
Reverses original array.
Example:
[1, 2, 3].reverse()
// [3, 2, 1]

### `toReversed()`
Returns reversed copy without modifying original.
Example:
[1, 2, 3].toReversed()
// [3, 2, 1]

---

## Filling

### `fill(value, start?, end?)`
Fills array with value.
Example:
[1, 2, 3].fill(0)
// [0, 0, 0]

---

## Joining / String Conversion

### `join(separator?)`
Joins array into string.
Example:
[1, 2, 3].join("-")
// "1-2-3"

### `toString()`
Converts array to comma-separated string.
Example:
[1, 2, 3].toString()
// "1,2,3"

### `toLocaleString(locales?, options?)`
Converts elements to locale-sensitive string.
Example:
[1000, 2000].toLocaleString("en-IN")
// "1,000,2,000"

---

## Iterators

### `entries()`
Returns iterator of [index, value].
Example:
[..."abc".entries()]
// [[0, "a"], [1, "b"], [2, "c"]]

### `keys()`
Returns iterator of indexes.
Example:
[[..."abc".keys()]]
// [0, 1, 2]

### `values()`
Returns iterator of values.
Example:
[[1, 2, 3].values()]
// Iterator object

### `[Symbol.iterator]()`
Default iterator for arrays.
Example:
[...[1, 2, 3]]
// [1, 2, 3]

---

## Property

### `length`
Returns total number of elements.
Example:
[1, 2, 3].length  // 3

---

## Constructor

### `constructor`
Refers to Array constructor function.
Example:
[1, 2, 3].constructor === Array
// true

---

---

# Array Static Methods / Creation Helpers (Not on Prototype)

> These are used to create arrays.

---

## `Array.from(iterable, mapFn?)`
Creates a new array from an iterable or array-like object.
Example:
Array.from("Harshita")
// ["H", "a", "r", "s", "h", "i", "t", "a"]

Example (with mapping):
Array.from([1, 2, 3], x => x * 2)
// [2, 4, 6]

---

## `Array.of(...items)`
Creates a new array from given arguments.
Example:
Array.of(5)
// [5]

Example:
Array.of(1, 2, 3)
// [1, 2, 3]

---

## Spread Operator `...`
Expands an array into individual values (commonly used for copying/merging).
Example (copy):
const a = [1, 2, 3];
const b = [...a];
// b = [1, 2, 3]

Example (merge):
const x = [1, 2];
const y = [3, 4];
const z = [...x, ...y];
// z = [1, 2, 3, 4]

Example (add values):
const arr = [1, 2, 3];
const newArr = [0, ...arr, 4];
// [0, 1, 2, 3, 4]

---

## Rest Parameter `...`
Collects multiple values into an array (used in functions).
Example:
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3)  // 6

---

## Destructuring Assignment
Extracts values from array into variables.
Example:
const arr = [10, 20, 30];
const [a, b] = arr;
// a = 10, b = 20

Example (skip values):
const [x, , z] = [1, 2, 3];
// x = 1, z = 3

Example (rest destructuring):
const [first, ...rest] = [1, 2, 3, 4];
// first = 1, rest = [2, 3, 4]

---

## `Array.isArray(value)`
Checks if a value is an array.
Example:
Array.isArray([1, 2, 3])  // true
Array.isArray("hello")    // false

---

## `new Array(length)` *(not recommended usually)*
Creates an array with empty slots.
Example:
new Array(3)
// [empty × 3]

---

## `Array(length).fill(value)`
Common way to create a pre-filled array.
Example:
Array(5).fill(0)
// [0, 0, 0, 0, 0]

---

## `Array.from({ length: n }, callback)`
Common pattern for generating arrays.
Example:
Array.from({ length: 5 }, (_, i) => i + 1)
// [1, 2, 3, 4, 5]

---

## `structuredClone(array)`
Creates a deep copy (works for nested arrays/objects).
Example:
const a = [[1], [2]];
const b = structuredClone(a);
b[0][0] = 99;
// a = [[1], [2]]
// b = [[99], [2]]

---

## `concat()` (non-mutating merge alternative)
Creates a new array by merging arrays/values.
Example:
[1, 2].concat([3, 4])
// [1, 2, 3, 4]

---

## `push(...spread)` (mutating merge)
Adds multiple items into original array.
Example:
const arr = [1, 2];
arr.push(...[3, 4]);
// arr = [1, 2, 3, 4]

---