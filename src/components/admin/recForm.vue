<template>
  <form @submit="submitRec" class="container">
    <div class="form-group">
      <label for="title">Tiêu đề Bài viết</label>
      <input
        name="title"
        type="text"
        class="form-control"
        v-model="recLocal.title"
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
      v-model="recLocal.image"
      required
      />
      <!-- <ErrorMessage name="image" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="description1">Mô Tả</label>
      <input
        name="description1"
        type="text"
        class="form-control"
        v-model="recLocal.description1"
        required
      />
      <!-- <ErrorMessage name="description" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="description2">Mô Tả</label>
      <input
        name="description2"
        type="text"
        class="form-control"
        v-model="recLocal.description2"
        required
      />
      <!-- <ErrorMessage name="description" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="description3">Mô Tả</label>
      <input
        name="description3"
        type="text"
        class="form-control"
        v-model="recLocal.description3"
        required
      />
      <!-- <ErrorMessage name="description" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Lưu</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["submit:rec"],
  props: {
    rec: { type: Object, required: true },
  },
  data() {
    return {
      recLocal: this.rec,
    };
  },
  methods: {
    submitRec() {
      this.$emit("submit:rec", this.recLocal);
      this.message = alert("Tin tuyển dụng được cập nhật thành công.");
      this.$router.push({ name: "Recruiments" });
    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
