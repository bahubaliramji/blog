<template>
    <h2>Child Component</h2>
    <button v-on:click="getUser(userName)">Send User Name</button>
</template>

<script>
export default {
    name: 'ChildTwo',
    data(){
        return {
            userName:"Peter"
        }
    },
    props:{
        getUser:Function
    }
}
</script>