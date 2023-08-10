<template>
  <div class="xp-breadcrumb-item">
    <span
      class="xp-breadcrumb-inner"
      :class="{
        'is-link': to,
      }"
      @click="handleClick"
    >
      <slot></slot>
    </span>
    <!-- 有separatorIcon就用icon 没有就用/ -->
    <xp-icon
      v-if="parent?.separatorIcon"
      class="xp-breadcrumb-separator"
      :size="12"
    >
      <component :is="parent?.separatorIcon" />
    </xp-icon>
    <span v-else class="xp-breadcrumb-separator">
      {{ parent.separator }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from "vue-router";
const props = defineProps({
  // 路由跳转路径
  to: {
    type: Object,
    default: () => {},
  },
  replace: {
    type: Boolean,
    default: false,
  },
});
const router = useRouter();
// 取得父组件的props的值
const parent = inject("XpBreadcrumbKey", undefined);

// 路由跳转
const handleClick = () => {
  if (!props.to || !router) return;
  props.replace ? router.replace(props.to) : router.push(props.to);
};

</script>

<script lang="ts">
export default {
  name: "XpBreadcrumbItem",
};
</script>

<style lang="scss">
.xp-breadcrumb-item {
  float:left;
  display: flex;
  align-items: center;
  color: #606266;
  // 中间的 > 或者 /
  .xp-breadcrumb-separator {
    margin: 0 9px;
    font-weight: 700;
    color: #c0c4cc;
  }
  // 跳转链接部分
  .xp-breadcrumb-inner.is-link,
  .xp-breadcrumb-inner a {
    font-weight: 700;
    text-decoration: none;
    color: #303133;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;

    &:hover {
      color: #36ad6a;
    }
  }
  &:last-child .xp-breadcrumb-separator {
    display: none;
  }
}
</style>