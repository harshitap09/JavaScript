# JavaScript Temporal API (Temporal.*) — Minimal Notes + Examples

> `Temporal` is a modern date/time API (better than `Date`).

> It works with exact instants, time zones, calendar dates, and durations.

---

## `Temporal.Instant()`
Represents an exact moment in time (UTC-based, timezone-independent).
Example:
const inst = Temporal.Instant.from("2026-01-01T10:00:00Z");
inst.toString(); // "2026-01-01T10:00:00Z"

---

## `Temporal.ZonedDateTime()`
Represents a date+time tied to a specific time zone.
Example:
const zdt = Temporal.ZonedDateTime.from("2026-01-01T10:00:00+05:30[Asia/Kolkata]");
zdt.toString();
// "2026-01-01T10:00:00+05:30[Asia/Kolkata]"

---

## `Temporal.PlainDate()`
Represents a calendar date only (no time, no timezone).
Example:
const date = Temporal.PlainDate.from("2026-01-01");
date.toString(); // "2026-01-01"

---

## `Temporal.PlainTime()`
Represents time only (no date, no timezone).
Example:
const time = Temporal.PlainTime.from("14:30:00");
time.toString(); // "14:30:00"

---

## `Temporal.PlainDateTime()`
Represents date + time (no timezone).
Example:
const dt = Temporal.PlainDateTime.from("2026-01-01T14:30:00");
dt.toString(); // "2026-01-01T14:30:00"

---

## `Temporal.PlainYearMonth()`
Represents a year and month only (no day/time).
Example:
const ym = Temporal.PlainYearMonth.from("2026-08");
ym.toString(); // "2026-08"

---

## `Temporal.PlainMonthDay()`
Represents a month and day only (useful for birthdays).
Example:
const md = Temporal.PlainMonthDay.from("08-15");
md.toString(); // "08-15"

---

## `Temporal.Duration()`
Represents a length of time (years, months, days, hours, etc).
Example:
const dur = Temporal.Duration.from({ days: 5, hours: 3 });
dur.toString(); // "P5DT3H"

---

## `Temporal.Now`
Provides methods to get current date/time in various formats.
Example:
Temporal.Now.instant().toString();
// e.g. "2026-05-04T09:30:12.123456789Z"

Example (current date in system timezone):
Temporal.Now.plainDateISO().toString();
// e.g. "2026-05-04"

Example (current zoned datetime):
Temporal.Now.zonedDateTimeISO().toString();
// e.g. "2026-05-04T15:00:12.123+05:30[Asia/Kolkata]"

---

## `Temporal.Symbol(Symbol.toStringTag)`
Identifies the object type when using Object.prototype.toString.
Example:
Temporal[Symbol.toStringTag]; // "Temporal"