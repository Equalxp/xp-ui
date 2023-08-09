<template>
  <transition leave-active-class="animate__fadeOutUp" :duration="300">
    <div class="xp-alert animate__animated" :class="classes" v-if="visible">
      <xp-icon
        class="xp-alert-close-icon"
        :size="18"
        color="#7a7a7a"
        v-if="closeable"
        @click="close"
      >
        <Close />
      </xp-icon>
      <!-- 具名插槽 -->
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
            v-if="type === 'warning'"
            color="#e4a341"
          >
            <WarningFilled />
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
        <!-- title -->
        <div class="xp-alert-body-title">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <!-- 描述的内容 -->
        <div class="xp-alert-body-content" v-if="description">
          <slot>{{ description }}</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed,ref } from "vue";
import { Info24Filled } from "@vicons/fluent";
import { IosCheckmarkCircle } from "@vicons/ionicons4";
import { WarningFilled } from "@vicons/carbon";
import { CloseCircle, Close } from "@vicons/ionicons5";

// props接收的参数
const props = defineProps({
  title: {
    type: String,
    default: "Title"
  },
  description: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "default",
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  showIcon: Boolean,
  center: Boolean,
})
const emits = defineEmits(['close'])
// 类型 居中 关闭按钮
const classes = computed(() => ({
  [`xp-alert-${props.type}`]: props.type,
  "is-center": props.center,
  "show-close": props.closable
}))

const visible = ref(true)

const close = () => {
  visible.value = false;
  emits('close')
};

</script>

<script lang="ts">
export default {
  name: "XpAlert",
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
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
  align-items:flex-start;
  transition: opacity 0.2s;

  &.show-close {
    padding-right: 32px;
  }
  &.is-center {
    justify-content: center;
  }
  .xp-alert-close-icon {
    position: absolute;
    right: 16px;
    top: 8px;
    cursor: pointer;
  }
  .xp-alert-icon {
    margin-right: 10px;
    height: 100%;
    display: flex;
  }
  .xp-alert-body {
    .xp-alert-body-title {
      // 过渡效果的属性 时间 过渡函数速度效果曲线 开始延迟时间
      transition: color 0.3s cubic-bezier(0.4,0,0.2,1);
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      color: rgb(31, 34, 37);
    }
    .xp-alert-body-content {
      transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      margin-top: 9px;
      font-size: 14px;
      color: rgb(51, 54, 57);
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