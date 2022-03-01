<template>
  <div class="music">
    <div class="musicListtop">
      <div class="left">发现好歌单</div>
      <div class="right">
        <span>查看更多</span>
      </div>
    </div>
    <div class="musicListcenter">
      <router-link :to="{path:'/MusicListView',query:{id:item.id}}" class="frontCover" v-for="(item,i) in musicList" :key="i">
        <div class="backgrond" >
          <img :src="item.picUrl" alt />
          <div class="iconFont">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Playerplay" />
            </svg>
            <div class="number">{{changValue(item.playCount)}}</div>
          </div>
        </div>
        <div class="musicList-title">{{item.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {getPersonalized} from '../api/index'

export default {
  data () {
    return {
      musicList: []
    }
  },
  methods:{
    changValue(num){
      let res = 0
      if(num>=100000000){
        res = num/100000000
        res = res.toFixed(2) + '亿'
      }else if(num>=10000){
        res= num/10000
        res = res.toFixed(2) + '万'
      }else(
        res = num
      )
      return res
    }
  },
  async created () {
    let res = await getPersonalized()
    this.musicList = res.data.result
  }
}
</script>

<style lang='less' scoped>
.music {
  margin: 0.2rem 0;
  .musicListcenter {
    width: 100%;
    height: 3rem;
    display: flex;
    overflow-y: scroll;
    margin-top: 0.3rem;
    .backgrond {
      width: 2.1rem;
      height: 2.1rem;
      margin-left: 0.2rem;
      position: relative;
      img {
        border-radius: 0.3rem;
        width: 2.1rem;
        height: 2.1rem;
      }
      .iconFont {
        height: 0.4rem;
        position: absolute;
        display: flex;
        justify-items: center;
        align-items: center;
        color: #ccc;
        right: 0.1rem;
        top: 0.05rem;
        .icon {
          fill: #ccc;
          width: 0.5rem;
          height: 0.5rem;
        }
        .number {
          margin-left: -0.1rem;
          font-size: 0.2rem;
        }
      }
    }
    .musicList-title{
      overflow: hidden;
      height: 0.9rem;
      color: rgb(78, 76, 76);
      padding-left: 0.2rem;
      font-size: 0.25rem;
      line-height: 0.45rem;
    }

  }
  .musicListtop {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    .left {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.3rem;
      width: 1.6rem;
      font-size: 0.3rem;
      border: 1px solid #ccc;
    }
  }
}
.musicListcenter::-webkit-scrollbar {
  display: none;
}
</style>