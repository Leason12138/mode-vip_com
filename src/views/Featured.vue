<template>
  <div class="featured">
    <div class="bnSpecials">
      <div class="navbox">
        <FeaturedNav
          v-for="(item, index) in navdate.showarr"
          :item="item"
          :key="index"
        >
        </FeaturedNav>
      </div>
    </div>
    <div class="navbar"></div>
    <div class="classes">
      <ClassItem
        v-for="(item, index) in classesData"
        :item="item"
        :key="index + 10"
      >
      </ClassItem>
    </div>
    <div class="goodthingoutbox">
      <div class="goodthing">
        <div class="goodthing-box">C位爆款 发现好货</div>
        <div class="goodthing-box"></div>
      </div>
    </div>
    <div class="special-sell">
      <div class="text">今日特卖 · 10点上新</div>
      <ShowSectionItem
        v-for="(item, index) in showSectionList"
        :item="item"
        :key="index + 20"
      >
      </ShowSectionItem>

      <LazyIntoOfFeature
        v-for="item in ajaxgetarr"
        :item="item"
        :key="item.slice(667)"
      >
      </LazyIntoOfFeature>
    </div>
  </div>
</template>

<script>
import FeaturedNav from "../components/FeaturedNav.vue";
import ClassItem from "../components/ClassItem.vue";
import ShowSectionItem from "../components/ShowSectionItem";
import LazyIntoOfFeature from "../components/LazyIntoOfFeature";
// @ is an alias to /src

