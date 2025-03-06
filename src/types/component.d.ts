export interface GoodsItem {
  id: number
  picture: string
  name: string
  desc: string
  price: number
}
export interface PageParams {
  page?: number
  pageSize?: number
}
