<script setup lang="ts">
//
// import XtxSwiper from '@/components/XtxSwiper.vue';
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import PageSkeleton from './components/PageSkeleton.vue'
import HotPanel from './components/HotPanel.vue'
import CategoryPanel from './components/CategoryPanel.vue'
const BannerList = ref([])
const istriggered = ref(false)
const CategoryList = ref([])
const HotList = ref([])
const guessRef = ref()
const isLoading = ref(false)
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
const onscrolltolower = () => {
  console.log('滚动触底了')
  guessRef.value.getMore()
}
const onRefresherrefresh = async () => {
  istriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  istriggered.value = false
}

onLoad(async () => {
  isLoading.value = true

  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
</script>

<template>
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    :refresher-triggered="istriggered"
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onscrolltolower"
    class="Scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :List="BannerList" />
      <CategoryPanel :list="CategoryList" />
      <HotPanel :list="HotList" />
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>
<style lang="scss">
//
page {
  background: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.Scroll-view {
  flex: 1;
}
</style>
