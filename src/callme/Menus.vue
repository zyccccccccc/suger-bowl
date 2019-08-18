<template>
  <transition name="fade">
    <div class="menus" v-if="grt" @click="changeMenus">
    <div class="close-menu">
      <img src="../../static/close-pc.svg">
    </div>
    <ul class="menus-con">
      <li class="menus-item">
        <div class="menu-child">
          <div class="second-item">
            <dl class="second-title">
              <dt class="second-con">
                <div class="second-content">
                  <div class="second-name">出行业务</div>
                  <div class="second-entxt">CALL ME</div>
                </div>
              </dt>
              <dd class="second-cont">
                <h4>
                  <router-link to="/">城际拼车</router-link>
                </h4>
                <h4>
                  <router-link to="/">专车</router-link>
                </h4>
              </dd>
            </dl>
          </div>
        </div>
      </li>
      <li class="menus-item">
        <div class="menu-child">
          <div class="second-item">
            <dl class="second-title">
              <dt class="second-con">
                <div class="second-content">
                  <div class="second-name">加入呼我</div>
                  <div class="second-entxt">JOIN US</div>
                </div>
              </dt>
              <dd class="second-cont">
                <h4>
                  <router-link to="/">司机</router-link>
                </h4>
                <h4>
                  <router-link to="/">企业</router-link>
                </h4>
              </dd>
            </dl>
          </div>
        </div>
      </li>
      <li class="menus-item">
        <div class="menu-child">
          <div class="second-item">
            <dl class="second-title">
              <dt class="second-con">
                <div class="second-content">
                  <div class="second-name">关于我们</div>
                  <div class="second-entxt">ABOUT US</div>
                </div>
              </dt>
              <dd class="second-cont">
                <h4>
                  <router-link to="/">公司介绍</router-link>
                </h4>
                <h4>
                  <router-link to="/">呼我资讯</router-link>
                </h4>
              </dd>
            </dl>
          </div>
        </div>
      </li>
      <li class="menus-item">
        <div class="menu-child">
          <div class="second-item">
            <dl class="second-title">
              <dt class="second-con">
                <div class="second-content">
                  <div class="second-name">帮助中心</div>
                  <div class="second-entxt">HELP CENTER</div>
                </div>
              </dt>
              <dd class="second-cont">
                <h4>
                  <router-link to="/">常见问题</router-link>
                </h4>
                <h4>
                  <router-link to="/">分公司信息</router-link>
                </h4>
              </dd>
            </dl>
          </div>
        </div>
      </li>
    </ul>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'Menus',
  // data () {
  //   return {
  //     menus: this.$store.state.data
  //   }
  // },
  computed: {
    grt () {
      return this.$store.state.data
    }
  },
  methods: {
    changeMenus () {
      this.$store.commit('changeMenus', false)
    }
  }
}
</script>
<style>
ul{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
.menus {
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    position: fixed;
    background: #004ec2;
}
.menus .close-menu {
    cursor: pointer;
    position: absolute;
    right: 70px;
    top: 37px;
    z-index: 2000;
    transition: all 1s;
}
.menus .close-menu img {
    width: 25px;
    height: 25px;
}
.menus .close-menu:hover {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}
.menus .menus-con {
    height: 100%;
    width: 100%;
}
.menus .menus-item {
    float: left;
    width: 25%;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.menus .menu-child {
    position: relative;
    height: 100%;
}
.menus .second-item {
    -webkit-transform: translateX(-0.185185rem);
    transform: translateX(-20px);
    opacity: 0;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1020;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    opacity: 1;
    -webkit-transform: matrix(1, 0, 0, 1, 0, 0);
    transform: matrix(1, 0, 0, 1, 0, 0);
}
.menus .second-item .second-title {
    text-align: left;
    width: 100%;
    padding-left: 20%;
    display: table-cell;
    vertical-align: middle;
    margin:12px 0;
}
.menus .second-con {
    position: relative;
    left: 0;
    top: 0;
    padding-top: 12px;
    margin-bottom: 12px;
    transition: all .2s ease-in;
    height: 100px;
    overflow: hidden;
}
.menus .second-content {
    height: 100px;
    padding-top: 12px;
    position: relative;
    transition: all .4s cubic-bezier(.19,1,.22,1) .1s;
    top: 0;
    box-sizing: border-box;
}
.menus .second-content .second-name {
    font-size: 36px;
    color: #fff;
    font-weight: 800;
}
.menus .second-content .second-entxt {
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.12;
    letter-spacing: 1.5px;
    text-align: left;
    color: #fff;
    padding-top: 20px;
}
.menus .second-cont {
    -webkit-transform: rotateX(20deg);
    transform: rotateX(20deg);
    transition: all .2s ease-in;
    margin-top: 68px;
    margin-left: 0;
}
.menus .second-cont h4 {
    font-size: 24px;
    color: #fff;
    line-height: 18px;
    font-weight: 400;
}
.menus .second-cont h4 a {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
}
.menus .second-cont h4:last-child {
    margin-top: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
