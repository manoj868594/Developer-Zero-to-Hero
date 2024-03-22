const clockElement = document.getElementById("clock");
const clockQuery = document.querySelector("#clock");

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    // clockElement.innerHTML = date.toLocaleTimeString();
    // clockQuery.innerHTML = date.toLocaleDateString();
    // clockElement.innerHTML = date.toLocaleString()
    // clockElement.innerHTML = date.getDate()
    // clockElement.innerHTML = date.getFullYear()
    // clockElement.innerHTML = date.getHours()
    // clockElement.innerHTML = date.getMilliseconds()
    clockElement.innerHTML = date.toTimeString()
}, 1000);
