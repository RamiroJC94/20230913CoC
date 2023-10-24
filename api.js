// Example
// https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg
//https://api.themoviedb.org/3/movie/385687-fast-x

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
        console.log(resPost)
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
    component=document.getElementsByClassName('popup')[0];
    try{
            if(!document.getElementsByClassName('popup')[0]){
                desc= await GetMovie(idMovie);
                document.getElementById("info").insertAdjacentHTML("afterend", `
                <div class="popup" style="display: flex;">
                    <h3>Titulo: ${state.title}</h3>
                    <p>Fecha de estreno: ${state.release_date}</p>
                    <p>Calificacion: ${state.vote_average}</p>
                    </div>
                `)
                console.log('create popup')
            }else{
                isVisible();
            }
        }

    catch(error){
        console.log('Ocurrió un error grave', error)
    }
}

const isVisible = async () =>{
                if (document.getElementsByClassName('popup')[0].style.display==='flex'){
                    document.getElementsByClassName('popup')[0].style.display='none'
                }else{
                    document.getElementsByClassName('popup')[0].style.display='flex'
                }
}
// GetMovie("385687-fast-x");