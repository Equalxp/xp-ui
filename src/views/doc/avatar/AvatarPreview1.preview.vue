<preview>尺寸</preview>
<template>
  <xp-avatar :src="imgUrl" size="small" />
  <xp-avatar :src="imgUrl" size="default" />
  <xp-avatar :src="imgUrl" size="large" />
  <xp-avatar :src="imgUrl" :size="100" />
</template>
<script setup lang="ts">
import imgUrl from "../../../assets/image/avatar.jpg";
</script>
