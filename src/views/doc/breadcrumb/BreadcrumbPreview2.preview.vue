<preview>图标分隔符</preview>
<template>
  <xp-breadcrumb :separator-icon="ArrowForwardIosSharp">
    <xp-breadcrumb-item :to="{ path: '/' }">homepage</xp-breadcrumb-item>
    <xp-breadcrumb-item>
      <a href="/">promotion management</a>
    </xp-breadcrumb-item>
    <xp-breadcrumb-item>promotion list</xp-breadcrumb-item>
    <xp-breadcrumb-item>promotion detail</xp-breadcrumb-item>
  </xp-breadcrumb>
</template>

<script setup lang="ts">
import { ArrowForwardIosSharp } from "@vicons/material";
</script>
