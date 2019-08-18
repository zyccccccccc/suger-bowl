<template>
    <div>
        <he/>
        <con/>
        <menus/>
        <foot/>
    </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Menus from './Menus'
export default {
    components: {
        'he': Header,
        'foot': Footer,
        'con': Content,
        'menus': Menus
    }
}
</script>
<style>
    html{
        width: 100%;
        height: 100%; 
        font-size: 54px;
        line-height: 1.15;
    }
    body{
        font-family: "PingFang SC", "Avenir", Helvetica, Arial, sans-serif;
        width: 100%;
        height: 100%;
        background: #fff;
        font-size: 12px;
        padding: 0;
        margin: 0;
    }
    * {
        box-sizing: border-box;
    }
</style>