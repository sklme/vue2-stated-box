<template>
  <div class="stated-box">
    <!-- 加载的状态 -->
    <template v-if="props.isLoading">
      <slot name="loading">
        <LoadingCircle :size="loadingCircleSize"></LoadingCircle>
      </slot>
    </template>
    <!-- 加载的状态 -->

    <!-- 加载结束 -->
    <template v-else-if="props.isDone">
      <!-- 无数据 -->
      <div
        v-if="props.doneState === DoneState.empty"
        class="empty absolute-center"
        text="14px gray-400"
      >
        <div class="empty-tips">
          {{ props.emptyTips }}
        </div>
      </div>
      <!-- 无数据 -->

      <!-- 请求出现错误 -->
      <div
        v-if="props.doneState === DoneState.error"
        class="error"
        absolute="center"
        text="red-400 14px"
      >
        <div class="error-tips">
          {{ props.errorTips }}
        </div>
      </div>
      <!-- 请求出现错误 -->

      <!-- 请求成功 -->
      <div
        v-if="props.doneState === DoneState.resolve"
        class="resolve"
        absolute="center"
        text="14px gray-500"
      >
        {{ resolveTips }}
      </div>
      <!-- 请求成功 -->
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
  resolveTips?: string;

  // 加载圈圈的大小
  loadingCircleSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  isDone: false,
  doneState: DoneState.resolve,
  emptyTips: '没有找到数据',
  errorTips: '加载失败，请稍后再试',
  resolveTips: 'request resolved',
  loadingCircleSize: 32,
});
</script>
