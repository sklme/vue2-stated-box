<template>
  <div
    class="loading -translate-x-1/2 -translate-y-1/2"
    :style="style"
    pos="absolute"
    top="1/2"
    left="1/2"
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
  size: 40,
});

const style = computed<StyleValue>(() => ({
  height: `${props.size}px`,
  width: `${props.size}px`,
  backgroundImage: `url(${loadimgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
}));
</script>

<style lang="less" scoped>
.loading {
  transform: translate(-50%, -50%);
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
