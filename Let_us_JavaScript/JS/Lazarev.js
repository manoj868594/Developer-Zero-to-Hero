const nav = document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
    const tl = gsap.timeline();
    tl.to("#border-bottom",{
        height:"18vh"
    })
    tl.to(".nav-elem h5",{
        display:"block"
    })
})

1:04:50 shreyians