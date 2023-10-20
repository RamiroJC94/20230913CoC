// Example
// https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg

const state={
    title:"",
    image:"",
    trailer:"",
    overview:"",
    release_date:"",
    vote_average:""
}
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmFjM2ZkMjIwYTgzMzkwZTgzMTZjZWI4MjNmYzcxYiIsInN1YiI6IjY0ZjM0OWUwZTBjYTdmMDBhZTNhMzRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9rtPkIKoD_c9iUMfghjF-DDcvKov9GGt0PadVC6P5pE'
    }
  };

const Movies=[
    "385687-fast-x",
    "724209-heart-of-stone",
    "346698-barbie",
    "976573-elemental",
    "335977-indiana-jones-and-the-dial-of-destiny",
    "968051-the-nun-ii",
    "717930-kandahar",
    "678512-sound-of-freedom"
];

const GetMovie = async (idMovie) => {
    try{
        const resPost = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}`, options)
        const post = await resPost.json()
        state.overview=post.overview
        state.title=post.title
        state.image=`https://image.tmdb.org/t/p/original${post.backdrop_path}`
        state.release_date=post.release_date
        state.vote_average=post.vote_average
    }
    catch(error){
        console.log('Ocurrió un error grave', error)
    }
}

const GetDescription = async (idMovie) => {
    try{
            desc= await GetMovie(idMovie);
            document.getElementById("info").insertAdjacentHTML("afterend", `
            <div class="popup">
                <h3>${state.title}</h3>
                <p>${state.release_date}</p>
                <p>${state.vote_average}</p>
             </div>
            `)
        }

    catch(error){
        console.log('Ocurrió un error grave', error)
    }
}

// GetMovie("385687-fast-x");


