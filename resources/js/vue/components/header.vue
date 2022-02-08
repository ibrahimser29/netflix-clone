<template>
  <div id="headerW" class="header">
     <div class="header_overlay">
         <Navbar />
         <div class="header_movie_info">
             <p>Duration: 51m</p>
             <h1>YOU</h1>
             
             <p class="season_rating">
             <star-icon  class="rating" /><span class="rate">8.2</span> Season <span class="season">2</span> - Episode <span class="episode">1</span> - <span class="title">A Fresh Start</span></p>
             <p class="about">You is an American psychological thriller television series based on the books by Caroline Kepnes, developed by Greg Berlanti and Sera Gamble, and produced by Alloy Entertainment and A+E Studios in association with Warner Horizon Television, now Warner Bros. Television.</p>
             <div class="header_movie_info_btns">
                 <button>Watch</button> <button class="add">Add to list</button>
             </div>
            
         </div>
     </div>
  </div>
</template>

<script>
import Navbar from './navbar.vue';
import StarIcon from 'vue-material-design-icons/Star.vue';
export default {
components: {Navbar,StarIcon},
mounted(){
  this.setbackground();
},
methods:{
   setbackground(){
      let feat = [{name:"YOU",image:"/images/you.jpg",title:"A Fresh Start",desc:"You is an American psychological thriller television series based on the books by Caroline Kepnes, developed by Greg Berlanti and Sera Gamble, and produced by Alloy Entertainment and A+E Studios in association with Warner Horizon Television, now Warner Bros. Television."
      ,season:"2",episode:"1",rating:"8.2"},{name:"DAREDEVIL",image:"/images/dd2.jpg",title:"A Cold Day In Hell's Kitchen",desc:"A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil. Fisk moves forward with plans that threaten to rip Hell's Kitchen apart. Murdock and Foggy take on a case helping tenants victimized by a slumlord."
      ,season:"2",episode:"6",rating:"9.2"}]
       let elm = document.getElementById("headerW");
       let name = document.querySelector(".header_movie_info h1");
       let title = document.querySelector(".header_movie_info span.title");
       let desc = document.querySelector(".header_movie_info .about");
       let rating = document.querySelector(".header_movie_info span.rate");
       let season = document.querySelector(".header_movie_info span.season");
       let episode = document.querySelector(".header_movie_info span.episode");
       let i = 0;
       setInterval(() => {
            i >= 2 ? i = 0 : "";
           elm.style.backgroundImage = `url(${feat[i]['image']})`;
           name.innerHTML = `${feat[i]['name']}`;
           title.innerHTML = `${feat[i]['title']}`;
           desc.innerHTML = `${feat[i]['desc']}`;
           rating.innerHTML = `${feat[i]['rating']}`;
           season.innerHTML = `${feat[i]['season']}`;
           episode.innerHTML = `${feat[i]['episode']}`
           i++;
          
       }, 4000);
   }
}
}
</script>

