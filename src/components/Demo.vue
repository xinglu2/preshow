<template>
  <div class="kaku-table">
    <div class="demo">
      <h2>{{ component.__sourceCodeTitle }}</h2>
      <div class="demo-component">
        <component :is="component" />
      </div>
      <div class="demo-actions">
        <Button v-on:click="showCode" v-if="!codeVisible">查看代码</Button>
        <Button v-on:click="hideCode" v-else>隐藏代码</Button>
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "../../node_modules/prismjs/themes/prism.css";
import { computed, onUpdated, ref, watch, watchEffect } from "vue";
const Prism = (window as any).Prism;
export default {
  props: {
    component: Object,
  },
  components: {
    Button,
  },

  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const showCode = () => {
      codeVisible.value = true
      console.log('showCode');
    }
    const hideCode = () => {
      codeVisible.value = false
      console.log('hideCode');
    }
    const codeVisible = ref(false);
    let buttonText = "查看代码";
    // console.log(buttonText);

    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode,
      buttonText,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.kaku-table {
  //border: #00c9ff solid 1px;
  margin: 48px 0 20px;
}
.demo {
  border: 1px solid $border-color;
  margin: 14px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>