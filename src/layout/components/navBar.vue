<!--
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-08-05 21:27:09
 * @LastEditors: suckson
 * @LastEditTime: 2019-10-15 16:16:46
 -->
<template>
<div>
   <header class="bg-white-only header header-md navbar">
      <div class="navbar-header  bg-info nav-xs suckson-logo" v-show="showLogo">
        <a class="btn btn-link visible-xs"></a>
        <a href="#" class="navbar-brand text-lt">
          <i class="icon-earphones"></i>
          <span class="hidden-nav-xs m-l-sm">Suckson</span>
        </a>
      </div>
      <ul class="nav navbar-nav">
        <li>
          <a href="#nav .navbar-header" data-toggle="class:nav-xs,nav-xs" class="text-muted active">
            <i class="fa fa-indent text"></i>
          </a>
        </li>
      </ul>
   </header>
</div>
</template>
<script>
export default {
  props:{
    showLogo: Boolean
  },
  name: 'Navbar'
}
</script>
<style  lang='stylus' scoped>
.header.navbar, .footer.navbar {
  border-radius: 0;
  border: none;
  margin-bottom: 0;
  padding: 0;
  position: relative;
  z-index: 1000;
}
.bg-info .text-lt {
    color: #fff!important;
}
.navbar-brand {
    float: none;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    height: auto;
    line-height: 50px;
    display: inline-block;
    padding: 0 20px;
}

.header-md {
  min-height: 60px;
}

.header-md .navbar-nav>li>a {
    padding: 20px;
}

.navbar-nav>li>a {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px;
}

@media (min-width: 768px){
  .header-md {
    min-height: 60px;
  }
  .suckson-logo{
    width 200px
    float left
  }
  .header-md .navbar-brand {
    line-height: 60px;
  }
}
</style>
