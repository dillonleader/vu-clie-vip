<template>
  <div class="selected">
    <banner></banner>
    <div class="select-content">
      <div class="select-logo"></div>
      <div class="select-nav">
        <ul class="ul-item">
          <li
            v-for="(item, index) in shoesNavList.slice(0, shoesNavList.length-3)"
            :key="index"
            @click="getshoplist(item.ruleId)"
          >{{ item.ruleName }}</li>
          <li class="more">
            <span>更多</span>
            <span></span>
            <div class="hov-item">
              <div class="more-item">
                <div class="arrow"></div>
                <div
                @click="getshoplist(item.ruleId)"
                  class="tag-item"
                  v-for="(item, index) in shoesNavList.slice(shoesNavList.length-3, shoesNavList.length)"
                  :key="index"
                >{{ item.ruleName }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <ul class="item-list">
        <li class="w-wear" v-for="(item, index) in shoplist" :key="index" @click="shopexplain(item.brandStoreId, item.goodsId)">
          <a :href="href" target="_blank">
            <div class="pic">
              <img
                :src="item.goodsImageTags.image5.image"
                alt
              />
            </div>
            <div class="old-price">
              <span class="falling">
                <i>￥</i>
                <em>{{item.goodsPriceTag.salePrice}}</em>
              </span>
              <span class="market">
                <i>￥</i>
                <em>{{ item.goodsPriceTag.marketPrice }}</em>
              </span>
              <span class="discount">{{item.goodsPriceTag.discount}}</span>
            </div>
            <div class="tips">今早10点折后价¥299</div>
            <div class="explain">{{ item.goodsName }}</div>
            <a class="brand-rush">立即抢购</a>
          </a>
        </li>
      </ul>
    </div>
    <footers></footers>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";
import footers from "@/components/footer.vue";
export default {
  components: {
    banner,
    footers
  },
  data() {
    return {
      shoesNavList: [],
      shoplist:[],
      href:''
    };
  },
  mounted() {
    this.getdefaultlist()
    this.getSelectedNav();
    this.getshoplist()
  },
  methods: {
    // 导航列表
    getSelectedNav() {
      this.$axios.get("shoesnav").then((res, err) => {
        if (res.status === 200) {
          this.shoesNavList = res.data.data.ruleList;
        } else {
          console.log(err);
        }
      });
    },
    // 默认数据
    getdefaultlist(){
       this.$axios
        .get("navlist/53116029")
        .then((res, err) => {
          if (res.status === 200) {
            this.shoplist = res.data.data.items
          } else {
            console.log(err);
          }
        });
    },
    // 导航的 id
    getshoplist(id) {
      this.$axios
        .get("navlist/"+id)
        .then((res, err) => {
          if (res.status === 200) {
            this.shoplist = res.data.data.items
          } else {
            console.log(err);
          }
        });
        this.$router.push(id)
    },
    // 详情页
    shopexplain(brandid, goodid){
      this.href = `https://detail.vip.com/detail-${brandid}-${goodid}.html`
    }
  }
};
</script>

<style lang="scss" scoped>
.selected {
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
  background: #f1eee7;
  z-index: -1;
  .select-content {
    width: 1171px;
    margin: 0 auto;
    .select-logo {
      width: 100%;
      height: 106px;
      margin: 20px auto;
      background: url("https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/06/19/168/286f81f7330c9e80d54e6de3a4601f87.jpg")
        center top no-repeat;
    }
    .select-nav {
      width: 100%;
      height: 50px;
      background: #fff;
      box-shadow: 0 0 5px #ddd;
      border: 1px solid #eee;
      border-radius: 25px;
      margin: 5px 0;
      ul {
        li,
        .tag-item {
          -webkit-user-select: none;
          width: 96px;
          height: 20px;
          font-size: 14px;
          text-align: center;
          margin-top: 20px;
          color: #333;
          float: left;
          border-right: 1px solid #d8d8d8;
          float: left;
          cursor: pointer;
          &:hover {
            color: #f10180;
          }
        }
        .more {
          position: relative;
          border: none;
          & span:nth-child(2) {
            display: inline-block;
            width: 6px;
            height: 6px;
            border-right: 1px solid #333;
            border-bottom: 1px solid #333;
            transform: rotate(45deg);
            vertical-align: 4px;
            margin-left: 3px;
          }
          &:hover .hov-item {
            display: block;
          }
          .more-item,
          .arrow {
            background: #fff;
            box-shadow: 0 0 5px #ddd;
            border: 1px solid #eee;
            position: absolute;
          }
          .hov-item {
            position: absolute;
            width: 96px;
            height: 170px;
            display: none;
            z-index: 99;
            .more-item {
              width: 96px;
              height: auto;
              top: 25px;
              display: block;
              .arrow {
                border: none;
                box-shadow: none;
                top: -4px;
                right: 50px;
                width: 6px;
                height: 6px;
                transform: rotate(45deg);
                z-index: 2;
              }
              .tag-item {
                &:last-child {
                  margin-bottom: 10px;
                }
              }
            }
          }
        }
      }
    }
    .item-list {
      display: flex;
      flex-wrap: wrap;
      .w-wear {
        margin: 20px 15px 0 0;
        position: relative;
        width: 220px;
        height: 460px;
        background: #fff;
        border: 1px solid transparent;
        &:nth-child(5n) {
          margin: 20px 0 0;
        }
        &:hover {
          border: 1px solid #f10180;
        }
        &:hover .brand-rush {
          background: #f10180;
          color: #fff;
        }
        .pic {
          width: 100%;
          height: 273px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .brand-logo {
          width: 100%;
          height: 35px;
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
          .falling {
            font-weight: 700;
            color: #333;
            i {
              font-size: 16px;
              letter-spacing: -6px;
            }
            em {
              font-size: 24px;
            }
          }
          .market {
            padding-left: 5px;
            text-decoration: line-through;
            color: #999;
            i {
              font-size: 16px;
              letter-spacing: -6px;
            }
          }
          .discount {
            padding-left: 5px;
          }
        }
        .tips {
          line-height: 30px;
          color: #f10180;
          font-size: 14px;
          font-weight: 700;
          padding: 0 14px;
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
          position: absolute;
          bottom: 20px;
          display: block;
          border: 1px solid #f10180;
          border-radius: 2px;
          left: 50%;
          transform: translateX(-50%);
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
}
</style>