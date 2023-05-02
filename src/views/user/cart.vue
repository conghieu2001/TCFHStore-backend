<template>
  <main>
    <div class="card-page-container">
      <div class="card-title">
        <i class="fa-solid fa-file"></i>
        <h6>Xác nhận đơn hàng</h6>
      </div>
      <form class="row pb-5" @submit.prevent="submitform()">
        <div class="col-6">
          <div class="card-left">
            <p class="list-title">Giao hàng</p>
            <div class="card-address">
              <img src="../../assets/img/icons/Delivery2.png" alt="" />
              <div>
                <div>
                  <input
                    class="address-del"
                    type="text"
                    name="address"
                    placeholder="124/52b Phạm Ngũ Lão..."
                    required
                    v-model="this.address"
                    @blur="isValidateForm()"
                    v-bind:class="{
                      'is-invalid': errors.address,
                      'is-valid': errors.valid_address,
                    }"
                  />

                  <div
                    class="invalid-feedback error-address"
                    v-if="errors.address"
                  >
                    {{ errors.address }}
                  </div>
                </div>
                <hr />
                <div class="delivery-time mb-2">
                  <h6>Nhận hàng trong khoảng 15-30 phút</h6>
                  
                </div>
              </div>
            </div>
            <div class="info-kh">
              <div>
                <input
                  type="text"
                  class="name"
                  placeholder="Tên người nhận"
                  name="nameKH"
                  required
                  v-model="this.nameKH"
                  @blur="isValidateForm()"
                  v-bind:class="{
                    'is-invalid': errors.nameKH,
                    'is-valid': errors.valid_nameKH,
                  }"
                />
                <div
                  class="invalid-feedback error-nameKH ml-3"
                  v-if="errors.nameKH"
                >
                  {{ errors.nameKH }}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  class="email"
                  placeholder="Nhập Email"
                  name="email"
                  required
                  v-model="this.email"
                  @blur="isValidateForm()"
                  v-bind:class="{
                    'is-invalid': errors.email,
                    'is-valid': errors.valid_email,
                  }"
                />
                <div
                  class="invalid-feedback error-email ml-3"
                  v-if="errors.email"
                >
                  {{ errors.email }}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  required
                  class="phone-number"
                  placeholder="Số điện thoại"
                  name="sdt"
                  v-model="this.sdt"
                  @blur="isValidateForm()"
                  v-bind:class="{
                    'is-invalid': errors.sdt,
                    'is-valid': errors.valid_sdt,
                  }"
                />
                <div class="invalid-feedback error-sdt ml-3" v-if="errors.sdt">
                  {{ errors.sdt }}
                </div>
              </div>

              <input
                type="text"
                class="ghi-chu"
                name="ghichu"
                placeholder="Thêm hướng dẫn giao hàng"
                v-model="this.ghichu"
              />
            </div>
            <p class="list-title">Phương thức thanh toán</p>
            <ul>
              <li class="pay-methods">
                <input
                  name="type"
                  type="radio"
                  @blur="isValidateForm()"
                  v-bind:class="{
                    'is-invalid': errors.methodPay,
                    'is-valid': errors.valid_methodPay,
                  }"
                  v-model="this.methodPay"
                  @click="this.creditcart()"
                  value="Tiền Mặt"
                  required
                />
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg"
                  alt=""
                />
                <p>Tiền mặt</p>
              </li>
              <li class="pay-methods">
                <input
                  name="type"
                  type="radio"
                  @blur="isValidateForm()"
                  v-bind:class="{
                    'is-invalid': errors.methodPay,
                    'is-valid': errors.valid_methodPay,
                  }"
                  v-model="this.methodPay"
                  @click="this.byMoney()"
                  value="MoMo"
                  required
                />
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png"
                  alt=""
                />
                <p>MoMo</p>
              </li>
              <li class="pay-methods">
                <input name="type" type="radio" @blur="isValidateForm()"
                  v-bind:class="{
                    'is-invalid': errors.methodPay,
                    'is-valid': errors.valid_methodPay,
                  }"
                  v-model="this.methodPay"
                  @click="this.byMoney()"
                  value="Thẻ Ngân Hàng"
                  required/>
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/385_ic_atm@3x.png"
                  alt=""
                />
                <p>Thẻ ngân hàng</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6">
          <div class="card-right pl-3 pr-3">
            <div class="right-head pt-2 d-flex justify-content-between">
              <p class="list-title">Các món đã chọn</p>
              <router-link to="/menuItem" class="more-item">
                <p href="">Thêm món</p>
              </router-link>
            </div>
            <div
              class="item-selected row"
              v-for="item in itemsCart"
              :key="item._id"
            >
              <div class="col-2 image-itemIncart">
                <img :src="item.image" alt="" />
              </div>
              <div class="col-7">
                <h6>{{ item.quantity }} x {{ item.name }}</h6>
                <div class="d-flex align-items-center">
                  Size: {{ item.size }} x
                  <button
                    class="ml-2 mr-2 updateQuantity"
                    @click="downQuantityItem(item)"
                  >
                    -
                  </button>
                  {{ item.quantity }}
                  <button
                    class="ml-2 updateQuantity"
                    @click="upQuantityItem(item)"
                  >
                    +
                  </button>
                  &nbsp;x {{ item.sugar }} Đường
                </div>
              </div>
              <div class="col-1 trash-item" @click="deleteItem(item)">
                <i class="fa-solid fa-trash"></i>
              </div>
              <div class="col-2">
                <p>{{ item.price * item.quantity }}đ</p>
              </div>
            </div>
            <p class="list-title mb-5 pb-2">Tổng cộng</p>
            <div class="total">
              <div class="thanh-tien d-flex justify-content-between">
                <p>Thành tiền</p>
                <p>{{ this.TT }}đ</p>
              </div>
              <hr />
              <div class="phi-giao-hang d-flex justify-content-between">
                <p>Phí giao hàng</p>
                <p>{{ this.PGH }}đ</p>
              </div>
            </div>
            <div class="card-right-foot">
              <div class="sum-bill">
                <p>Thành tiền</p>
                <span>{{ this.TongTien }}đ</span>
              </div>
              <div class="order">
                <button type="submit">Đặt hàng</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>
