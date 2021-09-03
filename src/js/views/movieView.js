import {elements} from "../base";

export const backToTop=()=>{
    window.scrollTo({top:0,behavior:"smooth"});
}
export const closeDetails=()=>{
    
    elements.movieDetailsContainer.classList.add("d-none");

}
export const displayMovie=movie=>{
    var genres="";
    movie.genres.forEach(element => {
        genres+=`<span class="badge bg-primary me-1">${element.name}</span>`
    });
    var html=`<div class="row">`;

    html+=`<div class="col-md-4">
        <img class="img-fluid" src="https://www.themoviedb.org/t/p/w500/${movie.poster_path}"onerror="this.src='https://via.placeholder.com/92x138';" alt="${movie.title}">
    </div>

    <div class="col-md-8">
        <div>
            <h5>${movie.original_title}</h5>    
            <p>${movie.overview}</p>
            <p><small class="badge bg-primary">${movie.vote_average}</small> </p>
            <hr>
            ${genres}
        </div>
    </div>
             </div>
    `;
    if(elements.movieDetailsContainer.classList.contains('d-none')){
        elements.movieDetailsContainer.classList.toggle("d-none");
    };
    elements.movieDetails.innerHTML=html;
};