<preview>多选框组</preview>
<template>
  <xp-checkbox-group v-model="checkList" size="large">
    <xp-checkbox label="选项A" />
    <xp-checkbox label="选项B" />
    <xp-checkbox label="选项C" />
  </xp-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checkList = ref(["选项A"]);
</script>
