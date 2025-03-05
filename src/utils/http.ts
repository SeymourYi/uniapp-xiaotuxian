import { useMemberStore } from "@/stores"

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: any) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    options.timeout = 10000
    options.header={
      ...options.header,
      "source-client":'miniapp'
    }
    const memberStore=useMemberStore()
    const token =memberStore.profile?.token
if (token) {
  options.header.Authorization=token
}
  },
}

// 添加请求拦截器
uni.addInterceptor('request', httpInterceptor)

// 添加上传文件拦截器
uni.addInterceptor('uploadFile', httpInterceptor)
