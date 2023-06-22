<template>
  <div class="container-page">
    <div class="wapper" v-if="Orders.length > 0">
      <h3>Tất cả đơn hàng</h3>
      <div
        class="order-by-user pl-4 pr-4 pt-3"
        v-for="order in Orders"
        :key="order._id"
      >
        <div
          class="row"
          v-for="orderitem in order.products"
          :key="orderitem._id"
        >
          <div class="col-2 pl-5 pt-3 order-item-image">
            <img :src="orderitem.picture" alt="" />
          </div>
          <div class="col-4 pt-3">
            <div class="nameProduct">{{ orderitem.tensp }}</div>
            <div class="sizeProduct">Size: {{ orderitem.size }}</div>
            <div class="">Đường: {{ orderitem.sugar }}</div>
          </div>
          <div class="col-2 pt-3">{{ orderitem.price }}đ</div>
          <div class="col-2 pt-3">x {{ orderitem.soluong }}</div>
          <div class="col-2 pt-3">
            = {{ orderitem.price * orderitem.soluong }}₫
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="info-user-order pt-3 pl-4">
              <p>Mã đơn hàng: {{ order.id }}</p>
              <p class="active-info">Tên: {{ order.nameKH }}</p>
              <p>Số điện thoại: {{ order.sdt }}</p>
              <p class="active-info">Thanh toán bởi {{ order.methodPay }}</p>
              <p>Địa chỉ: {{ order.address }}</p>
              <p class="active-info">Đặt ngày {{ order.thoigian }}</p>
            </div>
          </div>
          <div class="col-6 mt-5">
            <h5>Tổng Cộng</h5>
            <hr />
            <div class="d-flex justify-content-between pr-5">
              <p>Tổng tiền</p>
              <p class="active-info">{{ order.TongTien }}₫</p>
            </div>
            <div
              class="d-flex justify-content-between pr-5 align-items-baseline"
            >
              <p>Trạng thái</p>
              <p class="active-trangthai">{{ order.trangthai }}</p>
              <span
                class="hover-point"
                :class="{ hideTrangThai: !checkIsTrangThai(order.trangthai) }"
                @click="updateOrder(order.id)"
              >
                <i class="fa-solid fa-check"></i
              ></span>
              <span
                class="hover-point"
                :class="{ hideTrangThai: checkIsTrangThai(order.trangthai) }"
                @click="backOrder(order.id)"
                ><i class="fas fa-undo"></i
              ></span>
              <span class="hover-point-dollar" @click="confirmPay(order.id)"
                ><img src="../../assets/img/icons/dollar.png"
              /></span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <p v-else class="no-orderUser">Bạn chưa có đơn hàng nào!</p>
  </div>
</template>

<script>
import PayService from "../../services/pay.service";
export default {
  data() {
    return {
      Orders: "",
      InfoUser: "",
      //   ProductOrder: [],
      // index: 0,
      isStatusOrder: false,
    };
  },
  methods: {
    getEmailUser() {
      const user = JSON.parse(localStorage.getItem("users"));
      if (localStorage.getItem("users") != null) {
        this.InfoUser = user;
        // console.log(this.InfoUser.email)
      }
    },
    async getOrderByEmail() {
      this.Orders = await PayService.getAll();
      this.Orders.reverse()
    },
    async updateOrder(idhd) {
      try {
        const resultUpdateOrder = await PayService.updateStatus(idhd);
        alert("Đã chuyển đến trạng thái giao hàng!");
        location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    async backOrder(idhd) {
      try {
        const resultBackOrder = await PayService.backStatus(idhd);
        alert("Đã cập nhật lại trạng thái!");
        location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    async confirmPay(idhd) {
      try {
        await PayService.confirmPay(idhd);
        alert("Đơn hàng đã thanh toán!");
        // console.log(document.querySelector(".hover-point"))
        // document.querySelectorAll('.hover-point').remove("span");
        // location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    checkIsTrangThai(trangthai) {
      if (trangthai == "Cho xac nhan") {
        return (this.isStatusOrder = true);
      }
    },
  },
  mounted() {
    this.getEmailUser();
    this.getOrderByEmail();
    this.checkIsTrangThai();
  },
};
</script>

<style scpoed>
h3 {
  text-decoration: none;
  font-size: 22px;
  font-weight: 400;
  color: #424242;
}
.container-page {
  padding: 20px 300px;
  background-color: #eff0f5;
  min-height: 650px;
}
.wapper {
  width: 990px;
}
.order-by-user {
  background-color: #fff;
}
.order-item-image > img {
  width: 85px;
  height: 85px;
}
.nameProduct {
  text-transform: uppercase;
  font-weight: 500;
}
.sizeProduct {
  font-size: 14px;
  color: #bbb;
}
.info-user-order * {
  margin-bottom: 7px;
  font-family: Roboto-Regular, "Helvetica Neue", Helvetica, Tahoma, Arial,
    Sans-serif;
  color: #212121;
  font-size: 14px;
}
.active-info {
  font-weight: 600 !important;
  color: #424242;
}
.active-trangthai {
  color: red;
  font-weight: 500;
}
.no-orderUser {
  text-align: center;
  font-weight: 600;
  font-size: 20px;
}
.fa-check {
  font-size: 22px;
}
.hover-point {
  cursor: pointer;
  /* display: none; */
  /* z-index: 0; */
}
.hideTrangThai {
  display: none;
  /* z-index: 100; */
}
.hover-point-dollar img {
  width: 27px;
  margin-bottom: 5px;
}
</style>
