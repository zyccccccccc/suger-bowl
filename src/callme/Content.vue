<template>
    <div class="swiper-container" :style="height">
        <div class="swiper-wrapper" :style="height" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
            <div class="swiper-slide swiper-slide-1" :style="height">
                <img src="../../static/car.png" class="img-car"/>
                <img src="../../static/build.png" class="img-build"/>
                <img src="../../static/star-l.png" class="star-left"/>
                <img src="../../static/star-r.png" class="star-right"/>
                <div class="filter-bottom"></div>
                <div class="filter-highlight"></div>
                <div class="filter-top-right-circle"></div>
                <div class="filter-bottom-left-circle"></div>
                <div class="filte-content">
                    <div class="title-one">CALL ME</div>
                    <div class="title-two">呼我出行</div>
                    <div class="des">专车、城际快车、出租车全产业链一站式智慧交通出行平台</div>
                </div>
                <img src="../../static/filter-around.svg" class="filter-around"/>
                <svg width="26.4%" viewBox="-5 -5 517 571" class="svg-background-logo">
                   <defs>
                        <linearGradient id="svg-background-gradient" x1="1434" y1="812.858" x2="927" y2="520.142">
                            <stop offset="0" stop-color="#188afe"></stop> 
                            <stop offset="1" stop-color="#20c3ff"></stop>
                        </linearGradient>  
                   </defs>
                   <g>
                       <path d="M1352.18 689.287V529.806a65.773 65.773 0 0 0-130.7-10.543c.47 4.829.72 9.724.72 14.678v155.346h-83.4V533.941c0-4.954.25-9.849.72-14.677a65.778 65.778 0 0 0-130.71 10.542v159.481H927V533.941C927 452.218 993.046 386 1074.62 386a146.985 146.985 0 0 1 105.87 44.892A146.974 146.974 0 0 1 1286.4 386c81.52 0 147.6 66.218 147.6 147.941v155.346h-81.82zm-171.13 178.021c89.22 0 162.66-67.4 172.36-154.2h79.72C1423.09 843.861 1314.21 947 1181.05 947S938.97 843.861 928.96 713.106h79.64c9.69 86.802 83.15 154.202 172.45 154.202z" transform="translate(-927 -386)" fill-rule="evenodd" opacity="0" fill="url(#svg-background-gradient)" class="logo-fill">
                            <animate attributeName="opacity" from="0" to=".2" dur="1.5s" repeatCount="1" fill="freeze"></animate>    
                        </path> 
                        <path d="M1352.18 689.287V529.806a65.773 65.773 0 0 0-130.7-10.543c.47 4.829.72 9.724.72 14.678v155.346h-83.4V533.941c0-4.954.25-9.849.72-14.677a65.778 65.778 0 0 0-130.71 10.542v159.481H927V533.941C927 452.218 993.046 386 1074.62 386a146.985 146.985 0 0 1 105.87 44.892A146.974 146.974 0 0 1 1286.4 386c81.52 0 147.6 66.218 147.6 147.941v155.346h-81.82zm-171.13 178.021c89.22 0 162.66-67.4 172.36-154.2h79.72C1423.09 843.861 1314.21 947 1181.05 947S938.97 843.861 928.96 713.106h79.64c9.69 86.802 83.15 154.202 172.45 154.202z" transform="translate(-927 -386)" fill-rule="evenodd" fill="none" opacity=".2" stroke-width="2" stroke="#fff" class="logo-line" stroke-dasharray="3731.63134765625" style="stroke-dashoffset: 0px;">
                            <animate attributeName="opacity" from=".2" to="0" dur="1.5s" repeatCount="1" fill="freeze"></animate>
                        </path>
                   </g>
                </svg>
                <!-- logo -->
                <svg width="57.6%" height="160" viewBox="0 -20 1106 160" class="svg-car-path-animate">
                    <defs>
                        <linearGradient id="svg-car-path-animate-linear" x1="800" y1="0.7" x2="800" y2="0" >
                            <stop offset="0" stop-color="#0583c8"></stop> 
                            <stop offset=".5" stop-color="#0ac2b2"></stop> 
                            <stop offset="1" stop-color="#80a031"></stop>
                        </linearGradient> 
                        <linearGradient id="svg-car-path-animate-black2white">
                            <stop offset="0" stop-color="black"></stop> 
                            <stop offset="100%" stop-color="white"></stop>
                        </linearGradient> 
                        <linearGradient id="svg-car-path-animate-white2black">
                            <stop offset="0" stop-color="white"></stop> 
                            <stop offset="100%" stop-color="black"></stop>
                        </linearGradient> 
                        <mask id="svg-car-path-animate-mask">
                            <rect x="0" y="0" width="1106" height="160" fill="white"></rect> 
                            <rect x="0" y="0" width="300" height="160" fill="url(#svg-car-path-animate-black2white)"></rect> 
                            <rect x="806" y="0" width="300" height="160" fill="url(#svg-car-path-animate-white2black)"></rect>
                        </mask> 
                        <linearGradient id="svg-car-path-animate-location" x1="0" y1="20" x2="0" y2="-10" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#188afe"></stop> 
                            <stop offset="1" stop-color="#20c3ff"></stop>
                        </linearGradient>
                    </defs> 
                    <g opacity="0">
                        <path id="svg-car-path-animate-path" d="M0 50c61.971-10.2 128.59-.67 178.849 20.86 69.125 29.62 144.793 22.49 201.55 3.2 123.95-42.14 191.87-43.59 271.45-2.2 97.64 50.78 150.03 52.14 228 15 103.39-49.24 148.29-65.84 224-55" fill="none" stroke-width="3" fill-rule="evenodd" stroke="url(#svg-car-path-animate-linear)" mask="url(#svg-car-path-animate-mask)" class="path"></path> 
                    <g opacity="0">
                        <path d="M550 -10a11.759 11.759 0 0 0-11.48 12.05 12.146 12.146 0 0 0 3.61 8.6l7.22 7.07a.929.929 0 0 0 1.31 0l7.19-7.02a12.151 12.151 0 0 0 3.67-8.75 11.73 11.73 0 0 0-11.52-11.95z" fill-rule="evenodd" fill="url(#svg-car-path-animate-location)"></path>
                    <circle cx="280" cy="90" r="7.5" fill="#20f2ff" stroke-width="5" stroke="#20f2ff" stroke-opacity="0.2"></circle> 
                    <text x="267" y="120" style="font-size: 14px; stroke: rgb(255, 255, 255); fill: rgb(255, 255, 255); font-weight: 100;">专车</text> 
                    <circle cx="550" cy="42" r="9" fill="#ffffff" stroke-width="9" stroke="#ffffff" stroke-opacity="0.2"></circle>
                    <image x="520" y="12" width="60" height="60" xlink:href="../../static/car-logo-block.png"><animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"></animate></image> 
                    <text x="536" y="77" style="font-size: 14px; stroke: rgb(255, 255, 255); fill: rgb(255, 255, 255); font-weight: 100;">快车</text> 
                    <circle cx="920" cy="68" r="7.5" fill="#16e2b7" stroke-width="5" stroke="#16e2b7" stroke-opacity="0.2"></circle> 
                    <text x="900" y="97" style="font-size: 14px; stroke: rgb(255, 255, 255); fill: rgb(255, 255, 255); font-weight: 100;">出租车</text> 
                    <animate attributeName="opacity" from="0" to="1" dur="0.75s" begin="0.75s" repeatCount="1" fill="freeze"></animate>
                    </g> 
                    <animate attributeName="opacity" from="0" to="1" dur="1.5s" repeatCount="1" fill="freeze"></animate>
                    </g> 
                    <image transform="translate(0 -40) rotate(90,20,40)" width="39" height="80" xlink:href="../../static/car-logo-1.png" class="svg-image-car-type svg-image-car-type--a">
                        <animateMotion dur="20s" repeatCount="indefinite" rotate="auto" begin="1.5s">
                            <mpath xlink:href="#svg-car-path-animate-path"></mpath>
                        </animateMotion>
                    </image>
                    <image transform="translate(0 -40) rotate(90, 20 40)" width="39" height="80" xlink:href="../../static/car-logo-2.png" class="svg-image-car-type svg-image-car-type--b">
                        <animateMotion dur="20s" repeatCount="indefinite" rotate="auto" begin="4.5s">
                            <mpath xlink:href="#svg-car-path-animate-path"></mpath>
                        </animateMotion>
                    </image>
                    <image transform="translate(0 -40) rotate(90 , 20 , 40)" width="39" height="80" xlink:href="../../static/car-logo-3.png" class="svg-image-car-type svg-image-car-type--c">
                        <animateMotion dur="20s" repeatCount="indefinite" rotate="auto" begin="7.5s">
                            <mpath xlink:href="#svg-car-path-animate-path"></mpath>
                        </animateMotion>
                    </image>
                </svg>
                <!-- 可爱的小车车~ -->
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    data(){
        return{
            height:{
                height:'' 
            }
        }
    },
    mounted() {
        new Swiper ('.swiper-container', {
            direction: 'vertical',
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',
        })        
    },
    created(){
　　    this.getHeight()
        window.addEventListener('resize',this.getHeight);
    },
    methods: {
        getHeight() {
            this.height.height = window.innerHeight+'px'
        }
    }
}
</script>
<style>
.swiper-slide-1{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff linear-gradient(to bottom right,#10284d, #335f8f);
        background-blend-mode: multiply;
    overflow: hidden;
}
.img-car{
    position: absolute;
    bottom: 30px;
    right: -115px;
    width: 40%;
    z-index: 20;
}
.img-build{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}
.star-left{
    left: 0;
    width: 50%;
    opacity: 1;
    animation: stars-animate 4s linear infinite alternate;
}
.star-right{
    right: 0;
    width: 35%;
    animation: stars-animate 4s linear infinite alternate;
}
@keyframes stars-animate 
{
    0%   {opacity:1;}
	25%  {opacity:0.5;}
	50%  {opacity:0;}
	75%  {opacity:0.5;}
	100% {opacity:1;}
}
.star-left,.star-right{
    position: absolute;
    top: 0;
    z-index: 990;
}
.filter-bottom{
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 60%;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.7));
}
.filter-highlight{
    width: 70%;
    height: 70%;
    border-radius: 70%;
    background: radial-gradient(rgba(255, 255, 255 ,1), rgba(255, 255, 255 ,0));
    filter: blur(80px);
    opacity: .6;
    position: absolute;
    mix-blend-mode: overlay;
    position: absolute;
    left: 15%;
    top: 8%;
}
.filter-top-right-circle{
    opacity: .04;
    border: 110px solid #fff;
    top: -50%;
    right: -30%;
    width: 738px;
    height: 738px;
    border-radius: 100%;
    position: absolute;
    z-index: 99;
}
.filter-bottom-left-circle{
    opacity: .39;
    border: 110px solid #0190dc;
    bottom: -50%;
    left: -30%;
    width: 738px;
    height: 738px;
    border-radius: 100%;
    position: absolute;
    z-index: 99;
}
.filte-content{
    position: absolute;
    top: 35%;
    text-align: center;
    z-index: 1111;
    color: #fff;
}
.title-one{
    font-size: 72px;
    font-weight: bold;
    margin-bottom: 20px;
}
.title-two{
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
}
.des{
    font-size: 18px;
}
.filter-around{
    width: 100%;
    height: 697px;
}
.svg-background-logo{
    position: absolute;
    z-index: 1000;
    top: -18%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.svg-car-path-animate{
    position: absolute;
    z-index: 999;
    bottom: 40px;
    left: 21.2%;
    width: 57.6%;
    height: 160;
}
#svg-car-path-animate-path{
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation: svg-car-path-animate-path 1.5s linear both;
}
@keyframes svg-car-path-animate-path{
    to {
    stroke-dashoffset: 0;
  }
}
.svg-image-car-type{
    opacity: 0;
    -webkit-animation: svg-car-path-animate 20s linear infinite;
    animation: svg-car-path-animate 20s linear infinite;
}
.svg-image-car-type--a{
    animation-delay: 2s;
}
.svg-image-car-type--b{
    animation-delay: 5s;
}
.svg-image-car-type--c{
    animation-delay: 8s;
}
@keyframes svg-car-path-animate {
     0%   {opacity:0;}
	2%  {opacity:0;}
	10%  {opacity:1;}
    80%  {opacity: 1;}	
    98%  {opacity:0;}
	100% {opacity:0;}
}
</style>