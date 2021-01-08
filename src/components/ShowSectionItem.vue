<template>
  <!-- <router-link class="FeaturedNav" to="Shoper&query=1"> -->
    <div class="showsectionitem"  @click='clickFn(item.data.brand.brand_id)'>
      <div>
        <img
          class="photo"
          v-lazy="item.data.brand.image"
          alt=""
          :key="item.data.brand.brand_id"
        />
      </div>
      <div>
        <p class="title">{{ item.data.brand.title }}</p>
        <div class="discount" v-if="item.data.brand.discount">
          <span style="color: #de3d96">{{
            parseFloat(item.data.brand.discount)
          }}</span>
          <span>{{ item.data.brand.discount.replace(/(\d|\.)/g, "") }}</span>
        </div>
        <div class="discount" v-else>
          <span>一口价</span>
        </div>
      </div>
    </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  props: ["item"]
  ,methods:{
    clickFn:function(id){
     this.$router.push({
        path: "/shoper",
        query: {
          id,
        },
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.showsectionitem {
  width: 96vw;
  max-width: 518.4px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  text-align: left;
  margin-bottom: 15px;
  .photo {
    width: 96vw;
    max-width: 518.4px;
    height: 46vw;
    border-radius: 10px 10px 0 0;
    background-size: cover;
  }
  .title {
    font-size: 15px;
    font-weight: bolder;
    padding-left: 20px;
    margin: 10px 0;
  }
  .discount {
    font-size: 12px;
    padding: 0 0 10px 20px;
  }
}
</style>