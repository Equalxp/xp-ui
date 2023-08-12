<template>
  <div class="topnav">
    <svg 
      class="icon toggle-aside"
      aria-hidden="true"
    >
      <use xlink:href="#icon-xigua"></use>
    </svg>
    <!-- 左侧Logo -->
    <div class="logo" @click="getHome">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xigua"></use>
      </svg>
      <span>XpUI</span>
    </div>
    <!-- 右侧菜单 -->
    <div class="menu">
      <!-- 开启router-link的严格模式 -->
      <router-link exact to="/home">首页</router-link>
      <router-link to="/doc">文档</router-link>
      <a href="https://github.com/Equalxp/xp-ui" target="_blank">GitHub</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const getHome = () => {
  router.push({
    path: '/'
  })
}
</script>

<style lang="scss">
.topnav {
  height: 63px;
  background-color: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgb(239, 239, 245);
  // 导航栏 固定定位 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;

  .logo {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    > svg {
      width: 32px;
      height: 32px;
    }
    span {
      margin-left: 10px;
      color: rgb(31, 34, 37);
      cursor: pointer;
      font-size: 18px;
      line-height: 28px;
      height: 28px;
    }
    &:hover {
      border-bottom: none;
    }
  }

  .menu {
    a {
      display: inline-block;
      text-decoration: none;
      padding: 0 20px;
      height: 63px;
      line-height: 63px;

      &:hover,
      &:active {
        color: rgb(24, 160, 88);
      }
    }
    // router-link被选中时的动态样式
    .router-link-active {
      color: rgb(24, 160, 88);
      border-bottom: 1px solid;
    }
  }

  .toggle-aside {
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: none;
  }

  // 媒体查询 输出设备中页面最大可视区域宽度 小于这个宽度的时候 其中的css生效
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggle-aside {
      display: inline-block;
    }
  }
}
</style>