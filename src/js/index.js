//API:450f19f1f694441d5122af7482667505
//base URL:https://api.themoviedb.org/3
//Link:https://api.themoviedb.org/3/search/movie?api_key=450f19f1f694441d5122af7482667505&language=en-US&page=1&include_adult=false

//model view controller


import Search from "./models/Search";
import {elements,renderLoader,clearLoader} from "./base";
import * as searchView from "./views/searchView";
import * as movieView from "./views/movieView";
import { Movie } from "./models/movie";

const state={};

//search controller

const searchController= async()=>{

    const keyword=elements.searchInput.value;
    if(keyword){
        state.search=new Search(keyword);
        searchView.clearInput();
        searchView.clearResult();

        renderLoader(elements.movieListContainer);
       await state.search.getResults();
      
      searchView.displayResults(keyword,state.search.data);
       setTimeout(()=>{
        clearLoader(elements.movieListContainer);
       },1000) 
    }else{
        alert("anahtar kelime girmelisiniz");
    }

}

elements.searchForm.addEventListener("submit",function(e){
    searchController();
    e.preventDefault();
});

const movieController=async()=>{
    const id=window.location.hash.replace("#","");
    if(id){
        state.movie=new Movie(id);

        renderLoader(elements.movieDetailsContainer);

        await state.movie.getMovie();
        movieView.backToTop();
     
       setTimeout(()=>{
        clearLoader(elements.movieDetailsContainer);
       },1000) 
       
       movieView.displayMovie(state.movie.data);
    }
   
};
//movie controller
const movie=new Movie(252291);
movie.getMovie();
window.addEventListener("hashchange",movieController);
elements.movieDetailsClose.addEventListener("click",movieView.closeDetails);
