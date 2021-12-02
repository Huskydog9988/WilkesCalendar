const day = new Date().getDay()

switch (day) {
  case 0:
    console.log("Sunday");
  case 5:
    console.log("Friday");
  case 6:
    console.log("Saturday");
  default:
    console.log("Monday");
}
