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
      <template v-if="props.doneState === DoneState.empty">
        <slot name="empty">
          <div class="empty absolute-center" text="14px gray-400">
            {{ props.emptyTips }}
          </div>
        </slot>
      </template>
      <!-- 无数据 -->

      <!-- 请求出现错误 -->
      <template v-if="props.doneState === DoneState.error">
        <slot name="error">
          <div class="error" absolute="center" text="red-400 14px">
            {{ props.errorTips }}
          </div>
        </slot>
      </template>
      <!-- 请求出现错误 -->

      <!-- 请求成功 -->
      <template v-if="props.doneState === DoneState.resolve">
        <slot name="resolve">
          <div class="resolve" absolute="center" text="14px gray-500">
            {{ resolveTips }}
          </div>
        </slot>
      </template>

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
  doneState?: DoneState | null;

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
