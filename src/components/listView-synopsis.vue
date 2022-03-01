<template>
  <div class="ListView-synopsis">
    <div class="coverImg">
      <img class="cover" :src="musicList.playlist.coverImgUrl" alt />
    </div>
    <div class="listdetails">
      <div class="listdetails-top">{{musicList.playlist.name}}</div>
      <div class="listdetails-middle">
        <img :src="musicList.playlist.creator.avatarUrl" alt class="author" />
        <div class="myspan">
          <div>{{musicList.playlist.creator.nickname}} ></div>
        </div>
      </div>
      <div class="listdetails-bottom">{{musicList.playlist.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
    props:['musicList']
}
</script>

<style lang="less" scoped>
.ListView-synopsis {
  width: 7.5rem;
  height: 3.2rem;
  display: flex;
  padding: 0.4rem 0.3rem 0.4rem 0.4rem;
  .coverImg {
    height: 2.4rem;
    width: 2.4rem;
    .cover {
      height: 2.4rem;
      width: 2.4rem;
    }
  }
  .listdetails {
    width: 4.3rem;
    height: 2.4rem;
    color: #fff;
    padding-left: 0.4rem;
    .listdetails-top {
      height: 1rem;
      font-size: 0.35rem;
      font-weight: 900;
      line-height: 0.4rem;
      padding-bottom: 0.2rem;
    }
    .listdetails-middle {
      padding-bottom: 0.2rem;
      height: 0.8rem;
      color: #ccc;
      display: flex;
      align-items: center;
      .author {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 0.5rem;
      }
      .myspan {
        padding-left: 0.2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 0.5rem;
        color: #aaa;
      }
    }
    .listdetails-bottom {
      overflow: hidden;
      height: 0.6rem;
      line-height: 0.3rem;
      margin-bottom: 0.2rem;
      font-size: 0.24rem;
      color: #aaa;
    }
  }
}
</style>