const baseURL = 'https://api.giphy.com/v1/';
const trendingUrl = 'gifs/trending';
const key = 'ObP8ksnXJhWcdbRRyzHmxU36pCr3OVnx';
let button = document.getElementById('button');
let gif = document.querySelector('gifbox');
button.addEventListener('click', fetchGif);


function fetchGif(){
    let url = `${baseURL}${trendingUrl}?api_key=${key}&limit=6`;
    fetch(url)
    .then(function (result) {
        console.log(result)
        return result.json();
    })
    .then(function (json) {
        console.log(json);
        displayGif(json);
    })
}


function displayGif(json){
document.querySelector('.carousel').style.display = 'flex';
for (let i=0; i < json.data.length; i++){
    document.getElementById(`carousel${i}`).style.height = "400px"
    document.getElementById(`carousel${i}`).src = json.data[i].images.original.url;
        console.log(json.data[i].images.original.url);
}  
}