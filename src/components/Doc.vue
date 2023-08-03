<!-- 每个组件页面属性介绍  -->
<template>
  <h2>{{ title }}</h2>
  <table>
    <thead>
      <tr>
        <th v-for="(item, index) in headerProps" :key="index">{{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <!-- 一行 -->
      <tr v-for="(itemx, index) in body" :key="index">
        <!-- 一行中每一个 -->
        <td v-for="(itemy, indey) in itemx" :key="indey">
          {{ itemy }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  title: {
    type: String
  },
  // 每一个组件的不同表的类型
  type: {
    type: String,
    values: ["prop", "slot", "event", "methods"],
    default: "prop",
  },
  // 解释
  body: {
    type: Array,
    default: () => []
  },
  // thead中 每一个th 根据表的type来定义
  header: {
    type: Array,
    default: () => []
  },
})

const { type } = props

const headerProps = computed(() => {
  if (props.header.length === 0) {
    switch (type) {
      case "prop":
        return ["属性", "说明", "类型", "可选值", "默认值"];
      case "slot":
        return ["插槽名", "说明"];
      case "event":
        return ["事件名", "说明", "回调参数"];
      case "methods":
        return ["方法", "说明", "参数"];
    }
  }
  return props.header
})

</script>

<style scoped lang="scss">
table {
  width: 100%;
  margin: 30px 0;
  tr th {
    text-align: left;
  }
  td,th{
    padding: 0.6rem 1rem;
    border-bottom: 1px solid #dcdfe6;
    white-space: normal;
  }
}
</style>