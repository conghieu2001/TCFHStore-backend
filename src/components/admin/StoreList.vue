<script>
import StoreService from "../../services/store.service";
export default {
  props: {
    stores: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  data() { },
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
    async deleteStore(id) {
      if (confirm("Bạn muốn xóa Bài viết này?")) {
        try {
          await StoreService.delete(id);
          // this.$router.push({ name: "ShowAllPost" });
          location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
};
</script>
<template>
  <div class="store-detail container">
    <div class="row">
      <div class="col-5 pb-2 boxSh" v-for="(store, index) in stores" :key="index">
        <div class="store-img mt-2">
          <img :src=store.image alt="">
        </div>
        <div class="store-info">
          <h5>{{store.name}}</h5>
          <div class="store-info-social d-flex align-items-baseline">
            <h6>Theo dõi tại: </h6>
            <a href=""><i class="fab fa-facebook-square"></i></a>
            <a href=""><i class="fab fa-instagram-square"></i></a>
            <a href=""><i class="fab fa-twitter-square"></i></a>
          </div>
          <hr>
          <p>{{store.address}}</p>
          <p>{{ store.timeStart }} - {{ store.timeEnd }}</p>
          <div class="d-flex justify-content-center edit-delete">
            <router-link
                :to="{
                  name: 'store.edit',
                  params: { id: store._id },
                }"
              >
                <button class="btn edit-button">
                  <i class="fas fa-edit"></i>
                </button>
              </router-link>
              <button
                type="button"
                class="btn delete-button ml-2"
                @click="deleteStore(store._id)"
              >
                <i class="fas fa-trash"></i>
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.boxSh {
  box-shadow: 0px 0px 5px 5px #ececec;
  border-radius: 5px;
  margin-left: 50px;
}
.page-store-banner {
  position: relative;
}

.page-store-banner img {
  height: 180px;
}

.page-store-banner h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 0 60px;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 28px;
  color: #fff;
}

li {
  list-style: none;
}

.store-list {
  padding-left: 60px;
}

.store-list p {
  /* padding-left: 30px; */
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}

.store-list li {
  padding-bottom: 7px;
  margin-left: -30px;
  font-weight: 400;
}

.store-list li:hover {
  color: #D46B08;
  font-weight: 600;
}

.active {
  color: #D46B08;
  font-weight: 600 !important;
}

.store-detail h4 {
  font-weight: 600;
  /* font-size: 20px; */
  font-family: 'SF Pro Display', sans-serif;
  margin-bottom: 20px;
}

.store-img {
  width: 425px;
  height: 240px;
  overflow: hidden;
}

.store-img img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: all 1s;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.store-img img:hover {
  overflow: hidden;
  transform: scale(1.1) rotate(0deg);
  -webkit-transform: scale(1.1) rotate(0deg);
}

.store-info h5 {
  font-size: 18px;
  margin: 8px 0 12px;
}

.store-info-social i {
  padding-left: 10px;
}

.store-info-social a:hover .fa-facebook-square {
  color: blue;
}

.store-info-social a:hover .fa-instagram-square {
  color: rgb(255, 0, 136);
}

.store-info-social a:hover .fa-twitter-square {
  color: rgb(126, 231, 221);
}

.store-info hr {
  height: 3px !important;
  border: 1px solid #000;
  width: 425px;
}
.edit-button:hover i {
  color: #93ab33;
}
.delete-button:hover i {
  color: #ce5959;
}
.edit-delete i{
  font-size: 22px;
}
</style>
