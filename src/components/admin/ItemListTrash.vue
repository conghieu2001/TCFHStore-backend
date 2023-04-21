<script>
import ItemService from "@/services/item.service";
export default {
  props: {
    itemsTrash: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  data() {},
  emits: ["update:activeIndex"],
  methods: {
    async restoreItem(id, data) {
      try {
        await ItemService.restore(id, data);
      } catch (error) {
        console.log(error);
      }
    },
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
        v-for="(item, index) in itemsTrash"
        :key="item._id"
        :class="{ active: index === activeIndex }"
      >
        <td>{{ index }}</td>
        <td>{{ item._id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td class="td-image"><img :src="item.image" alt="" /></td>
        <td>{{ item.price }}</td>
        <td class="option-click">
          <button
            class="btn btn-warning"
            type="submit"
            @click="restoreItem(item._id, this.item)"
          >
            <i class="fas fa-undo"></i>
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

.td-image img {
  width: 50px;
  height: 50px;
}
</style>
