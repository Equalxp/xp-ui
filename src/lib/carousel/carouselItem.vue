<template>
  <transition name="slide-fade">
    <div class="car-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {
  getCurrentInstance,
  inject,
  reactive,
  toRefs,
  watch
} from 'vue'

const parentData = inject('XpCarouselParentKey')
const instance = getCurrentInstance()
const state = reactive({
  selfIndex: instance.vnode.key,
  currentIndex: parentData.currentIndex
})
watch(() => {
  return parentData.currentIndex;
}, (value) => {
  state.currentIndex = value
})

const { selfIndex, currentIndex} = toRefs(state)


</script>

<script lang="ts">
export default {
  name: "XpCarouselItem",
};
</script>

<style lang="scss" scoped>

.car-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s linear;
}

.slide-fade-enter-from {
  transform: translateX(100%);
}

.slide-fade-enter-to {
  transform: translateX(0);
}

.slide-fade-leave-active {
  transform: translateX(0);
}

.slide-fade-leave-to {
  transform: translateX(-100%);
}

.img {
  width: 100%;
}
</style>