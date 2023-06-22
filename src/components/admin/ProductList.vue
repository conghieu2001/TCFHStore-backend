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
              <div class="add-to-cart" @click="clickFavorite(item._id)" v-if="item.favorite === true">
                <i class="fas fa-heart mr-3 mb-2" style="color: #ee2035;"></i>
              </div>
              <div v-else @click="clickFavorite(item._id)" class="add-to-cart"><i class="fas fa-heart mr-3 mb-2" style="color: #ffffff;"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemService from '../../services/item.service';
export default {
  data() {
    return {
      // isFavorite: false
    }
  },
  props: {
    products: {},
  },
  methods: {
    async clickFavorite(id) {
      await itemService.updateFavorite(id);
      // this.isFavorite = true;
      location.reload();
    },
  }
};
</script>
<style scoped>
@import "@/assets/menu.css";
/* .add-to-cart i {
  display: flex;
  justify-content: center;
} */
</style>
