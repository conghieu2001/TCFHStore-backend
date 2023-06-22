<template>
  <div>
    <div class="back-show">
      <router-link to="/promotion">
        <div class="back-show-items">
          <i class="fa-solid fa-chevron-left"></i> Quay lại
        </div>
      </router-link>
    </div>
    <div v-if="promo" class="page container">
      <h4>Thêm Mã Khuyến Mãi</h4>
      <PromoForm class="pt-3 pb-3" :promo="promo" @submit:promo="createPromo" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import PromoForm from "@/components/admin/PromoForm.vue";
import PromoService from "@/services/promo.service";
export default {
  components: {
    PromoForm,
  },
  data() {
    return {
      promo: {},
      message: "",
    };
  },
  methods: {
    async createPromo(data) {
      try {
        await PromoService.create(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.page {
  width: 550px;
  /* margin-top: 50px; */
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.page h4 {
  padding-top: 20px;
}
.back-show {
  margin-left: 200px;
  margin-top: 30px;
}
.back-show-items {
  width: 100px;
  background-color: rgb(216, 221, 221);
  height: 50px;
  padding-left: 10px;
  padding-top: 10px;
  border-radius: 5px;
}
.back-show:hover .back-show-items {
  font-weight: bold;
}
</style>
