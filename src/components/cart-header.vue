<template>
  <div class="top-bar pt-2 pb-2">
    <div class="container">
      <div class="col-12 d-flex justify-content-center top-bar-list">
        <div>
          <img src="../assets/img/icons/icon2.webp" />
          <span>310 Cửa hàng khắp cả nước</span>
        </div>
        <div>
          <img src="../assets/img/icons/icon3.webp" />
          <span>Đặt hàng: 0907580331</span>
        </div>
        <div>
          <img src="../assets/img/icons/icon4.webp" />
          <span>Freeship từ 75.000vnd</span>
        </div>
      </div>
    </div>
  </div>
  <header>
    <div class="container">
      <div class="row header">
        <div class="header__logo col-3">
          <router-link to="/"
            ><img
              src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/logo-the-coffee-house-chieu-dai.png"
              alt="Logo"
          /></router-link>
        </div>
        <div class="header__menu col-6">
          <ul>
            <li><router-link to="/menuItem" href="menu.html">Menu</router-link></li>
            <li><router-link to="/chuyennha">Chuyện Nhà</router-link></li>
            <li><router-link to="/store">Cửa Hàng</router-link></li>
            <li><router-link to="/tuyendung">Tuyển Dụng</router-link></li>
            <li><router-link to="/voucher">Khuyến Mãi</router-link></li>
          </ul>
        </div>
        <div class="header__icon pt-3 col-3 d-flex align-items-baseline">
          <div class="header__icon--search">
            <div>
              <input name="name" type="text" placeholder="Tìm kiếm" v-model="inputSearch" />
              <button @click="searchPage"><i class="fas fa-search"></i></button>
            </div>
          </div>
          <div class="header__icon--cart">
            <router-link to="/cart">
              <i class="fas fa-shopping-cart"></i>
              <span>{{ this.amountItem }}</span>
            </router-link>
          </div>
          <div class="header__icon--user">
            
              <i class="fas fa-user-alt" :class="{ 'dropdownHidden': isLoginUser }"></i>
              <img :src="this.UserImage" alt="" class="user-image" :class="{ 'dropdownHidden': !isLoginUser }">
            
            <div class="block-user">
              <i class="fas fa-sort-up fa-lg block-user-sort-up"></i>
              <div class="abcdf">
                <router-link to="/detail-user"><div class="dropdown-item name-account">{{ this.UserName }}</div></router-link>
                <div class="dropdown-item">
                  <i class="fa-sharp fa-solid fa-clock-rotate-left mr-2"></i>
                <router-link to="/userOrder">
                  Xem đơn hàng
                </router-link>
              </div>
              <div class="dropdown-item mb-2" :class="{ 'dropdownHidden': isLoginUser }"><router-link to="/Login"><i class="fa-solid fa-right-to-bracket mr-2"></i> Đăng nhập</router-link></div>
              <!-- <div class="dropdown-item " :class="{ 'dropdownHidden': !isLoginUser }"><i class="fas fa-exchange mr-2"></i> Đổi mật khẩu </div> -->
              <div @click="logOutUser()" class="dropdown-item mb-2" :class="{ 'dropdownHidden': !isLoginUser }"><i class="fas fa-sign-out-alt mr-2"></i> Đăng xuất </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      amountItem: 0,
      isLoginUser: false,
      UserName: '',
      UserImage: '',
    }
  },
  methods: {
    searchPage(){
      if(this.inputSearch==''){
        alert('Bạn chưa nhập từ khóa!')
      }else{
        this.$router.push({name:'product.search',params:{searchString:this.inputSearch}})
        // this.$router.push("")
      }
    },
    totalItem() {
      if (localStorage.getItem('cartItems') != null) {
        if (JSON.parse(localStorage.getItem('cartItems')).length != 0) {
          let customerCart = JSON.parse(localStorage.getItem('cartItems'));
          customerCart.forEach(item => {
            this.amountItem = this.amountItem + item.quantity;
          });
        }
      }
    },
    checkLoginUser() {
      // console.log(JSON.parse(localStorage.getItem('Users')))
      if (JSON.parse(localStorage.getItem('users')) != null) {
        this.isLoginUser = true;
      }
    },
    logOutUser() {
      const user = JSON.parse(localStorage.getItem('users'))
      if (localStorage.getItem('users') != null) {
        localStorage.removeItem('users');
        this.isLogin = false;
        // this.$router.push({ name: "Home" });
        location.reload();
      }
    },
    getUserName() {
      const user = JSON.parse(localStorage.getItem('users'))
      if (localStorage.getItem('users') != null) {
        this.UserName = user.name;
      }
    },
    getUserImage() {
      const user = JSON.parse(localStorage.getItem('users'))
      if (localStorage.getItem('users') != null) {
        this.UserImage = user.image;
      }
    }
  },
  mounted() {
    this.totalItem();
    this.checkLoginUser();
    this.getUserName();
    this.getUserImage();
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.top-bar-list div {
  padding-right: 4rem;
}
.top-bar-list div > span {
  color: #00000099;
  font-size: 12px;
  margin-left: 10px;
}
header {
  border-bottom: 1px solid #00000026;
  position: sticky;
  background: #e57905;
  top: 0;
  left: 0;
  z-index: 999;
  height: 60px;
  width: 100%;
}
.header {
  /* padding-left: 100px; */
  height: 100%;
}
.header__logo {
  height: 30px;
  margin-top: 20px;
}
.header__logo img {
  width: 80%;
  height: 60%;
}
.header__menu ul {
  display: flex;
  list-style: none;
}
.header__menu ul > li {
  padding: 19px 10px 19px;
}
.header__menu ul > li > a:hover {
  color: #fff;
}
.header__icon div {
  padding-right: 15px;
}
.header__icon input {
  border-radius: 5px;
  border: 1px solid gray;
}
.header__icon--search {
  position: relative;
}
.header__icon button {
  background-color: rgb(189, 189, 189);
  border: none;
  position: absolute;
  right: 31px;
  margin-top: 1px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.header__icon--cart {
  position: relative;
  width: 200px;
}
.header__icon span {
  position: absolute;
  top: -7px;
  right: 2px;
  background: red;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  text-align: center;
  min-width: 16px;
  line-height: 16px;
  color: #fff;
}
/* 05/02 */
.header__icon--cart a:hover {
  color: #000;
}
.header__icon--user a:hover {
  color: #000;
}
.dropdownHidden {
  display: none;
}
.block-user {
  display: none;
  padding-right: 0px !important;
  background-color: #d4d4d4;
  margin-left: -50px;
  margin-top: 10px;
  /* text-align: center; */
  position: absolute;
  border-radius: 5px;
  width: 210px;
}
.block-user>.abcdf {
  margin-top: -15px;
  padding-right: 0px !important;
}
.header__icon--user:hover .block-user {
  display: block;
}
.block-user-sort-up {
  position: relative;
  top: -7px;
  left: 50px;
}
.fa-sort-up {
  color: #d4d4d4;
  font-size: 30px;
}
.dropdown-item {
  cursor: pointer;
}
.fa-list,.fa-exchange, .fa-sign-out-alt {
  color: #6c757d;
}
.dropdown-item:hover{
  background-color: #ecf4fc;
}
.name-account {
  font-weight: bold;
  color: #6c757d;
}
.user-image {
  width: 30px;
  height: 30px;
  /* border-radius: 50%; */
}
</style>
