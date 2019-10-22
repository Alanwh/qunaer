<template>
    <div class="header border-bottom">
        <router-link to="/"><span class="iconfont back-icon">&#xe658;</span></router-link>
        城市选择
    </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.header{
    height: $headerHeight;
    line-height: $headerHeight;
    background: $bgcolor;
    color: #fff;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    .back-icon{
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: .5rem;
        font-size: .5rem;
        color: #fff;
        margin-left: .15rem;
    }
}
</style>
