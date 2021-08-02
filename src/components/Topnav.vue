<template xmlns="http://www.w3.org/1999/html">
  <div class="topnav">
    <router-link to="/" class="logo">
      <img src="../images/logo.png" alt="Logo" class="kaku-Logo">
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    // console.log(asideVisible.value);
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss">
$color: #1243af;
.topnav {
  //box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  display: flex;
  padding-top: 5px;
  padding-left: 26px;
  position: fixed;
  color: $color;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(13deg, #00c9ff 0%, #92fe9d 100%);
  z-index: 30;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > .kaku-Logo {
      width: 68px;
      height: 68px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>