<preview>为 Alert 设置图标</preview>
<template>
  <xp-alert title="Default 类型">
    <template #icon>
      <xp-icon class="xp-alert-icon" :size="22">
        <IosAirplane />
      </xp-icon>
    </template>
  </xp-alert>
  <xp-alert title="Info 类型" type="info" show-icon />
  <xp-alert title="Success 类型" type="success" show-icon />
  <xp-alert title="Warning 类型" type="warning" show-icon />
  <xp-alert title="Error 类型" type="error" show-icon />
</template>
<script setup lang="ts">
import { IosAirplane } from "@vicons/ionicons4";
</script>