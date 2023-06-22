<script>
import PostService from "../../services/post.service";
export default {
  props: {
    posts: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  data() {},
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
    async deletePost(id) {
      if(confirm("Bạn muốn xóa Bài viết này?")) {
        try {
          await PostService.delete(id);
          // this.$router.push({ name: "ShowAllPost" });
          location.reload();
        } catch(error) {
          console.log(error);
        }
      }
    }
  },
};
</script>

<template>
  <table class="table">
    <thead class="table-info">
      <tr>
        <th class="pl-2">STT</th>
        <th class="post-name-headd">Name</th>
        <th class="post-description-headd">Description</th>
        <th>Image</th>
        <th class="text-center">Option</th>
      </tr>
    </thead>
    <tbody>
      <tr
      class="row-info-post"
        v-for="(post, index) in posts"
        :key="post._id"
        :class="{ active: index === activeIndex }"
        @click="updateActiveIndex(index)"
      >
        <td class="pl-3">{{ index+1 }}</td>
        <td>{{ post.name }}</td>
        <td class="td-descriptionn">{{ post.description }}</td>
        <td class="td-imagee"><img :src="post.image" alt=""></td>
        <td class="option-click">
          <router-link
            :to="{
              name: 'post.edit',
              params: { id: post._id },
            }"
          >
            <button class="btn btn-warning">
              <i class="fas fa-edit"></i>
            </button>
          </router-link>
          <button
            type="button"
            class="btn btn-danger ml-2"
            @click="deletePost(post._id)"
          >
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
table {
  width: 80%;
}
.option-click {
  padding-right: 0px !important;
  text-align: center;
}
.fa-edit {
  color: #6d6c6c;
}
.td-imagee {
  width: 50px;
  height: 70px;
}
.td-imagee img {
  width: 100%;
  height: 100%;
}
.td-descriptionn{
  width: 300px !important;
  display: -webkit-box;
  max-height: 4rem;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  line-height: 1.5rem;
}
.post-name-headd {
  width: 300px;
}
.post-description-headd {
  width: 300px;
}
.fa-heart {
  font-size: 22px;
  padding-top: 10px;
  padding-left: 15px;
}
.row-info-post {
  height: 73px;
}
</style>
