<template>
<!-- 
how do i loop through with an card ob? 
how can i make the image appear?
v-for="show in showlist" v-bind:key="show.id"
-->
    <div class="card" style="width: 18rem;" >
        <img v-bind:src="'https://image.tmdb.org/t/p/w200' + showlist.poster_path" class="card-img-top"  alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{showlist.name}}</h5>
            <p class="card-text">{{showlist.overview}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['showlist' ],
}
</script>

<style>

</style>