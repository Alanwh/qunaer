<template>
  <div class="city-box">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city').then(this.handleCicyInfo)
    },
    handleCicyInfo (res) {
      if (res.statusText === 'OK') {
        const data = res.data
        if (data.ret) {
          const { hotCities, cities } = data.data
          this.hotCities = hotCities
          this.cities = cities
        }
      }
    },
    handleChange (letter) {
      this.letter = letter;
    }
  }
}
</script>

<style lang="scss" scoped>
.city-box{
  position: relative;
  height: 100vh;
  overflow: hidden;
}
</style>
