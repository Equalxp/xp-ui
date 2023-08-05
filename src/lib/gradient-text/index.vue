<template>
  <div class="jw-gradient-text" :class="classes" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    defult: "primary"
  },
  size: {
    type: Number,
    default: 16
  },
  grafient: {
    type: Object,
    default: () => {}
  },
});

const classes = computed(()=>({
  [`is-${props.type}`]: props.type,
}))

const style = computed(()=>({
  fontSize: `${props.size}px`,
  backgroundImage: props.gradient
    ? `linear-gradient(
      ${props.gradient.deg ? props.gradient.deg + "deg" : "252deg"},
      ${props.gradient.from} 0%,
      ${props.gradient.to} 100%
    )`
    : "",
}))

</script>

<script lang="ts">
export default {
  name: "XpGradientText",
};
</script>

<style lang="scss">

</style>