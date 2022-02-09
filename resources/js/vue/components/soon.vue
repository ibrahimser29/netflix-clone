<template>
    <div class="soon">
        <div class="container">
        <div class="cat"><div><p></p> {{category}}</div><router-link to="">See More</router-link></div>
        <div class="soon_shows">
            <div v-for="m in movies" :key="m.id" class="show">
                <img :src='m.image' />
                <div class="info"><p>{{m.year}}</p><p>{{m.contentRating}}</p></div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    props:['category','q'],
    data(){
        return {
            movies: [],
        }
    },
    created(){
       
        this.movies = this.getShows()
    },
    methods:{
        getShows(){
            const options = {
         method: 'GET',
        url: `https://imdb-api.com/en/API/${this.q}/k_0amp3qka`,
        }
        var self = this;
axios.request(options).then(function (response) {
	self.movies = response.data.items.slice(0,12);
}).catch(function (error) {
	console.error(error);
});
        }
    }
    
}
</script>