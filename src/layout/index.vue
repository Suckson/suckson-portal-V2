<!--
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-08-05 21:27:09
 * @LastEditors: suckson
 * @LastEditTime: 2019-10-15 14:53:55
 -->
<template>
<div>
  <navBar showLogo />
  <section>
  </section>
</div>
</template>
<script>
import navBar  from "./components/navBar.vue";
export default {
  name: 'Layout',
  components: {
    navBar
  },
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
