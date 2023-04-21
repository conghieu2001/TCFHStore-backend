<template>
  <main>
    <div class="page-store-banner">
      <img
        src="https://file.hstatic.net/1000075078/file/untitled_design_64d7e90f1ee04cdaa5fa3ae45c4cf56b.png"
        alt=""
      />
      <h3>Hệ thống cửa hàng The Coffee House toàn quốc</h3>
    </div>
    <div class="store-container pt-4">
      <div class="row">
        <div class="col-2 store-list">
          <p>Các tỉnh thành</p>
          <ul>
            <li>Tp Hồ Chí Minh</li>
            <li>Hà Nội </li>
            <li>Cần Thơ </li>
          </ul>
        </div>
        <div class="col-10 store-detail">
          <h4>Khám phá 72 cửa hàng của chúng tôi ở Tp Hồ Chí Minh</h4>
          <div class="row">
            <div class="col-6 pb-5" v-for="store in stores" :key="store._id">
              <div class="store-img">
                <img
                  :src="store.image"
                  alt=""
                />
              </div>
              <div class="store-info">
                <h5>{{store.name}}</h5>
                <div class="store-info-social d-flex align-items-baseline">
                  <h6>Theo dõi tại:</h6>
                  <a href=""><i class="fab fa-facebook-square"></i></a>
                  <a href=""><i class="fab fa-instagram-square"></i></a>
                  <a href=""><i class="fab fa-twitter-square"></i></a>
                </div>
                <hr />
                <p>{{ store.address }}</p>
                <p>7{{ store.timeStart }} - {{ store.timeEnd }}</p>
                <div class="row">
                  <span class="col-6"
                    ><i class="fas fa-car pe-3"></i>Có chỗ đỗ xe hơi</span
                  >
                  <span class="col-6"
                    ><i class="fas fa-concierge-bell pe-3"></i>Phục vụ tại
                    chỗ</span
                  >
                  <span class="col-6"
                    ><i class="fas fa-shopping-bag pe-3"></i>Mua mang đi</span
                  >
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
import StoreService from '@/services/store.service';
export default {
    data() {
        return {
            stores: [],
        }
    },
    methods: {
        async getAllStore() {
            try {
                this.stores = await StoreService.getAll();
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getAllStore();
    }
}
</script>

<style scoped>
@import "@/assets/store.css";
</style>