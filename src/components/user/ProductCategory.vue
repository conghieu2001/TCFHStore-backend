<template>
  <div class="menu-head pt-4 pb-4">
    <div class="menu-head-title">
      <i class="fa-solid fa-trophy me-2"></i>
      <p>sản phẩm từ nhà</p>
    </div>
    <div class="menu-type-group pt-4">
      <div class="menu-type">
        <div class="menu-type-img" @click="selectAllProduct()">
          <img src="../../assets/img/icons/tat-ca.png" alt="" />
        </div>
        <p>Tất cả</p>
      </div>
      <div class="menu-type">
        <div class="menu-type-img" @click="selectProductByCategory()">
          <img src="../../assets/img/icons/ca-phe.png" alt="" />
        </div>
        <p>Cà phê</p>
      </div>
      <!-- <div class="menu-type">
        <div class="menu-type-img">
          <img src="../../assets/img/icons/cloudfee.png" alt="" />
        </div>
        <p>CouldFee</p>
      </div> -->
      <div class="menu-type">
        <div class="menu-type-img" @click="selectProductByCompany()">
          <img src="../../assets/img/icons/hi-tea.png" alt="" />
        </div>
        <p>Hi-Tea</p>
      </div>
      <div class="menu-type">
        <div class="menu-type-img"  @click="selectProductByType()">
          <img src="../../assets/img/icons/tra-trai-cay-tra-sua.png" alt="" />
        </div>
        <p>Trà Trái Cây</p>
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
    };
  },
  emits: ["select:coffee", "select:all", "select:hitea", "select:tea"],
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
    selectProductByCategory() {
      this.$emit("select:coffee", );
    },
    selectProductByCompany() {
      this.$emit("select:hitea", );
    },
    selectProductByType() {
      this.$emit("select:tea", );
    },
    selectAllProduct() {
      this.$emit("select:all");
    },
  },
  created() {
    this.getCoffees();
    this.getHiteas();
    this.getTeas();
  },
};
</script>
<style scoped>
@import "@/assets/menu.css";
</style>
