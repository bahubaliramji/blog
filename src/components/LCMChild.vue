<template>
<h2 ref="child">Life Cycle Method Child</h2>
</template>
<script>
export default {
    name:"LCMChild",
    beforeUnmount(){
        console.log("beforeUnmount",this.$refs['child']);
    },
    unmounted(){
        console.log("unmounted",this.$refs['child']);
    },
}
</script>