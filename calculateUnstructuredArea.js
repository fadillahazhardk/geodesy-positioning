const convert = require("convert-units");

//Insert your trapesium or triangle data in cm(triangle is trapesium with a or b value is zero)
const areasInCm = [
  { a: 12, b: 12, height: 2 },
  { a: 4, b: 4, height: 2 },
];

convertAreaFromCmToM = (area) => {
  return convert(area).from("cm2").to("m2");
};
convertAreaFromCmToHa = (area) => {
  return convert(area).from("cm2").to("ha");
};
calculateTrapesium = (obj) => {
  return ((obj.a + obj.b) * obj.height) / 2;
};
calculateAreaFromCm = (arr, unit = "cm2") => {
  let area = null;
  arr.forEach((obj) => {
    switch (unit) {
      case "m2":
        area += convertAreaFromCmToM(calculateTrapesium(obj));
        break;
      case "ha":
        area += convertAreaFromCmToHa(calculateTrapesium(obj));
        break;
      default:
        area += calculateTrapesium(obj);
        break;
    }
  });
  return `area is ${area} ${unit}`;
};

//Calculate your area based on data you provide
console.log(calculateAreaFromCm(areasInCm, "ha"));
