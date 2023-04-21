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
            <h4 class="ml-1">Tin tuyển dụng</h4>
            <router-link to="/recs/add">
              <button class="btn btn-sm btn-success addItem">
                <i class="fas fa-plus"></i> Thêm Bài đăng tuyển dụng
              </button>
            </router-link>
          </div>
          <Recruitment
            class="mt-2"
            v-if="filteredRecsCount > 0"
            :recs="filteredRecs"
            v-model:activeIndex="activeIndex"
          />
          <p v-else>Chưa có chi nhánh nào!</p>
          <div class="mt-3 position-relative remove-all">
            <button class="btn btn-sm btn-danger" @click="removeAllRecs">
              <i class="fas fa-trash"></i> Xóa tất cả
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import InputSearch from "@/components/admin/InputSearch.vue";
  import Recruitment from "@/components/admin/recuiment.vue";
  import RecDService from "@/services/requiment.service";
  export default {
    components: {
      InputSearch,
      Recruitment,
    },
    data() {
      return {
        recs: [],
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
      recStrings() {
        return this.recs.map((rec) => {
          const { title, image, description1, description2, description3 } = rec;
          return [title, image, description1, description2, description3].join("");
        });
      },
      filteredRecs() {
        if (!this.searchText) return this.recs;
        return this.recs.filter((_rec, index) =>
          this.recStrings[index].includes(this.searchText)
        );
      },
      activeRec() {
        if (this.activeIndex < 0) return null;
        return this.filteredItems[this.activeIndex];
      },
      filteredRecsCount() {
        return this.filteredRecs.length;
      },
    },
    methods: {
      async retrieveRecs() {
        try {
          this.recs = await RecDService.getAll();
        } catch (error) {
          console.log(error);
        }
      },
      refreshList() {
        this.retrieveRecs();
        this.activeIndex = -1;
      },
      async removeAllRecs() {
        if (confirm("Bạn muốn xóa tất cả Tin tuyển dụng?")) {
          try {
            await RecDService.deleteAll();
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
  