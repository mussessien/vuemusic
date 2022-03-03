<template>
  <div class="playMusicNav">
    <div class="img">
      <img :src="playlist[playlistIndex].al.picUrl" alt="">
    </div>
    <div class="mucisName">
      <div class="name"></div>
      <div class="lyric"></div>
    </div>
    <div class="playIcon">
      <div class="isPlay"></div>
      <div class="more"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['playlist', 'playlistIndex'])
  },
}
</script>

<style lang="less" scoped>
.playMusicNav {
  display: flex;
  width: 7.5rem;
  height: 1rem;
  border: 1px black solid;
  position: fixed;
  bottom: 0;
  z-index: 999;
  .img {
    background: red;
    height: 0.8rem;
    width: 0.8rem;
    img{
      height: 0.8rem;
      width: 0.8rem;
      border-radius: 0.8rem;
    }
  }
  .mucisName {
    height: 1rem;
    width: 5rem;
    border: 1px red solid;
    display: flex;
    flex-direction: column;
  }
  .playIcon {
    height: 1rem;
    width: 1.7rem;
    border: 1px rgb(34, 0, 128) solid;
  }
}
</style>