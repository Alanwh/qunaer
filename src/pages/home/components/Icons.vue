<template>
  <div class="icons">
      <swiper class="wrapper" :options="swiperOption" >
        <swiper-slide v-for="(item, index) of groupIcons" :key="index">
            <ul class="icons-lists">
                <li class="icon-list" v-for="group of item" :key="group.id">
                    <div class="img">
                        <img :src="group.imgUrl">
                    </div>
                    <div class="text">
                        {{group.desc}}
                    </div>
                </li>
            </ul>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    groupIcons () {
      let groupsIcon = []
      let len = Math.ceil(this.iconList.length / 8)
      for (let i = 0; i < len; i++) {
        groupsIcon[i] = []
      }
      this.iconList.forEach((item, index) => {
        groupsIcon[Math.floor(index / 8)].push(item)
      })

      return groupsIcon
    }
  }
}
</script>

<style lang="scss" scoped>
.icons /deep/ {
    .swiper-container{
        overflow: initial;
    }
    .swiper-pagination-bullets{
        bottom: -.24rem;
    }
    .swiper-pagination-bullet-active {
        background: rgba(0,175,190,.8) !important;
    }
}
.icons{
    padding-bottom: .2rem;
    overflow: hidden;
}
.icons-lists{
    overflow: hidden;
    .icon-list{
        float: left;
        width: 25%;
        box-sizing: border-box;
        text-align: center;
        .img{
            padding: .2rem 0;
            img{
                width: 1.1rem;
                height: 1.1rem;
            }
        }
        .text{
            margin-bottom: .2rem;
        }
    }
}
</style>
