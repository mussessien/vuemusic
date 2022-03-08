<template>
  <div class="playMusicNav">
    <div class="img">
      <img :src="playlist[playlistIndex].al.picUrl||require('../assets/logo.png')" />
    </div>
    <div class="mucisName">
      <div class="name">{{playlist[playlistIndex].name}}</div>
      <div class="lyric">横划可以切换上下首哦</div>
    </div>
    <div class="playIcon">
      <div class="isPlay">
        <svg v-if="!paused" class="icon" aria-hidden="true" @click="play()">
          <use xlink:href="#icon-Playerplay" />
        </svg>
        <svg v-else class="icon" aria-hidden="true" @click="play()">
          <use xlink:href="#icon-zanting" />
        </svg>
      </div>
      <div class="more" @click="drawer = !drawer">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao2" />
        </svg>
      </div>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playlist[playlistIndex].id}.mp3`"
    ></audio>
  </div>

  <el-drawer append-to-body="true" v-model="drawer" :with-header="false" direction="btt" size="50%">
    <div class="drawerHeader">总{{ playlist.length }}首</div>
     <el-table
    :data="playlist"
    style="width: 100%"
    :show-header='false'
    class="customer-no-border-table"
    :highlight-current-row='true'
  >
    <el-table-column prop="name" />
    <el-table-column prop="ar[0].name"  />
  </el-table>
  </el-drawer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      drawer: false,
      paused: false
    }
  },
  computed: {
    ...mapState(['playlist', 'playlistIndex'])
  },
  methods: {
    play () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.paused = !this.paused
      } else {
        this.$refs.audio.pause()
        this.paused = !this.paused
      }
    }
  }
}
</script>

<style lang="less" scoped>
.playMusicNav {
  display: flex;
  width: 7.5rem;
  height: 1rem;
  border: 1px black solid;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 10000;
  .img {
    display: flex;
    // justify-items: center;
    align-items: center;
    height: 1rem;
    width: 1rem;
    img {
      display: block;
      margin: auto;
      display: flex;
      height: 0.8rem;
      width: 0.8rem;
      border-radius: 0.8rem;
    }
  }
  .mucisName {
    height: 1rem;
    width: 4.5rem;
    border: 1px red solid;
    display: flex;
    flex-direction: column;
    padding: 0 0 0 0.2rem;
    .name {
      height: 0.6rem;
      font-size: 0.35rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .lyric {
      height: 0.4rem;
      font-size: 0.25rem;
    }
  }
  .playIcon {
    display: flex;
    height: 1rem;
    width: 2rem;
    border: 1px rgb(34, 0, 128) solid;
    .isPlay {
      width: 1rem;
      .icon {
        height: 1rem;
        width: 1rem;
      }
    }
    .more {
      display: flex;
      justify-items: center;
      align-items: center;
      width: 1rem;
      .icon {
        height: 0.6rem;
        width: 0.8rem;
      }
    }
  }
}

    .customer-no-border-table th{
    border:none;
  }
  .customer-no-border-table td,.customer-no-border-table th.is-leaf {
    border:none;
  }
</style>