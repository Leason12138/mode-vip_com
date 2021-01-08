<template>
  <!-- <div > -->
  <router-link class="FeaturedNav" to="Shoper">
    <img class="mid" :src="item.midURL" alt="" />
    <div class="bottom">
      <img class="logo" :src="item.logo" alt="" />
      <span class="word">{{ item.word }}</span>
    </div>
  </router-link>
  <!-- </div> -->
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.FeaturedNav {
  width: 28%;
  height: 100%;
  background-color: #fedcdf;
  border-radius: 10px;
  position: relative;
  .mid {
    width: 100%;
  }
  .bottom {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-image: url("https://h2.appsimg.com/b.appsimg.com/upload/momin/2021/01/04/106/1609753288426_228x316_90.png");
    background-position: center center;
    background-size: cover;
    .logo {
      width: 50%;
      position: absolute;
      bottom: 20%;
      left: 0;
      right: 0;
      margin: auto;
    }
    .word {
      width: 100%;
      height: 25px;
      color: #f03867;
      position: absolute;
      font-size: 14px;
      bottom: 0;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
  }
}
</style>