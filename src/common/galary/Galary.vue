<template>
  <div class="galary" @click.stop="toggle" v-show="show">
    <swiper class="wrapper" :options="swiperOption">
      <swiper-slide>
        <img class="swiper-img" src="https://dimg04.c-ctrip.com/images/350v170000013b88cE75C_C_640_360_Q60.jpg" >
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="https://dimg04.c-ctrip.com/images/35061700000130svmDCFE_C_640_360_Q60.jpg" >
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="https://dimg04.c-ctrip.com/images/350p170000012zbaiC793_C_640_360_Q60.jpg" >
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Galary',
  props: {
    show: Boolean
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        paginationType: 'progress'
      }
    }
  },
  methods: {
    toggle () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/ .swiper-container{
    overflow: inherit;
    .swiper-pagination{
      color: #fff;
      bottom: -2rem;
    }
  }
  .galary{
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .wrapper{
      width: 100%;
      height: 0;
      padding-bottom: 55.6%;
    }
    .swiper-img{
      width: 100%;
    }
  }
</style>
