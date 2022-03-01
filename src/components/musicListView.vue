<template>
<div class="musicListView">
      <div class="operation">
        <div class="Ifvip">
          <!-- 如果包含vip专享音乐，则显示该行 判断字段为  tracks.[].fee -->
          <div class="left">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ts-tubiao_vip" />
            </svg>
            <div class="writing">含N首VIP专享歌曲</div>
          </div>
          <div class="right">首开VIP仅限5元></div>
        </div>
        <div class="MusicOperation">
          <div class="left">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yunhang" />
            </svg>
            <div class="miaoshu">
              <div class="wenzi">播放全部</div>
              <span class="num">(共N首)</span>
            </div>
          </div>
          <div class="right">+ 收藏(111111)</div>
        </div>
      </div>
      <div class="Listspread">
        <div class="index">1</div>
        <div class="MusicName">
          <div class="name">给自己的歌</div>
          <div class="author">
            <span>李宗盛</span>
          </div>
        </div>
        <div class="more">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-shuxiang" />
          </svg>
        </div>
      </div>
    </div>
</template>

<style lang="less" scoped>
    .musicListView {
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  .operation {
    .Ifvip {
      width: 7.5rem;
      height: 1.4rem;
      padding: 0.2rem 0.2rem;
      background-color: #ddd;
      border-radius: 0.4rem 0.4rem 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        .writing {
          display: flex;
          align-items: center;
          padding-left: 0.2rem;
        }
        .icon {
          display: flex;
          align-items: center;
          width: 0.6rem;
          height: 0.6rem;
        }
      }
      .right {
        display: flex;
        align-items: center;
        color: #aaa;
        font-size: 0.25rem;
      }
    }
    .MusicOperation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.2rem;
      padding: 0.2rem 0.2rem;
      margin-top: -0.3rem;
      // border: 1px solid #aaa;
      background-color: #fff;
      border-radius: 0.4rem 0.4rem 0 0;
      .left {
        display: flex;
        .icon {
          width: 0.6rem;
          height: 0.6rem;
        }
        .miaoshu {
          display: flex;
          align-items: center;
          padding-left: 0.2rem;
          .num {
            padding-left: 0.1rem;
            color: #ccc;
          }
        }
      }
      .right {
        height: 1rem;
        display: flex;
        align-items: center;
        font-size: 0.3rem;
        color: #fff;
        background: orangered;
        border-radius: 0.5rem;
        padding: 0.2rem;
      }
    }
  }
  .Listspread {
    height: 1.2rem;
    display: flex;
    padding: 0 0.2rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    .index {
      line-height: 1rem;
      text-align: center;
      width: 0.6rem;
      font-size: 0.4rem;
      color: #aaa;
    }
    .MusicName {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 6.3rem;
      padding-left: 0.2rem;
      .name{
        font-size: 0.4rem;
        font-family:'楷体';
        font-weight: 600;
      }
      .author{
        color: #aaa;
      }
    }
    .more {
      display: flex;
      align-items: center;
      .icon {
        width: 0.6rem;
        height: 0.6rem;
        fill: #aaa;
      }
    }
  }
}
</style>