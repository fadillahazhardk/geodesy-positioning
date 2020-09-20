const convert = require("convert-units");

//Insert your trapesium data
const trapesiumDataAreasInCm = [
  { a: 0, b: 0.6, height: 0.1 },
  { a: 0.6, b: 1.7, height: 14.1 },
  { a: 1.7, b: 2.15, height: 0.1 },
  { a: 2.15, b: 2.4, height: 4.5 },
  { a: 2.4, b: 1.35, height: 1.5 },
  { a: 1.35, b: 0.75, height: 1.1 },
  { a: 0.75, b: 0, height: 1.7 },
  { a: 1.15, b: 0, height: 2.2 },
  { a: 2.5, b: 1.15, height: 15.7 },
  { a: 0, b: 2.5, height: 5.4 },
];

const triangleDataAreasInCm = [
  { a: 5.95, b: 0.65, c: 6.05 },
  { a: 6.05, b: 14.2, c: 9.8 },
  { a: 9.8, b: 15.75, c: 7.35 },
  { a: 7.35, b: 7.5, c: 0.5 },
  { a: 7.5, b: 4.75, c: 4.05 },
  { a: 4.05, b: 2.55, c: 1.7 },
  { a: 2.55, b: 1.25, c: 2 },
  { a: 2, b: 1.9, c: 2.55 },
];

calculateTrapesiumInCmWithScale = (obj, scale) => {
  const a = obj.a * scale;
  const b = obj.b * scale;
  const height = obj.height * scale;
  return ((a + b) * height) / 2;
};
calculateTriangleInCmWithScale = (obj, scale) => {
  const a = obj.a * scale;
  const b = obj.b * scale;
  const c = obj.c * scale;
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};
calculateTrapesiumAreaInCm = (arr, scale) => {
  let area = null;
  arr.forEach((obj) => {
    area += calculateTrapesiumInCmWithScale(obj, scale);
  });
  return area;
};
calculateTriangleAreaInCm = (arr, scale) => {
  let area = null;
  arr.forEach((obj) => {
    area += calculateTriangleInCmWithScale(obj, scale);
  });
  return area;
};

//Calculate your area based on data you provide
const triangleMethodToHa = convert(
  calculateTriangleAreaInCm(triangleDataAreasInCm, 150)
)
  .from("cm2")
  .to("ha");
const trapesiumMethodToHa = convert(
  calculateTrapesiumAreaInCm(trapesiumDataAreasInCm, 150)
)
  .from("cm2")
  .to("ha");
const triangleMethodToM2 = convert(
  calculateTriangleAreaInCm(triangleDataAreasInCm, 150)
)
  .from("cm2")
  .to("m2");
const trapesiumMethodToM2 = convert(
  calculateTrapesiumAreaInCm(trapesiumDataAreasInCm, 150)
)
  .from("cm2")
  .to("m2");
console.log("with triangle: " + triangleMethodToHa + " ha");
console.log("with triangle: " + triangleMethodToM2 + " m2");

console.log("with trapesium: " + trapesiumMethodToHa + " ha");
console.log("with trapesium: " + trapesiumMethodToM2 + " m2");


