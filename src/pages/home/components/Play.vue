<template>
  <div class="play">
      <div class="title">周末去哪玩</div>
      <div class="list" v-for="(item, index) of playList" :key="index">
        <div class="item">
          <div class="img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="info">
            <div class="name">{{item.name}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomePlay',
  props: {
    playList: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
  .play{
    margin-top: .2rem;
    .title{
      height: .8rem;
      padding-left: .26rem;
      line-height: .8rem;
      color: #212121;
    }
    .img{
      height: 0;
      padding-bottom: 37.4375%;
      img{
        width: 100%;
      }
    }
    .info{
      position: relative;
      padding: .14rem .2rem .2rem .2rem;
      .name{
        padding-right: 1.4rem;
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
      }
      .desc{
        @include ellipsis();
        padding-right: 1.4rem;
        color: #616161;
        font-size: .24rem;
        line-height: .42rem;
      }
    }
  }
</style>
