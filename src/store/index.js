import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist:[{
      al:{},
      name:''
    }],
    playlistIndex:0
  },
  mutations: {
    setPlaylist:function(state,value){
      state.playlist = value
      console.log("1111",state.playlist)
    }
  },
  actions: {
  },
  modules: {
  }
})
