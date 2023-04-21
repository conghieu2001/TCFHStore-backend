<template>
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
            <li><router-link to="/menuItem">Menu</router-link></li>
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
@import "@/assets/cart.css";
</style>