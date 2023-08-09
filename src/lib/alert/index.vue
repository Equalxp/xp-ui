<template>
  <div class="xp-alert" :class="classes">
    <slot name="icon">
      <template v-if="showIcon">
        <xp-icon
          class="xp-alert-icon"
          :size="22"
          v-if="type === 'info'"
          color="#3f7ee8"
        >
          <Info24Filled />
        </xp-icon>
        <xp-icon
          class="xp-alter-icon"
          :size="22"
          v-if="type === 'warning'"
          color='#e4a341'
        >
          <WarningFilled />
        </xp-icon>
        <xp-icon
          class="xp-alert-icon"
          :size="22"
          v-if="type === 'success'"
          color="#4b9e5f"
        >
          <IosCheckmarkCircle />
        </xp-icon>
        <xp-icon
          class="xp-alert-icon"
          :size="22"
          v-if="type === 'error'"
          color="#bf3f53"
        >
          <CloseCircle />
        </xp-icon>
      </template>
    </slot>
    <div class="xp-alert-body">
      <div class="xp-alert-body-title">{{ title }}</div>
      <div class="xp-alert-body-content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Info24Filled } from "@vicons/fluent";
import { IosCheckmarkCircle } from "@vicons/ionicons4";
import { WarningFilled } from "@vicons/carbon";
import { CloseCircle } from "@vicons/ionicons5";

// props接收的参数
const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "default",
  },
  closable: {
    type: Boolean,
    default: true,
  },
  showIcon: Boolean,
  center: Boolean,
})
const classes = computed(() => ({
  [`xp-alert-${props.type}`]: props.type
}))


</script>

<script lang="ts">
export default {
  name: "XpAlert",
};
</script>

<style lang="scss">
.xp-alert {
  width: 100%;
  line-height: 1.6;
  padding: 8px 16px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  opacity: 1;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;;
  .xp-alert-icon {
    margin-right: 10px;
  }
  .xp-alert-body {
    .xp-alert-body-title {
      // 过渡效果的属性 时间 过渡函数速度效果曲线 开始延迟时间
      transition: color .3s cubic-bezier(0.4,0,0.2,1);
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      color: rgb(31, 34, 37);
    }
  }
  &.xp-alert-default {
    background-color: #fafafc;
    border: 1px solid #efeff4;
  }
  &.xp-alert-info {
    background-color: #eef5fd;
    border: 1px solid #ccdef8;
  }
  &.xp-alert-success {
    background-color: #eff7f2;
    border: 1px solid #cce6d6;
  }
  &.xp-alert-warning {
    background-color: #fdf7ee;
    border: 1px solid #f6e1ba;
  }
  &.xp-alert-error {
    background-color: #f9eef1;
    border: 1px solid #edccd3;
  }
}

</style>