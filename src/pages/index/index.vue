<script setup lang="ts">
//
// import XtxSwiper from '@/components/XtxSwiper.vue';
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue';
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import CategoryPanel from './components/CategoryPanel.vue';
const BannerList=ref([])
const getHomeBannerData= async()=>{
 const res:any =await  getHomeBannerAPI()
 BannerList.value=res.data.result,
 console.log(BannerList.value);
}
const getHomeCategoryData=async()=>{
 const res=await getHomeCategoryAPI()
  console.log('====================================');
  console.log(res,"123");
  console.log('====================================');
}
onLoad(()=>{
 getHomeBannerData()
 getHomeCategoryData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :List="BannerList" />
  <CategoryPanel />
<div>123</div>
</template>
<style lang="scss">
//
page {
  background: #f7f7f7;
}
</style>
