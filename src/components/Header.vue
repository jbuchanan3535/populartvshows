<template>
    <div class="header">
        <h1>{{headertitle}}</h1>      
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['headertitle']
}
</script>

<style scoped>
    .header {
        background-color: grey;
        color: white;
        text-align: center;
        padding: 10px;
        margin: 0px;
    }
</style>