<script>
import PayService from "@/services/pay.service";
export default {
  data() {
    return {
      itemsCart: [],
      isExisItem: false,
      PGH: 0, //Phí giao hàng
      TT: 0, //thành tiền
      GTSP: 0, //Giá theo sản phẩm
      TongTien: 0,
      nameKH: "",
      email: "",
      sdt: "",
      address: "",
      methodPay: "",
      ghichu: "",
      activepmt: true,
      errors: {
        nameKH: "",
        email: "",
        sdt: "",
        address: "",
        methodPay: "",
        ghichu: "",
        valid_nameKH: false,
        valid_email: false,
        valid_sdt: false,
        valid_address: false,
        valid_methodPay: false,
        valid_ghichu: false,
      },
    };
  },
  methods: {
    showCart() {
      if (localStorage.getItem("cartItems")) {
        if (JSON.parse(localStorage.getItem("cartItems")).length != 0) {
          this.itemsCart = JSON.parse(localStorage.getItem("cartItems"));
          this.isExisItem = true;
          this.itemsCart.forEach((item) => {
            this.TT = this.TT + parseInt(item.price) * item.quantity;
          });
          if (this.TT >= 150000) {
            
            this.TongTien = this.TT + this.PGH;
          } else {
            this.PGH = 15000;
            this.TongTien = this.TT + this.PGH;
          }
          // this.reloadAmountItem()
        } else {
          this.itemsCart = [];
          this.isExisItem = false;
          // this.reloadAmountItem()
        }
      }
    },
    uppdateQuantityCart(id, quantity, size) {
      const localCart = JSON.parse(localStorage.getItem("cartItems"));
      localCart.forEach((item) => {
        if (item.id == id && item.size == size) {
          item.quantity = quantity;
        }
      });
      localStorage.setItem("cartItems", JSON.stringify(localCart));
    },
    upQuantityItem(item) {
      const quantity = item.quantity + 1;
      const id = item.id;
      const size = item.size;
      this.uppdateQuantityCart(id, quantity, size);
      this.TT = 0;
      location.reload();
      this.showCart();
    },
    downQuantityItem(item) {
      if (item.quantity > 1) {
        const quantity = item.quantity - 1;
        const id = item.id;
        const size = item.size;
        this.uppdateQuantityCart(id, quantity, size);
        this.TT = 0;
        location.reload();
        this.showCart();
      }
    },
    deleteItem(itemDelete) {
      let updatedCart = [];
      let custommerCart = JSON.parse(localStorage.getItem("cartItems"));
      custommerCart.forEach((item) => {
        if (item.id == itemDelete.id && item.size == itemDelete.size) {
        } else {
          updatedCart.push(item);
        }
      });
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      this.TT = 0;
      this.TongTien = 0;
      location.reload();
      this.showCart();
    },
    creditcart() {
      this.activepmt = false;
    },
    byMoney() {
      this.activepmt = true;
    },
    isValidateForm() {
      let isValid = true;
      this.errors = {
        address: "",
        nameKH: "",
        email: "",
        sdt: "",
        ghichu: "",
      };
      // ten khach hang hop le
      if (!this.nameKH) {
        this.errors.nameKH = "Quý khách vui lòng nhập họ tên!";
        isValid = false;
      } else {
        this.errors.valid_nameKH = true;
      }
      // email hợp lệ
      if (
        !this.email ||
        !this.email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.errors.email = "Quý khách vui lòng nhập email hợp lệ!";
        isValid = false;
      } else {
        this.errors.valid_email = true;
      }
      //  số diện thoại hợp lê
      if (
        !this.sdt ||
        !this.sdt.match(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        )
      ) {
        this.errors.sdt = "Quý khách vui lòng nhập số điện thoại hợp lệ!";
        isValid = false;
      } else {
        this.errors.valid_sdt = true;
      }
      // địa chỉ
      if (!this.address) {
        this.errors.address = "Quý khách vui lòng nhập địa chỉ!";
        isValid = false;
      } else {
        this.errors.valid_address = true;
      }
      // phuong thuc thanh toan
      if (!this.methodPay) {
        this.errors.methodPay =
          "Quý khách vui lòng chọn phương thức thanh toán!";
        isValid = false;
      } else {
        this.errors.valid_methodPay = true;
      }
      // ghi chú
      // if (!this.ghichu) {
      //   this.errors.ghichu = "Quý khách vui lòng nhập ghi chú!";
      //   isValid = false;
      // } else {
      //   this.errors.valid_ghichu = true;
      // }
      return isValid;
    },
    async submitform() {
      this.isValidateForm();
      const inforCustomer = {
        nameKH: this.nameKH,
        email: this.email,
        sdt: this.sdt,
        sugar: this.sugar,
        address: this.address,
        methodPay: this.methodPay,
        ghichu: this.ghichu,
        itemsCart: this.itemsCart,
        TongTien: this.TongTien,
      };
      // console.log(this.isValidateForm())
      if (this.isValidateForm() && this.itemsCart.length > 0) {
        // console.log(inforCustomer);
        try {
          const result = await PayService.createOrder(inforCustomer);
          alert("Cảm ơn bạn đã đặt hàng!");
          if(localStorage.getItem("cartItems")) {
            localStorage.removeItem("cartItems");
          }
          location.reload();
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Quý khách nhập đầy đủ thông tin hoặc phải có hàng trong giỏ");
      }
    },
  },
  mounted() {
    this.showCart();
  },
};
</script>
<style scoped>
@import "@/assets/cart.css";
.error-address,
.error-nameKH {
  margin-top: 0;
  padding-top: 0 !important;
}
</style>
