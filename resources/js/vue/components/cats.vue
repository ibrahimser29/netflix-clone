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
            <router-link class="active" to="">Actions</router-link>
            <router-link to="">Adventure</router-link>
            <router-link to="">Comedy</router-link>
            <router-link to="">Romantic</router-link>
            <router-link to="">Drama</router-link>
            <router-link to="">Crime</router-link>
            <router-link to="">Documentary</router-link>
             <router-link to="">Horror</router-link>
        </div>
<div class="movies_series">
    <div class="movie_series">
        <img src="images/john.jpg"/>
        <h4>John Wick 2</h4>
        <div class="show_info"><p class="date">2016</p><p></p><p></p></div>
    </div>
</div>
  <div class="movies_shows_more">
      <font-awesome-icon class="movies_shows_more_icone" icon="fas fa-plus" />
  </div>
    </div>
    </div>
</template>

<script>
import Show from "./show.vue";
export default {
    components:{Show}
}
</script>