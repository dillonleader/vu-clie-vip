<template>
  <div class="mar-list sixhund">
    <div class="glo"></div>
    <div class="piugin"></div>
    <div class="loaded"></div>
    <ul class="women-list">
      <li class="w-wear">
        <a href>
          <div class="pic">
            <img
              src="https://a.appsimg.com/upload/brand/upcb/2020/05/28/163/ias_159062826053569.jpg!75.webp"
              alt
            />
          </div>
          <div class="brand-logo">
            <img
              src="https://a.appsimg.com/upload/brandcool/0/414ea5ec7d6546b5bc7d47fb07b0c112/10000956/primary.png!75.webp"
              alt
            />
          </div>
          <p class="brand-txt">音儿YINER女装-年中特卖节专场</p>
          <p class="brand-disco">
            <span>0.8</span>折起
          </p>
          <a class="brand-rush">立即抢购</a>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.wearlist();
  },
  methods: {
    wearlist() {
      this.$axios
        .get("/vip/home/brand/list", {
          params: {
            pageSize: 5,
            pageNum: 1
          }
        })
        .then((res, err) => {
          // console.log(res);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.glo {
  position: absolute;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 1400px;
  background: #fee2e8;
}
.sixhund {
  .piugin {
    height: 100px;
    background: url("https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/06/16/9/68ea8ecefd5a4d2a93f714a377f1b06a.jpg")
      no-repeat center;
  }
  .loaded {
    height: 100px;
    margin-bottom: 20px;
    background: url("https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/06/09/166/5d9964c25e1a8406b1ec1d2d489da4e0.png")
      no-repeat center;
  }
  .women-list {
    display: flex;
    flex-wrap: wrap;
    .w-wear {
      margin: 0 8px 16px 8px;
      position: relative;
      width: 240px;
      height: 400px;
      background: #fff;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid #f10180;
      }
      &:hover .brand-rush {
        background: #f10180;
        color: #fff;
      }
      .pic {
        width: 100%;
        height: 219px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .brand-logo {
        position: absolute;
        left: 50%;
        top: 193px;
        transform: translateX(-50%);
        width: 104px;
        height: 54px;
        background: #fff;
        border: 1px solid #e6e6e6;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .brand-txt {
        width: 194px;
        height: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 50px 24px 0 24px;
      }
      .brand-disco {
        color: #f10180;
        font-size: 20px;
        text-align: center;
        span {
          font-size: 30px;
        }
      }
      .brand-rush {
        display: block;
        border: 1px solid #f10180;
        border-radius: 2px;
        margin: 16px 24px 0;
        width: 190px;
        height: 28px;
        -webkit-user-select: none;
        color: #f10180;
        text-align: center;
        line-height: 28px;
        font-size: 13px;
      }
    }
  }
}
</style>