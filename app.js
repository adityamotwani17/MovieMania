let apikey = "https://www.omdbapi.com/?apikey=37e9577&t=";

let title = document.getElementById("title");
let release = document.getElementById("release");
let genre = document.getElementById("genre");
let director = document.getElementById("director");
let writer = document.getElementById("writer");
let actor = document.getElementById("actor");
let award = document.getElementById("award");
let rating = document.getElementById("rating");
let poster = document.getElementById("poster");
let synopsis = document.getElementById("desc");

let mvc = document.getElementById("mvc");
 let loader = document.getElementById("loader");



function searchMovie(){
    var search_movie = document.getElementById("search_movie");
    let api = apikey + search_movie.value;
let movieContainer = document.getElementsByClassName("movieContainer");
    search_movie.innerText = "";
    fetch(api).then((data)=>{
        loader.style.display = "block";
        return data.json();

    }).then((data)=>{
        loader.style.display = "none";
        mvc.style.display = "flex";
        if(data.Title){

            title.innerText = data.Title;
            release.innerText = data.Released;
            genre.innerText = data.Genre;
            director.innerText = data.Director;
            writer.innerText = data.Writer;
            actor.innerText = data.Actors;
            award.innerText = data.Awards;
            rating.innerText = data.imdbRating;
            poster.src = data.Poster;
            synopsis.innerText = data.Plot;
            search_movie.value = "";
        }else{
            mvc.style.display="none";
            search_movie.value = "";
            alert("No such movie found !");
        }
        })
}

