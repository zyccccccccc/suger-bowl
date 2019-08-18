<template>
    <div id="son">
        <h3>用户名:{{logindate.username}}</h3>
        <h3>昵称:{{logindate.truename}}</h3>
        <button @click="unlogin">退出登录</button>
    </div>    
</template>
<script>
export default {
    name: "Son",
    data(){
        return{
            
        }
    },
    computed: {
        logindate () {
            return this.$store.state.data
        }
    },
    methods: {
        unlogin (){
            this.$http({
                method: 'get',
                url: 'https://test.52hbl.com/index.php/index/wxapp.login/quitweb',
                data: this.qs.stringify({
                uid: this.logindate.uid
                })
            }).then(res => {
                console.log(res)
                res.data.data === '退出成功' ? (function () {
                alert(res.data.msg)
                location.assign('/')
                })() : (function () {
                alert('出错了')
                })()
            })
        }
    }
}          
</script>
<style scoped>
p{
    color: blueviolet;
    font-weight: bold;
}
</style>


