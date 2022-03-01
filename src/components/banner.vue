<template>
    <div class="banner">
      <el-carousel class="carousel" height='3rem'>
         <el-carousel-item v-for="(item,i) in banner" :key='i'>
           <img  :src="item.pic" class="small">
         </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
import {getBanner} from '../api/index'

export default {
 data() {
    return {
      banner:[]
    }
  },
  
async created() {
  let result = await getBanner(2)
  this.banner = result.data.banners
},
}
</script>

<style lang='less'  scoped>
.carousel{
  margin-top: 0.25rem;
  padding: 0 0.15rem;
  .small{
    width: 100%;
  height: 3rem;
  color: #942929;
  background: #444546;
  // font-size: 18px;
  opacity: 0.75; 
  line-height: 3rem;
  margin: 0;
  text-align: center;
  border-radius: 0.15rem;
  }
}
/deep/.el-carousel__indicators--horizontal {
        position: absolute;
        left: auto;
        right: 10px;
        bottom: 10px;
        text-align: right;
 
        .el-carousel__indicator--horizontal button {
            width: 8px;
            height: 8px;
            background: #ffffff;
            border-radius: 50%;
            opacity: 0.5;
        }
 
        .el-carousel__indicator--horizontal.is-active button {
            width: 24px;
            height: 8px;
            background: #ffffff;
            opacity: 0.5;
            border-radius: 10px;
        }
    }
</style>