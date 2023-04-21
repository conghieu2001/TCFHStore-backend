<template>
  <div>
    <div class="back-show">
      <router-link to="/recruitments">
        <div class="back-show-items">
          <i class="fa-solid fa-chevron-left"></i> Quay lại
        </div>
      </router-link>
    </div>
    <div v-if="rec" class="page container">
    <h4>Hiệu chỉnh Tin tuyển dụng</h4>
    <RecForm class="pt-3 pb-3" :rec="rec" @submit:rec="updateRec" />
    <!-- <p>{{ message }}</p> -->
  </div>
  </div>
</template>
<script>
import RecForm from "@/components/admin/recForm.vue";
import RecService from "@/services/requiment.service";
export default {
  components: {
    RecForm,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      rec: null,
      message: "",
    };
  },
  methods: {
    async getRec(id) {
      try {
        this.rec = await RecService.get(id);
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
    async updateRec(data) {
      try {
        await RecService.update(this.rec._id, data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getRec(this.id);
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
