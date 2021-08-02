<template>
  <div>
    <h1>Switch 开关</h1>
    <p class="kaku-p">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>
<script lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Switch2Demo,
      Switch1Demo,
    };
  },
};
</script>
<style lang="scss" scoped>
.kaku-p{
  color: #5e6d82;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
</style>