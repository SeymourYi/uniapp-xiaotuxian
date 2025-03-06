import type { PageParams } from '@/types/component'
import { http } from '@/utils/http'

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

export const getHomeCategoryAPI = () => {
  return http({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

export const getHomeHotAPI = () => {
  return http({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
