<template>
  <div class="menu-head ">
    <div class="menu-type-group">
      <div class="menu-type">
        <button class="btn btn-info" @click="selectAllProduct()">
          Tất cả
        </button>
      </div>
      <div class="menu-type">
        <div class="btn btn-info" @click="selectProductByCoffee()">
          Cà phê
        </div>
      </div>
      <div class="menu-type">
        <div class="btn btn-info" @click="selectProductByHitea()">
          Hi-Tea
        </div>
      </div>
      <div class="menu-type">
        <div class="btn btn-info"  @click="selectProductByTea()">
          Trà Trái Cây
        </div>
      </div>
      <div class="menu-type">
        <div class="btn btn-info"  @click="selectAllFavoriteItem()">
          Yêu Thích
        </div>
      </div>
      <div class="menu-type">
        <router-link to="/add">
            <button class="btn btn-info">
              <i class="fas fa-plus"></i>
            </button>
          </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import itemService from "../../services/item.service";
export default {
  data() {
    return {
      coffees: [],
      hiteas: [],
      teas: [],
      favorites: [],
    };
  },
  emits: ["select:coffee", "select:all", "select:hitea", "select:tea", "select:favorite"],
  methods: {
    async getCoffees() {
      try {
        this.coffees = await itemService.getAllItemByCoffee();
      } catch (error) {
        console.log(error);
      }
    },
    async getHiteas() {
      try {
        this.hiteas = await itemService.getAllItemByHitea();
      } catch (error) {
        console.log(error);
      }
    },
    async getTeas() {
      try {
        this.teas = await itemService.getAllItemByTea();
      } catch (error) {
        console.log(error);
      }
    },
    async getFavorites() {
      try {
        this.favorites = await itemService.getFavorite();
      } catch(error) {
        console.log(error);
      }
    },
    selectProductByCoffee() {
      this.$emit("select:coffee", );
    },
    selectProductByHitea() {
      this.$emit("select:hitea", );
    },
    selectProductByTea() {
      this.$emit("select:tea", );
    },
    selectAllProduct() {
      this.$emit("select:all");
    },
    selectAllFavoriteItem(){
      this.$emit("select:favorite");
    }
  },
  created() {
    this.getCoffees();
    this.getHiteas();
    this.getTeas();
    this.getFavorites();
  },
};
</script>
<style scoped>
@import "@/assets/menu.css";
</style>
