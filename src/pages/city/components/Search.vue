<template>
    <div class="search">
        <div class="iconfont search-icon">&#xe63c;</div>
       <input type="text" placeholder="北京/beijing/bj">
    </div>
</template>

<script>
export default {
  name: 'citySearch'
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.search{
    background: $bgcolor;
    padding: .2rem .4rem;
    display: flex;
    position: fixed;
    top: $headerHeight;
    left: 0;
    width: 100%;
    z-index: 1;
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
    }
}
</style>
