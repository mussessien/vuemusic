<template>
<div class="topNav">
      <div class="topLft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao2" />
        </svg>
      </div>
      <div class="topCenter">
        <span class="navBtn">我的</span>
        <span class="navBtn active">发现</span>
        <span class="navBtn">云村</span>
        <span class="navBtn">视频</span>
      </div>
      <div class="topRight">
        <svg class="icon seach" aria-hidden="true">
          <use xlink:href="#icon-sousuo" />
        </svg>
      </div>
    </div>
</template>

<style lang="less" scoped>
.topNav{
    widows: 7.5rem;
    height:1rem;
    display: flex;
    justify-content: space-between;//水平布局，靠近两边
    align-items: center;
    padding: 0 0.2rem;
    .icon{
        width: 0.5rem;
        height: 0.5rem;
    }
    .search{
        width: 0.45rem;
        height: 0.45rem;
    }
    .topCenter{
        width: 5rem;
        display: flex;
        justify-content: space-around;
        .active{
            font-weight: 900;
        }
    }
}
</style>