<template>
  <header>
    <div class="header" v-show="show" :style="opacitySty">
      <span class="iconfont back-icon">&#xe658;</span>
      东方明珠
    </div>
    <div class="back" v-show="!show">
      <router-link tag="span" to="/" class="iconfont back-icon">&#xe658;</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      show: false,
      opacitySty: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      this.opacitySty = { opacity: top / 140 }
      if (top > 60) {
        this.show = true
      } else {
        this.show = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  header{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  .header{
    height: $headerHeight;
    line-height: $headerHeight;
    background: $bgcolor;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    text-align: center;
    color: #fff;
    .back-icon{
      display: inline-block;
      width: .5rem;
      font-size: .5rem;
      color: #fff;
      position: absolute;
      top: 0;
      left: .2rem;
    }
  }
  .back{
    background: rgba(255, 255, 255, .6);
    display: inline-block;
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    position: absolute;
    left: .2rem;
    text-align: center;
    line-height: .5rem;
    font-size: .3rem;
    top: .2rem;
  }
</style>
