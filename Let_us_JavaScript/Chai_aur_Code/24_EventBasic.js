
// old aproch for js code
// document.getElementById('photoshop').onclick = function(){
//     alert("Photoshop Clicked")
// }

//New aproch code
document.getElementById('photoshop').addEventListener('click', function(e){
    //alert('Photoshop clicked again')
    // console.log("Photoshop clicked")
    // e.stopPropagation();
}, false)

// attachEvent() , jQuery - onEvent
// Event Object
document.getElementById('imgs').addEventListener('click', function(e){
    // console.log(e)
    // console.log("ul clicked")
}, false) // fasle is event propogation this is by default false

// More Events Learn :- type, timestamp, defaultPrevented, target, oElement, srcElement, currentTarget, clientX, clientY, screenX, screenY, altKey, ctrlKey, shiftKey, ketCode

document.getElementById('google').addEventListener('click', function(e){
    // e.stopPropagation();
    e.preventDefault();
    // console.log("Google Clicked");
}, false)

// Event spilOver
document.querySelector('#imgs').addEventListener('click', function(e){
    // console.log(e.target);
    // console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        // console.log(e.target.id)
        let removeIt = e.target.parentNode;
        removeIt.remove()
    }
}, false)

// # Program

// Assuming you have a container with the id 'imgs' containing the images
// const container = document.querySelector('#imgs');

// // Get all images inside the container
// const images = Array.from(container.querySelectorAll('img'));

// // Initialize index to 0
// let currentIndex = 0;

// // Set up an interval to remove and add images in a loop
// const intervalId = setInterval(function() {
//     // Check if there are still images to remove
//     if (currentIndex < images.length) {
//         // Remove the current image
//         images[currentIndex].remove();
//         currentIndex++;
//     } else {
//         // If all images are removed, add them back and reset index
//         images.forEach(image => container.appendChild(image));
//         currentIndex = 0;
//     }
// }, 200);
