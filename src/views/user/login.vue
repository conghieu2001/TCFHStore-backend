<template>
  <main>
    <div class="wrapper">
      <form class="form-signin" @submit="isValidateFormLogin()">
        <img
          class="login-banner"
          src="https://order.thecoffeehouse.com/_nuxt/img/thumbnail-login-pop-up.e10d0dd.png"
          alt=""
        />
        <p>Chào mừng bạn đến với</p>
        <div class="login-logo">
          <img
            class=""
            src="https://order.thecoffeehouse.com/_nuxt/img/logo-black.44900f6.svg"
            alt=""
          />
        </div>
        <div>
          <input
            type="email"
            class="form-control mb-3"
            name="email"
            placeholder="Email"
            v-model="this.user.email"
            @blur="isValidateFormLogin()"
            v-bind:class="{
              'is-invalid': errors.email,
              'is-valid': errors.valid_email,
            }"
            required
          />
          <div class="valid-feedback">
            Bạn đã nhập Email, vui lòng xem lại thông tin trước khi submit!
          </div>
          <div class="invalid-feedback">
            {{ errors.email }}
          </div>
        </div>
        <div>
          <input
            type="password"
            class="form-control mb-3"
            name="password"
            placeholder="Password"
            v-model="this.user.password"
            v-bind:class="{
              'is-invalid': errors.password,
              'is-valid': errors.valid_password,
            }"
            required
          />
          <div class="valid-feedback">
            Bạn đã nhập mật khẩu, vui lòng xem lại thông tin trước khi submit!
          </div>
          <div class="invalid-feedback">
            {{ errors.password }}
          </div>
        </div>
        <button class="button-submit" type="submit">Đăng nhập</button>
        <router-link to="signup">
          <p>Đăng kí</p>
        </router-link>
      </form>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      user: {},
      errors: {
        email: "",
        password: "",
        valid_email: false,
        valid_password: false,
      },
    };
  },
  methods: {
    isValidateFormLogin() {
      let isValid = true;
      this.errors = {
        email: "",
        password: "",
      };
      // email hợp lệ
      if (
        !this.user.email ||
        !this.user.email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.errors.email = "Bạn vui lòng nhập email hợp lệ!";
        isValid = false;
      } else {
        this.errors.valid_email = true;
      }
      // địa chỉ
      if (!this.user.password) {
        this.errors.password = "Bạn vui lòng nhập mật khẩu!";
        isValid = false;
      } else {
        this.errors.valid_password = true;
      }
      return isValid;
    },
    // ham submitlogin
    async submitLogin() {
      this.isValidateFormLogin();
      // console.log(this.isValidateForm())
      if (this.isValidateFormLogin()) {
        // console.log(this.user);
        const resultLogin = await AccountService.loginAccount(this.user);
        // console.log(resultLogin.user);
        localStorage.setItem("Users", JSON.stringify(resultLogin.user));
        // console.log(JSON.parse(localStorage.getItem('Users')))
        alert(resultLogin.message);
      }
      // else {
      //     alert('Bạn nhập đầy đủ thông tin');
      // }
    },
  },
};
</script>
<style scoped>
@import "@/assets/login";
</style>
