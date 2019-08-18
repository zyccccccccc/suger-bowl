<template>
  <div class="hello">
  	<p @click="setName">{{ name }}</p>
	<span v-for="n in 9" :key="n">{{ n }}</span>
	<div v-bind:class="[activeClass,bgClass]">传一个数组</div>
	<p v-bind:style="{color: fontColor, fontSize: size+'px'}">直接绑定样式</p>
	<div v-bind:style="[styleObject,baseStyle]">绑定对象数组上</div>
	<p>{{ sum }}</p>
	<button v-on:click=" sum+=1">点击</button> 
	<p v-on:click= " enter ">方法事件处理器</p>
	<input type="text" value="username" v-model="message">
	<p>输入信息为: {{message}}</p> 
	<textarea v-model="intr">我的名字是.. </textarea>
  	<p>介绍信息: {{intr}}</p>
  	<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  	<label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
 	<label for="john">John</label>
	<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
	<label for="mike">Mike</label>
	<br>
	<span>Checked names: {{ checkedNames }}</span><br>
	<input type="radio" id="nan" value="男" v-model="sex"><label for="nan">男</label>
	<input type="radio" id="nv" value="女" v-model="sex"><label for="nv">女</label>
 	<p>已选性别: {{ sex }}</p>
	<div>
 		<select v-model="sele">
  			<option>北京</option>
  			<option>杭州</option>
 		</select>
 		<p>{{ sele }}</p>
	</div>
	<select v-model="selected">
		<option v-for="city in obj" v-bind:value="city.value" :key="city.text">{{ city.value }}</option>
	</select>
	<span>Selected: {{ selected }}</span><br>
	<input type="text" v-model.lazy="message">
	<p>{{ message }}</p>
	<input type="text" v-model.number="mess1"> 
	+
	<input type="text" v-model.number="mess2">
	=
	<input type="text" v-bind:value="mess1+mess2"> <br>
	<input v-model.trim="mess"><span>{{ mess }}</span><br>
	<p>Original message: "{{ text }}"</p>
  	<p>Computed reversed message: "{{ reversedText }}"</p>
	<p>{{ fullName }}</p>
	<child/>
	<router-link to="/car">购物车</router-link>
	<router-view/>
  </div>
</template>

<script>
import Son from './Son'
export default {
  name: 'HelloWorld',
  data (){
  	return{
  		activeClass:"active",
  		bgClass:"bgstyle",//值为要应用的类
  		fontColor: "#ff7f5c",
  		size:30,
  		styleObject: {
  				color: "#ff7f5c",
  				fontSize:"30px"
  		},
  		baseStyle: {
  			backgroundColor: "#1f341e"
  		},
  		sum: 0,
  		message: "",
  		intr: "",
  		checkedNames: [],
		sex: "",
		sele: "",
		selected: "北京",
		obj: [
			{text:"1",value:"北京"},
			{text:"2",value:"上海"},
			{text:"3",value:"重庆"},
			{text:"4",value:"武汉"}
		],
		mess1: "",
		mess2: "",
		mess: "",
		text:"道可道非常道，名可名非常名",
		firstName: "Bob",
		lastName: "foo"
  	}
  },
	computed: {
		name(){
			return this.$store.state.name
		},
		reversedText: function(){
			return this.text.split('').reverse().join('')
		},
		fullName: {
    	// getter
    		get: function () {
      			return this.firstName + ' ' + this.lastName
    		},
    	// setter
    		set: function (newValue) {
      			var names = newValue.split(' ')
      			this.firstName = names[0]
     			this.lastName = names[names.length - 1]
    		}
  		}
	},
	methods: {
		setName(){
			this.$store.commit('showName')
		},
		enter: function(event){
			$("p").css("color","red")	
		}
	},
	components: {
		'child': Son
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.active{
		color: #114880;
		font-weight: bold;
	}
	.bgstyle{
		background-color: #10af97;
		padding: 40px;
	}
</style>
