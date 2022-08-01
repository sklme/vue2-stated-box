<template>
  <div class="statedBox">
    <!-- 加载的状态 -->
    <template v-if="props.isLoading">
      <slot name="loading">
        <LoadingCircle></LoadingCircle>
      </slot>
    </template>
    <!-- 加载的状态 -->

    <!-- 加载结束 -->
    <template v-else-if="props.isDone">
      <div v-if="props.doneState === DoneState.empty" class="empty">
        <div class="empty-tips">
          {{ props.emptyTips }}
        </div>
      </div>
      <div v-if="props.doneState === DoneState.error" class="error">
        <div class="error-tips">
          {{ props.errorTips }}
        </div>
      </div>
    </template>
    <!-- 加载结束 -->
    <!-- 默认的状态，需要父组件传入 -->
    <slot v-else></slot>
    <!-- 默认的状态，需要父组件传入 -->
  </div>
</template>

<script setup lang="ts">
import { DoneState } from './type';
import LoadingCircle from './LoadingCircle.vue';

interface Props {
  // 请求中
  isLoading?: boolean;
  // 请求完成之后的状态
  isDone?: boolean;
  doneState?: DoneState;

  // 提示语
  emptyTips?: string;
  errorTips?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: true,
  isDone: false,
  doneState: DoneState.empty,
  emptyTips: '没有找到数据',
  errorTips: '加载失败，请稍后再试',
});
</script>

<style lang="less" scoped>
//

.empty,
.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  text-align: center;
}

.empty-tips {
  color: #aaa;
  font-size: 14px;
}
</style>
