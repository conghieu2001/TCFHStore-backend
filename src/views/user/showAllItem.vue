<template>
  <main>
    <div class="container pb-4 menu-page">
      <ProductCategory
        @select:coffee="getAllItemByCoffee"
        @select:all="getAllProduct"
        @select:hitea="getAllItemByHitea"
        @select:tea="getAllItemByTea"
        @select:favorite="getAllItemFavorite"
      ></ProductCategory>
      <ProductList :products="products" />
    </div>
  </main>
</template>

<script>
import ItemService from "@/services/item.service";
import ProductList from "../../components/user/ProductList.vue";
import ProductCategory from "../../components/user/ProductCategory.vue";
import itemService from '../../services/item.service';

export default {
  components: {
    ProductList,
    ProductCategory,
  },
  data(){
    return {
      products: [],
    }
  },
  methods: {
    async getAllProduct() {
      this.products = await ItemService.getAll();
    },
    async getAllItemByCoffee() {
      this.products = await itemService.getAllItemByCoffee();
    },
    async getAllItemByHitea() {
      this.products = await itemService.getAllItemByHitea();
    },
    // async getAllItemByTea() {
    //   this.products = await itemService.getAllItemByTea();
    // },
    // async getAllItemFavorite() {
    //   this.products = await itemService.getFavorite();
    // }
  },
  created() {
    this.getAllProduct();
  }
}
</script>

<style scoped>
@import '@/assets/menu.css';
.menu-page {
  min-height: 650px;
}
</style>
