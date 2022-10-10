<template>
  <displayBox
    :is-loading="state.isLoding.value"
    :is-done="state.isDone.value"
    :done-state="state.doneState.value"
  >
    <div>即将要展示的东西</div>
  </displayBox>
</template>

<script setup lang="ts">
import displayBox from './components/DisplayBox.vue';
import { useState } from './lib';

const state = useState({
  isLoading: true,
});

setTimeout(() => {
  state.setResolve();
}, 1000);
</script>
