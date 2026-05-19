# JavaScript Number Methods (Prototype) — Minimal Notes + Examples

> Each method includes a short meaning + example.

---

## Core / Conversion

### `constructor` (`Number()`)
Creates a Number object / converts a value into a number.

Example:
Number("100")  // 100

---

## Formatting Numbers

### `toFixed(digits)`
Returns number as a string with exactly `digits` decimal places (rounded).

Example:
(12.3456).toFixed(2)  // "12.35"

### `toPrecision(precision)`
Returns number as a string with total significant digits = `precision`.

Example:
(123.456).toPrecision(4)  // "123.5"

### `toExponential(fractionDigits?)`
Returns number in exponential (scientific) notation.

Example:
(12345).toExponential(2)  // "1.23e+4"

---

## Locale Formatting

### `toLocaleString(locales?, options?)`
Formats number according to locale rules (commas, currency, etc.).

Example:
(1000000).toLocaleString("en-IN")  // "10,00,000"

Example (currency):
(5000).toLocaleString("en-IN", { style: "currency", currency: "INR" })
 // "₹5,000.00"

---

## String Conversion

### `toString(radix?)`
Converts number to string (optionally in base 2–36).

Example:
(100).toString()  // "100"

Example (binary):
(10).toString(2)  // "1010"

---

## Primitive Value

### `valueOf()`
Returns primitive numeric value from a Number object.

Example:
new Number(100).valueOf()  // 100

---


# JavaScript Math Methods — Minimal Notes + Examples

> `Math` is a built-in object for mathematical operations (not a constructor).

---

## Basic Rounding / Absolute

### `Math.abs(x)`
Returns absolute value (removes negative sign).
Example:
Math.abs(-10)  // 10

### `Math.ceil(x)`
Rounds up to nearest integer.
Example:
Math.ceil(4.2)  // 5

### `Math.floor(x)`
Rounds down to nearest integer.
Example:
Math.floor(4.9)  // 4

### `Math.round(x)`
Rounds to nearest integer.
Example:
Math.round(4.5)  // 5

### `Math.trunc(x)`
Removes decimal part (towards zero).
Example:
Math.trunc(-4.9)  // -4

### `Math.sign(x)`
Returns sign: -1, 0, or 1.
Example:
Math.sign(-20)  // -1

---

## Powers / Roots

### `Math.pow(base, exponent)`
Returns base raised to exponent.
Example:
Math.pow(2, 3)  // 8

### `Math.sqrt(x)`
Returns square root.
Example:
Math.sqrt(25)  // 5

### `Math.cbrt(x)`
Returns cube root.
Example:
Math.cbrt(27)  // 3

### `Math.hypot(...values)`
Returns √(a² + b² + ...) (distance formula).
Example:
Math.hypot(3, 4)  // 5

---

## Minimum / Maximum

### `Math.max(...values)`
Returns largest number.
Example:
Math.max(5, 10, 2)  // 10

### `Math.min(...values)`
Returns smallest number.
Example:
Math.min(5, 10, 2)  // 2

---

## Random

### `Math.random()`
Returns random number between 0 (inclusive) and 1 (exclusive).
Example:
Math.random()  // e.g. 0.5342

Example (random integer 1–10):
Math.floor(Math.random() * 10) + 1

---

## Trigonometry (Angles in Radians)

### `Math.sin(x)`
Returns sine of x.
Example:
Math.sin(Math.PI / 2)  // 1

### `Math.cos(x)`
Returns cosine of x.
Example:
Math.cos(0)  // 1

### `Math.tan(x)`
Returns tangent of x.
Example:
Math.tan(Math.PI / 4)  // 1

### `Math.asin(x)`
Returns inverse sine (result in radians).
Example:
Math.asin(1)  // 1.5707963267948966 (π/2)

### `Math.acos(x)`
Returns inverse cosine.
Example:
Math.acos(1)  // 0

### `Math.atan(x)`
Returns inverse tangent.
Example:
Math.atan(1)  // 0.7853981633974483 (π/4)

### `Math.atan2(y, x)`
Returns angle between x-axis and point (x, y).
Example:
Math.atan2(1, 1)  // 0.7853981633974483 (π/4)

---

## Hyperbolic Trigonometry

### `Math.sinh(x)`
Returns hyperbolic sine.
Example:
Math.sinh(0)  // 0

### `Math.cosh(x)`
Returns hyperbolic cosine.
Example:
Math.cosh(0)  // 1

### `Math.tanh(x)`
Returns hyperbolic tangent.
Example:
Math.tanh(0)  // 0

### `Math.asinh(x)`
Returns inverse hyperbolic sine.
Example:
Math.asinh(1)  // 0.881373587019543

### `Math.acosh(x)`
Returns inverse hyperbolic cosine (x must be >= 1).
Example:
Math.acosh(1)  // 0

### `Math.atanh(x)`
Returns inverse hyperbolic tangent (x must be between -1 and 1).
Example:
Math.atanh(0.5)  // 0.5493061443340549

---

## Exponents / Logs

### `Math.exp(x)`
Returns e^x.
Example:
Math.exp(1)  // 2.718281828459045

### `Math.expm1(x)`
Returns e^x - 1 (better for small values).
Example:
Math.expm1(0.001)  // 0.0010005001667083846

### `Math.log(x)`
Returns natural log (ln).
Example:
Math.log(Math.E)  // 1

### `Math.log1p(x)`
Returns ln(1 + x) (better for small values).
Example:
Math.log1p(0.001)  // 0.0009995003330835331

### `Math.log2(x)`
Returns log base 2.
Example:
Math.log2(8)  // 3

### `Math.log10(x)`
Returns log base 10.
Example:
Math.log10(1000)  // 3

---

## Bit / Integer Operations

### `Math.clz32(x)`
Returns count of leading zero bits in 32-bit integer.
Example:
Math.clz32(1)  // 31

### `Math.imul(a, b)`
Returns 32-bit integer multiplication result.
Example:
Math.imul(2, 4)  // 8

---

## Floating Point Precision Helpers

### `Math.fround(x)`
Rounds number to nearest 32-bit float.
Example:
Math.fround(1.337)  // 1.3370000123977661

### `Math.f16round(x)`
Rounds number to nearest 16-bit float.
Example:
Math.f16round(1.337)  // 1.3369140625

---

## Extra / Newer

### `Math.sumPrecise(...values)`
Returns accurate sum with reduced floating-point error.
Example:
Math.sumPrecise(0.1, 0.2)  // 0.3

---

## Metadata

### `Math[Symbol.toStringTag]`
Returns the tag name used by Object.prototype.toString.
Example:
Math[Symbol.toStringTag]  // "Math"