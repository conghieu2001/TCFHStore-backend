<script>
import RecService from "../../services/requiment.service";
export default {
  props: {
    recs: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  data() {},
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
    async deleteRec(id) {
      if (confirm("Bạn muốn xóa Bài tuyển dụng này?")) {
        try {
          await RecService.delete(id);
          // this.$router.push({ name: "ShowAllPost" });
          location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
<template>
  <div class="grid-container">
    <div class="row">
      <div class="coldis col-6 mb-3" v-for="(rec, index) in recs" :key="index">
        <div class="hiring-block">
          <div class="hiring-img">
            <img :src="rec.image" alt="" />
          </div>
          <div class="hiring-info">
            <h3 class="pt-4">{{ rec.title }}</h3>
            <ul>
              <li>{{ rec.description1 }}</li>
              <li>{{ rec.description2 }}</li>
              <li>{{ rec.description3 }}</li>
            </ul>
            <div class="d-flex justify-content-center edit-delete">
              <router-link
                :to="{
                  name: 'rec.edit',
                  params: { id: rec._id },
                }"
              >
                <button class="btn edit-button">
                  <i class="fas fa-edit"></i>
                </button>
              </router-link>
              <button
                type="button"
                class="btn delete-button ml-2"
                @click="deleteRec(rec._id)"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hiring-img {
  width: 400px;
  height: 265px;
}
.grid-container {
  padding: 20px 155px;
  /* background: url(assets/backgrounds/brg1.webp) top center/cover no-repeat; */
}
.hiring-img img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.hiring-info {
  background-color: rgb(237, 113, 59);
  height: 250px;
  width: 400px;
}
.hiring-info h3 {
  font-size: 22px;
  color: #fff;
  padding-left: 10px;
}
.hiring-info ul {
  margin-left: 20px;
  /* padding-top: 15px; */
}
.hiring-info ul > li {
  padding-top: 15px;
  color: #fff;
  font-size: 16px;
}
.job-show-all {
  background-color: #fff;
  width: 200px;
  height: 50px;
  text-align: center;
  padding-top: 12px;
  color: #000;
  border-radius: 4px;
  margin-left: 310px;
  cursor: pointer;
  font-size: 18px;
  border: 1px solid gray;
}
.job-show-all:hover {
  background-color: gray;
  color: #fff;
}
li {
  list-style: disc;
}
/* .edit-delete *{
  display: none;
} */
.edit-delete {
  width: 100%;
  height: 50px;
  background-color: rgb(252, 234, 227);
  margin-top: 25px;
  /* display: none; */
}
.edit-button {
  margin-top: 6px;
}
.edit-button:hover i {
  color: #6d5d6e;
}
.delete-button:hover i {
  color: #ce5959;
}
</style>
