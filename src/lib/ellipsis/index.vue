<template>
  <div 
    @click="toggle" 
    class="xp-ellipsis" 
    :class="classes" 
    :style="styles"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, reactive } from "vue";
const props = defineProps({
  lineClamp: {
    type: Number
  },
  expandTrigger: String
});
const { lineClamp, expandTrigger } = props

const classes = computed(() => ({
  ["xp-ellipsis-line-clamp"]: lineClamp,
  ["xp-ellipsis-expand-trigger"]: expandTrigger,
}))

let styles = reactive({});
const isExpand = ref(false);
styles["-webkit-line-clamp"] = lineClamp;

watch(
  () => isExpand.value,
  () => {
    styles["-webkit-line-clamp"] = !isExpand.value ? lineClamp : "";
  }
)

const toggle = () => {
  if (expandTrigger === "click") {
    isExpand.value = !isExpand.value;
  }
};
</script>

<script lang="ts">
export default {
  name: "XpEllipsis",
};
</script>

<style lang="scss">

.xp-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;

  &:not(.xp-ellipsis-line-clamp) {
    white-space: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
  }

  &.xp-ellipsis-line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: 1.5;
  }

  &.xp-ellipsis-expand-trigger {
    cursor: pointer;
  }
}
</style>