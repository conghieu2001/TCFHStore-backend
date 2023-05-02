<template>
  <div id="wapper" class="pb-2">
    <div class="container d-flex justify-content-between pt-3 pb-2">
      <div class="imglogo">
        <router-link to="/admin">
          <img
            src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/logo-the-coffee-house-chieu-dai.png"
            alt=""
          />
        </router-link>
      </div>
      <div class="d-flex align-items-baseline name-logout" @click="toggleV">
        <p class="mr-2 aaaa">{{ this.UserName }}</p>
        <span class="click-logout"><i class="fas fa-chevron-down"></i></span>
      </div>
      <div v-if="a == 1" class="logout-admin pt-2" @click="logOutUser()">
        <div class="d-flex align-items-baseline justify-content-center" href="">
          <i class="fas fa-sign-out-alt"></i>
          <p>Logout</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { a: -1, UserName: '',};
  },
  methods: {
    toggleV() {
      this.a = !this.a;
    },
    getUserName() {
      const user = JSON.parse(localStorage.getItem('users'))
      if (localStorage.getItem('users') != null) {
        this.UserName = user.name;
      }
    },
    logOutUser() {
      const user = JSON.parse(localStorage.getItem('users'))
      if (localStorage.getItem('users') != null) {
        localStorage.removeItem('users');
        this.isLogin = false;
        this.$router.push({ name: "Home" });
        // location.reload();
      }
    },
  },
  mounted() {
    this.getUserName();
  }
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
  width: 120px;
  height: 50px;
  background-color: #fff;
  border: 1px solid gray;
  position: absolute;
  top: 50px;
  right: 200px;
  z-index: 11;
  /* opacity: 0; */
  cursor: pointer;
}

.logout-admin a {
  color: #000;
  cursor: pointer;
}
.click-logout:hover .aaaa {
  display: block;
  opacity: 1;
}
.name-logout {
  cursor: pointer;
}
</style>
