// api_url created by themoviesdb.org site, this api used to  sort movies by popularity, at last we write page=1 because we want result of first page which is 30 approx.
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
// we pick image_url on the 'themoviesdb.org' site, we take images because we want different images to create our site.
const IMG_URL = 'https://image.tmdb.org/t/p/w1280'
// we need search url because our website contain a function of searching, so we replace 'discover' in 'API_URL' with 'search' , and at last we leave 'query' with ' " '(double quotes sign), because we give query to search and that query concatnate with 'SEARCH_URL'. 
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
getMovies(API_URL)

// we want to use promise here so, async function is used.
async function getMovies(url)
{
    //fetch() function give a promise, but this is not in any format.
    const res = await fetch(url)
    // we take data in json() format
    const data = await res.json()
    if(data.results.length>0){
        showMovies(data.results)
    }else{
        window.location.reload()
    }
}

function showMovies(movies)
{
    main.innerHTML = ''
    movies.forEach((movie) => {
        // const{} mean structure
        const {title, poster_path, vote_average, overview}=movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML=`
            <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getclassByVote(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    })
}

function getclassByVote(vote)
{
    if(vote>=8){
        return 'green'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit',(e)=>{
    // preventDefault function cancel the action if it is cancelable.
    e.preventDefault()
    const searchTerm = search.value

    if(searchTerm && searchTerm!=''){
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    }else{
        // reload the window
        window.location.reload()
    }
})