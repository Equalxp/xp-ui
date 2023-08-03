<template>
  <!-- 文档页面 -->
  <div class="layout">
    <Topnav class="nav"></Topnav>
    <div class="content">
      <!-- 侧边栏目录 -->
      <aside :style="asideStyle">
        <div class="menu">
          <!-- 目录分类 -->
          <div class="menu-group" v-for="(itemx, index) in docMenus" :key="index">
            <!-- span显示 目录分类名 -->
            <span class="menu-group-title text-overflow">
              <!-- docMenus的index就是目录名 -->
              {{ index }}{{ index !== "文档" ? `（${itemx.length}）` : "" }}
            </span>
            <!-- 跳转路由 -->
            <router-link v-for="(itemy, indey) in itemx" :key="indey" class="menu-item text-overflow"
              :to="`/doc/${itemy.path}`">
              {{ itemy.name }}
            </router-link>
          </div>
        </div>
      </aside>
      <!-- 中间svg图标 收纳和推开(动态样式，箭头反转180°)  -->
      <div class="toggle-button" @click="toggleAside" :style="toggleAsidStyle">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangyoujiantou"></use>
        </svg>
      </div>
      <!-- 左边显示对应内容 -->
      <main :style="mainStyle" id="doc-content-container">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Topnav from '../../components/Topnav.vue';
import { inject, type Ref, computed } from 'vue';
import { docMenus } from '@/router/doc-routes.ts'
// 是否显示侧边栏
const asideVisible = inject<Ref<boolean>>("asideVisible");
const clientWidth = inject<Ref<number>>("clientWidth");

// 控制侧边栏的出现 boolean
const toggleAside = () => {
  asideVisible!.value = !asideVisible!.value;
};
// 计算属性 侧边栏拉出收回
const asideStyle = computed(() => {
  return {
    left: asideVisible?.value ? "0px" : "-272px"
  };
})

// 样式改变
const toggleAsidStyle = computed(() => {
  return {
    // 右箭头反转
    left: asideVisible!.value ? "272px" : "0px",
    transform: asideVisible!.value
      ? "rotate(180deg) translateX(50%)"
      : "rotate(0deg) translateX(50%)",
  };
});

const mainStyle = computed(() => {
  return clientWidth!.value < 500
    ? { "padding-left": "24px" }
    : { "padding-left": asideVisible!.value ? "302px" : "60px" };
});

</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    display: flex;
    // 存在剩余空间的时候(0默认 不放大) 扩大
    flex-grow: 1;
    position: absolute;
    top: 63px;
    left: 0px;
    height: calc(100% - 63px);
    width: 100%;
    transition: all 0.5s ease;
    z-index: 1;

    >aside {
      // shrink 1是默认值可收缩 0禁止收缩 n是收缩因子
      flex-shrink: 0;
      width: 272px;
      padding: 16px;
      height: 100%;
      background-color: 1px solid #efeff5;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      transition: all 250ms ease;
      overflow-y: auto;

      .menu,
      .menu-group {
        width: 100%;
      }

      .menu-group-title,
      .menu-item {
        display: flex;
        align-items: center;
        width: 100%;
      }

      .menu-group-title {
        height: 36px;
        padding-left: 32px;
        font-size: 13px;
        color: rgb(118, 124, 130);
        overflow: hidden;

        // 悬浮default
        &:hover {
          cursor: default;
        }
      }

      .menu-item {
        height: 44px;
        padding-left: 48px;
        color: rgb(51, 54, 57);
        font-size: 14px;

        &:hover {
          color: #18a058 !important;
        }
      }

      .router-link-exact-active {
        color: #18a058 !important;
        background-color: #e7f5ee;
        border-radius: 3px;
      }
    }

    >main {
      flex-grow: 1;
      box-sizing: border-box;
      padding: 32px 24px 100px 36px;
      transition: all 250ms ease;
      overflow: auto;

      h1 {
        margin: 28px 0 28px 0;
      }

      p {
        margin: 16px 0;
        color: rgb(51, 54, 57);
        font-size: 14px;
      }

      .preview-wrapper {
        width: 80%;

        @media (max-width: 500px) {
          width: 100%;
        }
      }
    }
  }
}

.toggle-button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgb(239, 239, 245);
  position: absolute;
  left: 272px;
  top: 240px;
  background-color: #fff;
  transition: left 250ms ease, transform 0.1s ease;
  z-index: 10;

  >.icon {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 500px) {
    display: none;
  }
}
</style>