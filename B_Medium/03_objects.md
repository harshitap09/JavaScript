# JavaScript Objects — Methods, Utilities, and Practical Scenarios (with Examples)

> Objects are key-value collections used to store structured data.
> Keys are usually strings (or Symbols), values can be anything (string, number, array, function, another object).

---

# 1. Creating Objects

## Object Literal `{ }`
Most common way.
Example:
const user = {
  name: "Harshita",
  age: 20
};

## `new Object()`
Creates an empty object (rarely used).
Example:
const obj = new Object();
obj.name = "Harshita";

## Computed Properties
Keys can be dynamic.
Example:
const key = "college";
const obj = { [key]: "SRM" };
// { college: "SRM" }

## Symbol Keys
Used for unique hidden-like keys.
Example:
const id = Symbol("id");
const obj = { [id]: 101 };
obj[id]; // 101

---

# 2. Accessing Properties

## Dot Notation
Best when key is a valid identifier.
Example:
user.name  // "Harshita"

## Bracket Notation
Required when key has spaces or is dynamic.
Example:
user["name"]  // "Harshita"

Example (dynamic):
const prop = "age";
user[prop]  // 20

---

# 3. Adding / Updating / Deleting Properties

## Add / Update
Example:
const obj = {};
obj.city = "Lucknow";
obj.city = "Delhi";
// { city: "Delhi" }

## Delete Property
Example:
const obj = { a: 1, b: 2 };
delete obj.b;
// { a: 1 }

---

# 4. Checking Property Existence

## `in` Operator
Checks property in object or prototype chain.
Example:
const obj = { a: 1 };
"a" in obj  // true

## `hasOwnProperty(key)`
Checks only object’s own property (not prototype).
Example:
const obj = { a: 1 };
obj.hasOwnProperty("a")  // true

## `Object.hasOwn(obj, key)` (Modern)
Safer replacement for hasOwnProperty.
Example:
const obj = { a: 1 };
Object.hasOwn(obj, "a")  // true

---

# 5. Looping Over Objects

## `for...in`
Loops over enumerable keys (includes inherited keys too).
Example:
const obj = { a: 1, b: 2 };

for (let key in obj) {
  console.log(key, obj[key]);
}

## `Object.keys(obj)`
Returns array of own enumerable keys.
Example:
Object.keys({ a: 1, b: 2 })
// ["a", "b"]

## `Object.values(obj)`
Returns array of own enumerable values.
Example:
Object.values({ a: 1, b: 2 })
// [1, 2]

## `Object.entries(obj)`
Returns array of [key, value] pairs.
Example:
Object.entries({ a: 1, b: 2 })
// [["a", 1], ["b", 2]]

Example (loop entries):
for (const [key, value] of Object.entries({ a: 1, b: 2 })) {
  console.log(key, value);
}

---

# 6. Copying Objects

## Shallow Copy using Spread `{ ...obj }`
Copies only top-level properties.
Example:
const a = { x: 1, y: 2 };
const b = { ...a };
// b = { x: 1, y: 2 }

## Shallow Copy using `Object.assign()`
Copies properties into a target object.
Example:
const a = { x: 1 };
const b = Object.assign({}, a);
// b = { x: 1 }

## Deep Copy using `structuredClone()`
Copies nested objects properly.
Example:
const a = { nested: { score: 10 } };
const b = structuredClone(a);

b.nested.score = 99;
a.nested.score; // 10

## Deep Copy using JSON (not recommended always)
Fails for functions, undefined, Symbol, Date, etc.
Example:
const a = { x: 1, y: { z: 2 } };
const b = JSON.parse(JSON.stringify(a));

---

# 7. Merging Objects

## Merge using Spread
Example:
const a = { name: "Harshita" };
const b = { age: 20 };

const merged = { ...a, ...b };
// { name: "Harshita", age: 20 }

> If keys conflict, last one wins.

Example:
const obj = { a: 1, a: 99 };
// { a: 99 }

---

# 8. Object Utility Methods (Important)

## `Object.freeze(obj)`
Prevents adding/removing/changing properties (shallow freeze).
Example:
const obj = { a: 1 };
Object.freeze(obj);

obj.a = 99;
obj.a; // 1

## `Object.seal(obj)`
Prevents adding/removing properties, but allows modifying existing values.
Example:
const obj = { a: 1 };
Object.seal(obj);

obj.a = 50;
delete obj.a; // false
obj.a; // 50

## `Object.preventExtensions(obj)`
Prevents adding new properties.
Example:
const obj = { a: 1 };
Object.preventExtensions(obj);

obj.b = 2;
obj.b; // undefined

## `Object.isFrozen(obj)`
Checks if frozen.
Example:
Object.isFrozen(Object.freeze({ a: 1 })) // true

## `Object.isSealed(obj)`
Checks if sealed.
Example:
Object.isSealed(Object.seal({ a: 1 })) // true

## `Object.isExtensible(obj)`
Checks if new properties can be added.
Example:
Object.isExtensible({ a: 1 }) // true

---

# 9. Comparing Objects

## `===` checks reference, not content
Example:
const a = { x: 1 };
const b = { x: 1 };

a === b; // false

## Compare values using JSON (basic use case)
Example:
JSON.stringify(a) === JSON.stringify(b) // true (not reliable for key order)

## `Object.is(a, b)`
Like `===` but handles NaN and -0 properly.
Example:
Object.is(NaN, NaN)  // true
Object.is(-0, 0)     // false

---

# 10. Property Descriptors (Advanced but Important)

