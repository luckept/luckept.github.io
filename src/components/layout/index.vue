<template>
  <div class="layout-container">
    <div class="header">
      <img class="avatar" src="@/assets/avatar.jpg" />
      <div class="nav">
        <div @click="handleNavChange(item)" class="nav-item" v-for="item in navList" key="item.path">{{item.name}}</div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      Luckept Personal Website
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
import router from '@/router';
  const navList = ref([
    {
      name: '首页',
      path: '/'
    },
    {
      name: '文章',
      path: '/article'
    },
    {
      name: '留言',
      path: '/message'
    }
  ])

  const handleNavChange = (item) => router.push(item.path)
</script>

<style lang="scss" scoped>
  .layout-container {
    width: 100vw;
    height: 100vh;
    background-color: #333;

    .header {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 50px;

      .avatar {
        width: 50px;
        height: 50px;
        background-color: #fff;
        position: relative;
        border-radius: 50%;
        border: 3px solid #000;
      }

      .nav {
        width: 200px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .nav-item {
          color: #fff;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }

    .content {
      width: 100%;
      height: calc(100% - 150px);
    }

    .footer {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }

</style>