<template>
  <div
    class="loading"
    :style="style"
    pos="absolute"
    left="1/2"
    top="1/2"
    bg="contain no-repeat"
  ></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { StyleValue } from 'vue/types/jsx.js';
import loadimgImg from './loading.png';

interface Props {
  size?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 32,
});

const style = computed<StyleValue>(() => ({
  height: `${props.size}px`,
  width: `${props.size}px`,
  backgroundImage: `url(${loadimgImg})`,
}));
</script>

<style lang="less" scoped>
.loading {
  transform-origin: center center;
  animation: spinimg 1s linear infinite;
}
@keyframes spinimg {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
