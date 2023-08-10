<preview>为 Affix 组件指定容器</preview>
<template>
  <div class="affix-container">
    <xp-affix target=".affix-container" :offset="80">
      <xp-button theme="primary">距离顶部80px固定 始终在target容器中</xp-button>
    </xp-affix>
  </div>
</template>
<style scoped>
.affix-container {
  text-align: center;
  height: 800px;
  border-radius: 4px;
  background-color: #bfbfbf;
  width: 100%;
}
</style>