<template>
  <div class="minheight-promo pt-4">
    <div class="wrapper">
      <div class="p-3 homepage-title">
        <h5>Khuyến Mãi</h5>
      </div>
      <hr />
      <div class="d-flex">
        <div class="mt-4 mb-3">
          <div class="magiamgia" v-for="voucher in vouchers" :key="voucher._id">
            <div class="d-flex justify-content-between">
              <div class="d-flex pl-5">
                <img src="../../assets//img/icons/voucher.png" alt="" />
                <div class="ml-2">
                  <h6 class="mb-1">Mã: {{ voucher.name }}</h6>
                  <p>{{ voucher.description }}.</p>
                </div>
                <div class="pl-5 pt-2"><p>SL: {{ voucher.quantity }}</p></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 mb-3 pl-5">
          <div
            class="freeship"
            v-for="freeship in freeships"
            :key="freeship._id"
          >
            <div class="d-flex justify-content-between">
              <div class="d-flex justify-content-center">
                <img src="../../assets//img/icons/freeship.png" alt="" />
                <div class="ml-2">
                  <h6 class="mb-1">Mã: {{ freeship.name }}</h6>
                  <p>{{ freeship.description }}.</p>
                </div>
                <div class="pl-5 pt-2"><p>SL: {{ freeship.quantity }}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h6 class="text-center pt-3">Lưu ý mỗi đơn hàng chỉ sử đụng được 1 mã khuyến mãi!</h6>
  </div>
</template>
<script>
import PromoService from "../../services/promo.service";
export default {
  data() {
    return {
      vouchers: [],
      freeships: [],
    };
  },
  methods: {
    async getVoucher() {
      this.vouchers = await PromoService.getByMGG();
      // console.log(this.voucher)
    },
    async getFreeship() {
      this.freeships = await PromoService.getByFS();
      // console.log(this.freeship)
    },
  },
  mounted() {
    this.getVoucher();
    this.getFreeship();
  },
};
</script>
<style scoped>
.minheight-promo {
  min-height: 590px;
  background-color: #f5f5f5;
}
.wrapper {
    width: 60%;
    min-height: 500px;
    margin: 0 auto;
    background-color: #fff;
}
</style>
