<script setup lang="ts">
//
// import XtxSwiper from '@/components/XtxSwiper.vue';
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import HotPanel from './components/HotPanel.vue'
import CategoryPanel from './components/CategoryPanel.vue'
const BannerList = ref([])
const CategoryList = ref([])
const HotList = ref([])
const getHomeBannerData = async () => {
  const res: any = await getHomeBannerAPI()
  BannerList.value = res.data.result
}
const getHomeCategoryData = async () => {
  const res: any = await getHomeCategoryAPI()
  CategoryList.value = res.data.result
}

const getHomeHotData = async () => {
  const res: any = await getHomeHotAPI()
  HotList.value = res.data.result
  console.log(HotList.value)
}
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :List="BannerList" />
  <CategoryPanel :list="CategoryList" />
  <HotPanel :list="HotList" />
  <div>123</div>
</template>
<style lang="scss">
//
page {
  background: #f7f7f7;
}
</style>
