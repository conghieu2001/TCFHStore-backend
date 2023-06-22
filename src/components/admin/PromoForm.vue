<template>
    <form @submit="submitPromo" class="container">
      <div class="form-group">
        <label for="name">Mã</label>
        <input
          name="name"
          type="text"
          class="form-control"
          v-model="promoLocal.name"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Mô Tả</label>
        <input
          name="description"
          type="text"
          class="form-control"
          v-model="promoLocal.description"
          required
        />
      </div>
      <div class="form-group">
        <label for="">Loại Mã</label>
        <select class="form-control"  v-model="promoLocal.loaiPromo">
            <option disabled></option>
            <option>Ma giam gia</option>
            <option>free ship</option>
        </select>
      </div>
      <div class="form-group">
        <label for="free">Giảm</label>
        <input
          name="free"
          type="number"
          class="form-control"
          v-model="promoLocal.free"
          required
        />
      </div>
      <div class="form-group">
        <label for="payValue">Đơn Hàng Tối Thiểu</label>
        <input
          name="payValue"
          type="number"
          class="form-control"
          v-model="promoLocal.payValue"
          required
        />
      </div>
      <div class="form-group">
        <label for="quantity">Số Lượng Mã</label>
        <input
          name="quantity"
          type="number"
          class="form-control"
          v-model="promoLocal.quantity"
          required
        />
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Lưu</button>
      </div>
    </form>
  </template>
  <script>
  export default {
    emits: ["submit:promos"],
    props: {
        promo: { type: Object, required: true },
    },
    data() {
      return {
        promoLocal: this.promo,
      };
    },
    methods: {
      submitPromo() {
        this.$emit("submit:promo", this.promoLocal);
        this.message = alert("Mã khuyến mãi được cập nhật thành công.");
        this.$router.push({ name: "ShowPromo" });
      },
    },
  };
  </script>
  <style scoped>
  @import "@/assets/form.css";
  </style>
  