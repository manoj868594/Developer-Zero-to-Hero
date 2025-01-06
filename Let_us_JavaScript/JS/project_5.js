// wappalyzar for website checking

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
// });

const data = [
    {
        name: "Markers Studio HOI",
        data_img: "https://images.unsplash.com/photo-1632831288982-1a95524975a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhcmslMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },{
        name: "50th Anniversary",
        data_img: "https://images.unsplash.com/photo-1632831291132-cb381f5bee8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmslMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },{
        name: "NYFW Popup",
        data_img: "https://images.unsplash.com/photo-1713103572759-fc0adbd064a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },{
        name: "Air Force 1 2021",
        data_img: "https://images.unsplash.com/file-1715714098234-25b8b4e9d8faimage?dpr=2&w=416&auto=format&fit=crop&q=60",
    },{
        name: "SOHO NYC",
        data_img: "https://images.unsplash.com/photo-1685537711167-1ac4e1805cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
];
let setDATA = document.querySelector("#section5");
let clutter = "";
data.forEach(function(elem,id){
    clutter += `<div class="sec5elem" id=${id} data-image=${elem.data_img}>
                <div class="overlay"></div>
                <h2>${elem.name}</h2>
                </div>`
    setDATA.innerHTML = clutter;
})
let section5 = document.querySelector("#section5");
let elem_container = document.querySelector('#elem_container');
section5.addEventListener('mouseenter', function(){
    elem_container.style.display = "block";
})
section5.addEventListener('mouseleave', function(){
    elem_container.style.display = "none";
})
let secelem = document.querySelectorAll(".sec5elem")
secelem.forEach(function(e){
    e.addEventListener('mouseenter', function(){
        const bgimg = e.getAttribute("data-image");
        elem_container.style.backgroundImage = `url(${bgimg})`
    })
})