<template>
<div>
    <div style="width:1200px;height:500px;background:rgba(245, 245, 245,0.8);margin: 0 auto;border-radius: 15px;">
       <div>
        <su-button style="margin:15px;">默认按钮</su-button>
        <su-button style="margin:15px;" type="primary">主要按钮</su-button>
        <su-button style="margin:15px;" type="secondary">次要按钮</su-button>
        <su-button style="margin:15px;" type="success">成功按钮</su-button>
        <su-button style="margint:15px;" type="info">信息按钮</su-button>
        <su-button style="margin:15px;" type="warning">警告按钮</su-button>
        <su-button style="margin:15px;" type="danger">危险按钮</su-button>
        <su-button style="margin:15px;" type="dark">黑色按钮</su-button>
        <su-button style="margin:15px;" type="link">链接按钮</su-button>
        <su-button style="margin:15px;" type="text">链接按钮</su-button>
       </div>
        <div>
        <su-button style="margin:15px;" plain>朴素按钮</su-button>
        <su-button style="margin:15px;" type="primary" plain>主要按钮</su-button>
        <su-button style="margin:15px;" type="secondary" plain>次要按钮</su-button>
        <su-button style="margin:15px;" type="success" plain>成功按钮</su-button>
        <su-button style="margint:15px;" type="info" plain>信息按钮</su-button>
        <su-button style="margin:15px;" type="warning" plain>警告按钮</su-button>
        <su-button style="margin:15px;" type="danger" plain>危险按钮</su-button>
        <su-button style="margin:15px;" type="dark" plain>黑色按钮</su-button>
        <su-button style="margin:15px;" type="link" plain>链接按钮</su-button>
       </div>
        <div>
        <su-button style="margin:15px;" round>默认按钮</su-button>
        <su-button style="margin:15px;" type="primary" round>主要按钮</su-button>
        <su-button style="margin:15px;" type="secondary" round>次要按钮</su-button>
        <su-button style="margin:15px;" type="success" round>成功按钮</su-button>
        <su-button style="margint:15px;" type="info" round>信息按钮</su-button>
        <su-button style="margin:15px;" type="warning" round>警告按钮</su-button>
        <su-button style="margin:15px;" type="danger" round>危险按钮</su-button>
        <su-button style="margin:15px;" type="dark" round>黑色按钮</su-button>
        <su-button style="margin:15px;" type="link" round>链接按钮</su-button>
       </div>
       <div>
        <su-button style="margin:15px;" circle>恒</su-button>
        <su-button style="margin:15px;" type="primary" circle>恒</su-button>
        <su-button style="margin:15px;" type="secondary" circle>恒</su-button>
        <su-button style="margin:15px;" type="success" circle>恒</su-button>
        <su-button style="margint:15px;" type="info" circle>恒</su-button>
        <su-button style="margin:15px;" type="warning" circle>恒</su-button>
        <su-button style="margin:15px;" type="danger" circle>恒</su-button>
        <su-button style="margin:15px;" type="dark" circle>恒</su-button>
        <su-button style="margin:15px;" type="link" circle>恒</su-button>
       </div>
        <div>
        <su-button style="margin:15px;" radius="1">自定义圆角</su-button>
        <su-button style="margin:15px;" type="primary" radius="2">自定义圆角</su-button>
        <su-button style="margin:15px;" type="secondary" radius="3">自定义圆角</su-button>
        <su-button style="margin:15px;" type="success" radius="4">自定义圆角</su-button>
        <su-button style="margint:15px;" type="info" radius="5">自定义圆角</su-button>
        <su-button style="margin:15px;" type="warning" radius="6">自定义圆角</su-button>
        <su-button style="margin:15px;" type="danger" radius="7">自定义圆角</su-button>
        <su-button style="margin:15px;" type="dark" radius="8">自定义圆角</su-button>
        <su-button style="margin:15px;" type="link" radius="9">自定义圆角</su-button>
       </div>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style  lang='stylus' scoped>
#app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    #cover
        position absolute
        left 0
        right 0
        top 0
        bottom 0   
        background-color #999 
        opacity 0.8
        z-index -1
</style>
