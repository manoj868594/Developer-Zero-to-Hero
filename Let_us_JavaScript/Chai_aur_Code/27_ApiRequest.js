const requestUrl = 'https://api.github.com/users/manoj868594';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
    if(xhr.readyState === 4){
        // console.log(this.responseText)
        const data = JSON.parse(this.responseText);
        // console.log(typeof data)
        // console.log(data.followers);
    }
}
const clickme = document.getElementById('clickme');
clickme.addEventListener('click', function clickMe(){
    // practice project img and followers
    const dataResponse = JSON.parse(xhr.responseText);
    // console.log("Clicked")
    // console.log(dataResponse.avatar_url)
    const main = document.getElementById('Main')
    main.innerHTML = `
    <div id="card" style="text-align: center;">
    <img src="${dataResponse.avatar_url}" alt="" style="width: 100px;">
    <div>My followers is: ${dataResponse.followers}</div>
    <div>Created At: ${dataResponse.created_at}</div>
    </div>
    `
})
xhr.send();
