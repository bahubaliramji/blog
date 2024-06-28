<template>
    <h1>Get Checkox & Radio Button Value</h1>
    <h3>Technology</h3>
    <label for="java">Java</label>
    <input type="checkbox"  value="java" id="java" v-model="technology">
    <br>
    <label for="php">PHP</label>
    <input type="checkbox"  value="php" id="php" v-model="technology">
    <br>
    <label for="node">Node</label>
    <input type="checkbox"  value="node" id="node" v-model="technology">
    <br>

    <br>
    <h3>Who I am</h3>
    <label for="student">Student</label>
    <input type="radio" name="who" value="student" id="student" v-model="who" >
    <br>
    <label for="developer">Developer</label>
    <input type="radio" name="who" value="developer" id="developer" v-model="who" >
    <br>


    <h4>Selected Technology : {{technology}}</h4>
    <h4>I am a: {{who}}</h4>
    
</template>
<script>
export default {
    name:"RadioCheckox",
    data(){
        return {
            technology:[],
            who:null,
        }
    }
}
</script>

<style scoped>
h1 {
    color: orange;
}
</style>