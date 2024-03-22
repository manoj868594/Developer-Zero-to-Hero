const sayHitesh = function () {
    console.log("JS Course");
  };
  // setTimeout(sayHitesh, 2000);
  // sayHitesh() in block is execut and refrence sayhitesh only
  const changeText = function () {
    document.querySelector("h1").innerHTML = "Best JS Series";
    // console.log("changged")
  };
  // const changeMe = setTimeout(changeText, 2000);

  document.querySelector("#stop").addEventListener("click", clearInt);
  function clearInt() {
    // clearTimeout(changeMe)
    // console.log("STOPPED")
  }

  // const strh2 = document.querySelector("h2");
  // const start = document.querySelector("#start1").addEventListener("click", startInterval);
  // const stop = document.querySelector("#stop1").addEventListener("click", stopInterval);

  function startInterval() {
      intervalId = setInterval(function () {
          updateDateTime();
        }, 1000);
  }

  function stopInterval() {
    clearInterval(intervalId);
  }

  function updateDateTime() {
    // Get the current date and time
    let myDate = new Date();
    // Format the date and time as a string
    let formattedDateTime = myDate.toLocaleString();
    // Update the content of the h2 element with the formatted date and time
    strh2.textContent = formattedDateTime;
  }


/**********Backgroung Color every Time************/
//generate random color
const randomColor = function() {
  const hex = "0123456789ABCDEF";
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
// console.log(randomColor());
// console.log(Math.floor(Math.random() * 16))

const startChangingColor = function(){}
const stopChangingColor = function(){}
document.querySelector('#startbg').addEventListener('click', startChangingColor);
document.querySelector('#stopbg').addEventListener('click', stopChangingColor);

39 video 