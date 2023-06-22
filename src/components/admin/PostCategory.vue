<template>
  <div class="menu-head ">
    <div class="menu-type-group">
      <div class="menu-type">
        <button class="btn btn-info" @click="selectAllProduct()">
          Tất cả
        </button>
      </div>
      <div class="menu-type">
        <div class="btn btn-info" @click="selectProductByCoffeeholic()">
          Coffeeholic
        </div>
      </div>
      <div class="menu-type">
        <div class="btn btn-info" @click="selectProductByTeaholic()">
          Teaholic
        </div>
      </div>
      <div class="menu-type">
        <div class="btn btn-info"  @click="selectProductByBlog()">
          Blog
        </div>
      </div>
      <div class="menu-type">
        <router-link to="/posts/add">
            <button class="btn btn-info">
              <i class="fas fa-plus"></i>
            </button>
          </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import postService from "../../services/post.service";
export default {
  data() {
    return {
      coffeeholics: [],
      teaholics: [],
      blogs: [],
    };
  },
  emits: ["select:coffeeholic", "select:all", "select:teaholic", "select:blog"],
  methods: {
    async getCoffeeholics() {
      try {
        this.coffeeholics = await postService.getAllCoffee();
      } catch (error) {
        console.log(error);
      }
    },
    async getTeaholic() {
      try {
        this.teaholics = await postService.getAllTea();
      } catch (error) {
        console.log(error);
      }
    },
    async getBlogs() {
      try {
        this.blogs = await postService.getAllBlog();
      } catch (error) {
        console.log(error);
      }
    },
    selectProductByCoffeeholic() {
      this.$emit("select:coffeeholic", );
    },
    selectProductByTeaholic() {
      this.$emit("select:teaholic", );
    },
    selectProductByBlog() {
      this.$emit("select:blog", );
    },
    selectAllProduct() {
      this.$emit("select:all");
    },
  },
  created() {
    this.getCoffeeholics();
    this.getTeaholic();
    this.getBlogs();
  },
};
</script>
<style scoped>
@import "@/assets/menu.css";
</style>
