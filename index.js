"strict mode";

//Event Handler
const ageInput = document.querySelector("#age");
const maleRadio = document.querySelector("#male");
const femaleRadio = document.querySelector("#female");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const activityOptions = document.querySelector("#activity");
const submitBtn = document.querySelector("#submit-button");
const calorieTotalValue = document.querySelector("#total-calories");

//Variable
let bmr;
let calorieNeeded;
let age;
let gender;
let weight;
let height;

//Create a function which calculates BMI
// const bmrCalculator = function () {
//   age = +ageInput.value;
//   gender = maleRadio.checked ? "male" : "female";
//   weight = +weightInput.value;
//   height = +heightInput.value;

//   console.log(age, gender, weight, height);

//   if (gender === "male") {
//     console.log(gender);
//     bmr = Math.round(66.47 + 13.75 * weight + 5.003 * height - 6.755 * age);
//   } else {
//     bmr = Math.round(655.1 + 9.563 * weight + 1.85 * height - 4.676 * age);
//   }

//   console.log(bmr);
//   return bmr;
// };

//Male BMR
const maleBMR = function () {
  age = +ageInput.value;
  weight = +weightInput.value;
  height = +heightInput.value;

  bmr = Math.round(88.4 + 13.4 * weight + 4.8 * height - 5.68 * age);
  return bmr;
};

//Female BMR
const femaleBMR = function () {
  age = +ageInput.value;
  weight = +weightInput.value;
  height = +heightInput.value;
  bmr = Math.round(447.6 + 9.25 * weight + 3.1 * height - 4.33 * age);
  return bmr;
};

const calorieOutcome = function () {
  // bmrCalculator();

  if (maleRadio.checked) {
    maleBMR();
  }

  if (femaleRadio.checked) {
    femaleBMR();
  }
  if (activityOptions.value == 0) {
    calorieNeeded = Math.round(bmr * 1.2);
  }
  if (activityOptions.value == 1) {
    calorieNeeded = Math.round(bmr * 1.375);
  }
  if (activityOptions.value == 2) {
    calorieNeeded = Math.round(bmr * 1.55);
  }
  if (activityOptions.value == 3) {
    calorieNeeded = Math.round(bmr * 1.725);
  }
  if (activityOptions.value == 4) {
    calorieNeeded = Math.round(bmr * 1.9);
  }

  calorieTotalValue.textContent = +calorieNeeded;
  return calorieNeeded;
};

submitBtn.addEventListener("click", calorieOutcome);
