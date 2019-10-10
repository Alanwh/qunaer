<template>
  <div class="home">
    <home-hearder></home-hearder>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <div>tetst</div>
  </div>
</template>

<script>
import homeHearder from './components/Hearder'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'home',
  components: {
    homeHearder,
    HomeSwiper,
    HomeIcons
  }
}
</script>
