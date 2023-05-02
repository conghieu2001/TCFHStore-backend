<template>
  <div>
    <div class="back-show">
      <router-link to="/items">
        <div class="back-show-items">
          <i class="fa-solid fa-chevron-left"></i> Quay lại
        </div>
      </router-link>
    </div>
    <div v-if="item" class="page container">
    <h4>Hiệu chỉnh Sản phẩm</h4>
    <ItemForm class="pt-3 pb-3" :item="item.product" @submit:item="updateItem" />
    <!-- <p>{{ message }}</p> -->
  </div>
  </div>
</template>
<script>
import ItemForm from "@/components/admin/ItemForm.vue";
import ItemService from "@/services/item.service";
export default {
  components: {
    ItemForm,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      item: null,
      message: "",
    };
  },
  methods: {
    async getItem(id) {
      try {
        this.item = await ItemService.get(id);
        console.log(this.item)
      } catch (error) {
        console.log(error);
        this.$router.push({
          name: "notfound",
          params: {
            pathMatch: this.$route.path.split("/").slice(1),
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },
    async updateItem(data) {
      try {
        await ItemService.update(this.item.product._id, data);
  
        
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getItem(this.id);
    this.message = "";
  },
};
</script>
<style scoped>
.page {
  width: 550px;
  /* margin-top: 50px; */
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.page h4 {
  padding-top: 20px;
}
.back-show {
  margin-left: 200px;
  margin-top: 30px;
}
.back-show-items{
  width: 100px;
  background-color: rgb(216, 221, 221);
  height: 50px;
  padding-left: 10px;
  padding-top: 10px;
  border-radius: 5px;
}
.back-show:hover .back-show-items {
  font-weight: bold;
  text-decoration: none;
}
</style>
