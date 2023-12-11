<template>
  <a href="http://localhost:3000/auth/google"  class="login-by-google">
    <div class="d-flex justify-content-center align-items-center">
      Đăng nhập bằng <img src="../../assets/img/icons/google.png" alt="" />
    </div>
</a>
</template>

<script>
import UserService from "../../services/user.service";
export default {
    data() {
        return {
            // userGG: {}
        }
    },
    methods: {
    // async loginbyGoogle() {
    //   this.userGG= await UserService.loginbygoogle();
    // //   localStorage.setItem("users", JSON.stringify(this.userGG.user));
    //   console.log(this.userGG)
    //   console.log("123")
    // }
},
mounted() {
    // this.loginbyGoogle();    
}
}
</script>
<style scoped>
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