export default {
  components: { FeaturedNav, ClassItem, ShowSectionItem, LazyIntoOfFeature },
  name: "Featured",
  data: function () {
    return {
      navdate: {
        bigback:
          "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/12/31/75/1609404885624.jpg",
        showarr: [
          {
            bg1:
              "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/09/08/168/1599557699768.png",
            midURL:
              "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/12/16/190/1608115121053.png",
            img:
              "http://h2.appsimg.com/b.appsimg.com/upload/momin/2021/01/04/106/1609753288426.png",
            logo:
              "http://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/3ccd836975e4471992b1dd58c25145bf/10000630/primary.png",
            word: "Nike6.5折抢",
          },
          {
            word: "3.9折抢阿迪达斯",
            bg1:
              "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/09/08/168/1599557699768.png",
            midURL:
              "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/12/16/1/1608115233696.png",
            img:
              "http://h2.appsimg.com/b.appsimg.com/upload/momin/2021/01/04/18/1609753295074.png",
            logo:
              "http://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/LOGO/10000223/5162bcff57384f3d8d553cf3277130ae/primary.png",
          },
          {
            word: "婴幼棉服89元抢",
            bg1:
              "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/09/08/168/1599557699768.png",
            midURL:
              "http://h2.appsimg.com/b.appsimg.com/upload/momin/2021/01/05/48/1609827953385.png",
            img:
              "http://h2.appsimg.com/b.appsimg.com/upload/momin/2021/01/04/59/1609753300208.png",
            logo:
              "http://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/475a1dfc79c748819f8fd3e9c7ce5dab/10004119/primary.png",
          },
        ],
      },
      classesData: [
        {
          logoURL:
            "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/10/13/164/1602583336631.png",
          word: "女装",
        },
        {
          logoURL:
            "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/10/13/82/1602583343050.png",
          word: "男装",
        },
        {
          logoURL:
            "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/10/13/158/1602583347554.png",
          word: "鞋包",
        },
        {
          logoURL:
            "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/10/13/196/1602583354939.png",
          word: "内衣",
        },
        {
          logoURL:
            "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/10/13/14/1602583360056.png",
          word: "保暖馆",
        },
        {
          logoURL:
            "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/10/13/164/1602583385566.png",
          word: "运动户外",
        },
        {
          logoURL:
            "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/10/13/94/1602583378968.png",
          word: "母婴童装",
        },
        {
          logoURL:
            "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/10/13/108/1602583374259.png",
          word: "美妆个护",
        },
        {
          logoURL:
            "http://h2.appsimg.com/b.appsimg.com/upload/momin/2020/10/13/125/1602583371114.png",
          word: "手表配饰",
        },
        {
          logoURL:
            "http://h2.appsimg.com/b.appsimg.com/upload/momin/2021/01/04/31/1609744912333.png",
          word: "清仓",
        },
      ],
      showSectionList: [
        {
          data: {
            brand: {
              image:
                "https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2020/12/30/199/ias_b6827191e0fbd9d32567d22f44b4a2b7_1135x545_85.jpg",
              title: "耐克Nike运动户外专场",
              discount: "1.8折起",
              brand_id:'0'
            },
          },
        },
        {
          data: {
            brand: {
              image:
               'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2020/09/04/113/ias_b4a06a643a57d9b78727c7a901705db3_1135x545_85.jpg',
              title: "苹果Apple数码电子专场",
              discount: "3.1折起",
              brand_id:'1'
            },
          },
        },
        {
          data: {
            brand: {
              image:
               'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2020/09/04/133/ias_f4eaec9fc9133cfae152c694e4b57983_1135x545_85.jpg',
              title: "欧莱雅Loreal美妆个护专场",
              discount: "4.6折起",
              brand_id:'2'
            },
          },
        },
      ],
      ajaxgetarr: [
        "https://mapi.vip.com/vips-mobile/rest/layout/h5/channel/data?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104101&province_id=104104&mars_cid=1598252215221_c83cf8a9ddb907895d6f954fe7385ea9&mobile_channel=mobiles-%7C%7C&standby_id=nature&wap_consumer=A1&lightart_version=1.3.0&width=640&height=460&net=wifi&client=wap&changeResolution=2&menu_code=bigbshouye&channel_name=%E7%B2%BE%E9%80%89&load_more_token=eyJjaGFubmVsX2lkIjoiMTAyNCIsInRzaWZ0IjoiMCIsImJyYW5kX29mZnNldCI6IjMwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiI1IiwidG9waWNfZ3JvdXAiOiIwIiwid2VpeGluQnJhbmRUaHJlZSI6IjAifQ%3D%3D&_=1609934017",
        "https://mapi.vip.com/vips-mobile/rest/layout/h5/channel/data?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104101&province_id=104104&mars_cid=1598252215221_c83cf8a9ddb907895d6f954fe7385ea9&mobile_channel=mobiles-%7C%7C&standby_id=nature&wap_consumer=A1&lightart_version=1.3.0&width=640&height=460&net=wifi&client=wap&changeResolution=2&menu_code=bigbshouye&channel_name=%E7%B2%BE%E9%80%89&load_more_token=eyJjaGFubmVsX2lkIjoiMTAyNCIsInRzaWZ0IjoiMCIsImJyYW5kX29mZnNldCI6IjMwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiI1IiwidG9waWNfZ3JvdXAiOiIwIiwid2VpeGluQnJhbmRUaHJlZSI6IjAifQ%3D%3D&_=1609934069",
        "https://mapi.vip.com/vips-mobile/rest/layout/h5/channel/data?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104101&province_id=104104&mars_cid=1598252215221_c83cf8a9ddb907895d6f954fe7385ea9&mobile_channel=mobiles-%7C%7C&standby_id=nature&wap_consumer=A1&lightart_version=1.3.0&width=640&height=460&net=wifi&client=wap&changeResolution=2&menu_code=bigbshouye&channel_name=%E7%B2%BE%E9%80%89&load_more_token=eyJjaGFubmVsX2lkIjoiMTAyNCIsInRzaWZ0IjoiMCIsImJyYW5kX29mZnNldCI6IjYwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiI1IiwidG9waWNfZ3JvdXAiOiIwIiwid2VpeGluQnJhbmRUaHJlZSI6IjAifQ%3D%3D&_=1609934079",
        "https://mapi.vip.com/vips-mobile/rest/layout/h5/channel/data?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104101&province_id=104104&mars_cid=1598252215221_c83cf8a9ddb907895d6f954fe7385ea9&mobile_channel=mobiles-%7C%7C&standby_id=nature&wap_consumer=A1&lightart_version=1.3.0&width=640&height=460&net=wifi&client=wap&changeResolution=2&menu_code=bigbshouye&channel_name=%E7%B2%BE%E9%80%89&load_more_token=eyJjaGFubmVsX2lkIjoiMTAyNCIsInRzaWZ0IjoiMCIsImJyYW5kX29mZnNldCI6IjkwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiI1IiwidG9waWNfZ3JvdXAiOiIwIiwid2VpeGluQnJhbmRUaHJlZSI6IjAifQ%3D%3D&_=1609934088",
        "https://mapi.vip.com/vips-mobile/rest/layout/h5/channel/data?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104101&province_id=104104&mars_cid=1598252215221_c83cf8a9ddb907895d6f954fe7385ea9&mobile_channel=mobiles-%7C%7C&standby_id=nature&wap_consumer=A1&lightart_version=1.3.0&width=640&height=460&net=wifi&client=wap&changeResolution=2&menu_code=bigbshouye&channel_name=%E7%B2%BE%E9%80%89&load_more_token=eyJjaGFubmVsX2lkIjoiMTAyNCIsInRzaWZ0IjoiMCIsImJyYW5kX29mZnNldCI6IjEyMCIsImJyYW5kX3JlZmVyX2luZGV4IjoiNSIsInRvcGljX2dyb3VwIjoiMCIsIndlaXhpbkJyYW5kVGhyZWUiOiIwIn0%3D&_=1609934099",
        "https://mapi.vip.com/vips-mobile/rest/layout/h5/channel/data?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104101&province_id=104104&mars_cid=1598252215221_c83cf8a9ddb907895d6f954fe7385ea9&mobile_channel=mobiles-%7C%7C&standby_id=nature&wap_consumer=A1&lightart_version=1.3.0&width=640&height=460&net=wifi&client=wap&changeResolution=2&menu_code=bigbshouye&channel_name=%E7%B2%BE%E9%80%89&load_more_token=eyJjaGFubmVsX2lkIjoiMTAyNCIsInRzaWZ0IjoiMCIsImJyYW5kX29mZnNldCI6IjE1MCIsImJyYW5kX3JlZmVyX2luZGV4IjoiNSIsInRvcGljX2dyb3VwIjoiMCIsIndlaXhpbkJyYW5kVGhyZWUiOiIwIn0%3D&_=1609934109",
        "https://mapi.vip.com/vips-mobile/rest/layout/h5/channel/data?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104101&province_id=104104&mars_cid=1598252215221_c83cf8a9ddb907895d6f954fe7385ea9&mobile_channel=mobiles-%7C%7C&standby_id=nature&wap_consumer=A1&lightart_version=1.3.0&width=640&height=460&net=wifi&client=wap&changeResolution=2&menu_code=bigbshouye&channel_name=%E7%B2%BE%E9%80%89&load_more_token=eyJjaGFubmVsX2lkIjoiMTAyNCIsInRzaWZ0IjoiMCIsImJyYW5kX29mZnNldCI6IjE4MCIsImJyYW5kX3JlZmVyX2luZGV4IjoiNSIsInRvcGljX2dyb3VwIjoiMCIsIndlaXhpbkJyYW5kVGhyZWUiOiIwIn0%3D&_=1609934118",
        "https://mapi.vip.com/vips-mobile/rest/layout/h5/channel/data?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104101&province_id=104104&mars_cid=1598252215221_c83cf8a9ddb907895d6f954fe7385ea9&mobile_channel=mobiles-%7C%7C&standby_id=nature&wap_consumer=A1&lightart_version=1.3.0&width=640&height=460&net=wifi&client=wap&changeResolution=2&menu_code=bigbshouye&channel_name=%E7%B2%BE%E9%80%89&load_more_token=eyJjaGFubmVsX2lkIjoiMTAyNCIsInRzaWZ0IjoiMCIsImJyYW5kX29mZnNldCI6IjIxMCIsImJyYW5kX3JlZmVyX2luZGV4IjoiNSIsInRvcGljX2dyb3VwIjoiMCIsIndlaXhpbkJyYW5kVGhyZWUiOiIwIn0%3D&_=1609934127",
        "https://mapi.vip.com/vips-mobile/rest/layout/h5/channel/data?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104101&province_id=104104&mars_cid=1598252215221_c83cf8a9ddb907895d6f954fe7385ea9&mobile_channel=mobiles-%7C%7C&standby_id=nature&wap_consumer=A1&lightart_version=1.3.0&width=640&height=460&net=wifi&client=wap&changeResolution=2&menu_code=bigbshouye&channel_name=%E7%B2%BE%E9%80%89&load_more_token=eyJjaGFubmVsX2lkIjoiMTAyNCIsInRzaWZ0IjoiMCIsImJyYW5kX29mZnNldCI6IjI0MCIsImJyYW5kX3JlZmVyX2luZGV4IjoiNSIsInRvcGljX2dyb3VwIjoiMCIsIndlaXhpbkJyYW5kVGhyZWUiOiIwIn0%3D&_=1609934137",
        "https://mapi.vip.com/vips-mobile/rest/layout/h5/channel/data?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104101&province_id=104104&mars_cid=1598252215221_c83cf8a9ddb907895d6f954fe7385ea9&mobile_channel=mobiles-%7C%7C&standby_id=nature&wap_consumer=A1&lightart_version=1.3.0&width=640&height=460&net=wifi&client=wap&changeResolution=2&menu_code=bigbshouye&channel_name=%E7%B2%BE%E9%80%89&load_more_token=eyJjaGFubmVsX2lkIjoiMTAyNCIsInRzaWZ0IjoiMCIsImJyYW5kX29mZnNldCI6IjI3MCIsImJyYW5kX3JlZmVyX2luZGV4IjoiNSIsInRvcGljX2dyb3VwIjoiMCIsIndlaXhpbkJyYW5kVGhyZWUiOiIwIn0%3D&_=1609934147",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.bnSpecials {
  height: 69vw;
  max-height: 372.59px;
  width: 100vw;
  background-image: url("https://h2.appsimg.com/b.appsimg.com/upload/momin/2020/12/31/75/1609404885624_750x520_90.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 0 0 10px 10px;
  position: relative;
  .navbox {
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 4%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
  }
}
.navbar {
  height: 9.34vw;
  width: 100vw;
  max-height: 51px;
  background: url("https://h2.appsimg.com/b.appsimg.com/upload/momin/2021/01/04/32/1609744942644_750x70_90.jpg")
    center center / cover no-repeat;
}
.classes {
  width: 100vw;
  height: 45vw;
  max-height: 243px;
  background-image: url("http://h2.appsimg.com/b.appsimg.com/upload/momin/2021/01/04/83/1609744933764.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 0 0 10px 10px;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.goodthingoutbox {
  width: 100vw;
  max-width: 540px;
  height: 80vw;
  max-height: 432px;
  background: linear-gradient(to bottom, #fff, #eee);
  .goodthing {
    width: 96vw;
    height: 80vw;
    margin: 0 auto;
    background-image: url("http://h2.appsimg.com/b.appsimg.com/upload/momin/2021/01/03/197/1609676031256.png");
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // background-color: #333;
    .goodthing-box {
      width: 100%;
      &:nth-child(1) {
        height: 12%;
        color: #f2f7fb;
        margin-top: 4%;
        font-size: 17px;
      }
      &:nth-child(2) {
        height: 80%;
        background-image: url("../assets/goodthing.jpg");
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
}
.special-sell {
  background-color: #eee;
  .text {
    height: 60px;
    line-height: 60px;
    position: relative;
    &::before {
      content: "";
      display: block;
      background-color: #000;
      width: 26%;
      height: 0.1px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    &::after {
      content: "";
      display: block;
      background-color: #000;
      width: 26%;
      height: 0.1px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}
</style>