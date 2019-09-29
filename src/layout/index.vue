<!--
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-08-05 21:27:09
 * @LastEditors: suckson
 * @LastEditTime: 2019-09-29 16:38:28
 -->
<template>
<div>
    <div class="left"> 
        <router-link :to="{path: '/login'}">登录页</router-link>
        <router-link :to="{path: '/404'}">404</router-link>
        <router-link :to="{path: '/401'}">401</router-link>
    </div>
    <div class="right">
         <keep-alive>
            <router-view></router-view>
         </keep-alive>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style  lang='stylus'>
.left{
    width :20%;
    height 100%;
    overflow hidden;
    float left
}
.right{
    width :80%;
    height 100%;
    overflow hidden;
    float left
}
</style>
