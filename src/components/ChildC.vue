<template>
<h1>{{ name }}</h1>
<h1>{{ user.name }}</h1>
<button v-on:click="getData()">Call Function</button>
</template>

<script>
export default {
    name: 'ChildC',
    props:{
        name:String,
        user:Object,
        getData:Function
    }
}
</script>