## `Object.getOwnPropertyDescriptor(obj, key)`
Shows property configuration.
Example:
const obj = { a: 1 };
Object.getOwnPropertyDescriptor(obj, "a");

## `Object.defineProperty(obj, key, descriptor)`
Defines a property with control (writable, enumerable, etc).
Example:
const obj = {};

Object.defineProperty(obj, "id", {
  value: 101,
  writable: false,
  enumerable: true
});

obj.id = 999;
obj.id; // 101

---

# 11. Prototypes & Inheritance

## `Object.getPrototypeOf(obj)`
Returns prototype of object.
Example:
Object.getPrototypeOf({}) === Object.prototype
// true

## `Object.setPrototypeOf(obj, prototype)`
Sets prototype (slow, avoid unless needed).
Example:
const obj = {};
Object.setPrototypeOf(obj, Array.prototype);

## `Object.create(proto)`
Creates object with given prototype.
Example:
const parent = { greet() { return "Hello"; } };
const child = Object.create(parent);

child.greet(); // "Hello"

---

# 12. Converting Between Object and Arrays

## Object → Array using `Object.entries()`
Example:
const obj = { a: 1, b: 2 };
Object.entries(obj);
// [["a", 1], ["b", 2]]

## Array → Object using `Object.fromEntries()`
Example:
const arr = [["a", 1], ["b", 2]];
Object.fromEntries(arr);
// { a: 1, b: 2 }

---

# 13. Optional Chaining & Nullish Coalescing (Very Common)

## Optional Chaining `?.`
Prevents errors if property doesn't exist.
Example:
const user = { profile: { name: "Harshita" } };

user.profile?.name; // "Harshita"
user.address?.city; // undefined (no crash)

## Nullish Coalescing `??`
Fallback only if value is null or undefined.
Example:
const user = { age: 0 };

user.age ?? 18; // 0 (because age is not null/undefined)

---

# 14. Common Scenarios (Practical Use Cases)

---

## Scenario 1: Safely Access Deep Properties (Avoid Crash)
Problem:
const user = {};
user.profile.name; // ERROR

Solution:
user.profile?.name ?? "Not Available";
// "Not Available"

---

## Scenario 2: Check if Object is Empty
Example:
const obj = {};
Object.keys(obj).length === 0;
// true

---

## Scenario 3: Remove a Key Without Mutating Original Object
Example:
const user = { name: "Harshita", age: 20 };

const { age, ...rest } = user;
// rest = { name: "Harshita" }

---

## Scenario 4: Rename a Key
Example:
const user = { fullname: "Harshita Panwar", age: 20 };

const { fullname: name, ...rest } = user;
const updated = { name, ...rest };
// { name: "Harshita Panwar", age: 20 }

---

## Scenario 5: Count Frequency of Items (Most Common Interview Pattern)
Example:
const arr = ["a", "b", "a", "c", "b", "a"];

const freq = arr.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

freq;
// { a: 3, b: 2, c: 1 }

---

## Scenario 6: Clone Object Before Updating (Immutable Update)
Example:
const user = { name: "Harshita", score: 10 };

const updated = { ...user, score: 20 };
// updated = { name: "Harshita", score: 20 }

---

## Scenario 7: Merge Default Settings with User Settings
Example:
const defaults = { theme: "light", fontSize: 14 };
const userSettings = { fontSize: 18 };

const settings = { ...defaults, ...userSettings };
// { theme: "light", fontSize: 18 }

---

## Scenario 8: Convert Object to Query String (Useful in APIs)
Example:
const params = { search: "books", page: 2 };

const query = new URLSearchParams(params).toString();
// "search=books&page=2"

---

# 15. JSON & Objects

## `JSON.stringify(obj)`
Converts object into JSON string.
Example:
JSON.stringify({ a: 1, b: 2 })
// '{"a":1,"b":2}'

## `JSON.parse(jsonString)`
Converts JSON string back into object.
Example:
JSON.parse('{"a":1}')
// { a: 1 }

---

# 16. Object String Conversion Methods

## `toString()`
Returns string representation.
Example:
const obj = { a: 1 };
obj.toString(); // "[object Object]"

## `valueOf()`
Returns primitive value (mostly same object for normal objects).
Example:
const obj = { a: 1 };
obj.valueOf(); // { a: 1 }

---

# 17. Useful Built-in Object Utilities

## `Object.assign(target, ...sources)`
Copies properties into target object.
Example:
const a = { x: 1 };
const b = { y: 2 };

Object.assign(a, b);
// a = { x: 1, y: 2 }

## `Object.fromEntries(entries)`
Creates object from key-value pairs.
Example:
Object.fromEntries([["name", "Harshita"], ["age", 20]])
// { name: "Harshita", age: 20 }

---

# 18. Notes / Common Mistakes

## Objects are mutable by default
Example:
const a = { x: 1 };
const b = a;

b.x = 99;
a.x; // 99

## Spread does shallow copy only
Example:
const a = { nested: { score: 10 } };
const b = { ...a };

b.nested.score = 99;
a.nested.score; // 99 (because nested reference is shared)

Fix:
const deepCopy = structuredClone(a);

---

# 19. Quick Reference (When to Use What)

- Want keys? → `Object.keys(obj)`
- Want values? → `Object.values(obj)`
- Want key-value pairs? → `Object.entries(obj)`
- Want to build object from pairs? → `Object.fromEntries()`
- Want copy? → `{ ...obj }`
- Want deep copy? → `structuredClone(obj)`
- Want prevent changes? → `Object.freeze(obj)`
- Want check key existence? → `Object.hasOwn(obj, key)`
- Want safe access? → `?.` and `??`

---