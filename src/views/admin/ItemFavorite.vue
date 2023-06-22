<script>
import itemService from '../../services/item.service';
export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    async getAllFavoriteItem() {
      this.items = await itemService.getFavorite();
    },
    async deleteItem(id) {
      if(confirm("Bạn muốn xóa Sản phẩm này?")) {
        try {
          await itemService.delete(id);
          // this.$router.push({ name: "ShowAllPost" });
          location.reload();
        } catch(error) {
          console.log(error);
        }
      }
    }
  },
  mounted() {
    this.getAllFavoriteItem();
  }
};
</script>
<template>
  <table class="table table-favorite">
    <thead class="table-info">
      <tr>
        <th scope="col">STT</th>
        <!-- <th scope="col">ID</th> -->
        <th scope="col" class="item-name-head">Name</th>
        <th scope="col" class="item-description-head">Description</th>
        <th scope="col">Image</th>
        <th scope="col">Favorite</th>
        <th scope="col">Price</th>
        <th scope="col">Loại</th>
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
        <td>{{ index +1 }}</td>
        <!-- <td>{{ item._id }}</td> -->
        <td>{{ item.name }}</td>
        <td class="td-description">{{ item.description }}</td>
        <td class="td-image"><img :src="item.image" alt=""></td>
        <td><i class="fas fa-heart" style="color: #ee2035;"></i></td>
        <td>{{ item.price }}</td>
        <td>{{ item.loaiItem }}</td>
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
.table-favorite {
  width: 1100px !important;
  margin: 50px 200px;
  border-bottom: 1px solid gray;
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
  width: 450px !important;
  display: -webkit-box;
  max-height: 4rem;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  line-height: 1.6rem;
}
.item-name-head {
  width: 150px;
}
.item-description-head {
  width: 450px;
}
.fa-heart {
  font-size: 22px;
  padding-top: 10px;
  padding-left: 15px;
}
</style>
