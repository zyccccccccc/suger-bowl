<template>
    <div class="head animated fadeInDown delay-1s header--dark">
        <img src="../../static/logo-a.svg">
        <div class="menu-button">
            <i class="iconfont icon-menu" @click="change"></i>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        change() {
            this.$store.commit('changeMenus',true)
        }
    }
}
</script>
<style>
.head{
    position: fixed;
    top: 0;
    left: 0;
    height: 100px;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.head,.footer{
    width: 100%;
    padding: 0 70px;
}
.menu-button{
    float: right;
}
.iconfont{
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}
</style>