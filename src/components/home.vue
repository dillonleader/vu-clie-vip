<template>
  <div class="home-box">
    <div class="head"></div>
    <div class="out-box">
      <div class="address">
        <span>咸阳市</span>
        <i></i>
      </div>
      <ul class="top-nav">
        <li class="head-port">
          <a href>
            <img src="http://www.dillonl.cn/logo.png" />
          </a>
        </li>
        <li class="username">
          <a href>dillonl</a>
        </li>
        <li class="signout">
          <a>退出</a>
        </li>
        <li>
          <a href>我的订单</a>
        </li>
        <li class="special">
          <a href>
            我的特卖
            <i></i>
          </a>
          <ul class="spe-ul">
            <li>
              <a href>商品收藏</a>
            </li>
            <li>
              <a href>品牌收藏</a>
            </li>
            <li>
              <a href>我的足迹</a>
            </li>
          </ul>
        </li>
        <li class="special">
          <a href>
            客户服务
            <i></i>
          </a>
          <ul class="spe-ul">
            <li>
              <a href>联系客服</a>
            </li>
            <li>
              <a href>帮助中心</a>
            </li>
            <li>
              <a href>服务中心</a>
            </li>
          </ul>
        </li>
        <li class="more">
          <a href>更多</a>
          <i></i>
        </li>
      </ul>
    </div>
    <div class="lo-se">
      <div class="head-logo">
        <div class="logo">
          <img src="https://a.vpimg2.com/upload/upimg2/slogan/commonHeader.png" alt />
        </div>
        <div class="head-vip"></div>
      </div>
      <div class="head-ser">
        <div class="search-cat">
          <div class="search-so">
            <input type="text" placeholder="爆款惊喜补贴" />
            <a>
              <span></span>
            </a>
          </div>
          <div class="shopcat">
            <span class="cat-lo"></span>
            <span class="cat-txt">购物袋</span>
            <span class="cat-num">0</span>
          </div>
        </div>
        <div class="keywordlist">
          <a href>爆款限量购</a>
          <a href>大牌疯抢 3折封顶</a>
          <a href>夏季热销19元起</a>
          <a href>断货王排行</a>
        </div>
      </div>
    </div>
    <div class="middle-glo"></div>
    <navs></navs>
    <router-view></router-view>
  </div>
</template>

<script>
import navs from "@/components/nav";
export default {
  created() {
    this.getLoginInfo();
  },
  methods: {
    getLoginInfo() {
      this.$axios.get("/vip/admin/info").then(res => {
        this.$store.commit("userStatus", res.data.data);
        // localStorage.getItem("regkey", userToken);
        // console.log(res);
      });
    }
  },
  components: {
    navs
  }
};
</script>

<style lang="scss" scoped>
.home-box {
  width: 1140px;
  margin: 0 auto;
  .head {
    position: absolute;
    left: 0;
    width: 100%;
    height: 30px;
    background: #f5f5f5;
    z-index: -1;
  }
  .out-box {
    width: 100%;
    height: 30px;
    .address {
      width: 100px;
      color: #333333;
      font-size: 12px;
      line-height: 30px;
      float: left;
      span {
        cursor: pointer;
      }
      i {
        display: inline-block;
        border-width: 4px;
        border-color: #999 transparent transparent transparent;
        border-style: solid dashed dotted dashed;
        vertical-align: middle;
        margin-left: 5px;
      }
    }
    .top-nav {
      float: right;
      li {
        float: left;
        line-height: 30px;
        padding: 0 10px;
        a {
          position: relative;
          display: inline-block;
          width: inherit;
          padding-left: 5px;
          font-size: 12px;
          color: #666;
          &:hover {
            color: #f10180;
          }
        }
      }
      .head-port {
        width: 25px;
        height: 25px;
        margin-top: 2px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .special {
        position: relative;
        border: 1px solid transparent;
        i {
          display: inline-block;
          border-width: 4px;
          border-color: #999 transparent transparent transparent;
          border-style: solid dashed dotted dashed;
          vertical-align: center;
          margin-left: 3px;
        }
        &:hover {
          border: 1px solid #cdcdcd;
          border-bottom: none;
          border-top: none;
          background: #fff;
        }
        &:hover .spe-ul {
          display: block;
          border: 1px solid #cdcdcd;
          border-top: none;
          background: #fff;
        }
        .spe-ul {
          display: none;
          position: absolute;
          left: -1px;
          width: 84px;
          padding: 0;
          z-index: 9;
          li {
            display: block;
            line-height: 40px;
            a {
              display: block;
              padding-left: 5px;
            }
          }
        }
      }
      .more {
        i {
          display: inline-block;
          border-width: 4px;
          border-color: #999 transparent transparent transparent;
          border-style: solid dashed dotted dashed;
          vertical-align: center;
          margin-left: 3px;
        }
      }
    }
  }
  .lo-se {
    height: 100px;
    .head-logo {
      width: 445px;
      height: 100%;
      float: left;
      .logo {
        float: left;
        width: 160px;
        height: 100%;
        margin-left: -20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .head-vip {
        width: 304px;
        float: right;
        height: 100%;
        background-image: url("https://shop.vipstatic.com/img/common/header/sprites-hash-b45bfef8.png?9e581dc2");
      }
    }
    .head-ser {
      width: 600px;
      height: 100%;
      float: right;
      .search-cat {
        width: 100%;
        height: 32px;
        margin-top: 30px;
        .search-so {
          float: left;
          width: 449px;
          height: 100%;
          border: 2px solid #fa2a83;
          border-radius: 2px;
          background-color: #fff;
          input {
            width: 365px;
            margin: 8px 10px;
            outline: none;
            border: none;
          }
          a {
            display: block;
            float: right;
            width: 56px;
            height: 100%;
            background: #fa2a83;
            span {
              display: block;
              width: 19px;
              height: 22px;
              margin: 6px 16px;
              background-image: url("https://shop.vipstatic.com/img/common/header/sprites-hash-b45bfef8.png?9e581dc2");
              background-position: -72px -208px;
            }
          }
        }
        .shopcat {
          position: relative;
          width: 97px;
          height: 100%;
          border: 1px solid #ccc;
          background-color: #f6f7f9;
          border-radius: 2px;
          cursor: pointer;
          float: right;
          .cat-lo {
            position: absolute;
            display: block;
            width: 12px;
            height: 17px;
            background: url("https://shop.vipstatic.com/img/common/header/sprites-hash-b45bfef8.png?9e581dc2");
            background-position: -114px -208px;
            top: 8px;
            left: 8px;
          }
          .cat-txt {
            position: absolute;
            left: 24px;
            line-height: 32px;
            font-size: 13px;
            color: #333;
          }
          .cat-num {
            position: absolute;
            top: 8px;
            right: 3px;
            z-index: 1;
            border-radius: 8px;
            height: 16px;
            width: 24px;
            line-height: 16px;
            color: #fff;
            text-align: center;
            background-color: #f00581;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .keywordlist {
        width: 100%;
        margin-top: 3px;
        float: left;
        a {
          position: relative;
          color: #f10180;
          font-size: 12px;
          margin-right: 10px;
          &:nth-child(n + 2)::before {
            content: "";
            position: absolute;
            left: -8px;
            top: 2px;
            width: 2px;
            height: 12px;
            background: #ccc;
          }
        }
      }
    }
  }
}
</style>