<template>
  <div class="ListView">
    <listView-top :state="state.musicList.playlist.coverImgUrl"></listView-top>
    <listView-syncpsis :musicList="state.musicList"></listView-syncpsis>
    <list-view-bottom></list-view-bottom>
    <music-list-view></music-list-view>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import listViewTop from '../components/listView-top.vue'
import listViewSyncpsis from '../components/listView-synopsis.vue'
import listViewBottom from '../components/listView-bottom.vue'
import musicListView from '../components/musicListView.vue'
import axios from 'axios'

export default {
    components:{
    listViewTop,
    listViewSyncpsis,
    listViewBottom,
    musicListView
  },
  setup () {
    const router = useRoute()
    let state = reactive(
      {
        musicList: {
          playlist: {
            coverImgUrl: '',
            creator: {}
          }
        }
      }
    )
    let id = router.query.id
    console.log(id)
    async function getdata () {
      await axios.get(`http://localhost:3000/playlist/detail?id=${id}`).then((res) => {
        state.musicList = res.data
        console.log(state.musicList)
      })
    }
    getdata()
    return {
      state
    }
  },
}
</script>
