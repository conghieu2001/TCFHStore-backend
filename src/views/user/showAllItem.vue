<template>
  <main>
    <div class="container pb-4">
      <div class="menu-head pt-4 pb-4">
        <div class="menu-head-title">
          <i class="fa-solid fa-trophy me-2"></i>
          <p>sản phẩm từ nhà</p>
        </div>
        <div class="menu-type-group pt-4">
          <div class="menu-type">
            <div class="menu-type-img">
              <img src="../../assets/img/icons/ca-phe.png" alt="" />
            </div>
            <p>Cà phê</p>
          </div>
          <div class="menu-type">
            <div class="menu-type-img">
              <img src="../../assets/img/icons/cloudfee.png" alt="" />
            </div>
            <p>CouldFee</p>
          </div>
          <div class="menu-type">
            <div class="menu-type-img">
              <img src="../../assets/img/icons/hi-tea.png" alt="" />
            </div>
            <p>Hi-Tea</p>
          </div>
          <div class="menu-type">
            <div class="menu-type-img">
              <img src="../../assets/img/icons/tra-trai-cay-tra-sua.png" alt="" />
            </div>
            <p>Trà Trái Cây</p>
          </div>
        </div>
      </div>
      <div class="show-prodcuts-type">
        <div class="row">
            <div class="col-2 pb-3" v-for="item in items" :key="item._id">
            <div class="item">
              <div class="item-img">
                <router-link :to="'/detail/' + item._id" >
                  <img
                    :src="item.image"
                    alt=""
                  />
                </router-link>
              </div>
              <div class="item-info pt-2">
                <h6>{{item.name}}</h6>
                <div class="item-info-price pt-4">
                  <p>{{item.price}}đ</p>
                  <div class="add-to-cart">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ItemService from "@/services/item.service";
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getAllItem() {
      try {
        this.items = await ItemService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getAllItem();
  },
};
</script>

<style scoped>
@import '@/assets/menu.css';
</style>
