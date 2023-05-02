<template>
  <main>
    <div class="wrapper">
      <form class="form-edit-user" @submit.prevent="updateUser()">
        <div class="pl-4">
          <h2 class="pt-4 pb-2">Sửa hồ sơ</h2>
          <hr />
          <div class="user-image d-flex">
            <h5>Ảnh hồ sơ</h5>
            <div class="user-image-edit">
              <img :src="this.UserById.image" alt="" />
              <input type="text" v-model="this.UserById.image" name="image"/>
            </div>
          </div>
          <hr />
          <div class="user-name d-flex">
            <h5 class="">Tên</h5>
            <input class="pl-3" type="text" v-model="this.UserById.name" name="name"/>
          </div>
          <hr />
          <div class="user-email d-flex">
            <h5>Email</h5>
            <input class="pl-3" type="text" v-model="this.UserById.email" disabled />
          </div>
          <hr />
          <div class="user-sdt d-flex">
            <h5>SĐT</h5>
            <input class="pl-3" type="text" v-model="this.UserById.sdt" name="sdt"/>
          </div>
          <hr />
          <div class="user-ngaysinh d-flex">
            <h5>Ngày sinh</h5>
            <input class="pl-3 pr-3" type="date" v-model="this.UserById.ngaysinh" name="ngaysinh"/>
          </div>
          <hr />
          <div class="submit-user-edit">
            <button type="submit">Lưu</button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>
<script>
import UserService from "@/services/user.service";
import { warn } from 'vue';
export default {
  data() {
    return {
      InfoUser: '',
      UserById: '',
    };
  },
  methods: {
    getUser() {
      const user = JSON.parse(localStorage.getItem("users"));
      if (localStorage.getItem("users") != null) {
        this.InfoUser = user;
      }
    },
    async getUserById(id) {
      try {
        this.UserById = await UserService.getUserById(id);
        // console.log(this.UserById)
      } catch (error) {
        console.log(error)
      }
    },
    async updateUser() {
      try {
        // console.log(this.UserById._id, this.UserById)
        const a = await UserService.update(this.UserById._id, this.UserById);
        // console.log('Yeu tuyen')
        this.InfoUser = a.infoAfterUpdate;
         delete this.InfoUser.password;
        // console.log(this.InfoUser,'ddddddddddddddddddd');
        localStorage.setItem("users", JSON.stringify(this.InfoUser));

        location.reload();

      } catch(error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.getUser();
    // console.log(this.InfoUser)
    this.getUserById(this.InfoUser._id);
    // console.log(this.UserById, '123')
  },
};
</script>
<style scoped>
.wrapper {
  /* margin-top: 80px;
    margin-bottom: 80px; */
  padding: 50px 400px;
  /* background: #f0eeee; */
  background-image: url("https://cdn.tgdd.vn/mwgcart/orderhistory/images/bg.png");
  min-height: 550px;
}
.form-edit-user {
  width: 700px;
  height: 820px;
  background-color: #fff;
  border-radius: 10px;
}
.form-edit-user h2 {
  font-family: "IBM Plex Sans", ProximaNova, Arial, Tahoma, PingFangSC,
    sans-serif;
  font-weight: 600;
  font-size: 24px;
  /* padding-left: 20px; */
}
.form-edit-user div > h5 {
  font-family: "IBM Plex Sans", ProximaNova, Arial, Tahoma, PingFangSC,
    sans-serif;
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
}
.user-image-edit img {
  width: 120px;
  height: 120px;
  margin-left: 130px;
}
hr {
  margin-right: 20px;
}
.user-image-edit input {
  margin-top: 20px;
  margin-left: 60px;
  width: 360px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: rgba(22, 24, 35, 0.06);
}
.user-name input {
  margin-left: 100px;
  width: 360px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: rgba(22, 24, 35, 0.06);
}
.user-email input {
  margin-left: 85px;
  width: 360px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: rgba(22, 24, 35, 0.06);
}
.user-sdt input {
  margin-left: 95px;
  width: 360px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: rgba(22, 24, 35, 0.06);
}
.user-ngaysinh input {
  margin-left: 50px;
  width: 360px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: rgba(22, 24, 35, 0.06);
}
.user-name,
.user-email,
.user-sdt,
.user-ngaysinh {
  height: 80px;
}
.submit-user-edit {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 50px;
}
.submit-user-edit button {
  width: 95px;
  height: 33px;
  border: none;
}
</style>
