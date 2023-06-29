
<template>
  <div class="page-container">
    <div class="login-title">登录</div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="formData.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="formData.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>

</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
const formData = reactive<IndexDataItf>({
  username: '',
  password: ''
})

const onSubmit = () => {
  $router.push({ path: '/index' })
}
</script>

<style scoped lang="scss">
.page-container {
  height: 100vh;
  width: 375px;
  background-color: #F3F4F8;
}

.login-title {
  text-align: center;
  padding-top: 150px;
  margin-bottom: 20px;
}
</style>
<!-- <script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  beforeRouteEnter(to, from, next) {
    console.log('组件beforeRouteEnter', to, from, next)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('组件beforeRouteUpdate', to, from, next)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('组件beforeRouteLeave', to, from, next)
    next()
  }
})
</script> -->