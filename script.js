const button = document.getElementsByTagName("button")[0];
const inputs = document.getElementsByTagName("input");
const ps = document.getElementsByTagName("p");
const spans = document.getElementsByTagName("span");
const labels = document.getElementsByTagName("label");

let today = new Date();
let validDay;
let validMonth;
let validYear;

inputs[0].addEventListener("input", function () {
  if (inputs[0].value < 0 || inputs[0].value >= 32) {
    ps[0].innerHTML = "Must be a valid day";
    labels[0].style.color = "hsl(0, 100%, 67%)";
    inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
    validDay = 0;
  } else if (inputs[2].value > today.getFullYear()) {
    ps[2].innerHTML = "Must be in the past";
    labels[2].style.color = "hsl(0, 100%, 67%)";
    inputs[2].style.borderColor = "hsl(0, 100%, 67%)";
    validYear = 0;
  } else if (
    inputs[2].value >= today.getFullYear() &&
    inputs[1].value > today.getMonth() + 1
  ) {
    ps[1].innerHTML = "Must be in the past";
    labels[1].style.color = "hsl(0, 100%, 67%)";
    inputs[1].style.borderColor = "hsl(0, 100%, 67%)";
    validMonth = 0;
  } else if (
    inputs[2].value >= today.getFullYear() &&
    inputs[1].value >= today.getMonth() + 1 &&
    inputs[0].value > today.getDate()
  ) {
    ps[0].innerHTML = "Must be in the past";
    labels[0].style.color = "hsl(0, 100%, 67%)";
    inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
    validDay = 0;
  } else {
    ps[0].innerHTML = "";
    labels[0].style.color = "hsl(0, 1%, 44%)";
    inputs[0].style.borderColor = "hsl(0, 0%, 86%)";
    validDay = 1;
  }
});

inputs[1].addEventListener("input", function () {
  if (inputs[1].value < 0 || inputs[1].value > 12) {
    ps[1].innerHTML = "Must be a valid month";
    labels[1].style.color = "hsl(0, 100%, 67%)";
    inputs[1].style.borderColor = "hsl(0, 100%, 67%)";
    validMonth = 0;
  } else if (inputs[2].value > today.getFullYear()) {
    ps[2].innerHTML = "Must be in the past";
    labels[2].style.color = "hsl(0, 100%, 67%)";
    inputs[2].style.borderColor = "hsl(0, 100%, 67%)";
    validYear = 0;
  } else if (
    inputs[2].value >= today.getFullYear() &&
    inputs[1].value > today.getMonth() + 1
  ) {
    ps[1].innerHTML = "Must be in the past";
    labels[1].style.color = "hsl(0, 100%, 67%)";
    inputs[1].style.borderColor = "hsl(0, 100%, 67%)";
    validMonth = 0;
  } else if (
    inputs[2].value >= today.getFullYear() &&
    inputs[1].value >= today.getMonth() + 1 &&
    inputs[0].value > today.getDate()
  ) {
    ps[0].innerHTML = "Must be in the past";
    labels[0].style.color = "hsl(0, 100%, 67%)";
    inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
    validDay = 0;
  } else {
    ps[1].innerHTML = "";
    labels[1].style.color = "hsl(0, 1%, 44%)";
    inputs[1].style.borderColor = "hsl(0, 0%, 86%)";
    validMonth = 1;
  }
});

inputs[2].addEventListener("input", function () {
  if (inputs[2].value > 0 && inputs[2].value <= 999) {
    //=0
    ps[2].innerHTML = "Must be 4 digits";
    labels[2].style.color = "hsl(0, 100%, 67%)";
    inputs[2].style.borderColor = "hsl(0, 100%, 67%)";
    validYear = 0;
  } else if (inputs[2].value < 0) {
    ps[2].innerHTML = "Must be a valid year";
    labels[2].style.color = "hsl(0, 100%, 67%)";
    inputs[2].style.borderColor = "hsl(0, 100%, 67%)";
    validYear = 0;
  } else if (inputs[2].value > today.getFullYear()) {
    ps[2].innerHTML = "Must be in the past";
    labels[2].style.color = "hsl(0, 100%, 67%)";
    inputs[2].style.borderColor = "hsl(0, 100%, 67%)";
    validYear = 0;
  } else if (
    inputs[2].value >= today.getFullYear() &&
    inputs[1].value > today.getMonth() + 1
  ) {
    ps[1].innerHTML = "Must be in the past";
    labels[1].style.color = "hsl(0, 100%, 67%)";
    inputs[1].style.borderColor = "hsl(0, 100%, 67%)";
    validMonth = 0;
  } else if (
    inputs[2].value >= today.getFullYear() &&
    inputs[1].value >= today.getMonth() + 1 &&
    inputs[0].value > today.getDate()
  ) {
    ps[0].innerHTML = "Must be in the past";
    labels[0].style.color = "hsl(0, 100%, 67%)";
    inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
    validDay = 0;
  } else {
    ps[2].innerHTML = "";
    labels[2].style.color = "hsl(0, 1%, 44%)";
    inputs[2].style.borderColor = "hsl(0, 0%, 86%)";
    validYear = 1;
  }
});

