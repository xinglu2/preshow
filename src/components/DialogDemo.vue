<template>
  <h1>dialog示例</h1>
<!--  <h1>示例1</h1>-->
<!--  <Button @click="toggle">toggle</Button>-->
<!--  <Dialog-->
<!--    v-model:visible="x"-->
<!--    :closeOnClickOverlay="false"-->
<!--    :ok="f1"-->
<!--    :cancel="f2"-->
<!--  >-->
<!--    &lt;!&ndash;   具名插槽  &ndash;&gt;-->
<!--    <template v-slot:title>-->
<!--      <strong>加粗的标题</strong>-->
<!--    </template>-->
<!--    <template v-slot:content>-->
<!--      <strong>h1</strong>-->
<!--      <div>h2</div>-->
<!--    </template>-->
<!--  </Dialog>-->
<!--  <h1>示例2</h1>-->
<!--  <Button @click="showDialog">show</Button>-->
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo
    }
  }
}
</script>

<style scoped>
</style>