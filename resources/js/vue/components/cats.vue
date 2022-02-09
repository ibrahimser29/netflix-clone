<template>
    <div class="trends">
        <div class="container">
        <div class="trends_categories">
            <router-link to="">Movies</router-link>
            <router-link to="">Series</router-link>
            <router-link to="">Original Series</router-link>
        </div>
        <hr />
        
        </div>
    <div class="shows"> 
        <div class="show_types">
            <button @click="addgenre('action')" class="active">Actions</button>
            <button @click="addgenre('adventure',e)">Adventure</button>
            <button @click="addgenre('comedy')">Comedy</button>
            <button @click="addgenre('romantic')">Romantic</button>
            <button @click="addgenre('drama')">Drama</button>
            <button @click="addgenre('crime')">Crime</button>
            <button @click="addgenre('documentary')">Documentary</button>
             <button @click="addgenre('horror')">Horror</button>
        </div>
<div   class="movies_series">
    <div class="container">
    <div v-for="movie in movies" :key="movie.id" class="movie_series">
        <img :src=movie.image />
        <h4>{{movie.title}}</h4>
        <div class="show_info"><p class="date">{{movies.year}}</p><p></p><p></p></div>
    </div>
</div>
  <div class="movies_shows_more">
  </div>
</div>
    </div>
    </div>
</template>

<script>
import Show from "./show.vue";
import axios from 'axios';
export default {
    components:{Show},
    data(){
        return{
            movies:[],
            movie:true,
            genre:['action']
        }
    },
    created(){
        this.movies = this.getShows()
    },
    methods:{
  getShows(){
            const options = {
         method: 'GET',
        url: `https://imdb-api.com/API/AdvancedSearch/k_0amp3qka/?genres=${this.genre}`,
        }
        var self = this;
axios.request(options).then(function (response) {
	self.movies = response.data.results.slice(0,6);
    console.log(response.data)
}).catch(function (error) {
	console.error(error);
});
        },
    addgenre(g){
       this.genre.push(g);
      this.getShows();
    }
    },
}
</script>