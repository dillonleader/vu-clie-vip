<template>
  <div class="cray">
    <div
      class="bg"
      style="background:url('https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/06/19/177/545c6901c5d03a3bd0101c7f43531ae2.jpg')"
    ></div>
    <div class="inbox">
      <div
        class="major"
        :style="{backgroundImage:'url('+this.suitsList[this.suitsList.length-1].lightArtImage.imageUrl+')'}"
      ></div>
      <div class="ltart-flow">
        <div class="flow-item">
          <a href>
            <img />
            <div class="lart-item">
              <img
                src="https://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/4fc6f3c68d62413d8d58f84a0a011df4/10005949/black_160x80_90.png!75.webp"
              />
              <span>香影</span>
            </div>
          </a>
        </div>
      </div>
      <div
        class="major"
        style="background-image: url('https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/01/17/90/e381de83792aab6b2e7bf6b903473802.png')"
      ></div>
      <div class="mst-list">
        <div class="mst-item" v-for="(item, index) in brandList" :key="index">
          <a
            :href="`https://list.vip.com/${item.brand.brand_id}.html?f=brand`"
            target="_blank"
            :title="item.brand.brand_name"
          >
            <div class="mst-brand">
              <img :src="item.brand.pc_brand_image" />
            </div>
          </a>
          <div class="listsale-product">
            <a
              :href="`https://list.vip.com/${item.brand.brand_id}.html?f=brand&extra_product_id=${items.product_id}`"
              target="_blank"
              class="prduct-a"
              v-for="(items, index) in item.products.slice(0,3)"
              :key="index"
              :title="item.brand.brand_name"
            >
              <img :src="items.square_image" />
              <div class="product-item">
                <span class="falling">
                  <i>￥</i>
                  <em>{{ items.promotion_price }}</em>
                </span>
                <span class="market">
                  <i>￥</i>
                  <em>{{ items.market_price }}</em>
                </span>
                <span class="discount">{{ items.discount }}折起</span>
              </div>
            </a>
          </div>
          <div class="list-names">
            <div class="left-item">
              <span class="salezk">
                <span>3</span>
                <span>折封顶</span>
              </span>
              <span class="name">{{ item.brand.brand_name }}</span>
            </div>
          </div>
        </div>
        <div style="clear:both"></div>
      </div>
      <div class="good">
        <div class="good-img">
          <img :src="this.image[0].image.imageUrl"/>
          <div class="good-out">
            <div class="good-recom">
              <img v-for="(item, index) in image1" :key="index" :src="item.image1.imageUrl" />
            </div>
            <div class="txt">
              <span v-for="(item, index) in result" :key="index">{{ item.text.text }}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="major"
        style="background-image: url('https://a.vpimg4.com/upload/upimg2/u/eb67b87ea15da053a656bd263692be21.png')"
      ></div>
      <div class="mst-list">
        <div class="mst-item" v-for="(item, index) in elevator" :key="index">
          <a
            :href="`https://list.vip.com/${item.brand.brand_id}.html?f=brand`"
            target="_blank"
            :title="item.brand.brand_name"
          >
            <div class="mst-brand">
              <img :src="item.brand.pc_brand_image" />
            </div>
          </a>
          <div class="list-names">
            <div class="left-item">
              <span class="salezk">
                <span>3</span>
                <span>折封顶</span>
              </span>
              <span class="name">{{ item.brand.brand_name }}</span>
            </div>
          </div>
        </div>
        <div style="clear:both"></div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
