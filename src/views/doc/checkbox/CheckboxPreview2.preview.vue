<preview>禁用状态</preview>
<template>
  <div style="width: 100%; display: flex; align-items: center">
    <xp-checkbox v-model="checkbox1" label="选项A" size="large" />
    <xp-checkbox
      v-model="checkbox2"
      label="选项B"
      size="large"
      :disabled="disabled"
    />
    <!-- <xp-switch v-model="disabled" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkbox1 = ref(false);
const checkbox2 = ref(false);
const disabled = ref(true);
</script>
