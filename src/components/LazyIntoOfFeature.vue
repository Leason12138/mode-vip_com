<template>
  <div>
    <ShowSectionItem
      v-for="(item, index) in showSectionList"
      :item="item"
      :key="index"
    >
    </ShowSectionItem>
  </div>
</template>

<script>
import ShowSectionItem from "./ShowSectionItem";
export default {
  props: ["item"],
  components: { ShowSectionItem },
  data: function () {
    return {
      showSectionList: [],
    };
  },
  created() {
    this.axios.get(this.item).then((res) => {
        this.showSectionList = res.data.data.data.floor_list;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>