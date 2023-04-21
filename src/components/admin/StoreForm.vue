<template>
  <form @submit="submitStore" class="container">
    <div class="form-group">
      <label for="name">Tên cửa hàng</label>
      <input
        name="name"
        type="text"
        class="form-control"
        v-model="storeLocal.name"
        required
      />
      <!-- <ErrorMessage name="name" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="image">Hình Ảnh</label>
      <input
        name="image"
        type="text"
        class="form-control"
        v-model="storeLocal.image"
        required
      />
      <!-- <ErrorMessage name="image" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="address">Địa chỉ</label>
      <input
        name="address"
        type="text"
        class="form-control"
        v-model="storeLocal.address"
        required
      />
      <!-- <ErrorMessage name="price" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="timeSE">Giờ mở - đóng cửa</label>
      <div class="d-flex">
        <input
        name="timeStart"
        type="text"
        class="form-control"
        v-model="storeLocal.timeStart"
        required
      />
      <input
        name="timeEnd"
        type="text"
        class="form-control"
        v-model="storeLocal.timeEnd"
        required
      />
      </div>
      <!-- <ErrorMessage name="price" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Lưu</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["submit:store"],
  props: {
    store: { type: Object, required: true },
  },
  data() {
    return {
      storeLocal: this.store,
    };
  },
  methods: {
    submitStore() {
      this.$emit("submit:store", this.storeLocal);
      this.message = alert("Cửa hàng được cập nhật thành công.");
      this.$router.push({ name: "ShowStore" });
    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
