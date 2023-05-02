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
          <h4 class="ml-1">Danh sách tất cả các cửa hàng</h4>
          <router-link to="/store/add">
            <button class="btn btn-sm btn-success addItem">
              <i class="fas fa-plus"></i> Thêm cửa hàng
            </button>
          </router-link>
        </div>
        <StoreList
          class="mt-2"
          v-if="filteredStoresCount > 0"
          :stores="filteredStores"
          v-model:activeIndex="activeIndex"
        />
        <p v-else>Không có chi nhánh nào.</p>
        <div class="mt-3 position-relative remove-all">
          <!-- <button class="btn btn-sm btn-primary" @click="refreshList()">
            <i class="fas fa-redo"></i> Làm mới
          </button> -->
          <!-- <button class="btn btn-sm btn-danger" @click="removeAllStores">
            <i class="fas fa-trash"></i> Xóa tất cả
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputSearch from "@/components/admin/InputSearch.vue";
import StoreList from "@/components/admin/StoreList.vue";
import StoreService from "@/services/store.service";
export default {
  components: {
    InputSearch,
    StoreList,
  },
  data() {
    return {
      stores: [],
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
    storeStrings() {
      return this.stores.map((store) => {
        const { name, image, address, timeStart, timeEnd } = store;
        return [name, image, address, timeStart, timeEnd].join("");
      });
    },
    filteredStores() {
      if (!this.searchText) return this.stores;
      return this.stores.filter((_store, index) =>
        this.storeStrings[index].includes(this.searchText)
      );
    },
    activeStore() {
      if (this.activeIndex < 0) return null;
      return this.filteredStores[this.activeIndex];
    },
    filteredStoresCount() {
      return this.filteredStores.length;
    },
  },
  methods: {
    async retrieveStores() {
      try {
        this.stores = await StoreService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    async removeAllStores() {
      if (confirm("Bạn muốn xóa tất cả Cửa hàng?")) {
        try {
          await StoreService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  created () {
    this.retrieveStores();
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
