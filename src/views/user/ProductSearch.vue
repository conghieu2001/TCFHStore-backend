<template>
    <div class="container search-page">
      <h4
        v-if="Object.keys(products).length >= 0"
        class="page__headding text-center"
      >
        Sản phẩm:
        <span class="text-danger fs-3">{{ this.searchString }}</span>
      </h4>
      <h2
        v-if="Object.keys(products).length < 0"
        class="page__headding text-center"
      >
        Không tìm thấy kết quả với từ khóa:
        <span class="text-danger fs-3">{{ this.searchString }}</span>
      </h2>
      <div class="row">
        <productItem
          
          :productItem="this.products"
        ></productItem>
        <span class="mb-4"></span>
      </div>
    </div>
</template>

<script>
import ItemService from "../../services/item.service";
import productItem from "../../components/user/ProductItem.vue";
export default {
  components: {
    productItem,
  },
  data() {
    return {
      products: '',
    };
  },
  props: {
    searchString: String,
  },
  watch: {
    searchString() {
      this.searchProduct();
    },
  },
  methods: {
    async searchProduct() {
      // const name 
      // const data = {name: this.searchString}
      this.products = await ItemService.getItemByName(this.searchString);
      console.log(this.products);
    },
  },
  created(){
      this.searchProduct()
  }
};
</script>
<style scoped>
.search-page {
  min-height: 600px;
}
.page__headding {
 padding-top: 20px;
 padding-bottom: 15px;
}
</style>