let strang = document.querySelector('#strang');
let addFriend = document.querySelector('#add');
let remove = document.querySelector('#remove');
let flag  = 0;
addFriend.innerHTML = "Add Friend"
addFriend.addEventListener('click', function(){
    if(flag == 0){
        strang.innerHTML = "Friend";
        addFriend.innerHTML = "Remove Friend"
        strang.style.color = "green"
        flag = 1;
    }else{
        strang.innerHTML = "Stranger"
        addFriend.innerHTML = "Add Friend"
        strang.style.color = "red"
        flag = 0;
    }
})
// remove.addEventListener('click', function(){
//     strang.innerHTML = 'Stranger'
//     strang.style.color = "red"
// })

// Second Project
let main2 = document.querySelector('.main2');
let love = document.querySelector('.love');
main2.addEventListener('dblclick', function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = "1";
    setTimeout(() => {
        love.style.transform = "translate(-50%,-50%) scale(0.8)";
        love.style.opacity = "0";
    }, 800);
})

// Third Project
let bodyCursor = document.querySelector('.main3');
let customCursor = document.querySelector('#customcurser')
bodyCursor.addEventListener('mouseenter', function(det){
    customCursor.style.opacity = 1;
})
bodyCursor.addEventListener('mouseleave', function(det){
    customCursor.style.opacity = 0;
})
bodyCursor.addEventListener('mousemove', function(det){
     customCursor.style.left = det.x+"px";
     customCursor.style.top = det.y+"px";
})

// Forth Project
let elem = document.querySelectorAll('.elem');
elem.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1;
    })
    val.addEventListener('mouseleave', function(){
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener('mousemove', function(detail){
        console.log(detail.x,detail.y)
        val.childNodes[3].style.left = detail.x+"px";
        val.childNodes[3].style.top = detail.y+"px";
    });
});

// Fifth project

const img = [
    {image: "https://assets.gadgets360cdn.com/pricee/assets/product/202301/Animal_1673270841.jpg", url: "../songs/01 - Arjan Vailly.mp3"},
    {image: "https://www.naasongs.co/wp-content/uploads/2024/06/Pottel-Telugu-2024-Bujji-Meka-250x250.jpg", url: "../songs/04 - Bujji Meka.mp3"},
    {image: "https://www.naasongs.co/wp-content/uploads/2024/06/Lucky-Bhaskar-2024-Srimathi-Garu-250x250.jpg", url: "../songs/05 - Srimathi Garu.mp3"},
    {image: "https://www.naasongs.co/wp-content/uploads/2024/06/Kalki-2024-Bhairava-Anthem-250x250.jpg", url: "../songs/06 - Kalki 2898 AD Glimpse.mp3"},
]
let childInner = document.querySelector('.innermain5');
let clutter = "";
img.forEach(function(val,id){
    clutter += `<div class="childinner">
                    <img id=${id} class="full_image" src="${val.image}" alt="">
                </div>`
})
childInner.innerHTML = clutter;
let FullImg = document.querySelectorAll('.full_image')
let fullScreen = document.querySelector('#full_screen');
FullImg.forEach(function(val){
    val.addEventListener('click', function(dets){
        fullScreen.style.display = 'block';
        // console.log(img[dets.target.id].image)
        fullScreen.style.backgroundImage = `url(${img[dets.target.id].image})`;
        setTimeout(function(){
            fullScreen.style.display = 'none';
        }, 3000);
    });
});