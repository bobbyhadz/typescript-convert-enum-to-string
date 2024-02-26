export {};

// ✅ NUMERIC Enums
enum NumericEnum {
  Yes,
  No,
  Maybe,
}

// 👇️ to string
const str = NumericEnum[NumericEnum.Yes];
console.log(str); // 👉️ "Yes"

// 👇️ to number
const num = NumericEnum.Yes;
console.log(num); // 👉️ 0

// ---------------------------------------------------

// // EXAMPLE 2

// // ✅ STRING Enums
// enum StringEnum {
//   Yes = 'Y',
//   No = 'N',
//   Maybe = 'M',
// }

// // 👇️ to string
// const str = StringEnum.Yes;
// console.log(str); // 👉️ "Y"

// ---------------------------------------------------

// EXAMPLE 3

// enum NumericEnum {
//   Yes,
//   No,
//   Maybe,
// }

// // 👇️ Both lines do the same
// console.log(NumericEnum[0]); // 👉️ "Yes"
// console.log(NumericEnum[NumericEnum.Yes]); // 👉️ "Yes"

// ---------------------------------------------------

// // EXAMPLE 4

// // ✅ NUMERIC Enums
// enum NumericEnum {
//   Yes,
//   No,
//   Maybe,
// }

// // 👇️ to number
// const num = NumericEnum.Yes;
// console.log(num); // 👉️ 0
// console.log(typeof num); // 👉️ "number"

// ---------------------------------------------------

// // EXAMPLE 4

// // ✅ STRING Enums
// enum StringEnum {
//   Yes = 'Y',
//   No = 'N',
//   Maybe = 'M',
// }

// // 👇️ to string
// const str = StringEnum.Yes;
// console.log(str); // 👉️ "Y"

// ---------------------------------------------------

// EXAMPLE 5

// // ✅ STRING Enums
// enum StringEnum {
//   Yes = 'Y',
//   No = 'N',
//   Maybe = 'M',
// }

// const names = Object.keys(StringEnum);
// console.log(names); // 👉️ ['Yes', 'No', 'Maybe']

// const values = Object.values(StringEnum);
// console.log(values); // 👉️ ['Y', 'N', 'M']

// ---------------------------------------------------

// // EXAMPLE 6

// // ✅ NUMERIC Enums
// enum NumericEnum {
//   Yes,
//   No,
//   Maybe,
// }

// const names = Object.keys(NumericEnum).filter((v) => isNaN(Number(v)));
// console.log(names); // 👉️ ['Yes', 'No', 'Maybe']

// const values = Object.values(NumericEnum).filter((v) => !isNaN(Number(v)));
// console.log(values); // 👉️ [0, 1, 2]
