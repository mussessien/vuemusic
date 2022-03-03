<template>
  <div class="ListView">
    <listView-top :state="state.musicList.playlist.coverImgUrl"></listView-top>
    <listView-syncpsis :musicList="state.musicList"></listView-syncpsis>
    <list-view-bottom></list-view-bottom>
    <music-list-view
      :tracks="state.musicList.playlist.tracks"
      :subscribedCount="state.musicList.playlist.subscribedCount"
    ></music-list-view>
    <play-music-nav></play-music-nav>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import listViewTop from '../components/listView-top.vue'
import listViewSyncpsis from '../components/listView-synopsis.vue'
import listViewBottom from '../components/listView-bottom.vue'
import musicListView from '../components/musicListView.vue'
import playMusicNav from '../components/playMusicNav.vue'
// import {useStore } from 'vuex'
// import axios from 'axios'
import { getPlaylist } from '../api/index'

export default {
  components: {
    listViewTop,
    listViewSyncpsis,
    listViewBottom,
    musicListView,
    playMusicNav
  },
  setup () {
    const router = useRoute()
    let state = reactive(
      {
        musicList: {
          playlist: {
            coverImgUrl: '',
            creator: {},
            tracks: []
          }
        }
      }
    )
    let id = router.query.id
    // let store = useStore()
    console.log(id)
    async function getdata () {
      let res = await getPlaylist(id)
      state.musicList = res.data
      console.log(state.musicList)
      // store.commit('setPlaylist',state.musicList.playlist.tracks)
    }
    getdata()
    return {
      state
    }
  },
}
</script>
