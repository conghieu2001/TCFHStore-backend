<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-6">
        <InputSearch v-model="searchText" />
      </div>
      <div class="mt-3 col-md-12">
        <div class="d-flex">
          <router-link to="/">
            <button class="btn btn-dark ">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
          </router-link>
          <h4 class="ml-1">Danh sách sản phẩm</h4>
          <router-link to="/add">
            <button class="btn btn-sm btn-success addItem">
              <i class="fas fa-plus"></i> Thêm sản phẩm
            </button>
          </router-link>
          <router-link :to="{name: 'item.trash'}">
            <button class="trash-stored btn btn-secondary">
            <i class="fas fa-trash-alt"></i>
          </button>
          </router-link>

        </div>
        <ItemList
          class="mt-2"
          v-if="filteredItemsCount > 0"
          :items="filteredItems"
          v-model:activeIndex="activeIndex"
        />
        <p v-else>Không có sản phẩm nào.</p>
        <div class="mt-3 position-relative remove-all">
          <!-- <button class="btn btn-sm btn-primary" @click="refreshList()">
            <i class="fas fa-redo"></i> Làm mới
          </button> -->
          <button class="btn btn-sm btn-danger" @click="removeAllContacts">
            <i class="fas fa-trash"></i> Xóa tất cả
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputSearch from "@/components/admin/InputSearch.vue";
import ItemList from "@/components/admin/ItemList.vue";
import ItemService from "@/services/item.service";
export default {
  components: {
    InputSearch,
    ItemList,
  },
  data() {
    return {
      items: [],
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
    itemStrings() {
      return this.items.map((item) => {
        const { name, description, image, price } = item;
        return [name, description, image, price].join("");
      });
    },
    filteredItems() {
      if (!this.searchText) return this.items;
      return this.items.filter((_item, index) =>
        this.itemStrings[index].includes(this.searchText)
      );
    },
    activeItem() {
      if (this.activeIndex < 0) return null;
      return this.filteredItems[this.activeIndex];
    },
    filteredItemsCount() {
      return this.filteredItems.length;
    },
  },
  methods: {
    async retrieveItems() {
      try {
        this.items = await ItemService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveItems();
      this.activeIndex = -1;
    },
    async removeAllItems() {
      if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
        try {
          await ItemService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  mounted() {
    this.refreshList();
  },
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
