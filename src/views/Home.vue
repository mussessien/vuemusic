<template>
  <div class="home">
    <top-nav></top-nav>
    <banner></banner>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
import topNav from '../components/topNav'
import banner from '../components/banner'
import iconList from '../components/iconList.vue'
import musicList from '../components/musicList.vue'

export default {

  components:{
    topNav,
    banner,
    iconList,
    musicList
  },
}
</script>


