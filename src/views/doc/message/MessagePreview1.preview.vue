<preview>基础使用</preview>
<template>
  <xp-button @click="open">Show Message</xp-button>
  <xp-button @click="openVn">Vnode</xp-button>
</template>

<script setup lang="ts">
import { h } from 'vue'
import XpMessage from '@/lib/message/index.ts';

const open = () => {
  XpMessage()
  // XpMessage('This is a Message')
}

const openVn = () => {
  XpMessage({
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
}

</script>