<template>
  <div id="app" class="cont">
    <Header headertitle="Popular Tv Shows"></Header>
    <div class="row container" >
      <Card v-bind:showlist="show" v-for="show in shows" v-bind:key="show.id"></Card>
    </div>
  </div>
</template>

<script>
//importing the things i need to make this comp
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
  name: 'App',
  components: {
    Header,
    Card
  },
  data() 
  {
    return{
      shows: ""
    }
  },
  mounted() 
  {
  axios.get('https://api.themoviedb.org/3/tv/popular?api_key=9eefa97b7fcde08d1d796892ac5810e4&language=en-US&page=1')
  .then ( (response) => {
    this.shows = response.data.results;
    this.shows = this.shows.slice(0,4);
  })
  
  }
}
</script>

<style>
.cont {
  background-color: black;
}
</style>
