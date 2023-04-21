<template>
  <main>
    <div class="pt-3 containner">
      <div class="row">
        <div class="col-3 left-content">
          <div class="info-admin d-flex align-items-baseline">
            <div class="pr-2">
              <i class="far fa-grin-hearts"></i>
            </div>
            <div v-for="admin in admins" :key="admin._id">
              <h6>{{ admin.name }}</h6>
            </div>
          </div>
          <hr />
          <ul>
            <li>
              <router-link to="/">
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
              <a>
                <i class="fas fa-money-bill-wave"></i>
                <span>Đơn Hàng</span>
              </a>
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
          </ul>
        </div>
        <div class="col-8 right-content pt-4">
          <div>
            <div class="homepage-title">
              <h5>Trang Chủ</h5>
            </div>
            <hr />
            <div class="row content">
              <router-link to="/items" class="showItem">
                <div>
                  <span>SẢN PHẨM</span>
                  <P>... sản phẩm</P>
                </div>
              </router-link>
              <router-link to="/posts" class="showPosts">
                <div>
                  <span>BÀI VIẾT</span>
                  <P>... bài viết</P>
                </div>
              </router-link>
              <router-link to="" class="showOrders">
                <div>
                  <span>ĐƠN HÀNG</span>
                  <P>... đơn hàng</P>
                </div>
              </router-link>
              <router-link to="" class="showSales">
                <div>
                  <span>TỔNG DOANH THU</span>
                  <P>...</P>
                </div>
              </router-link>
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
import AdminService from "@/services/admin.service";
export default {
  data() {
    return {
      admins: [],
    };
  },
  methods: {
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
<style>
main {
  background-color: #f5f5f5;
  min-height: 640px;
}
.containner {
  padding-left: 100px;
}
.left-content,
.right-content {
  background-color: #fff;
  height: 590px;
  box-shadow: 20px -20px 60px #d9d9d9, -20px 20px 60px #ffffff;
}
.right-content {
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
.fa-money-bill-wave,
.fa-folder-open,
.fa-user-plus,
.fa-map {
  color: #6e768e;
}
.homepage-title h5 {
  color: #6e768e;
}
.content {
  display: flex;
  justify-content: space-around;
  height: 400px;
  /* text-align: center; */
  margin-top: 50px;
}
a {
  list-style: none;
  color: #000;
}

.content > a {
  width: 210px;
  height: 70px;
  border-radius: 3px;
  box-shadow: 5px 5px 100px #e3e3e3, -5px -5px 100px #ffffff;
}
.showItem:hover,
.showOrders:hover,
.showSales:hover,
.showPosts:hover {
  color: #000;
  list-style: none;
  text-decoration: none;
  /* border-bottom: 1px solid #000;
    transition: width 2s ease-in-out; */
}
.showItem {
  border-left: 7px solid rgb(9, 9, 206);
  padding-left: 10px;
  padding-top: 10px;
}
.showItem span {
  font-size: 11px;
  color: rgb(9, 9, 206);
}
.showItem p {
  font-weight: bold;
  padding-left: 15px;
}
.showPosts {
  border-left: 7px solid rgb(6, 163, 56);
  padding-left: 10px;
  padding-top: 10px;
}
.showPosts span {
  font-size: 11px;
  color: rgb(6, 163, 56);
}
.showPosts p {
  font-weight: bold;
  padding-left: 15px;
}
.showOrders {
  border-left: 7px solid rgb(201, 182, 13);
  padding-left: 10px;
  padding-top: 10px;
}
.showOrders span {
  font-size: 11px;
  color: rgb(201, 182, 13);
}
.showOrders p {
  font-weight: bold;
  padding-left: 15px;
}
.showSales {
  border-left: 7px solid rgb(225, 19, 115);
  padding-left: 10px;
  padding-top: 10px;
}
.showSales span {
  font-size: 11px;
  color: rgb(225, 19, 115);
}
.showSales p {
  font-weight: bold;
  padding-left: 15px;
}
</style>
