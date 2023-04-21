<template>
  <div id="wapper">
    <div class="container d-flex justify-content-between pt-3 pb-2">
      <div class="imglogo">
        <router-link to="/">
          <img
            src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/logo-the-coffee-house-chieu-dai.png"
            alt=""
          />
        </router-link>
      </div>
      <div class="d-flex align-items-baseline" @click="toggleV" v-for="admin in admins" :key="admin._id">
        <p class="mr-2 aaaa">{{ admin.name }}</p>
        <span class="click-logout"><i class="fas fa-chevron-down"></i></span>
      </div>
      <div v-if="a == 1" class="logout-admin pt-3">
        <a class="d-flex align-items-baseline justify-content-center" href="">
          <i class="fas fa-sign-out-alt"></i>
          <p>Logout</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import AdminService from "@/services/admin.service";
export default {
  data() {
    return { a: -1, admins: []};
  },
  methods: {
    toggleV() {
      this.a = !this.a;
    },
    async getDataAdmin() {
      try {
        this.admins = await AdminService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getDataAdmin();
  },
};
</script>

<style scoped>
#wapper {
  background-color: #f5f5f5;
}
.imglogo {
  width: 200px;
  height: 20px;
}
.imglogo img {
  width: 100%;
  height: 100%;
}
.logout-admin {
  width: 150px;
  height: 70px;
  background-color: #fff;
  border: 1px solid gray;
  position: absolute;
  top: 50px;
  right: 200px;
  z-index: 11;
  /* opacity: 0; */
}
.logout-admin a {
  color: #000;
  cursor: pointer;
}
.click-logout:hover .aaaa {
  display: block;
  opacity: 1;
}
</style>