button.addEventListener("click", function () {
  if (inputs[0].value === "" || inputs[0].value == 0) {
    ps[0].innerHTML = "This field is required";
    labels[0].style.color = "hsl(0, 100%, 67%)";
    inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
    ps[0].style.display = "block";
    validDay = 0;
  }
});
button.addEventListener("click", function () {
  if (inputs[1].value === "" || inputs[1].value == 0) {
    ps[1].innerHTML = "This field is required";
    labels[1].style.color = "hsl(0, 100%, 67%)";
    inputs[1].style.borderColor = "hsl(0, 100%, 67%)";
    ps[1].style.display = "block";
    validMonth = 0;
  }
});
button.addEventListener("click", function () {
  if (inputs[2].value === "" || inputs[2].value == 0) {
    ps[2].innerHTML = "This field is required";
    labels[2].style.color = "hsl(0, 100%, 67%)";
    inputs[2].style.borderColor = "hsl(0, 100%, 67%)";
    ps[2].style.display = "block";
    validYear = 0;
  }
});

button.addEventListener("click", function () {
  let year = inputs[2].value;
  let month = inputs[1].value.padStart(2, "0");
  let day = inputs[0].value.padStart(2, "0");
  const joined = [year, month, day].join("-");
  let joinedString = `"${joined}"`;
  let inputDate = new Date(joinedString);
  let d = inputDate.getDate();

  let years = myYears();
  let months = myMonths();
  let days = myDays();

  if (Number(d) !== Number(day)) {
    //check if day was in this month (30 of February?)
    ps[0].innerHTML = "This day never existed";
    labels[0].style.color = "hsl(0, 100%, 67%)";
    inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
  } else if (validDay === 1 && validMonth === 1 && validYear === 1) {
    spans[0].innerHTML = `${years}`;
    spans[1].innerHTML = `${months}`;
    spans[2].innerHTML = `${days}`;
    ps[0].innerHTML = "";
    ps[1].innerHTML = "";
    ps[2].innerHTML = "";
    labels[0].style.color = "hsl(0, 1%, 44%)";
    labels[1].style.color = "hsl(0, 1%, 44%)";
    labels[2].style.color = "hsl(0, 1%, 44%)";
    inputs[0].style.borderColor = "hsl(0, 0%, 86%)";
    inputs[1].style.borderColor = "hsl(0, 0%, 86%)";
    inputs[2].style.borderColor = "hsl(0, 0%, 86%)";
  } else {
    ps[0].style.display = "block";
    ps[1].style.display = "block";
    ps[2].style.display = "block";
  }
});
function myDays() {
  let year = inputs[2].value;
  let month = inputs[1].value.padStart(2, "0");
  let day = inputs[0].value.padStart(2, "0");
  let lastDayOfMonth = new Date(year, month, 0);
  let lastDayNumber = lastDayOfMonth.getDate();

  if (Number(day) <= today.getDate()) {
    return today.getDate() - Number(day);
  } else {
    return lastDayNumber - Number(day) + today.getDate();
  }
}

function myMonths() {
  let day = inputs[0].value.padStart(2, "0");
  let month = inputs[1].value.padStart(2, "0");
  if (month < today.getMonth() + 1 && Number(day) > today.getDate()) {
    //+
    return today.getMonth() + 1 - month - 1;
  } else if (month < today.getMonth() + 1 && Number(day) <= today.getDate()) {
    //+
    return today.getMonth() + 1 - month;
  } else if (month > today.getMonth() + 1 && Number(day) <= today.getDate()) {
    //-1 year
    return 12 - month + today.getMonth() + 1;
  } else if (
    month === today.getMonth() + 1 &&
    Number(day) === today.getDate()
  ) {
    return month - today.getMonth();
  } else if (month > today.getMonth() + 1 && Number(day) > today.getDate()) {
    //
    return 12 - month + today.getMonth();
  }
  else if (month == today.getMonth() + 1 && Number(day) > today.getDate()) {
    console.log(`toooo`);
    return 11;
  } else {
    return month - today.getMonth() - 1;
  }
} //-1year

function myYears() {
  let month = inputs[1].value.padStart(2, "0");
  let day = inputs[0].value.padStart(2, "0");
  if (
    month > today.getMonth() + 1 ||
    (month == today.getMonth() + 1 && Number(day) > today.getDate())
  ) {
    return today.getFullYear() - inputs[2].value - 1;
  } else {
    return today.getFullYear() - inputs[2].value;
  }
}

