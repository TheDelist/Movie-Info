import {elements} from "../base";

export const clearInput=()=>{
    elements.movieList.value="";
}
export const clearResult=()=>{
    elements.movieList.innerHTML="";
}
export const displayResults=(keyword,data)=>{
    data.results.forEach(movie => {
         const html=`
         <div class="d-flex align-items-center my-4">
         <div class="flex-shrink-0">
           <img src="https://www.themoviedb.org/t/p/w92/${movie.poster_path}"onerror="this.src='https://via.placeholder.com/92x138';" alt="${movie.title}">
         </div>
         <div class="flex-grow-1 ms-3">
             <h5 class="mt-0 mb-1">
             <span class="badge bg-primary">${movie.vote_average}</span>
            <a href="#${movie.id}">${movie.title}</a> </h5>
         <p>${movie.overview}</p>
         </div>
       </div>
         `;
          elements.movieListHeader.innerHTML=`${keyword} arasında ${data.total_results} sonuç bulundu`;
         if(elements.movieListContainer.classList.contains('d-none')){
          elements.movieListContainer.classList.toggle("d-none");
      };
        elements.movieList.insertAdjacentHTML("beforeend",html);
    
    
        });



}