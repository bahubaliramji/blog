<template>
    <div class="user">
        <h1>{{ data.name }}</h1>
        <h1>{{ data.email }}</h1>
        <button v-on:click="getData(data.name)">Call Function</button>
    </div>
</template>

<script>
export default {
    name: 'UseR',
    props: {
        data:Object,
        getData:Function,
    }
}
</script>
<style scoped>
.user {
    background-color: skyblue;
    padding: 10px;
    border-bottom: 1px solid;
    margin-bottom: 20px;
}
</style>