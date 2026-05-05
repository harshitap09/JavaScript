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