<template>
  <main>
    <div class="wrapper">
      <Form
        class="form-signin"
        @submit="createAccount()"
        :validation-schema="accountFormSchema"
      >
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

        <div class="form-group">
          <Field
            v-model="user.name"
            name="name"
            type="text"
            class="form-control mb-3"
            placeholder="Họ tên"
            required
          />
          <ErrorMessage name="name" class="error-feedback" />
        </div>
        <!-- <div class="form-group">
          <Field
            v-model="user.sdt"
            name="sdt"
            type="text"
            class="form-control mb-3"
            placeholder="Số điện thoại"
            required
          />
          <ErrorMessage name="sdt" class="error-feedback" />
        </div> -->
        <div class="form-group">
          <Field
            v-model="user.email"
            name="email"
            type="text"
            class="form-control mb-3"
            placeholder="Email"
            required
          />
          <ErrorMessage name="email" class="error-feedback" />
        </div>
        <!-- <div class="form-group">
          <Field
            v-model="user.gioitinh"
            name="gioitinh"
            type="text"
            class="form-control mb-3"
            placeholder="Giới tính"
          />
          <ErrorMessage name="gioitinh" class="error-feedback" />
        </div> -->
        <!-- <div class="form-group">
          <Field
            v-model="user.ngaysinh"
            name="ngaysinh"
            type="date"
            class="form-control mb-3"
            placeholder="Ngày sinh"
            required
          />
          <ErrorMessage name="ngaysinh" class="error-feedback" />
        </div> -->
        <div class="form-group">
          <Field
            v-model="user.password"
            name="password"
            type="password"
            class="form-control mb-3"
            placeholder="Password"
            required
          />
          <ErrorMessage name="password" class="error-feedback" />
        </div>

        <button class="button-submit" type="submit">Đăng kí tài khoản</button>
        <router-link to="/Login">
          <p>Đăng nhập nếu bạn có tài khoản!</p>
        </router-link>
      </Form>
    </div>
  </main>
</template>
<script>
import UserService from "@/services/user.service";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const accountFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Họ tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      email: yup
        .string()
        .email("E-mail không hợp lệ.")
        .max(50, "E-mail tối đa 50 ký tự."),
      // sdt: yup
      //   .string()
      //   .matches(
      //     /((09|03|07|08|05)+([0-9]{8})\b)/g,
      //     "Số điện thoại không hợp lệ."
      //   ),
      // gioitinh: yup
      //   .string()
      //   .required("Giới tính Nam or Nữ")
      //   .min(2, "aaa")
      //   .max(5, "aaa"),
      // ngaysinh: yup
      //   .string()
      //   .required("mm/dd/yyyy chưa hợp lệ!"),
      password: yup
        .string()
        .required("Mật khẩu phải có it nhất 8 kí tự.")
        .min(8)
        .max(20, "Mật khẩu nhiều nhất 20 ký tự."),
    });
    return {
      accountFormSchema,
      user: {},
    };
  },
  methods: {
    async createAccount() {
      try {
        const a = await UserService.create(this.user);
        alert("Chúc mừng bạn đã đăng kí tài khoản thành công!");
        this.$router.push({ name: "Login" });
        // console.log(a);
        // alert(a);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
@import "@/assets/login";
.error-feedback {
  color: red;
  font-weight: bold;
  padding-left: 50px;
}
</style>
