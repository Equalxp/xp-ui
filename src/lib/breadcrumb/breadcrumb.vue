<template>
  <div class="xp-breadcrumb">
    <!-- 一堆breadcrumb-item -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
// props值
const props = defineProps({
  separator: {
    type: String,
    default: "/",
  },
  separatorIcon: {
    type: Object,
  },
})
// k-v
provide("XpBreadcrumbKey", props);

</script>

<script lang="ts">
export default {
  name: "XpBreadcrumb",
};
</script>

<style lang="scss">
.xp-breadcrumb {
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 1;
}
</style>