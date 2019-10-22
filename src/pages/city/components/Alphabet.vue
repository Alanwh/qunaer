<template>
    <div class="letters">
        <span class="letter" v-for="(cities, letter) of cities" :key="letter">{{letter}}</span>
    </div>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.letters{
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $bgcolor;
    text-align: center;
    line-height: .33rem;
    height: 100vh;
    width: .4rem;
}
</style>
