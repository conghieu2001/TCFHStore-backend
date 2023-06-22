<template>
  <main>
    <div class="pt-3 containner">
      <div class="row">
        <div class="col-3 left-content">
          <div class="info-admin d-flex">
            <div class="pr-2">
              <i class="far fa-grin-hearts"></i>
            </div>
            <div>
              <h6>{{ this.UserName }}</h6>
            </div>
          </div>
          <hr />
          <ul>
            <li>
              <router-link to="/admin">
                <i class="fas fa-home"></i>
                <span>Dashboard</span>
              </router-link>
            </li>
            <li>
              <router-link to="/items">
                <i class="fas fa-list"></i>
                <span>Danh Mục Sản Phẩm</span>
              </router-link>
            </li>
            <li>
              <router-link to="/promotion">
                <i class="fas fa-ticket"></i>
                <span>Khuyến Mãi</span>
              </router-link>
            </li>
            <li>
              <router-link to="/posts">
                <i class="fas fa-folder-open"></i>
                <span>Bài Viết</span>
              </router-link>
            </li>
            <li>
              <router-link to="/recruitments">
                <i class="fas fa-user-plus"></i>
                <span>Tuyển Dụng</span>
              </router-link>
            </li>
            <li>
              <router-link to="/stores">
                <i class="fas fa-map"></i>
                <span>Cửa Hàng</span>
              </router-link>
            </li>
            <li>
              <router-link to="/comments">
                <i class="fa-solid fa-comment"></i>
                <span>Bình Luận</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-8 right-contenttt pt-4">
          <div class="content-right-promo">
            <div class="homepage-title">
              <h5>Khuyễn Mãi</h5>
            </div>
            <hr />
            <div class="add-ticket d-flex align-items-baseline"><p>Tạo mã khuyến mãi:</p>
              <router-link to="/promo/add" class="ml-2">
                <img src="../../assets/img/icons/ticket.png" alt="">
              </router-link>
            </div>
            <div class="d-flex">
              <div class="mt-4 mb-3">
                <div
                  class="magiamgia"
                  v-for="voucher in vouchers"
                  :key="voucher._id"
                >
                  <div class="d-flex justify-content-between">
                    <div class="d-flex pl-5">
                      <img src="../../assets//img/icons/voucher.png" alt="" />
                      <div class="ml-2">
                        <h6 class="mb-1">{{ voucher.description }}</h6>
                        <p>Số lượng: {{ voucher.quantity }}</p>
                      </div>
                    </div>
                    <div class="pr-5" @click="deletePromo(voucher._id)">
                      <i class="fas fa-trash" style="color: #af4d18"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 mb-3 pl-5">
                <div
                  class="freeship"
                  v-for="freeship in freeships"
                  :key="freeship._id"
                >
                  <div class="d-flex justify-content-between">
                    <div class="d-flex justify-content-center">
                      <img src="../../assets//img/icons/freeship.png" alt="" />
                      <div class="ml-2">
                        <h6 class="mb-1">{{ freeship.description }}</h6>
                        <p>Số lượng: {{ freeship.quantity }}</p>
                      </div>
                    </div>
                    <div class="icon-trash" @click="deletePromo(freeship._id)">
                      <i class="fas fa-trash" style="color: #18afad"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="footer text-center">
            2022 - 2023 &copy; Simple theme by <a href="/">CongHieu</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import PromoService from "../../services/promo.service";
export default {
  data() {
    return {
      UserName: "",
      vouchers: [],
      freeships: [],
    };
  },
  methods: {
    getUserName() {
      const user = JSON.parse(localStorage.getItem("users"));
      if (localStorage.getItem("users") != null) {
        this.UserName = user.name;
      }
    },
    async getVoucher() {
      this.vouchers = await PromoService.getByMGG();
      // console.log(this.voucher)
    },
    async getFreeship() {
      this.freeships = await PromoService.getByFS();
      // console.log(this.freeship)
    },
    async deletePromo(id) {
      try {
        PromoService.delete(id);
        alert("Mã khuyến mãi đã bị xóa");
        location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getUserName();
    this.getVoucher();
    this.getFreeship();
  },
};
</script>
<style>
main {
  background-color: #f5f5f5;
  min-height: 640px;
}
.containner {
  padding-left: 100px;
}
.left-content,
.right-contenttt {
  background-color: #fff;
  min-height: 590px;
  box-shadow: 20px -20px 60px #d9d9d9, -20px 20px 60px #ffffff;
}
.right-contenttt {
  margin-left: 10px;
}
li {
  list-style: none;
  padding-top: 30px;
}
.info-admin {
  padding-top: 40px;
  /* padding-left: 60px; */
  justify-content: center;
  text-align: center;
}
li > a > i {
  margin-right: 15px;
}
li > a > span {
  color: #6e768e;
}
.fa-home,
.fa-list,
.fa-ticket,
.fa-folder-open,
.fa-user-plus,
.fa-comment,
.fa-map {
  color: #6e768e;
}
.homepage-title h5 {
  color: #6e768e;
}
.contenttt {
  display: flex;
  justify-content: space-around;
  min-height: 400px;
  /* text-align: center; */
  margin-top: 50px;
}
.magiamgia img,
.freeship img {
  width: 50px;
  height: 50px;
}
.magiamgia,
.freeship {
  padding: 10px;
  width: 468px;
}
.magiamgia {
  border-right: 1px solid gray;
}
.content-right-promo {
  min-height: 470px;
}
.icon-trash {
  padding-right: 80px;
}
.add-ticket img{
  width: 50px;
  height: 50px;
}
</style>
