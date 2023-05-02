<template>
  <div class="show-prodcuts-type">
    <div class="row">
      <div class="col-2 pb-3" v-for="item in products" :key="item._id">
        <div class="item">
          <div class="item-img">
            <router-link :to="'/detail/' + item._id">
              <img :src="item.image" alt="" />
            </router-link>
          </div>
          <div class="item-info pt-2">
            <h6>{{ item.name }}</h6>
            <div class="item-info-price pt-4">
              <p>{{ item.price }}đ</p>
              <div class="add-to-cart">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {},
  },
};
</script>
<style scoped>
@import "@/assets/menu.css";
</style>
