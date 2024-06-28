<template>
<div>
    <h3 v-bind="$attrs">Peter</h3>
    <h3>Sam</h3>
    <h3>Amrendra</h3>
    <h3>{{ data }}</h3>
</div>
</template>
<script>
export default {
    name:'NonPropsUser',
    inheritAttrs:false, //to stop parent/main tag inheritance of attributes
    props:{
        data:String
    }
}
</script>