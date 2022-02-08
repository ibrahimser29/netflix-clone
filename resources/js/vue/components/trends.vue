<template>
    <div class="trends">
        <div class="container">
        <div class="trends_categories">
            <router-link to="">Trends</router-link>
            <router-link to=""> Popular</router-link>
            <router-link to=""> New</router-link>
        </div>
        <hr />
        
        </div>
        <Show />
    </div>
</template>
<script>
import Show from "./show.vue";


export default {
    components:{Show},
    date(){
        return {
            popular:[],
        }
    },
    mounted(){
        console.log(this.$route.params);
    },
    methods:{
        popularMovies(){
            const options = {
            method: 'GET',
            url: 'https://imdb-api.com/en/API/Top250Movies/k_0amp3qka'
            };

            axios.request(options).then(function (response) {
	        console.log(response.data.items);
            }).catch(function (error) {
	        console.error(error);
         });
        }
    }
}
</script>