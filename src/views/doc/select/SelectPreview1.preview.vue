<preview>基础用法</preview>
<template>
  <xp-select
    id="select"
    style="width: 200px" 
    :options="options" 
    v-model="value"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("3");
// 下拉框的选项
// const options = []
const options = [
  {
    label: "再见杰克",
    value: "1",
  },
  {
    label: "西湖",
    value: "2",
  },
  {
    label: "为你唱歌",
    value: "3",
  },
  {
    label: "公路之歌",
    value: "4",
  },
  {
    label: "愿爱无忧",
    value: "5",
  },
  {
    label: "无法离地的飞行",
    value: "6",
  },
  {
    label: "秦皇岛",
    value: "7",
  },
  {
    label: "十万嬉皮",
    value: "8",
  },
  {
    label: "大石碎胸口",
    value: "9",
  },
  {
    label: "山雀",
    value: "10",
  },
];
</script>