import footers from "@/components/footer";
export default {
  components: {
    footers
  },
  data() {
    return {
      suitsList: [],
      brandList: [],
      elevator: [],
      goodRecommList: [],
      result: [],
      image1: [],
      image: [],
      pageSize: 16,
    };
  },
  mounted() {
    this.getSuits(), this.getBrand(), this.getElevator(), this.getGoodRecomm();
  },
  methods: {
    // 大牌疯抢
    getSuits() {
      this.$axios.get("suit").then((res, err) => {
        this.suitsList =
          res.data.data[0].content.resourceGroupList[0].resourceList;
        console.log(this.suitsList);
      });
    },
    // 品牌特买
    getBrand() {
      this.$axios.get("brand/" + this.pageSize).then((res, err) => {
        if (res.status === 200) {
          this.brandList = res.data.data.arrival.first_page_recom_brands;
        }
      });
    },
    // 更多推荐
    getElevator() {
      this.$axios.get("elevator").then((res, err) => {
        if (res.status === 200) {
          this.elevator = res.data.data.brands;
        }
      });
    },
    // 好物推荐
    getGoodRecomm() {
      this.$axios.get("goodRecomm").then((res, err) => {
        if (res.status === 200) {
          this.goodRecommList =
            res.data.data[0].content.resourceGroupList[0].resourceList;
          let list = this.goodRecommList;
          for (var i = 0; i < list.length; i++) {
            if (list[i].lightArtLabel !== undefined) {
              this.result.push({
                text: list[i].lightArtLabel
              });
            } else if (list[i].lightArtImage.scaleType == "center") {
              this.image1.push({
                image1: list[i].lightArtImage
              });
            } else {
              this.image.push({
                image: list[i].lightArtImage
              });
            }
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cray {
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
  background: #fafafa;
  overflow-x: hidden;
  .bg {
    width: 100%;
    height: 240px;
  }
  .inbox {
    width: 1170px;
    margin: 0 auto;
    .major {
      width: 100%;
      height: 150px;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .ltart-flow {
      display: flex;
      justify-content: space-between;
      .flow-item {
        position: relative;
        width: 280px;
        height: 138px;
        border-radius: 3px;
        & > a > img {
          width: 100%;
          height: 100%;
        }
        .lart-item {
          position: absolute;
          width: 120px;
          height: 80px;
          background: #fff;
          top: 25px;
          left: 20px;
          text-align: center;
          img {
            display: block;
            width: 80px;
            height: 40px;
            margin: 7px auto;
          }
          span {
            padding-top: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .mst-list {
      width: 100%;
      height: auto;
      .mst-item {
        margin-top: 30px;
        float: left;
        position: relative;
        width: 570px;
        box-shadow: 5px 5px 20px 5px #e6e6e6;
        background: #fff;
        height: auto;
        &:nth-child(2n) {
          margin-left: 30px;
        }
        & > a {
          display: block;
          width: 100%;
          height: 273px;
        }
        .mst-brand {
          position: absolute;
          width: 100%;
          height: 273px;
          img:first-child {
            width: 100%;
            position: absolute;
            top: 0;
          }
          img:last-child {
            width: 100%;
            height: 100%;
          }
        }
        .listsale-product {
          .prduct-a {
            position: relative;
            display: block;
            float: left;
            margin-left: 10px;
            margin-top: 10px;
            width: 176px;
            height: 230px;
            img {
              width: 100%;
              height: 100%;
              @keyframes bind {
                0% {
                  opacity: 1;
                }
                50% {
                  opacity: 0.7;
                }
                100% {
                  opacity: 1;
                }
              }
              &:hover {
                animation: bind 1s;
              }
            }
            .product-item {
              position: absolute;
              width: 100%;
              height: 28px;
              background: hsla(0, 0%, 100%, 0.8);
              bottom: 0;
              line-height: 30px;
              .falling {
                color: #f10582;
                font-size: 13px;
                padding-left: 10px;
                i {
                  letter-spacing: -3px;
                }
                em {
                  font-weight: 600;
                  font-size: 16px;
                }
              }
              .market {
                font-size: 12px;
                color: #4d4d4d;
                i {
                  letter-spacing: -3px;
                }
              }
              .discount {
                font-size: 12px;
                color: #4d4d4d;
              }
            }
          }
        }
        .list-names {
          .left-item {
            float: left;
            padding: 8px 0 7px 7px;
            .salezk {
              span:first-child {
                color: #f10582;
                font-size: 24px;
                font-weight: 700;
                letter-spacing: -3px;
              }
              span:last-child {
                color: #666;
                font-size: 12px;
              }
            }
            .name {
              color: #666;
              font-size: 12px;
            }
          }
          .right-item {
            float: right;
            padding: 12px 0;
            padding-right: 10px;
            i {
              margin-right: 5px;
              width: 16px;
              height: 16px;
              display: inline-block;
              vertical-align: top;
              background: url("https://h2.vipstatic.com/shop.vipstatic.com/img/te/index_v4/index_imgs-hash-1724ef6c.png?ed94a9d0=")
                no-repeat -50px 0;
            }
            span {
              color: #666;
              font-size: 12px;
              &:last-child {
                margin-left: -3px;
              }
            }
          }
        }
      }
      .good {
        width: 100%;
        height: auto;
        position: relative;
        .ltart-item {
          position: absolute;
          width: 100%;
          img {
          }
        }
      }
    }
    .good {
      width: 100%;
      height: 245px;
      margin-top: 50px;
      .good-img {
        position: relative;
        width: 100%;
        height: 245px;
        > img {
          position: absolute;
          width: 100%;
          height: 245px;
          width: 100%;
          height: 100%;
        }
        .good-out {
          position: absolute;
          width: 100%;
          height: 200px;
          top: 50px;
          background: #fff;
          cursor: pointer;
          .good-recom {
            position: absolute;
            display: flex;
            justify-content: space-between;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            width: 95%;
            overflow: hidden;
            > img {
              width: 103px;
              height: 103px;
              border-radius: 50%;
              border: 1px solid #eee;
            }
          }
          .txt {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 95%;
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            span {
              display: block;
              width: 103px;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>