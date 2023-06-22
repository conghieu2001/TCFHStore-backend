<template>
  <main>
    <div class="pt-3 containner">
      <div class="row">
        <div class="col-3 left-content">
          <div class="info-admin d-flex align-items-baseline">
            <div class="pr-2">
              <i class="far fa-grin-hearts"></i>
            </div>
            <div>
              <h6>{{ this.UserName }}</h6>
            </div>
          </div>
          <hr />
          <ul>
            <li>
              <router-link to="/admin">
                <i class="fas fa-home"></i>
                <span>Dashboard</span>
              </router-link>
            </li>
            <li>
              <router-link to="/items">
                <i class="fas fa-list"></i>
                <span>Danh Mục Sản Phẩm</span>
              </router-link>
            </li>
            <li>
              <router-link to="/orders">
                <i class="fas fa-money-bill-wave"></i>
                <span>Đơn Hàng</span>
              </router-link>
            </li>
            <li>
              <router-link to="/posts">
                <i class="fas fa-folder-open"></i>
                <span>Bài Viết</span>
              </router-link>
            </li>
            <li>
              <router-link to="/recruitments">
                <i class="fas fa-user-plus"></i>
                <span>Tuyển Dụng</span>
              </router-link>
            </li>
            <li>
              <router-link to="/stores">
                <i class="fas fa-map"></i>
                <span>Cửa Hàng</span>
              </router-link>
            </li>
            <li>
              <router-link to="/comments">
                <i class="fa-solid fa-comment"></i>
                <span>Bình Luận</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-8 right-contentt pt-4">
          <div class="content-right-items">
            <div class="homepage-titlee d-flex align-items-baseline mb-1">
              <h5>Bài Viết </h5>
              <InputSearch v-model="searchText" />
            </div>
            <hr />
            <div>
              <PostCategory
                @select:coffeeholic="getAllItemBycoffeeholic"
                @select:all="getAllPost"
                @select:teaholic="getAllItemByteaholic"
                @select:blog="getAllItemByblog"
              ></PostCategory>
              <PostList
                class="mt-3"
                v-if="filteredPostsCount > 0"
                :posts="filteredPosts"
                v-model:activeIndex="activeIndex"
              />
              <p v-else>Không có bài viết nào.</p>
            </div>
          </div>
          <hr />
          <div class="footer text-center pb-4">
            2022 - 2023 &copy; Simple theme by <a href="/">CongHieu</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import InputSearch from "@/components/admin/InputSearch.vue";
import PostList from "@/components/admin/ItemListPost.vue";
import PostService from "@/services/post.service";
import PostCategory from "../../components/admin/PostCategory.vue";
export default {
  components: {
    InputSearch,
    PostList,
    PostCategory
  },
  data() {
    return {
      posts: [],
      activeIndex: -1,
      searchText: "",
      UserName: "",
    };
  },
  watch: {
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    postStrings() {
      return this.posts.map((post) => {
        const { name, date, image, description } = post;
        return [name, date, image, description].join("");
      });
    },
    filteredPosts() {
      if (!this.searchText) return this.posts;
      return this.posts.filter((_post, index) =>
        this.postStrings[index].includes(this.searchText)
      );
    },
    activePost() {
      if (this.activeIndex < 0) return null;
      return this.filteredPosts[this.activeIndex];
    },
    filteredPostsCount() {
      return this.filteredPosts.length;
    },
  },
  methods: {
    getUserName() {
      const user = JSON.parse(localStorage.getItem("users"));
      if (localStorage.getItem("users") != null) {
        this.UserName = user.name;
      }
    },
    async getAllPost() {
      this.posts = await PostService.getAll();
    },
    async getAllItemBycoffeeholic() {
      this.posts = await PostService.getAllCoffee();
    },
    async getAllItemByteaholic() {
      this.posts = await PostService.getAllTea();
    },
    async getAllItemByblog() {
      this.posts = await PostService.getAllBlog();
    },
  },
  mounted() {
    this.getUserName();
  },
  created () {
    this.getAllPost();
  }
};
</script>
<style>
.addItem {
  margin-left: 15px;
  height: 80%;
}
.remove-all button{
  position: absolute;
  right: 25px;
}
.trash-stored {
  margin-left: 600px;
}
</style>
