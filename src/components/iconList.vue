<template>
<div class="iconList">
      <div class="iconItem" v-for="(item,i) in homepageBall" :key="i">
        <div class="img">
        <img :src="item.iconUrl" :alt="item.name">
        </div>
        <span>{{item.name}}</span>
      </div>
    </div>
</template>

<script>
// import axios from 'axios'
import {getHomepageBall} from '../api/index'
export default {
    data() {
    return {
      homepageBall:[]
    }
  },
  async created(){
    let res = await getHomepageBall()
    this.homepageBall = res.data.data
  },
}
</script>

<style lang='less' scoped>
.iconList{
  width: 100%;
  height: 2rem;
  display: flex;
  overflow-y: scroll;
  margin-left: -0.15rem;
  .iconItem{
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
      margin-top: 0.15rem;
      font-size: 0.2rem;
    }
    .img{
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 1.1rem;
    background: orangered;
    img{
      width: 1.1rem;
      height: 1.1rem;
    }
  }
  }
}
.iconList::-webkit-scrollbar {
        display: none;
    }
</style>