<template>
  <div>
    <!--    当x的值是true，那么button的class就是checked，如果是false，button的class就没有checked-->
    <button
      class="kaku-switch"
      :class="{ 'kaku-checked': value }"
      @click="toggle"
    >
      <span></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    //用来做初始化
    const toggle = () => {
      //emit的第一个参数是事件名，第二个参数是事件参数,事件名必须是update:value
      context.emit("update:value", !props.value); //将value的值取反，通过input事件将它发送到外面
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.kaku-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: 11px;
  position: relative;
  z-index: 2;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: 9px;
    transition: all 250ms;
  }
  &.kaku-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.kaku-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>