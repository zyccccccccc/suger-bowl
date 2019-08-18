<template>
  <div class="gouwuche">
    <div>
      <ul>
        <li v-for="(item,index) in results"
            :key="index">
          <img :src="handleUrl(item.path_coach)" />
          菜名：{{item.name_coach}}
          <br />
          价格: {{item.type_coach}} 折扣：{{parseFloat(item.honor_coach)==0.8?8:parseFloat(item.honor_coach)}}
          <br />
          <span>数量：{{ item.number}}</span>
          <br />
          <button @click="handleNum(index,1)">+</button>
          <button @click="handleNum(index,-1)">-</button>
        </li>
      </ul>
      <div>总价：{{ totalPrice }}</div>
     <div>  <button  @click="qk">清空购物车</button>  </div>
    </div>
  </div>
</template>
<script>
import qs from "qs"
export default {
  data () {
    return {
      username: 'ssw',
      userpwd: 123456,
      userclass: 51,
      type: 3,
      results: {}
    }
  },
  methods: {
    handleUrl: function (url) {
      return 'http://www.qhdlink-student.top/' + url
    },
    handleNum: function (index, val) {
      let newItem = JSON.parse(JSON.stringify(this.results[index]))
      if (newItem.number <= 0 && val === -1) return
      newItem.number += val
      this.$set(this.results, index, newItem)
    },
    qk () {
      location.assign('/')
    }
  },
  computed: {
    totalPrice: function () {
      let sum = 0
      for (let i in this.results) {
        let item = this.results[i]
        parseFloat(item.honor_coach) === 0.8 ? sum += Math.floor(item.number * item.type_coach * parseFloat(item.honor_coach))
          : sum += Math.floor(item.number * item.type_coach * parseFloat(item.honor_coach) / 10)
      }
      return sum
    }
  },
  created(){
    var _this= this;
    let params={
        username: this.username,
        userpwd: this.userpwd,
        userclass: this.userclass,
        type: this.type
    }
    this.$http.post("http://www.qhdlink-student.top/student/coacha.php",
    qs.stringify(params)).then(response => {
      this.results = response.data
      for (var item in this.results) {
        this.results[item].number = 0
      }
      console.log(this.results)
      }).catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.gouwuche ul {
  overflow: hidden;
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
}
.gouwuche ul + div {
  font-size: 30px;
}
.gouwuche li {
  float: left;
  display: block;
  margin-bottom: 50px;
  margin-right: 50px;
  border: rgb(17, 213, 248) solid 1px;
  padding-bottom: 20px;
}
.gouwuche li button {
  height: 30px;
  width: 30px;
}
.gouwuche img {
  display: block;
  margin: 0 auto;
  width: 220px;
  height: 200px;
  margin:10px 10px;
}
.gouwuche {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%)
  }
</style>


