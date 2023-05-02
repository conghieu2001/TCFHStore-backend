<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-6">
        <InputSearch v-model="searchText" />
      </div>
      <div class="mt-3 col-md-12">
        <div class="d-flex">
          <router-link to="/admin">
            <button class="btn btn-dark ">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
          </router-link>
          <h4 class="ml-1">Danh sách Bài viết</h4>
          <router-link to="/posts/add">
            <button class="btn btn-sm btn-success addItem">
              <i class="fas fa-plus"></i> Thêm bài viết
            </button>
          </router-link>
          <!-- <router-link :to="{name: 'item.trash'}">
            <button class="trash-stored btn btn-secondary">
            <i class="fas fa-trash-alt"></i>
          </button>
          </router-link> -->

        </div>
        <PostList
          class="mt-2"
          v-if="filteredPostsCount > 0"
          :posts="filteredPosts"
          v-model:activeIndex="activeIndex"
        />
        <p v-else>Không có bài viết nào.</p>
        <div class="mt-3 position-relative remove-all">
          <!-- <button class="btn btn-sm btn-primary" @click="refreshList()">
            <i class="fas fa-redo"></i> Làm mới
          </button> -->
          <!-- <button class="btn btn-sm btn-danger" @click="removeAllPosts">
            <i class="fas fa-trash"></i> Xóa tất cả
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputSearch from "@/components/admin/InputSearch.vue";
import PostList from "@/components/admin/ItemListPost.vue";
import PostService from "@/services/post.service";
export default {
  components: {
    InputSearch,
    PostList,
  },
  data() {
    return {
      posts: [],
      activeIndex: -1,
      searchText: "",
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
    async retrievePosts() {
      try {
        this.posts = await PostService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    async removeAllPosts() {
      if (confirm("Bạn muốn xóa tất cả Bài viết?")) {
        try {
          await PostService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  created () {
    this.retrievePosts();
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
