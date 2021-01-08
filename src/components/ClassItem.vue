<template>
    <div class="classitem">
      <div class="glass"></div>
      <div
        class="logo"
        :style="{ backgroundImage: `url(${item.logoURL})` }"
      ></div>
      <div class="text">
        {{ item.word }}
      </div>
 </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>



.classitem {
  width: 18vw;
  max-width: 100px;
  //   background-color: #00000066;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .logo {
    width: 12vw;
    max-width: 68px;
    height: 12vw;
    max-height: 68px;
    border-radius: 50%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .text {
    width: 100%;
    height: 20%;
    font-size: 13px;
    text-align: center;
    // background-color: skyblue;
  }
}
</style>