<template>
<div class="ListView-top">
      <img class="bg" :src="state" alt />
      <div class="ListViewTop-nav">
        <div class="back" @click="this.$router.back()">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xitongfanhui" />
          </svg>
        </div>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo" />
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo-shuxiang" />
        </svg>
      </div>
    </div>
</template>

<script>
export default {
    props:['state']
}
</script>

<style lang='less' scoped>
.ListView-top {
  display: flex;
  justify-content: space-between;
  width: 7.5rem;
  height: 1rem;
  padding: 0.2rem 0.4rem;
  .bg {
    width: 7.5rem;
    height: auto;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    filter: blur(40px);
  }
  .ListViewTop-nav {
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    .title {
      margin-left: 0.2rem;
      font-size: 0.4rem;
      color: #fff;
    }
    .back {
      .icon {
        width: 0.6rem;
        height: 0.6rem;
        margin-right: 0.2rem;
        fill: #fff;
      }
    }
  }
  .right {
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      margin-left: 0.3rem;
      fill: #fff;
    }
  }
}
</style>