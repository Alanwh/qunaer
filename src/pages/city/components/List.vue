<template>
    <div class="wrapper" ref="wrapper">
        <div class="city-box">
            <div class="location">
                <div class="title">当前定位</div>
                <div class="item-list">
                    <div class="city-item border">北京</div>
                </div>
            </div>
            <div class="hot-city">
                <div class="title">热门城市</div>
                <div class="item-list">
                  <div class="city-item border" v-for="item of hotCities" :key="item.id">{{item.name}}</div>
                </div>
            </div>
            <div class="all-city">
              <div class="list" v-for="(cities, key) of cities" :key="key">
                  <div class="title">{{key}}</div>
                  <div class="item-list">
                    <div class="city-enum border-bottom" v-for="city of cities" :key="city.id">{{city.name}}</div>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'cityList',
  props: {
    cities: Object,
    hotCities: Array
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.wrapper{
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    .city-box{
      // height: 100%; 定高滚动失效
      padding-top: 1.88rem;
    }
}
.title{
    background: #efefef;
    line-height: .6rem;
    padding-left: .2rem;
    color: #666;
}
.item-list{
    overflow: hidden;
    .city-enum{
        line-height: .8rem;
        padding-left: .1rem;
    }
}
.hot-city, .location{
    .item-list{
        padding: .1rem;
    }
}
.city-item{
    float: left;
    padding: .2rem .5rem;
    margin: .1rem;
    &.border{
        &::after,&::before{
            border-color: #bdbdbd;
        }
    }
}
</style>
