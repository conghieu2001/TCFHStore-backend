<template>
  <form @submit="submitPost" class="container">
    <div class="form-group">
      <label for="name">Tiêu đề Bài viết</label>
      <input
        name="name"
        type="text"
        class="form-control"
        v-model="postLocal.name"
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
        v-model="postLocal.description"
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
        v-model="postLocal.image"
        required
      />
      <!-- <ErrorMessage name="image" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="price">Date</label>
      <input
        name="date"
        type="date"
        class="form-control"
        v-model="postLocal.date"
        required
      />
      <!-- <ErrorMessage name="price" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="price">Loại (coffeholic, teaholic, blog)</label>
      <input
        name="loai"
        type="text"
        class="form-control"
        v-model="postLocal.loai"
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
// import * as yup from "yup";
// import { Form, input, ErrorMessage } from "vee-validate";
export default {
  // components: {
  //   // Form,
  //   // input,
  //   // ErrorMessage,
  // },
  emits: ["submit:post"],
  props: {
    post: { type: Object, required: true },
  },
  data() {
    //   const itemFormSchema = yup.object().shape({
    //     name: yup
    //       .string()
    //       .required("Tên phải có giá trị.")
    //       .min(2, "Tên phải ít nhất 2 ký tự.")
    //       .max(50, "Tên có nhiều nhất 50 ký tự."),
    //     description: yup.string().max(100, "Mô tả tối đa 100 ký tự."),
    //   });
    return {
      postLocal: this.post,
      // itemFormSchema,
    };
  },
  methods: {
    submitPost() {
      this.$emit("submit:post", this.postLocal);
      this.message = alert("Bài viết được cập nhật thành công.");
      this.$router.push({ name: "ShowAllPost" });
    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
