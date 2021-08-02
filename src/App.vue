<template>
<router-view />
</template>

<script lang="ts">
import {provide, ref} from 'vue'
import {router} from "./router";

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
   //width<=300?false:true简写为width > 300
    const asideVisible = ref(width > 300)  //ref就是一个盒子，里面的值是false
    provide('asideVisible',asideVisible)
    if(width<=500){
      router.afterEach(()=>{  //afterEach就是一旦路由切换就执行函数
        asideVisible.value = false
      })
    }
  }
}

</script>
