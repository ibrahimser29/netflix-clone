<template>
<div>
    <Header />
    <Soon category="Comming Soon" q="ComingSoon" />
    <Soon category="Most Popular Movies" q="MostPopularMovies" />
    <Cats />
    <Footer />
</div>
</template>
<script>
import Header from './components/header.vue';
import Soon from './components/soon.vue';
import Trends from './components/trends.vue';
import Cats from './components/cats.vue';
import Footer from './components/footer.vue';
export default {
    components:{Header,Trends, Cats, Footer,Soon}
}
</script>