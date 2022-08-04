import { ref } from 'vue';
import { DoneState } from './type';

interface InitState {
  isDone?: boolean;
  isLoading?: boolean;
  doneState?: DoneState;
}

export function useState(initState: InitState = {}) {
  // 状态
  const isDone = ref(!!initState.isDone);
  const doneState = ref<DoneState | null>(null);
  const isLoding = ref(!!initState.isLoading);

  function resetState() {
    isDone.value = false;
    isLoding.value = false;
    doneState.value = null;
  }

  function setLoading() {
    resetState();
    isLoding.value = true;
  }

  function setDone(thisDoneState: DoneState) {
    resetState();
    isDone.value = true;
    doneState.value = thisDoneState;
  }

  function setEmpty() {
    setDone(DoneState.empty);
  }

  function setError() {
    setDone(DoneState.error);
  }

  function setResolve() {
    setDone(DoneState.resolve);
  }

  return {
    // #region  状态
    isDone,
    isLoding,
    doneState,
    // #endregion  状态

    // 方法
    setDone,
    setEmpty,
    setError,
    setResolve,
    setLoading,
  };
}

export function pureState(result: ReturnType<typeof useState>) {
  return {
    isDone: result.isDone,
    isLoding: result.isLoding,
    doneState: result.doneState,
  };
}
