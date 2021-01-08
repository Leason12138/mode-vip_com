<template>
  <div id="app">
    <div v-show="$route.meta.isShowNav" class="top">
      <div class="seach">
        <div class="phome"></div>
        <div class="fakeipt">{{ sugitem.showWord }}</div>
        <div class="classes"></div>
      </div>
      <div class="tabs">
        <router-link
          :class="{ mytab: 1, active: this.$route.path == '/' }"
          to="/"
          >精选</router-link
        >
        <router-link
          :class="{ mytab: 1, active: this.$route.path == '/ThreeFold' }"
          to="ThreeFold"
          >3折快抢</router-link
        >
        <router-link
          :class="{ mytab: 1, active: this.$route.path == '/VipQuicklyRob' }"
          to="VipQuicklyRob"
          >唯品快抢</router-link
        >
        <router-link
          :class="{ mytab: 1, active: this.$route.path == '/VipAoLai' }"
          to="VipAoLai"
          >唯品奥莱</router-link
        >
        <router-link
          :class="{ mytab: 1, active: this.$route.path == '/Clearance' }"
          to="Clearance"
          >清仓</router-link
        >
      </div>
    </div>
    <div
      :class="{
        mainview: $route.meta.isShowNav,
      }"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Search from './components/Search.vue';
export default {
  data: function () {
    return {
      suglist: [],
      sugitem: "",
      sugidx: 0,
    };
  },
  watch: {
    $route: function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  name: "app",
  created() {
    this.axios
      .get(
        " https://mapi-rp.vip.com/vips-mobile/rest/shopping/wap/search/entryword/list/v1?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104101&province_id=104104&mars_cid=1598252215221_c83cf8a9ddb907895d6f954fe7385ea9&mobile_channel=mobiles-%7C%7C&standby_id=nature&gPlatform=WAP&channelId=1&mvip=true&_=1609846844"
      )
      .then((res) => {
        this.suglist = res.data.data.list;
      })
      .then(() => {
        this.sugitem = this.suglist[0];
        setInterval(() => {
          if (this.sugidx < this.suglist.length - 1 && this.sugidx >= 0) {
            this.sugidx += 1;
          } else {
            this.sugidx = 0;
          }
          this.sugitem = this.suglist[this.sugidx];
        }, 100);
      });
  },
  mounted() {},
  // components: {Search},
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  .top {
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: white;
    .seach {
      height: 42px;
      width: 100vw;
      // background-color: skyblue;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 5px 0;
      .phome,
      .classes {
        width: 25px;
        height: 25px;
        background-image: url("./assets/personhome.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      .fakeipt {
        width: 56vw;
        background-color: #efefef;
        border: 2px #e0e0e0 solid;
        border-radius: 20px;
        height: 32px;
        color: #bbb;
        line-height: 32px;
        text-align: left;
        padding: 0 20px;
      }
      .classes {
        background-image: url("./assets/classes.png");
      }
    }
    .tabs {
      height: 32px;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #eeeeee;
      padding: 10px 0 0 0;
      margin: 0;
      .mytab {
        padding: 0;
        margin: 0;
        color: #666;
      }
      .active {
        border-bottom: 3px solid #db0074;
        color: #db0074;
      }
    }
  }
  .mainview {
    margin-top: 92px;
  }
}
</style>
