<template>
  <div>
    <div class="search">
      <div class="iconfont search-icon">&#xe63c;</div>
      <input type="text" placeholder="北京/beijing/bj" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul class="city-lists">
        <li
          class="list-item border-bottom"
          v-for="city of results"
          :key="city.id"
          @click="handleClickCity"
        >
          {{city.name}}
        </li>
        <li class="list-item border-bottom" v-show="show">没有找到匹配结果</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'citySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      results: []
    }
  },
  methods: {
    handleClickCity (e) {
      this.keyword = ''
      this.changeCity(e.target.innerText)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.results = []
        return
      }
      this.results = []
      for (let key in this.cities) {
        this.cities[key].forEach((city) => {
          if (city.name.indexOf(this.keyword) !== -1 || city.spell.indexOf(this.keyword) !== -1) {
            this.results.push(city)
          }
        })
      }
    }
  },
  computed: {
    show () {
      return !this.results.length
    }
  },
  mounted () {
    if (this.scroll) {
      this.scroll.scrollTo({ y: 0 })
    } else {
      this.scroll = new Bscroll(this.$refs.search)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.search{
    background: $bgcolor;
    padding: .2rem .4rem;
    display: flex;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    .search-icon{
        position: absolute;
        left: .5rem;
        top: .35rem;
        color: #ccc;
    }
    input{
        line-height: .6rem;
        color: #333;
        flex: 1;
        border-radius: .06rem;
        padding-left: .5rem;
        text-align: center;
    }
}
.search-content{
  position: absolute;
  width: 100%;
  top: 1.88rem;
  bottom: 0;
  left: 0;
  background: #eee;
  z-index: 1;
  .list-item{
    line-height: .62rem;
    color: #666;
    background: #fff;
    padding-left: .2rem;
    font-size: .2rem;
  }
}
</style>
