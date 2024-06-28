<template>
    <h1>Get Input Field Value</h1>
    <input type="text"  placeholder="Enter Your Email" v-model="email">
    <br>
    <br>
    <input type="password"  placeholder="Enter Your Password" v-model="password">
    <br>
    <br>
    <button v-on:click="getData()" type="button">Get Values</button>
</template>
<script>
export default {
    name:"InputFieldvalue",
    data(){
        return {
            email:null,
            password:null,
        }
    },
    methods:{
        getData() {
            console.warn('values: ',this.email,this.password);
        }
    }
}
</script>

<style scoped>
h1 {
    color: orange;
}
</style>