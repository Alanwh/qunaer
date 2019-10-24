<template>
  <div class="recommend">
    <div class="title"><span class="iconfont love">&#xe85c;</span> 猜你喜欢</div>
    <div class="content">
      <router-link :to="'/detail/000' + index" tag="div" class="list border-bottom" v-for="(item, index) in recommendList" :key="index">
        <div class="main">
          <div class="img">
            <img :src="item.imgUrl">
          </div>
          <div class="desc">
            <div class="name">{{item.name}}</div>
            <div class="commend">{{item.commendNum}}条评论</div>
            <div class="mp-like-price"><span class="currency">￥</span><span class="num">{{item.price}}</span>起 <span class="area">{{item.area}}</span></div>
          </div>
        </div>
        <div class="tag">
          {{item.desc}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
.recommend{
  margin-top: .2rem;
  padding-left: .24rem;
  .title{
    position: relative;
    padding: .24rem 0 .26rem;
    .love{
      color: #ff5e55;
    }
  }
  .list{
    padding-top: .2rem;
  }
  .content{
    .main{
      display: flex;
    }
    .img{
      img{
        width: 2rem;
        height: 2rem;
      }
    }
    .desc{
      flex: 1;
      overflow: hidden;
      padding-left: .22rem;
      .name{
        @include ellipsis();
        margin-top: .26rem;
        height: .44rem;
        color: #212121;
        font-size: .32rem;
        line-height: .44rem;
      }
      .commend{
        color: #616161;
        font-size: .24rem;
        line-height: .34rem;
        margin-top: .14rem;
        height: .34rem;
        vertical-align: text-bottom;
      }
      .mp-like-price{
        position: relative;
        margin-top: .22rem;
        color: #616161;
        font-size: .24rem;
        line-height: .4rem;
        .currency{
          color: #ff8300;
        }
        .num{
          font-size: .4rem;
          color: #ff8300;
        }
        .area{
          float: right;
          margin-right: .24rem;
        }
      }
    }
    .tag{
      @include mut-ellipsis(2);
      color: #f55;
      padding: .2rem 0;
      line-height: .4rem;
      max-height: 1rem;
      box-sizing: border-box;
      text-align: center;
    }
  }
}
</style>
