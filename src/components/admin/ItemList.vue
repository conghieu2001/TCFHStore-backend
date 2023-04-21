<script>
import ItemService from '../../services/item.service';
export default {
  props: {
    items: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  data() {},
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
    async deleteItem(id) {
      if(confirm("Bạn muốn xóa Sản phẩm này?")) {
        try {
          await ItemService.delete(id);
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
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Image</th>
        <th scope="col">Price</th>
        <th class="text-center" scope="col">Option</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="item._id"
        :class="{ active: index === activeIndex }"
        @click="updateActiveIndex(index)"
      >
        <td>{{ index }}</td>
        <td>{{ item._id }}</td>
        <td>{{ item.name }}</td>
        <td class="td-description">{{ item.description }}</td>
        <td class="td-image"><img :src="item.image" alt=""></td>
        <td>{{ item.price }}</td>
        <td class="option-click">
          <router-link
            :to="{
              name: 'item.edit',
              params: { id: item._id },
            }"
          >
            <button class="btn btn-warning">
              <i class="fas fa-edit"></i>
            </button>
          </router-link>
          <button
            type="button"
            class="btn btn-danger ml-2"
            @click="deleteItem(item._id)"
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
</style>
