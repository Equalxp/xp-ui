<preview>形状</preview>
<template>
  <xp-avatar :src="imgUrl" shape="square" size="small" />
  <xp-avatar :src="imgUrl" shape="square" size="default" />
  <xp-avatar :src="imgUrl" shape="square" size="large" />
  <xp-avatar :src="imgUrl" shape="square" :size="100" />
</template>
<script setup lang="ts">
import imgUrl from "../../../assets/image/avatar.jpg";
</script>
