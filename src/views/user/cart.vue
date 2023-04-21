<template>
  <main>
    <div class="card-page-container">
      <div class="card-title">
        <i class="fa-solid fa-file"></i>
        <h6>Xác nhận đơn hàng</h6>
      </div>
      <div class="row pb-5">
        <div class="col-6">
          <div class="card-left">
            <p class="list-title">Giao hàng</p>
            <div class="card-address">
              <img src="../../assets/img/icons/Delivery2.png" alt="" />
              <div>
                <input
                  class="address-del"
                  type="text"
                  placeholder="124/52b Phạm Ngũ Lão..."
                  required
                />
                <hr />
                <div class="delivery-time">
                  <h6>Nhận hàng trong khoảng 15-30 phút</h6>
                  <select name="" id="">
                    <option value="">15-30 phút</option>
                    <option value="">1 tiếng nữa</option>
                    <option value="">3 tiếng nữa</option>
                    <option value="">6 tiếng nữa</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="info-kh">
              <input type="text" class="name" placeholder="Tên người nhận" />
              <input
                type="text"
                class="phone-number"
                placeholder="Số điện thoại"
              />
              <input
                type="text"
                class="ghi-chu"
                placeholder="Thêm hướng dẫn giao hàng"
              />
            </div>
            <p class="list-title">Phương thức thanh toán</p>
            <ul>
              <li class="pay-methods">
                <input name="type" type="radio" />
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg"
                  alt=""
                />
                <p>Tiền mặt</p>
              </li>
              <li class="pay-methods">
                <input name="type" type="radio" />
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png"
                  alt=""
                />
                <p>MoMo</p>
              </li>
              <li class="pay-methods">
                <input name="type" type="radio" />
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
              <div class="col-6">
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
                </div>
              </div>
              <div class="col-2 trash-item" @click="deleteItem(item)">
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
                <button>Đặt hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      itemsCart: [],
      isExisItem: false,
      PGH: 15000, //Phí giao hàng
      TT: 0, //thành tiền
      GTSP: 0, //Giá theo sản phẩm
      TongTien: 0,
    };
  },
  methods: {
    showCart() {
      if (localStorage.getItem("cartItems")) {
        if (JSON.parse(localStorage.getItem("cartItems")).length != 0) {
          this.itemsCart = JSON.parse(localStorage.getItem("cartItems"));
          // console.log(this.itemsCart);
          this.isExisItem = true;
          this.itemsCart.forEach((item) => {
            this.TT = this.TT + parseInt(item.price) * item.quantity;
            // itemCount = itemCount + item.quantity
            //console.log(item.price);
          });
          this.TongTien = this.TT + this.PGH;
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
      this.showCart();
    },
    downQuantityItem(item) {
      if (item.quantity > 1) {
        const quantity = item.quantity - 1;
        const id = item.id;
        const size = item.size;
        this.uppdateQuantityCart(id, quantity, size);
        this.TT = 0;
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
      this.showCart();
    },
  },
  mounted() {
    this.showCart();
  },
};
</script>
<style scoped>
@import "@/assets/cart.css";
</style>
