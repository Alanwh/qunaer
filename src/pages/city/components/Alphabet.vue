<template>
    <div class="letters">
        <span
          class="letter"
          v-for="(cities, letter) of cities"
          :key="letter"
          @click="handleLetterClick"
        >
          {{letter}}
        </span>
    </div>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    }
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
