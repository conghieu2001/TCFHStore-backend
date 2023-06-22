<template>
  <main>
    <div class="pt-3 containner">
      <div class="row">
        <div class="col-3 left-content">
          <div class="info-admin d-flex align-items-baseline">
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
              <router-link to="/orders">
                <i class="fas fa-money-bill-wave"></i>
                <span>Đơn Hàng</span>
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
        <div class="col-8 right-content pt-4">
          <div>
            <div class="homepage-title">
              <h5>Doanh Thu</h5>
            </div>
            <hr />
            <div class="row contentDoanhThu">
              <div>
                <p class="textF">Doanh thu theo ngày</p>
                <div>
                  <input class="input-day-month-year" type="date" src="" alt="" v-model="date" />
                  <button class="custom-btn btn-2 ml-1"
                    @click="calculateDoanhThuNgay({ day: date })"
                    type="submit"
                  >
                    <i class="fas fa-check" style="color: #ffffff"></i>
                  </button>
                </div>
              </div>
              <div>
                <p class="textF">Doanh thu theo tháng</p>
                <div>
                  <input class="input-day-month-year" type="month" src="" alt="" v-model="date" />
                  <button class="custom-btn btn-2 ml-1"
                    @click="calculateDoanhThuThang({ month: date })"
                    type="submit"
                  >
                    <i class="fas fa-check" style="color: #ffffff"></i>
                  </button>
                </div>
              </div>
              <div>
                <p class="textF">Doanh thu theo năm</p>
                <div>
                  <select @change="calculateDoanhThuNam" class="select-year">
                    <option selected>Năm</option>
                    <option value="2022">Năm 2022</option>
                    <option value="2023">Năm 2023</option>
                  </select>
                  <!-- <button @click="calculateDoanhThuNam({year: this.value})" type="submit"><i class="fas fa-check" style="color: #ffffff;"></i></button> -->
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center kqSearch">
              <p class="textF ketqua">Kết quả:</p>
              <div class="tongdoanhthu">{{ doanhthuNTN }} VND</div>
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
import PayService from "../../services/pay.service";
export default {
  data() {
    return {
      UserName: "",
      arrayPayCount: [],
      doanhthu: "",
      date: Date,
      doanhthuNTN: 0,
    };
  },
  methods: {
    getUserName() {
      const user = JSON.parse(localStorage.getItem("users"));
      if (localStorage.getItem("users") != null) {
        this.UserName = user.name;
      }
    },
    async payCount() {
      this.arrayPayCount = await PayService.getAll();
    },
    async getDoanhThu() {
      try {
        this.doanhthu = await PayService.getDoanhThu();
      } catch (error) {
        console.log(error);
      }
    },
    async calculateDoanhThuNgay(data) {
      try {
        this.doanhthuNTN = await PayService.getDoanhThuDMY(data);
        console.log(this.doanhthuNTN, "day");
      } catch (error) {
        console.log(error);
      }
    },
    async calculateDoanhThuThang(data) {
      try {
        this.doanhthuNTN = await PayService.getDoanhThuDMY(data);
        console.log(this.doanhthuNTN, "month");
      } catch (error) {
        console.log(error);
      }
    },
    async calculateDoanhThuNam(e) {
      // console.log(e.target.options.selectedIndex)
      // const Vyear = 0;
      try {
        this.doanhthuNTN = await PayService.getDoanhThuDMY({
          year: e.target.options.selectedIndex,
        });
        console.log(this.doanhthuNTN, "year");
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.payCount();
    this.getDoanhThu();
    this.getUserName();
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
.fa-comment,
.fa-map {
  color: #6e768e;
}
.homepage-title h5 {
  color: #6e768e;
}
.contentDoanhThu {
  display: flex;
  justify-content: space-around;
  height: 150px;
  /* text-align: center; */
  margin-top: 50px;
}
a {
  list-style: none;
  color: #000;
}

.contentDoanhThu > a {
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
.kqSearch {
  height: 250px;
}
.textF {
  font-family: Tahoma, sans-serif;
  color: #4c4e54;
  font-size: 16px;
  padding-left: 5px;
}
.ketqua {
  font-size: 18px;
  padding-right: 10px;
}
.tongdoanhthu {
  font-size: 18px;
  color: rgb(192, 28, 28);
}
.btn-2 {
  background: rgb(251,33,117);
    background: linear-gradient(0deg, rgba(251,33,117,1) 0%, rgba(234,76,137,1) 100%);
  border: none;
  
}
.btn-2:before {
  height: 0%;
  width: 2px;
}
.btn-2:hover {
  box-shadow:  4px 4px 6px 0 rgba(255, 255, 255, 0.5),
              -4px -4px 6px 0 rgba(236, 238, 241, 0.5), 
    inset -4px -4px 6px 0 rgba(244, 218, 246, 0.2),
    inset 4px 4px 6px 0 rgba(233, 187, 233, 0.4);
}
.input-day-month-year {
  height: 26px;
}
.select-year {
  width: 150px;
  height: 26px;
}
</style>
