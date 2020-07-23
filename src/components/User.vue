<template>
    <div>
        <h2>我是用户</h2>
        <p>我是用户内容，嘻嘻嘻</p>
        <p>{{userId}}</p>
    </div>
</template>
<script>
    export default{
        name:"User",
        computed:{
            userId(){
                return this.$route.params.userId;
            }
        }
    }
</script>
<style scoped>
    
</style>