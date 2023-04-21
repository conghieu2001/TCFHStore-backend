<template>
  <form @submit="submitItem" class="container">
    <div class="form-group">
      <label for="name">Tên Sản Phẩm</label>
      <input
        name="name"
        type="text"
        class="form-control"
        v-model="itemLocal.name"
        required
      />
      <!-- <ErrorMessage name="name" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="description">Mô Tả</label>
      <input
        name="description"
        type="text"
        class="form-control"
        v-model="itemLocal.description"
        required
      />
      <!-- <ErrorMessage name="description" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="image">Hình Ảnh</label>
      <input
        name="image"
        type="text"
        class="form-control"
        v-model="itemLocal.image"
        required
      />
      <!-- <ErrorMessage name="image" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="quantity">Số Lượng</label>
      <input
        name="quantity"
        type="number"
        class="form-control"
        v-model="itemLocal.quantity"
        required
      />
      <!-- <ErrorMessage name="image" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="price">Giá</label>
      <input
        name="price"
        type="number"
        class="form-control"
        v-model="itemLocal.price"
        required
      />
      <!-- <ErrorMessage name="price" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Lưu</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["submit:item"],
  props: {
    item: { type: Object, required: true },
  },
  data() {
    return {
      itemLocal: this.item,
    };
  },
  methods: {
    submitItem() {
      this.$emit("submit:item", this.itemLocal);
      this.message = alert("Sản phẩm được cập nhật thành công.");
      this.$router.push({ name: "ShowAllItem" });
    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
