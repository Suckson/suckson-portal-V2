<!--
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-08-10 17:22:25
 * @LastEditors: suckson
 * @LastEditTime: 2019-08-12 10:27:09
 -->
<template>
  <div id="app">
    <div class="container">
      <div class="content">
        <div class="main">
          <div class="main-logo">
            <img src="" alt="">
          </div>
          <h2>想那些疯狂的家伙们致敬</h2>
          <h3>ThinkDifferent</h3>
          <div class="mybtn-container">
            <su-button style="margin:15px;" type="link" class="mybtn" radius="7">链接按钮</su-button>
            <su-button style="margin:15px;" type="link" class="mybtn" radius="7">链接按钮</su-button>
            <su-button style="margin:15px;" type="link" class="mybtn" radius="7">链接按钮</su-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="stylus">
.mybtn{
  background-color rgba(255,255,255,0.1) !important
  color #fff !important
  box-shadow: 2px 2px 4px rgba(0,0,0,.4)
}
</style>