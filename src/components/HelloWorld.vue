<template>
  <div class="hello">
    <form>
		<el-input v-model="username" placeholder="用户名"/><br>
		<el-input v-model="pwd" placeholder="密码" show-password/><br>
		<router-link v-on:click.native="login" to="/son">用户名登录</router-link>
		<el-input v-model="tel" placeholder="手机号"/>
		<el-input v-model="code" placeholder="输入验证码"/>
		<el-input v-model="email" placeholder="输入邮箱"/>
		<router-view></router-view>
	</form>
	<button @click="getCode">获取验证码</button>
	<router-link v-on:click.native="regi" to="/son">注册</router-link>
	<router-link v-on:click.native="phoneLogin" to="/son">手机号登录</router-link>
  </div>
</template>
<script>
import Son from "./Son"
export default {
  name: 'HelloWorld',
  data(){
    return{
		  username: '',
		  pwd: '',
		  tel: '',
		  code: '',
		  email: ''
  	}
  },
  methods: {
	  	login() {
		  	var loginthis = this
		  	if(this.name===""||this.pwd===""){
				alert("请输入用户名或密码")
		  	}else{
				this.$http({
					method: 'post',
					url: 'https://test.52hbl.com/index.php/index/wxapp.login/simple',
					data: this.qs.stringify({
						username: this.username,
						password: this.pwd
					})
				}).then(res =>{
					res.data.msg === '登录成功' ? (function () {
						alert(res.data.msg)
						loginthis.$store.commit('login', res.data.data)
					})() : (function () {
						alert('用户名或密码错误')
						location.assign('/')
					})()
				})
			}
		},
		getCode() {
			this.$http({
				method: 'post',
				url: 'https://test.52hbl.com/index.php/index/wxapp.login/get_phone_num',
				data: this.qs.stringify({
					phone: this.tel
				})
			}).then(res=>{
				console.log(res.data.msg)
			})
		},
		regi(){
			this.$http({
				method: 'post',
				url: 'https://test.52hbl.com/index.php/index/wxapp.login/phone_reg',
				data: this.qs.stringify({
					username: this.username,
					password: this.pwd,
					email: this.email,
					phone_code: this.code
				})
			}).then(res => {
				alert(res.data.msg)
			})
		},
		phoneLogin() {
			this.$http({
				method: 'post',
				url: 'https://test.52hbl.com/index.php/index/wxapp.login/check_phone_num',
				data: this.qs.stringify({
					num: this.code
				})
			}).then(res=>{
				res.data.msg === '登录成功' ? (function () {
          			alert(res.data.msg)
          			phoneLoginthis.$store.commit('numlogin', res.data.data)
        		})() : (function () {
          			alert(res.data.msg)
         			location.assign('/')
        		})()
			})
		}   
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
	div{
		margin: 10px;
		text-align: center;
	}
	input{
		width: 200px;
	}
	a,button{
		text-decoration: none;
		padding: 10px 20px;
		background-color: #10af97;
		color: #fff;
		border-radius: 10px;
		border: 1px #fff solid;
	}
</style>
