<template>
  <!-- dot外框 -->
  <div class="dot-wrapper" v-if="hasDot">
    <!-- 每一个dot -->
    <div class="dot-item" v-for="item in itemLen" :key="item">
      <a
        href="javascript:;"
        class="dot-lk"
        :style="{ backgroundColor: (item) - 1 === currentIndex ? dotBgColor : '#fff' }"
        @click="dotClick(item - 1)"
      ></a>
    </div>
  </div>    
</template>

<script setup lang="ts">
const props = defineProps({
  itemLen: {
    type: Number,
  },
  currentIndex: {
    type: Number
  },
  hasDot: {
    type: Boolean,
    default: true
  },
  dotBgColor: {
    type: String,
    default: '#ff5000'
  }
})

const emits = defineEmits(['dotClick'])

const dotClick = (index:Number) => {
  emits('dotClick',index)
}

</script>

<script lang="ts">
export default {
  name: "XpCarouselDot",
};
</script>

<style lang="scss" scoped>
.dot-wrapper {
  width: 70px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 15px;
  text-align: center;
  font-size: 0;
  left: 50%;
  z-index: 1;
  margin-left: -39px;
  background-color: rgba(255, 255, 255, 0.3);

  .dot-item {
    display: inline-block;
    margin: 3px;
    .dot-lk {
      display: block;
      padding-top: 8px;
      width: 8px;
      height: 0;
      border-radius: 50%;
      background: #fff;
    }
  }
}
</style>