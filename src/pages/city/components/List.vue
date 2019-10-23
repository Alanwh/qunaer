<template>
    <div class="wrapper" ref="wrapper">
        <div class="city-box">
            <div class="location">
                <div class="title">当前定位</div>
                <div class="item-list">
                    <div class="city-item border" @click="handleClickCity">{{this.city}}</div>
                </div>
            </div>
            <div class="hot-city">
                <div class="title">热门城市</div>
                <div class="item-list">
                  <div
                    class="city-item border"
                    v-for="item of hotCities"
                    :key="item.id"
                    @click="handleClickCity"
                  >
                    {{item.name}}
                  </div>
                </div>
            </div>
            <div class="all-city">
              <div class="list" v-for="(cities, key) of cities" :key="key" :ref="key">
                  <div class="title">{{key}}</div>
                  <div class="item-list">
                    <div
                      class="city-enum border-bottom"
                      v-for="city of cities"
                      :key="city.id"
                      @click="handleClickCity"
                    >
                      {{city.name}}
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'cityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  methods: {
    handleClickCity (e) {
      // this.$store.commit('changeCity', e.target.innerText)
      this.changeCity(e.target.innerText)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter () {
      this.scroll.scrollToElement(this.$refs[this.letter][0])
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, { click: true })
  },
  activated () {
    this.scroll && this.scroll.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.wrapper{
    position: absolute;
    top: 1.88rem;
    width: 100%;
    left: 0;
    bottom: 0; // top: 0, bottom:0, 自动占满剩下屏幕
    overflow: hidden;
    box-sizing: border-box;
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
