<template>
  <main>
    <div class="wrapper">
      <form class="form-signin" @submit.prevent="submitLogin()">
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
          <!-- <div class="valid-feedback">
            Bạn đã nhập Email, vui lòng xem lại thông tin trước khi submit!
          </div> -->
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
          <!-- <div class="valid-feedback">
            Bạn đã nhập mật khẩu, vui lòng xem lại thông tin trước khi submit!
          </div> -->
          <div class="invalid-feedback">
            {{ errors.password }}
          </div>
        </div>
        <button class="button-submit" type="submit">Đăng nhập</button>
        
        <div @click="gotoGG" class="login-by-google"><div class="d-flex justify-content-center align-items-center">Đăng nhập bằng <img src="../../assets/img/icons/google.png" alt=""></div></div>
          <router-link to="signup">
          <p>Đăng kí</p>
        </router-link>
        
      </form>
    </div>
  </main>
</template>
<script>
import UserService from "@/services/user.service";
import UserService2 from "@/services/user.service2";
export default {
  data() {
    return {
      user: {
        email: "",
        matkhau: "",
      },
      errors: {
        email: "",
        password: "",
        valid_email: false,
        valid_password: false,
      },
      userGG: '',
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
      if (this.isValidateFormLogin()) {
        const resultLogin = await UserService.login(this.user);
        localStorage.setItem("users", JSON.stringify(resultLogin.user));
        // console.log(JSON.parse(localStorage.getItem("users")))
        if (JSON.parse(localStorage.getItem("users")) != null) {
          if (resultLogin.user.quyen === 1) {
            alert(resultLogin.message);
            this.reloadPage();
          } else if (resultLogin.user.quyen === 0) {
            // localStorage.setItem("users", JSON.stringify(resultLogin.user));
            alert("Bạn đăng nhập thành công với tư cách Admin!");
            // location.reload();
            this.$router.push({ name: "HomeAdmin" });
          } else if (resultLogin.user.quyen === 2) {
            localStorage.removeItem('users');
            alert("Tài khoản của bạn đã bị khóa!");
            location.reload();
          }
        } else {
          alert("Bạn đã nhập sai tài khoản hoặc mật khẩu!");
          localStorage.removeItem("users");
          location.reload();
        }
        // }
      }
    },
    reloadPage() {
      window.location.reload();
    },
    async gotoGG() {
       location.href ="http://localhost:3000/auth/google";
    },
  },
  mounted() {
    // this.testGet();
  }
};
</script>
<style scoped>
@import "@/assets/login";
.login-by-google div{
  background-color: #ffffff;
    width: 80%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid gray;
    color: #000; 
    margin-left: 45px;
    margin-bottom: 15px;
}
a {
  text-decoration: none;
}
.login-by-google>div:hover {
  background-color: rgb(202, 241, 251);
}
.login-by-google img {
  width: 40px;
  height: 40px;
}
</style>
