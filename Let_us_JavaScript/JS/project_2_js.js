// firstly JS file link at the end of body tag in HTML 

// selection
const home = document.querySelector("#home");
const nav = document.querySelector("#nav");

// css change
home.style.color = "red";
home.style.fontWeight = "800";

nav.style.display = "flex";
nav.style.gap = "3rem";
nav.style.height = "4rem";
nav.style.alignItems = "center";

// html change
// home.innerHTML = "<div>Hello JS innerHTML</div>"

// text change
// home.textContent = "Hello JS textContent"
// adding listeners
home.addEventListener('mouseenter',function(){
    home.style.color = "black";

})
home.addEventListener('mouseleave',function(){
    home.style.color = "red";
})

// starting projects
const myData = [
    {
        name: "Petals of roses",
        image: "https://images.unsplash.com/photo-1530906622963-8a60586a49c7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Dark of nature",
        image: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "The crowd of city",
        image: "https://images.unsplash.com/photo-1575936444724-1cd7baee8ec2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "The Animals of nature",
        image: "https://plus.unsplash.com/premium_photo-1667239340032-424b4d86e01d?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "The Birds fly in sky",
        image: "https://images.unsplash.com/photo-1449357468578-d7b4e3ddccbc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
];
function showMyData(){
    let clutter = "";
    myData.forEach(function(data){
        clutter += `
            <div class="box" style="padding: 1rem;">
                <img src="${data.image}" alt="img found">
                <div class="caption">${data.name}</div>
            </div>
        `;
    })
    document.querySelector("#content").innerHTML = clutter;
    // console.log(clutter)
}
function handleInput(){
    let searchInput = document.querySelector("#textSearch");

    searchInput.addEventListener('focus', function(){
        document.querySelector(".overlay").style.display = "block";
    });
    searchInput.addEventListener('blur', function(){
        document.querySelector(".overlay").style.display = "none";
        
    });
    let searchData = document.querySelector('.searchdata');
    searchInput.addEventListener('input', function(){
        const filterArr = myData.filter(obj => obj.name.toLowerCase().startsWith(searchInput.value));
        // console.log(filterArr);
        let clutter1 = "";
        filterArr.forEach(function(obj){
            clutter1 += 
            `
                <div class="flex">
                    <i class="ri-search-line"></i>
                    <h3>${obj.name}</h3>
                </div>
            `
        });
        if(searchInput.value === "" || searchInput.value === " "){
            searchData.style.display = "none";
        }else{
            searchData.style.display = "block";
        }
        searchData.innerHTML = clutter1;
    })
    searchInput.addEventListener('blur', function(){
        searchData.style.display = "none";
    });
}
showMyData();
handleInput();

// Some text handle by Data fetch
const myText = [
    { fname: "Apple"},
    { fname: "Avocados"},
    { fname: "Cranberry"},
    { fname: "Dragonfruit"},
    { fname: "Finder lime"},
    { fname: "Grapefruit"},
    { fname: "Hazelnut"},
    { fname: "Horned melon"},
    { fname: "Banana"},
    { fname: "Blueberry"},
    { fname: "Cherry"},
    { fname: "Coconut"},
    { fname: "Guava"},
    { fname: "Pear"},
    { fname: "Papaya"},
];
function showFruitData(){
    let fruitData = "";
    myText.forEach(function(data){
        fruitData += `<h3>${data.fname}</h3>`
    })
    document.querySelector('.fruitdata').innerHTML = fruitData;
}
function FruitData(){
    let fruitData = document.querySelector('.fruitdata');
    let fruitInput = document.querySelector('.fruitInput');
    
    fruitInput.addEventListener('input', function(){
        const filterFruit = myText.filter(fruit => fruit.fname.toLowerCase().startsWith(fruitInput.value));
        // console.log(filterFruit)
        let fruits = "";
        if(fruitInput.value === "" || fruitInput.value === " "){
            fruits = "";
        }else{
            filterFruit.forEach(function(fruit1){
                fruits += `<h3>${fruit1.fname}</h3>`
            });
        }
        fruitData.innerHTML = fruits;
        // console.log(fruits)
    })
}
showFruitData();
FruitData();

const Users = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      "userId": 1,
      "id": 7,
      "title": "magnam facilis autem",
      "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      "userId": 1,
      "id": 8,
      "title": "dolorem dolore est ipsam",
      "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      "userId": 1,
      "id": 9,
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      "userId": 1,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
      "userId": 2,
      "id": 11,
      "title": "et ea vero quia laudantium autem",
      "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    }
]
function UserDetails(){
    const userInput = document.querySelector('.UserInput');
    const tbody = document.querySelector('tbody');
    userInput.addEventListener('input', function(){
        const filterUser = Users.filter(users =>{
            return users.title.startsWith(userInput.value)
            || users.id.toString().startsWith(userInput.value)});
        // console.log(filterUser)
        let userData = "";
        if(userInput.value === "" || userInput.value === " "){
            userData = "";
        }else{
            filterUser.forEach(function(title){
                userData += `
                                <tr>
                                <td>${title.userId}</td>
                                <td>${title.id}</td>
                                <td>${title.title}</td>
                                <td>${title.body}</td>
                                </tr>
                            `
            })
        }
        tbody.innerHTML = userData;
    })
}
UserDetails();

