<template>
        <div class="ListView-bottom">
      <div class="iconBox">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun" />
        </svg>
        <span class="iconTitle">评论</span>
      </div>

      <div class="iconBox">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang3-copy" />
        </svg>
        <span class="iconTitle">分享</span>
      </div>

      <div class="iconBox">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-download" />
        </svg>
        <span class="iconTitle">下载</span>
      </div>

      <div class="iconBox">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xianshi_xuanze" />
        </svg>
        <span class="iconTitle">多选</span>
      </div>
    </div>
</template>

<style lang="less" scoped>
    .ListView-bottom {
  width: 7.5rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.1rem;
  padding: 0.2rem 0.3rem;
  .iconBox {
    display: flex;
    flex-direction: column;
    .iconTitle {
      margin-top: 0.1rem;
      text-align: center;
      color: #ccc;
    }
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      fill: #ccc;
    }
  }
}
</style>