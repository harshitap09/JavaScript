# JavaScript String Methods (Prototype) — Minimal Notes + Examples

> Each method includes a short meaning + example.

---

## Character Access

### `at(index)`
Returns the character at the given index (supports negative indexing).
Example:
"Harshita".at(-1)  // "a"

### `charAt(index)`
Returns the character at the given index (does NOT support negative indexing).
Example:
"Harshita".charAt(0)  // "H"

### `charCodeAt(index)`
Returns the UTF-16 code (number) of the character at the given index.
Example:
"ABC".charCodeAt(0)  // 65

### `codePointAt(index)`
Returns the Unicode code point of the character (handles emojis properly).
Example:
"😄".codePointAt(0)  // 128516

---

## Combining / Repeating

### `concat(str1, str2, ...)`
Joins strings and returns a new string.
Example:
"Har".concat("shita")  // "Harshita"

### `repeat(count)`
Repeats the string `count` times.
Example:
"Hi ".repeat(3)  // "Hi Hi Hi "

---

## Searching / Checking

### `includes(searchValue, startIndex?)`
Returns `true` if substring exists, else `false`.
Example:
"Harshita".includes("shi")  // true

### `indexOf(searchValue, startIndex?)`
Returns first index of substring, or `-1` if not found.
Example:
"banana".indexOf("na")  // 2

### `lastIndexOf(searchValue, startIndex?)`
Returns last index of substring, or `-1` if not found.
Example:
"banana".lastIndexOf("na")  // 4

### `startsWith(searchValue, startIndex?)`
Checks if string starts with the given substring.
Example:
"Harshita".startsWith("Har")  // true

### `endsWith(searchValue, length?)`
Checks if string ends with the given substring.
Example:
"Harshita".endsWith("ta")  // true

### `search(regex)`
Searches using regex, returns index of match or `-1`.
Example:
"abc123".search(/\d/)  // 3

---

## Extracting Substrings

### `slice(start, end?)`
Extracts part of a string (supports negative indexing).
Example:
"Harshita".slice(0, 4)  // "Hars"

### `substring(start, end?)`
Extracts part of a string (negative values treated as 0).
Example:
"Harshita".substring(1, 4)  // "ars"

### `substr(start, length?)` *(deprecated)*
Extracts substring using start + length.
Example:
"Harshita".substr(1, 3)  // "ars"

---

## Replace / Modify

### `replace(searchValue, replaceValue)`
Replaces first occurrence only.
Example:
"ha ha ha".replace("ha", "hi")  // "hi ha ha"

### `replaceAll(searchValue, replaceValue)`
Replaces all occurrences.
Example:
"ha ha ha".replaceAll("ha", "hi")  // "hi hi hi"

---

## Splitting

### `split(separator, limit?)`
Splits string into array.
Example:
"1,2,3".split(",")  // ["1", "2", "3"]

---

## Regex Matching

### `match(regex)`
Returns match result array or `null`.
Example:
"abc123".match(/\d+/)  // ["123"]

### `matchAll(regex)`
Returns iterator of all matches.
Example:
[..."a1 b2".matchAll(/\d/g)].map(x => x[0])  // ["1", "2"]

---

## Padding

### `padStart(targetLength, padString?)`
Pads at the start until string reaches target length.
Example:
"5".padStart(3, "0")  // "005"

### `padEnd(targetLength, padString?)`
Pads at the end until string reaches target length.
Example:
"5".padEnd(3, "0")  // "500"

---

## Trimming Spaces

### `trim()`
Removes whitespace from both ends.
Example:
"  hello  ".trim()  // "hello"

### `trimStart()` / `trimLeft()`
Removes whitespace from the start.
Example:
"  hello".trimStart()  // "hello"

### `trimEnd()` / `trimRight()`
Removes whitespace from the end.
Example:
"hello   ".trimEnd()  // "hello"

---

## Case Conversion

### `toLowerCase()`
Converts string to lowercase.
Example:
"HELLO".toLowerCase()  // "hello"

### `toUpperCase()`
Converts string to uppercase.
Example:
"hello".toUpperCase()  // "HELLO"

### `toLocaleLowerCase(locale?)`
Lowercase conversion based on locale rules.
Example:
"I".toLocaleLowerCase("tr")  // "ı"

### `toLocaleUpperCase(locale?)`
Uppercase conversion based on locale rules.
Example:
"i".toLocaleUpperCase("tr")  // "İ"

---

## Comparison

### `localeCompare(otherString, locales?, options?)`
Compares two strings for sorting. Returns -1, 0, or 1.
Example:
"a".localeCompare("b")  // -1

---

## Unicode / Normalization

### `normalize(form?)`
Normalizes Unicode characters into standard form.
Example:
"é".normalize()  // "é"

### `isWellFormed()`
Returns true if string has valid Unicode (no broken surrogate pairs).
Example:
"\uD800".isWellFormed()  // false

### `toWellFormed()`
Fixes invalid Unicode by replacing broken sequences with "�".
Example:
"\uD800".toWellFormed()  // "�"

---

## Conversion / Primitive Value

### `toString()`
Returns string representation.
Example:
new String("Hi").toString()  // "Hi"

### `valueOf()`
Returns primitive string value.
Example:
new String("Hi").valueOf()  // "Hi"

---

## Iteration

### `[Symbol.iterator]()`
Allows string to be iterable character-by-character.
Example:
[..."Har"]  // ["H", "a", "r"]

---

## Property

### `length`
Returns total number of UTF-16 code units in the string.
Example:
"Harshita".length  // 8

---

# HTML Wrapper String Methods (Obsolete / Rarely Used)

> These methods return HTML strings (mostly outdated, not used in modern code).

### `anchor(name)`
Wraps string in `<a name="">`.
Example:
"Hello".anchor("top")  // '<a name="top">Hello</a>'

### `link(url)`
Wraps string in `<a href="">`.
Example:
"Google".link("https://google.com")
 // '<a href="https://google.com">Google</a>'

### `bold()`
Wraps string in `<b>`.
Example:
"Hi".bold()  // "<b>Hi</b>"

### `italics()`
Wraps string in `<i>`.
Example:
"Hi".italics()  // "<i>Hi</i>"

### `big()`
Wraps string in `<big>`.
Example:
"Hi".big()  // "<big>Hi</big>"

### `small()`
Wraps string in `<small>`.
Example:
"Hi".small()  // "<small>Hi</small>"

### `strike()`
Wraps string in `<strike>`.
Example:
"Hi".strike()  // "<strike>Hi</strike>"

### `sub()`
Wraps string in `<sub>`.
Example:
"x".sub()  // "<sub>x</sub>"

### `sup()`
Wraps string in `<sup>`.
Example:
"2".sup()  // "<sup>2</sup>"

### `fixed()`
Wraps string in `<tt>`.
Example:
"code".fixed()  // "<tt>code</tt>"

### `blink()`
Wraps string in `<blink>` (obsolete tag).
Example:
"Hi".blink()  // "<blink>Hi</blink>"

### `fontsize(size)`
Wraps string in `<font size="">`.
Example:
"Hi".fontsize(5)  // '<font size="5">Hi</font>'

### `fontcolor(color)`
Wraps string in `<font color="">`.
Example:
"Hi".fontcolor("red")  // '<font color="red">Hi</font>'

---