<template>
  <div class="banner" @click="open">
    <div class="img">
      <img src="https://dimg04.c-ctrip.com/images/350d170000012yp8h7784_C_640_360_Q60.jpg">
    </div>
    <div class="info">
      <span class="name">东方明珠</span>
      <span class="num">13</span>
    </div>
    <div>
      <fadeAni>
        <Galary v-show="show" @close="close"></Galary>
      </fadeAni>
    </div>
  </div>
</template>

<script>
import Galary from 'common/galary/Galary'
import fadeAni from 'common/fadeAni/Fade'
export default {
  name: 'DetailBanner',
  components: {
    Galary,
    fadeAni
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    close () {
      this.show = false
    },
    open () {
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.banner{
  position: relative;
  .img{
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    img{
      width: 100%;
    }
  }
  .info{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      line-height: .6rem;
      color: #fff;
      padding-left: .2rem;
      padding-right: .2rem;
      display: flex;
      box-sizing: border-box;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
      .name{
        flex: 1;
      }
    }
}
</style>
