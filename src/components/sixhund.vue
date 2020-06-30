<template>
<div class="glo">
  <div class="sixhund">
    <div class="loaded"></div>
    <ul class="women-list">
      <li class="w-wear" v-for="(item, index) in shopList" :key="index" @click="shopexplain(item.brandStoreId, item.goodsId)">
        <a :href="href" target="_blank">
          <div class="pic">
            <img
              :src="item.goodsImageTags.image5.image"
              alt
            />
          </div>
          <div class="brand-logo">
            <span>{{item.goodsPriceTag.pricePrefix}}</span>
            <span>￥</span>
            <span>{{item.goodsPriceTag.salePrice}}</span>
          </div>
          <div class="old-price">
            <span>
              <i>￥</i>{{item.goodsPriceTag.marketPrice}}
            </span>
            <span>{{item.goodsPriceTag.discount}}</span>
          </div>
          <div class="explain">{{item.goodsName}}</div>
          <a class="brand-rush">立即抢购</a>
        </a>
      </li>
    </ul>
  </div>
  <footers></footers>
  </div>
</template>

<script>
import footers from '@/components/footer'
export default {
  components:{
    footers
  },
  data() {
    return {
       shopList: [],
       href:''
    };
  },
  created() {
    this.wearlist();
  },
  methods: {
    wearlist() {
      this.$axios.get("/").then((res, err) => {
        this.shopList = res.data.data.items
      });
    },
    // 详情页
    shopexplain(brandid, goodid){
      this.href = `https://detail.vip.com/detail-${brandid}-${goodid}.html`
    }
  }
};
</script>

<style lang="scss" scoped>
.glo {
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
  background: #DB1B64;
}
.sixhund {
  width: 1010px;
  height: auto;
  margin: 0 auto;
  .loaded {
    height: 100px;
    margin-bottom: 20px;
    background: url("https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/06/18/151/ba052ee9de34b87bac19aa4a381e5cac.png")
      no-repeat center;
  }
  .women-list {
    display: flex;
    flex-wrap: wrap;
    .w-wear {
      margin: 0 8px 16px 8px;
      position: relative;
      width: 234px;
      height: 460px;
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
        height: 294px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .brand-logo {
        width: 100%;
        height: 31px;
        background: linear-gradient(155deg, #f10180, #f8223a 52%, #fe3b07);
        span:first-child {
          padding-left: 15px;
        }
        span:nth-child(-n + 2) {
          color: #fff;
          font-size: 15px;
          line-height: 30px;
        }
        span:nth-child(3) {
          color: #fff;
          font-weight: 600;
          font-size: 22px;
          line-height: 31px;
        }
      }
      .old-price {
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
        color: #999;
        span:first-child {
          text-decoration: line-through;
          i {
            padding: 0;
            letter-spacing: -4px;
          }
        }
        span:last-child {
          padding-left: 5px;
        }
      }
      .explain {
        height: 35px;
        margin: 0 15px;
        font-size: 12px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 16px;
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