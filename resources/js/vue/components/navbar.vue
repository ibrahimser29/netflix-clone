<template>
  <div class="navbar_background">
      <div class="container">
      <div class="navbar">
      <div class="navbar_logo">NETFLIX</div>
      <div class="navbar_links">
          <ul>
          <router-link class="active" to="">Home</router-link>
              <router-link to="">Movies</router-link>
              <router-link to="">Series</router-link>
              <router-link to="">My List</router-link>
              <router-link to=""><search-icon /></router-link>
              <router-link to=""><bell-icon /></router-link>
            
          </ul>
      </div>
      </div>
      </div>
  </div>
</template>

<script>
import SearchIcon from 'vue-material-design-icons/HomeSearch.vue';
import BellIcon from 'vue-material-design-icons/Bell.vue';
export default {
 components:{SearchIcon,BellIcon}
}
</script>
