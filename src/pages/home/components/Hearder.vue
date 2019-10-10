<template>
  <div class="header">
    <div class="header-left">
        <span class="iconfont back-icon">&#xe658;</span>
    </div>
    <div class="header-input">
        <span class="iconfont search-icon">&#xe63c;</span>
        输入城市/景点/游玩主题
    </div>
    <div class="header-right">
        <span class="city">城市</span>
        <span class="iconfont arrow-icon">&#xe65c;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHearder'
}
</script>

<style lang="scss" scoped>
    @import '~styles/varibles.scss';
    .header{
        height: .88rem;
        line-height: .88rem;
        color: #fff;
        background: $bgcolor;
        display: flex;
        &-left{
            width: .8rem;
            text-align: center;
            .back-icon{
                font-size: .5rem
            }
        }
        &-input{
            flex: 1;
            height: .6rem;
            line-height: .6rem;
            margin-top: .12rem;
            background: #fff;
            border-radius: .05rem;
            color: #ccc;
            padding-left: .2rem;
            .search-icon{
                font-size: .3rem;
            }
        }
        &-right{
            padding-left: .2rem;
            text-align: center;
            font-size: 0;
            .city{
                font-size: .28rem;
            }
            .arrow-icon{
                font-size: .5rem;
                vertical-align: top;
            }
        }
    }
</style>
