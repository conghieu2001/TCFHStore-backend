<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-6">
        <InputSearch v-model="searchText" />
      </div>
      <div class="mt-3 col-md-12">
        <div class="d-flex">
          <router-link to="/items">
            <button class="btn btn-dark ">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
          </router-link>
          <h4 class="ml-3 pb-3">Danh sách sản phẩm đã xóa</h4>
        </div>
        <ItemListTrash
          
          v-if="filteredItemsCount > 0"
          :itemsTrash="filteredItems"
          v-model:activeIndex="activeIndex"
        />
        <p v-else>Không có sản phẩm nào.</p>
      </div>
    </div>
  </div>
</template>

<script>
import InputSearch from "@/components/admin/InputSearch.vue";
import ItemListTrash from "@/components/admin/ItemListTrash.vue";
import ItemService from "@/services/item.service";
export default {
  components: {
    InputSearch,
    ItemListTrash,
  },
  data() {
    return {
      itemsTrash: [],
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
      return this.itemsTrash.map((item) => {
        const { name, description, image, price } = item;
        return [name, description, image, price].join("");
      });
    },
    filteredItems() {
      if (!this.searchText) return this.itemsTrash;
      return this.itemsTrash.filter((_item, index) =>
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
        this.itemsTrash = await ItemService.getAllTrash();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.retrieveItems();
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
  margin-left: 650px;
}
</style>
