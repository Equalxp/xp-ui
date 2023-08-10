<preview>为 Affix 组件指定容器</preview>
<template>
  <div class="affix-container">
    <xp-affix target=".affix-container" :offset="80">
      <xp-button default="info">距离顶部80px固定 始终在target容器中</xp-button>
    </xp-affix>
  </div>
</template>
<style scoped>
.affix-container {
  text-align: center;
  height: 400px;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
}
</style>