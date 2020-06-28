<template>
  <div class="footer">
    <div class="foot-item">
      <div class="footer-vip"></div>
      <div class="footer-infor-link">
        <a href="https://www.vip.com" target="_blank">关于我们</a>
        <a href="https://www.vip.com" target="_blank">媒体报道</a>
        <a href="https://www.vip.com" target="_blank">品牌招商</a>
        <a href="https://www.vip.com" target="_blank">隐私条款</a>
        <a href="https://www.vip.com" target="_blank">唯品诚聘</a>
        <a href="https://www.vip.com" target="_blank">联系我们</a>
      </div>
      <p>本站仅限于学习交流技术使用 版权所有 广州唯品会电子商务有限公司</p>
      <p><a href="https://www.dillonl.cn" title="https://www.dillonl.cn" target="_blank">个人博客</a><a href="http://www.dillonl.cn" title="http://www.dillonl.cn"  target="_blank">个人学习笔记</a></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
//   position: absolute;
  left: 0;
  bottom: 0;
  margin-top: 20px;
  width: 100%;
  height: auto;
  clear: both;
  overflow: hidden;
  line-height: 22px;
  padding-top: 0;
  border-top: 1px solid #ebebeb;
  background-color: #fcfcfc;
  color: #4d4d4d;
  .foot-item {
    width: 960px;
    height: auto;
    margin: 0 auto;
    margin-top: 50px;
    .footer-vip {
      width: 100%;
      height: 120px;
      background: url("https://shop.vipstatic.com/img/common/footer_common_20200225-hash-de601308.png?2f451356")
        no-repeat;
    }
    .footer-infor-link {
      width: 100%;
      height: 30px;
      background-color: #d7237e;
      line-height: 30px;
      text-align: center;
      a {
        font-size: 12px;
        color: #fff;
        position: relative;
        padding-left: 10px;
        &::after{
            content: '';
            position: absolute;
            width: 2px;
            height: 12px;
            background: #fff;
            top: 3px;
            right: -8px;
        }
        &:last-child::after{
            background: none;
        }
      }
    }
    p{
        font-size: 12px;
        color: #999;
        padding: 10px 0;
        text-align: center;
        a{
            padding-left: 10px;
            &:hover{
                color: #d7237e;
            }
        }
    }
  }
}
</style>