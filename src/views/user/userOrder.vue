<template>
  <div class="container-page">
    <div class="wapper" v-if="Orders.length > 0">
      <h3>Chi tiết đơn hàng</h3>
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
            <div class="d-flex justify-content-between pr-5">
              <p>Trạng thái</p>
              <p class="active-trangthai">{{ order.trangthai }}</p>
              <span  :class="{'hideTrangThai': checkIsTrangThai(order.trangthai)}" @click="delelteOrder(order.id, order.trangthai)"
                ><i class="fa-solid fa-trash-can"></i
              ></span>
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
      this.Orders = await PayService.getAllOrder(this.InfoUser.email);

      // console.log(this.Orders[0].trangthai);
    },
    // async deleteUserOrder() {
    //   try {
    //     console.log(this.Orders[0].id, '123')
    //     await PayService.deleteOrder(this.Orders[0].id);
    //   } catch(error) {
    //     console.log(error);
    //   }
    // },
    async delelteOrder(idhd, trangthai) {
      if (trangthai == "Dang giao hang") {
        alert("Đơn hàng đang được giao đến bạn! Vui lòng liên hệ với Cửa hàng để hủy.");
      } else {
        try {
          const entity = {
            idhd: idhd,
          };
          // console.log(idhd,trangthai)
          const resultDeleteOrder = await PayService.deleteOrder(entity);
          alert(resultDeleteOrder);
          location.reload()
        } catch (error) {
          console.log(error);
        }
      }
    },
    checkIsTrangThai(trangthai) {
      if(trangthai == "Dang giao hang") {
        return this.isStatusOrder = true;
      }
    }
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
  min-height: 550px;
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
.hideTrangThai {
  display: none;
}
</style>
