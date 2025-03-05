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

export const http=(options:any)=>{
return new Promise((resolve,reject)=>{
   uni.request({
    ...options,
success(res:any){
  if (res.statusCode>=200&&res.statusCode<300) {
    resolve(res)
  }else if(res.statusCode ===401){
    const memberStore=useMemberStore()
    memberStore.clearProfile()
     uni.navigateTo({url:'/pages/login/login'})
     reject(res)
    }else{
      uni.showToast({
        icon:'none',
        title:res.data.msg || "请求失败"
      })
      reject(res)
    }

},
fail(err:any){
  uni.showToast({
    icon:'none',
    title:"网络错误"
  })
  reject(err)
}
   })
})
}
