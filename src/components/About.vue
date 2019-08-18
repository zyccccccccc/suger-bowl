<template>
  <div id="about">
  	<ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link :to="{path: '/product', query: {name: 'lily',age: 20}}">产品中心</router-link></li>
      <li><router-link :to="{name: 'About', params: {id: 1,name: 'tom'}}">关于我们</router-link></li>
    </ul>
    <router-view></router-view>
    <p>关于我们页面</p>
    <p>{{$route.params.id}}</p>
    <p>{{$route.params.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>

</style>