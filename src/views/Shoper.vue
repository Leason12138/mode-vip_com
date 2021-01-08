<template>
  <div v-if="branddata.brand" @click.prevent>
    <van-nav-bar
      :title="branddata.brand.brandName"
      class="shoper"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <van-icon name="arrow-left" size="23" color="#555" />
      </template>
      <template #right>
        <van-icon name="wap-home-o" size="25" color="#555" />
      </template>
    </van-nav-bar>

    <div class="bgimagebox">
      <div
        :style="{ backgroundImage: `url(${branddata.brand.headBgImg})` }"
        class="bgimage"
      ></div>
      <div class="logobox">
        <div
          :style="{
            backgroundImage: `url(${logo})`,
          }"
          class="logo"
        ></div>
      </div>
      <div class="text">
        <p>{{ name }}</p>
        <p>{{ branddata.brand.brandName }}</p>
      </div>
      <div class="discount">
        <div
          class="discountlogo"
          :style="{
            backgroundImage: `url(${branddata.brand.activeTips[0].iconUrl})`,
          }"
        ></div>
        <div>{{ branddata.brand.activeTips[0].activeMsg }}</div>
      </div>
      <div class="stickybgt"></div>
    </div>
    <van-sticky class="sticky">
      <div class="bant-btn-box">
        <van-button class="vant-btn" type="default">价格</van-button>
        <van-button class="vant-btn" type="default">折扣</van-button>
        <van-button class="vant-btn" type="default">销量</van-button>
      </div>
    </van-sticky>

    <div class="main">
      <MainItem class="mainitem" v-for="item in 20" :key="item.id">
      </MainItem>
    </div>
  </div>
</template>

<script>
import MainItem from "../components/MainItem.vue";
export default {
  components: { MainItem },
  data: function () {
    return {
      branddata: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/");
    },
    scrollFn() {
      // return { scrollTop: "150px", isFixed: 0 };
    },
  },

  created() {
    this.axios.get("/ajax.json").then((res) => {
      this.branddata = res.data[this.$route.query.id].data;
      console.log(this.branddata.products);
    });
  },
  computed: {
    logo: function () {
      if (this.branddata.brand.mainBrandStore) {
        return this.branddata.brand.mainBrandStore.logo;
      } else {
        return this.branddata.brand.brandStoreLogo;
      }
    },
    name: function () {
      if (this.branddata.brand.mainBrandStore) {
        return this.branddata.brand.mainBrandStore.name;
      } else {
        return this.branddata.brand.brandStoreName;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bgimagebox {
  color: #fff;
  font-size: 14px;

  background-color: #ddd;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  max-width: 540px;
  height: 45vw;
  overflow: hidden;
  position: relative;
  .bgimage {
    background-color: #ddd;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    max-width: 540px;
    height: 45vw;
    position: relative;
    filter: blur(3px) brightness(70%);
  }
  .logobox {
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius: 4px;
    background-color: #fff;
    top: 20%;
    left: 20px;
    .logo {
      width: 80%;
      height: 80%;
      padding: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  .text {
    height: 48px;
    position: absolute;
    top: 12.5%;
    left: 20px;
    padding-left: 60px;
    p {
      text-align: left;
    }
  }
}
.discount {
  position: absolute;
  left: 20px;
  top: 62%;
  .discountlogo {
    width: 17px;
    height: 17px;
    background-size: contain;
    // background-color: #fff;
  }
  div {
    float: left;
    margin: 2px;
    height: 20px;
  }
}
.bant-btn-box {
  height: 40px;
  background-color: #fff;
  padding-bottom: 5px;
  // background-color: red;
  .vant-btn {
    border: 0;
    margin: 12.5px 0;
    height: auto;
    width: 33vw;
    font-size: 14px;
    border-left: 1px #ddd solid;
    &:first-child {
      border: 0;
    }
  
  }
}

.stickybgt {
  position: absolute;
  bottom:0 ;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  height: 17.5px;
  width: 100vw;
  max-width: 540px;
}
.main {
  background-color: #cecece;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>