<template>
  <div id="product">
  	<ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link :to="{path: '/product', query: {name: 'lily',age: 20}}">产品中心</router-link>
      	<ul>
      		<li><router-link to="/one">a</router-link></li>
      		<li><router-link to="/two">b</router-link></li>
      	</ul>
      </li>
     	<li><router-link :to="{name: 'About', params: {id: 1,name: 'tom'}}">关于我们</router-link></li>
    </ul>
    <router-view></router-view>
    <p>产品中心页面</p>
    <p>{{ $route.query.name }}</p>
  </div>
</template>

<script>
export default{
  name: 'Product'
}
</script>

<style>
  
</style>