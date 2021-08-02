<template>
  <div class="layout">
    <Topnav class="nav" toggleMenuButtonVisible />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/Intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/Install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    console.log('doc:' + asideVisible.value);
    return { asideVisible };
  },
};
</script>
<style lang="scss" scoped>
.router-link-active{
  text-decoration: underline;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    top: 0;
    left: 0;
    width: 100%;
  }
  > .content {
    flex-grow: 1;
    padding-top: 76px;
    padding-left: 285px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    background-color: white;
    box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
  }
  > main {
    flex-grow: 1;
    padding-top: 30px;
    padding-left: 24px;
    background: white;
  }
}
@keyframes toHeight {
  0%{
    top: 50%;
    height: 10%;
  }
  100%{
    top: 0;
    height: 100%;
  }
}
aside {
  width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 90px 0 60px 20px;
  z-index: 10;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      >a{
        display: block;
        padding: 12px 16px;
        &:hover{
          background-color: #e5f2fa;
        }
      }
      .router-link-active{
        display: block;
        background: #e5f2fa;
        position: relative;
        text-decoration: none;
        //border-right: #0d74a3 solid 3px;
        //transition: border-right 1s;
        &::after {
          content: "";
          display: block;
          animation: toHeight forwards linear 300ms ;
          position: absolute;
          //top: 0;
          right: 0;
          width: 3px;
          background-color: #6B9AB8;
        }
        &:hover{
          background-color: #e5f2fa;
        }
      }
    }
  }
}
main {
  overflow: auto;
}
</style>