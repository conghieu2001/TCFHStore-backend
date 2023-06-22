<template>
  <div>
    <button class="btn btn-secondary clickAddUser mb-3" @click="clickAddUser">
      <i class="fa-solid fa-plus" style="color: #ffffff"></i>
    </button>
    <button
      class="btn btn-secondary clickUnAddUser mb-3"
      @click="clickUnAddUser"
    >
      <i class="fa-solid fa-angle-down" style="color: #ffffff"></i>
    </button>
    <form class="formsignin" @submit.prevent="createAccount()">
      <div class="login-logo">
        <img
          class="pb-3"
          src="https://order.thecoffeehouse.com/_nuxt/img/logo-black.44900f6.svg"
          alt=""
        />
      </div>

      <div class="form-group">
        <input
          v-model="user.name"
          name="name"
          type="text"
          class="form-control mb-3"
          placeholder="Họ tên"
          required
        >
      </div>
      <div class="form-group">
        <input
          v-model="user.email"
          name="email"
          type="text"
          class="form-control mb-3"
          placeholder="Email"
          required
        >
      </div>
      <div class="form-group">
        <input
          v-model="user.password"
          name="password"
          type="password"
          class="form-control mb-3"
          placeholder="Password"
          required
        >
      </div>
      <button class="button-submit" type="submit">Đăng kí tài khoản</button>
    </form>
  </div>
</template>
<script>
import UserService from "@/services/user.service";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    clickAddUser() {
      document.querySelector(".formsignin").style.display = "block";
      document.querySelector(".clickAddUser").style.display = "none";
      document.querySelector(".clickUnAddUser").style.display = "block";
    },
    clickUnAddUser() {
      document.querySelector(".formsignin").style.display = "none";
      document.querySelector(".clickAddUser").style.display = "block";
      document.querySelector(".clickUnAddUser").style.display = "none";
    },
    async createAccount() {
      try {
        await UserService.create(this.user);
        alert("Tài khoản được tạo thành công!");
        location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.login-logo {
  text-align: center;
}
input {
  width: 50%;
  margin: 0 auto;
}
.button-submit {
  background-color: #fd7e14;
  width: 50%;
  height: 35px;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  margin-left: 220px;
  margin-bottom: 15px;
}
.button-submit:hover {
  background-color: rgb(66, 234, 122);
}
.formsignin,
.clickUnAddUser {
  display: none;
}
</style>
