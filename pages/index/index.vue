<template>
  <view class="container">
    <view class="header">
      {{nickName}}
    </view>
    <shery-cell title="基础组件" isLink  required label="火车票、机票、汽车票、轮船" />
    <shery-cell title="表单组件" isLink />
    <shery-cell title="布局组件" isLink />
    <shery-cell title="高级组件" isLink="{{true}}" border="{{false}}" />
    <shery-loading />
    <shery-button block type="primary">提交表单</shery-button>
  </view>
</template>

<script>
  import store from '../../store';
  const { util, shery } = global;
  const { SheryPage} = shery;

  SheryPage(store, {
    data:{
       nickName: 'shery 优雅'
    },
    onLoad(){
    console.log('观察当前对象', this, shery)
  },
  onPullDownRefresh(){
    setTimeout(()=>{
      wx.stopPullDownRefresh();
    }, 1000);
  }
  });
</script>

<style lang="scss">
 page{
   height: 100%;
 }
 .container{
   height: 100%;
   background-color: #f9f9f9
 }
 .header{
   background-color: #1890ff;
   display: flex;
   width: 100%;
   height: 180rpx;
   justify-content: center;
   align-items: center;
   color: #fff;
   font-weight: 700;
   font-size: 32rpx;
 }
</style>