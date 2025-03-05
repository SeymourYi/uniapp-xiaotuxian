<script setup lang="ts">
//
// import XtxSwiper from '@/components/XtxSwiper.vue';
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue';
import { getHomeBannerAPI } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

const BannerList=ref([])
const getHomeBannerData= async()=>{
 const res:any =await  getHomeBannerAPI()
 BannerList.value=res.data.result,
 console.log(BannerList.value);
}

onLoad(()=>{
 getHomeBannerData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :List="BannerList" />
<div>123</div>
</template>
<style lang="scss">
//
</style>
