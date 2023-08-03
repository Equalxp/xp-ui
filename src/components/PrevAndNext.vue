<template>
  <div class="next-and-prev-link">
    <!-- 上一个 -->
    <div v-if="prev.name" class="pre" @click="handlePrevClick">
      <svg
        v-if="prev.name"
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-arrow-left"></use>
      </svg>
      <span style="margin-left:5px">{{ prev.name }}</span>
    </div>
    <!-- 下一个 -->
    <div class="next" @click="handleNextClick">
      <span v-if="next.name" style="margin-right:5px">{{ next.name }}</span>
      <svg v-if="next.name" class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrow-right"></use>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
  prev: {
    type: Object,
    default: Object
  },
  next: {
    type: Object,
    default: Object,
  },
})
const handlePrevClick = () => {
  router.push({
    path: props.prev.path
  })
}
const handleNextClick = () => {
  router.push({
    path: props.next.path,
  });
};
</script>

<style scoped>
.next-and-prev-link {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  color: #36ad6a;
  cursor: pointer;
  .icon{
    color: #36ad6a;
  }
}
</style>