const Products = [
  {name: "Stool", heading: "wooden bar stool", price: "10,000", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
  {name: "Chair", heading: "gray and padded chair", price: "12,000", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww"},
  {name: "Chair", heading: "wooden chair", price: "11,400", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww"},
  {name: "Brown chair", heading: "brown wooden chair", price: "13,200", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
]
const Popular = [
  {name: "ABC", price: "$3594", image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "BCD", price: "$3594", image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "CDE", price: "$3594", image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
const cart = [];
function ProductsDetail(){
  let Productclutter = "";
  Products.forEach(function(obj,index){
    Productclutter += `<div class="msgbox">
                        <img src="${obj.image}" alt="">
                        <h3>${obj.name}</h3>
                        <h5>${obj.heading}</h5>
                        <h4>${obj.price}</h4>
                        <i data-index=${index} class="ri-add-line add"></i>
                        </div>`
  })
  document.querySelector('.products').innerHTML = Productclutter;
}
function PopularDetails(){
  let Popularity = "";
  Popular.forEach(function(pop){
    Popularity += ` <img src="${pop.image}" alt="" width="50px">
                    <div class="textheading">
                        <h3>${pop.name}</h3>
                        <h4>${pop.price}</h4>
                        <i class="ri-add-line"></i>
                    </div>
                  `
  })
  document.querySelector('.child').innerHTML = Popularity;
}
function addToCart(){
  document.querySelector(".products").addEventListener('click', function(details){
    if(details.target.classList.contains('add')){
      cart.push(Products[details.target.dataset.index]);
      // console.log(cart)
    }else{
    }
  })
}
function showCart(){
  document.querySelector('.carticon').addEventListener('click', function(){
  document.querySelector('.cartexpand').style.display = "block";
  let productClutter = "";
  cart.forEach(function(prod, index){
    productClutter += ` <div class="flex1" style="display: flex;padding: 10px">
                            <img src="${prod.image}" alt="" width="25px">
                            <div>
                              <h3>${prod.name}</h3>
                              <h5>${prod.price}</h5>
                            </div>
                          </div>`
    })
    document.querySelector('.cartexpand').innerHTML = productClutter;
  })
}
ProductsDetail();
PopularDetails();
addToCart();
showCart();

const musicList = [
  {title: "Arjan Vailly", des: "Animal movie songs", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202301/Animal_1673270841.jpg", url: "../songs/01 - Arjan Vailly.mp3"},
  {title: "Nagiro", des: "Nagiro", image: "https://www.naasongs.co/wp-content/uploads/2024/06/Pottel-Telugu-2024-Bujji-Meka-250x250.jpg", url: "../songs/02 - Nagiro.mp3"},
  {title: "Shankara", des: "Shankara", image: "https://www.naasongs.co/wp-content/uploads/2024/06/Pottel-Telugu-2024-Bujji-Meka-250x250.jpg", url: "../songs/03 - Shankara.mp3"},
  {title: "Bujji Meka", des: "Bujji Meka", image: "https://www.naasongs.co/wp-content/uploads/2024/06/Pottel-Telugu-2024-Bujji-Meka-250x250.jpg", url: "../songs/04 - Bujji Meka.mp3"},
  {title: "Lucky Bhaskar", des: "Srimathi Guru", image: "https://www.naasongs.co/wp-content/uploads/2024/06/Lucky-Bhaskar-2024-Srimathi-Garu-250x250.jpg", url: "../songs/05 - Srimathi Garu.mp3"},
  {title: "Kalki", des: "Kalki", image: "https://www.naasongs.co/wp-content/uploads/2024/06/Kalki-2024-Bhairava-Anthem-250x250.jpg", url: "../songs/06 - Kalki 2898 AD Glimpse.mp3"},
]
const divMusicList = document.querySelector('.musicList');
const poster = document.querySelector('.poster');
const backword = document.querySelector('#backward');
const play = document.querySelector('#play');
const forward = document.querySelector('#forward');
let audio = new Audio();
let selectedSong = 0;
function showMusicList(){
  let Musics = "";
  musicList.forEach(function(val,index){
    Musics += `<div class="childmusic" id=${index}>
                        <img src="${val.image}" alt="animal not found">
                        <div class="title">
                            <h3>${val.title}</h3>
                            <h5>${val.des}</h5>
                        </div>
                    </div>`
  });
  divMusicList.innerHTML = Musics;
  audio.src = musicList[selectedSong].url;
  poster.style.backgroundImage = `url(${musicList[selectedSong].image})`
}
let flag = 0;
function playMusiList(){
  divMusicList.addEventListener('click', function(detail){
    selectedSong = detail.target.id;
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    showMusicList();
    // console.log(selectedSong)
    audio.play();
    flag = 1;
    // console.log(detail.target);
    // console.log(musicList[detail.target.id].url);
  });
}
showMusicList();
playMusiList();
play.addEventListener('click', function(){
    if(flag == 0){
      play.innerHTML = `<i class="ri-pause-fill"></i>`
      showMusicList();
      audio.play();
      flag = 1;
    }else{
      play.innerHTML = `<i class="ri-play-line"></i>`
      showMusicList();
      audio.pause();
      flag = 0;
    }
});
forward.addEventListener('click', function(){
  if(selectedSong > musicList.length - 2){
    flag = 0;
    forward.style.opacity = 0.4;
  }else{
    // console.log(selectedSong)
      forward.style.opacity = 1;
      selectedSong++;
      // console.log(musicList.length)
      // console.log(selectedSong)
      play.innerHTML = `<i class="ri-pause-fill"></i>`
      showMusicList();
      flag = 1;
      audio.play();
    }
});
backword.addEventListener('click', function(){
    if(selectedSong < 0){
      backword.style.opacity = 0.4;
      flag = 1;
    }else{
      // console.log(selectedSong)
      backword.style.opacity = 1;
      selectedSong--;
      play.innerHTML = `<i class="ri-pause-fill"></i>`
      showMusicList();
      audio.play();
      flag = 0
    }
});


// 5 2:40:46