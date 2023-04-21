
import router from '../router';

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
          </ul>
        </div>
        <div class="header__icon pt-3 col-3 d-flex align-items-baseline">
          <div class="header__icon--search">
            <form action="">
              <input type="text" placeholder="Tìm kiếm" />
              <button><i class="fas fa-search"></i></button>
            </form>
          </div>
          <div class="header__icon--cart">
            <router-link to="/cart">
              <i class="fas fa-shopping-cart"></i>
              <span>0</span>
            </router-link>
          </div>
          <div class="header__icon--user">
            <router-link to="/Login">
              <i class="fas fa-user-alt"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
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
  background: rgba(255, 255, 255, 0.8);
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
  color: #e57905;
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
  right: 16px;
  margin-top: 1px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.header__icon--cart {
  position: relative;
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
</style>
