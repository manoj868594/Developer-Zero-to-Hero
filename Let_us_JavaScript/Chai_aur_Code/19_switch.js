// Syntex of switch

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case "April":
    console.log("April");
    break;
  default:
    console.log("Default Case");
}
// agr break is not use than execute all statements accept default statement