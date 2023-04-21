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
        <th scope="col">STT</th>
        <!-- <th scope="col">ID</th> -->
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Image</th>
        <th scope="col">Banner</th>
        <th class="text-center" scope="col">Option</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(post, index) in posts"
        :key="post._id"
        :class="{ active: index === activeIndex }"
        @click="updateActiveIndex(index)"
      >
        <td>{{ index }}</td>
        <!-- <td>{{ post._id }}</td> -->
        <td class="td-name">{{ post.name }}</td>
        <td class="td-description">{{ post.description }}</td>
        <td class="td-image"><img :src="post.image" alt="" /></td>
        <td class="text-center">{{ post.banner }}</td>
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
  width: 100%;
}
.option-click {
  padding-right: 0px !important;
  text-align: center;
}
.fa-edit {
  color: #6d6c6c;
}
.td-image {
  width: 50px;
  height: 70px;
}
.td-image img {
  width: 100%;
  height: 100%;
}
.td-description {
  width: 400px;
  display: -webkit-box;
  max-height: 4rem;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  line-height: 1.6rem;
}
.td-name {
  width: 300px;
}

</style>
