<template>
  <transition  name="fade" mode="out-in">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'fadeAni'
}
</script>

<style lang="scss">
  .fade-enter,.fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,.fade-leave-active {
    transition: all linear .2s;
  }
</style>
