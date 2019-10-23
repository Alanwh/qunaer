<template>
  <div class="home">
    <home-hearder></home-hearder>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-play :playList="playList"></home-play>
  </div>
</template>

<script>
import homeHearder from './components/Hearder'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomePlay from './components/Play'
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    homeHearder,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomePlay
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      playList: [],
      lastCity: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.post('/api/home?city=' + this.city).then(this.handleHomeInfo)
    },
    handleHomeInfo (res) {
      if (res.statusText === 'OK' && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.playList = data.playList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  }
}
</script>
