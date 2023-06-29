<template>
  <div class="index-container">
    <div class="index-header-wrapper">
      <div>首页</div>
      <van-tag type="primary">标签</van-tag>
      <van-button @click="goLogin" type="success">去登陆</van-button>
      <div>{{ state.username }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
// import { showToast } from 'vant'
import { testApi } from '@/api/index'
// import axios from 'axios'

const $router = useRouter()
const state = reactive<IndexDataItf>({
  username: '小米',
  password: '111'
})

// axios({
//   method: 'get',
//   url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=3736563',
//   headers: {
//     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16811845812905652749926401","bc":"440100"}',
//     'X-Host': 'mall.film-ticket.film.list'
//   }
// }).then(res => {
//   console.log(res)
// })

testApi({
  data: {
    cityId: 440100,
    pageNum: 1,
    pageSize: 10,
    type: 1,
    k: 3736563
  },
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16811845812905652749926401","bc":"440100"}',
    'X-Host': 'mall.film-ticket.film.list'
  }
}).then(res => {
  console.log(res)
})

const goLogin = () => {
  $router.push({ path: '/login' })
  // showToast('提示')
}
</script>

<style scoped lang="scss">
.index-container {
  color: black;
  height: 100vh;
  width: 375px;
  // background-color: rgb(64, 158, 255);
}

.index-header-wrapper {
  width: 375px;
  height: 212px;
  // background: linear-gradient(88deg, #F86B5B 0%, #FDAE74 100%);
}

.van-button {
  background-color: red
}
</style>
