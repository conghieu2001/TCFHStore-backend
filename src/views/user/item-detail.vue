<template>
  <main>
    <div class="item-detail-container">
      <div class="row">
        <div class="col-5 product-img">
          <img :src="aaaaa.image" alt="" />
        </div>
        <div class="col-7 product-info">
          <h3>{{ aaaaa.name }}</h3>
          <p class="product-price">{{ aaaaa.price }}đ</p>
          <div class="product-size">
            <p>Vui lòng chọn size (bắt buộc)</p>
            <div class="size-select-group">
              <div class="size-select mr-3">
                <input type="radio" name="size" value="s" v-model="this.size" />
                <svg
                  class="me-1"
                  viewBox="0 0 13 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="shape active"
                    d="M11.6511 1.68763H10.3529V0.421907C10.3529 0.194726 10.1582 0 9.93104 0H2.17444C1.94726 0 1.75254 0.194726 1.75254 0.421907V1.65517H0.454361C0.194726 1.68763 0 1.88235 0 2.10953V4.18661C0 4.41379 0.194726 4.60852 0.421907 4.60852H1.33063L1.72008 8.8925L1.78499 9.76876L2.30426 15.6105C2.33671 15.8377 2.49899 16 2.72617 16H9.28195C9.50913 16 9.70385 15.8377 9.70385 15.6105L10.2231 9.76876L10.288 8.8925L10.6775 4.60852H11.5862C11.8134 4.60852 12.0081 4.41379 12.0081 4.18661V2.10953C12.073 1.88235 11.8783 1.68763 11.6511 1.68763ZM2.56389 8.40568H3.50507C3.47262 8.56795 3.47262 8.73022 3.47262 8.8925C3.47262 9.02231 3.47262 9.15213 3.50507 9.28195H2.66126L2.6288 8.92495L2.56389 8.40568ZM9.47667 8.92495L9.44422 9.28195H8.56795C8.60041 9.15213 8.60041 9.02231 8.60041 8.8925C8.60041 8.73022 8.56795 8.56795 8.56795 8.40568H9.50913L9.47667 8.92495ZM7.72414 8.8925C7.72414 9.83367 6.97769 10.5801 6.03651 10.5801C5.09534 10.5801 4.34888 9.83367 4.34888 8.8925C4.34888 7.95132 5.09534 7.20487 6.03651 7.20487C6.97769 7.20487 7.72414 7.95132 7.72414 8.8925ZM8.92495 15.1562H3.18053L2.72617 10.1582H3.82961C4.28398 10.9371 5.09534 11.4564 6.03651 11.4564C6.97769 11.4564 7.8215 10.9371 8.24341 10.1582H9.34686L8.92495 15.1562ZM9.60649 7.52941H8.21095C7.75659 6.81542 6.94523 6.3286 6.03651 6.3286C5.12779 6.3286 4.31643 6.81542 3.86207 7.52941H2.49899L2.23935 4.60852H9.86613L9.60649 7.52941ZM11.1968 3.73225H10.3205H1.75254H0.876268V2.56389H2.17444H2.2069H2.23935H8.27586C8.50304 2.56389 8.69777 2.36917 8.69777 2.14199C8.69777 1.91481 8.50304 1.72008 8.27586 1.72008H2.6288V0.876268H9.47667V2.10953C9.47667 2.33671 9.6714 2.53144 9.89858 2.53144H11.1968V3.73225Z"
                  ></path>
                </svg>
                <p>Nhỏ</p>
              </div>
              <div class="size-select mr-3">
                <input type="radio" name="size" value="m" v-model="this.size" />
                <svg
                  class="me-1"
                  viewBox="0 0 13 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="shape active"
                    d="M11.6511 1.68763H10.3529V0.421907C10.3529 0.194726 10.1582 0 9.93104 0H2.17444C1.94726 0 1.75254 0.194726 1.75254 0.421907V1.65517H0.454361C0.194726 1.68763 0 1.88235 0 2.10953V4.18661C0 4.41379 0.194726 4.60852 0.421907 4.60852H1.33063L1.72008 8.8925L1.78499 9.76876L2.30426 15.6105C2.33671 15.8377 2.49899 16 2.72617 16H9.28195C9.50913 16 9.70385 15.8377 9.70385 15.6105L10.2231 9.76876L10.288 8.8925L10.6775 4.60852H11.5862C11.8134 4.60852 12.0081 4.41379 12.0081 4.18661V2.10953C12.073 1.88235 11.8783 1.68763 11.6511 1.68763ZM2.56389 8.40568H3.50507C3.47262 8.56795 3.47262 8.73022 3.47262 8.8925C3.47262 9.02231 3.47262 9.15213 3.50507 9.28195H2.66126L2.6288 8.92495L2.56389 8.40568ZM9.47667 8.92495L9.44422 9.28195H8.56795C8.60041 9.15213 8.60041 9.02231 8.60041 8.8925C8.60041 8.73022 8.56795 8.56795 8.56795 8.40568H9.50913L9.47667 8.92495ZM7.72414 8.8925C7.72414 9.83367 6.97769 10.5801 6.03651 10.5801C5.09534 10.5801 4.34888 9.83367 4.34888 8.8925C4.34888 7.95132 5.09534 7.20487 6.03651 7.20487C6.97769 7.20487 7.72414 7.95132 7.72414 8.8925ZM8.92495 15.1562H3.18053L2.72617 10.1582H3.82961C4.28398 10.9371 5.09534 11.4564 6.03651 11.4564C6.97769 11.4564 7.8215 10.9371 8.24341 10.1582H9.34686L8.92495 15.1562ZM9.60649 7.52941H8.21095C7.75659 6.81542 6.94523 6.3286 6.03651 6.3286C5.12779 6.3286 4.31643 6.81542 3.86207 7.52941H2.49899L2.23935 4.60852H9.86613L9.60649 7.52941ZM11.1968 3.73225H10.3205H1.75254H0.876268V2.56389H2.17444H2.2069H2.23935H8.27586C8.50304 2.56389 8.69777 2.36917 8.69777 2.14199C8.69777 1.91481 8.50304 1.72008 8.27586 1.72008H2.6288V0.876268H9.47667V2.10953C9.47667 2.33671 9.6714 2.53144 9.89858 2.53144H11.1968V3.73225Z"
                  ></path>
                </svg>
                <p>Vừa + 10.000đ</p>
              </div>
              <div class="size-select">
                <input type="radio" name="size" value="l" v-model="this.size" />
                <svg
                  class="me-1"
                  viewBox="0 0 13 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="shape active"
                    d="M11.6511 1.68763H10.3529V0.421907C10.3529 0.194726 10.1582 0 9.93104 0H2.17444C1.94726 0 1.75254 0.194726 1.75254 0.421907V1.65517H0.454361C0.194726 1.68763 0 1.88235 0 2.10953V4.18661C0 4.41379 0.194726 4.60852 0.421907 4.60852H1.33063L1.72008 8.8925L1.78499 9.76876L2.30426 15.6105C2.33671 15.8377 2.49899 16 2.72617 16H9.28195C9.50913 16 9.70385 15.8377 9.70385 15.6105L10.2231 9.76876L10.288 8.8925L10.6775 4.60852H11.5862C11.8134 4.60852 12.0081 4.41379 12.0081 4.18661V2.10953C12.073 1.88235 11.8783 1.68763 11.6511 1.68763ZM2.56389 8.40568H3.50507C3.47262 8.56795 3.47262 8.73022 3.47262 8.8925C3.47262 9.02231 3.47262 9.15213 3.50507 9.28195H2.66126L2.6288 8.92495L2.56389 8.40568ZM9.47667 8.92495L9.44422 9.28195H8.56795C8.60041 9.15213 8.60041 9.02231 8.60041 8.8925C8.60041 8.73022 8.56795 8.56795 8.56795 8.40568H9.50913L9.47667 8.92495ZM7.72414 8.8925C7.72414 9.83367 6.97769 10.5801 6.03651 10.5801C5.09534 10.5801 4.34888 9.83367 4.34888 8.8925C4.34888 7.95132 5.09534 7.20487 6.03651 7.20487C6.97769 7.20487 7.72414 7.95132 7.72414 8.8925ZM8.92495 15.1562H3.18053L2.72617 10.1582H3.82961C4.28398 10.9371 5.09534 11.4564 6.03651 11.4564C6.97769 11.4564 7.8215 10.9371 8.24341 10.1582H9.34686L8.92495 15.1562ZM9.60649 7.52941H8.21095C7.75659 6.81542 6.94523 6.3286 6.03651 6.3286C5.12779 6.3286 4.31643 6.81542 3.86207 7.52941H2.49899L2.23935 4.60852H9.86613L9.60649 7.52941ZM11.1968 3.73225H10.3205H1.75254H0.876268V2.56389H2.17444H2.2069H2.23935H8.27586C8.50304 2.56389 8.69777 2.36917 8.69777 2.14199C8.69777 1.91481 8.50304 1.72008 8.27586 1.72008H2.6288V0.876268H9.47667V2.10953C9.47667 2.33671 9.6714 2.53144 9.89858 2.53144H11.1968V3.73225Z"
                  ></path>
                </svg>
                <p>Lớn + 16.000đ</p>
              </div>
            </div>
            <div class="size-select-group mt-4">
              <div class="size-select mr-3">
                <input
                  type="radio"
                  name="sugar"
                  value="100sg"
                  v-model="this.sugar"
                />
                <svg
                  class="me-1"
                  viewBox="0 0 13 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="shape active"
                    d="M11.6511 1.68763H10.3529V0.421907C10.3529 0.194726 10.1582 0 9.93104 0H2.17444C1.94726 0 1.75254 0.194726 1.75254 0.421907V1.65517H0.454361C0.194726 1.68763 0 1.88235 0 2.10953V4.18661C0 4.41379 0.194726 4.60852 0.421907 4.60852H1.33063L1.72008 8.8925L1.78499 9.76876L2.30426 15.6105C2.33671 15.8377 2.49899 16 2.72617 16H9.28195C9.50913 16 9.70385 15.8377 9.70385 15.6105L10.2231 9.76876L10.288 8.8925L10.6775 4.60852H11.5862C11.8134 4.60852 12.0081 4.41379 12.0081 4.18661V2.10953C12.073 1.88235 11.8783 1.68763 11.6511 1.68763ZM2.56389 8.40568H3.50507C3.47262 8.56795 3.47262 8.73022 3.47262 8.8925C3.47262 9.02231 3.47262 9.15213 3.50507 9.28195H2.66126L2.6288 8.92495L2.56389 8.40568ZM9.47667 8.92495L9.44422 9.28195H8.56795C8.60041 9.15213 8.60041 9.02231 8.60041 8.8925C8.60041 8.73022 8.56795 8.56795 8.56795 8.40568H9.50913L9.47667 8.92495ZM7.72414 8.8925C7.72414 9.83367 6.97769 10.5801 6.03651 10.5801C5.09534 10.5801 4.34888 9.83367 4.34888 8.8925C4.34888 7.95132 5.09534 7.20487 6.03651 7.20487C6.97769 7.20487 7.72414 7.95132 7.72414 8.8925ZM8.92495 15.1562H3.18053L2.72617 10.1582H3.82961C4.28398 10.9371 5.09534 11.4564 6.03651 11.4564C6.97769 11.4564 7.8215 10.9371 8.24341 10.1582H9.34686L8.92495 15.1562ZM9.60649 7.52941H8.21095C7.75659 6.81542 6.94523 6.3286 6.03651 6.3286C5.12779 6.3286 4.31643 6.81542 3.86207 7.52941H2.49899L2.23935 4.60852H9.86613L9.60649 7.52941ZM11.1968 3.73225H10.3205H1.75254H0.876268V2.56389H2.17444H2.2069H2.23935H8.27586C8.50304 2.56389 8.69777 2.36917 8.69777 2.14199C8.69777 1.91481 8.50304 1.72008 8.27586 1.72008H2.6288V0.876268H9.47667V2.10953C9.47667 2.33671 9.6714 2.53144 9.89858 2.53144H11.1968V3.73225Z"
                  ></path>
                </svg>
                <p>100% Đường</p>
              </div>
              <div class="size-select mr-3">
                <input
                  type="radio"
                  name="sugar"
                  value="75sg"
                  v-model="this.sugar"
                />
                <svg
                  class="me-1"
                  viewBox="0 0 13 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="shape active"
                    d="M11.6511 1.68763H10.3529V0.421907C10.3529 0.194726 10.1582 0 9.93104 0H2.17444C1.94726 0 1.75254 0.194726 1.75254 0.421907V1.65517H0.454361C0.194726 1.68763 0 1.88235 0 2.10953V4.18661C0 4.41379 0.194726 4.60852 0.421907 4.60852H1.33063L1.72008 8.8925L1.78499 9.76876L2.30426 15.6105C2.33671 15.8377 2.49899 16 2.72617 16H9.28195C9.50913 16 9.70385 15.8377 9.70385 15.6105L10.2231 9.76876L10.288 8.8925L10.6775 4.60852H11.5862C11.8134 4.60852 12.0081 4.41379 12.0081 4.18661V2.10953C12.073 1.88235 11.8783 1.68763 11.6511 1.68763ZM2.56389 8.40568H3.50507C3.47262 8.56795 3.47262 8.73022 3.47262 8.8925C3.47262 9.02231 3.47262 9.15213 3.50507 9.28195H2.66126L2.6288 8.92495L2.56389 8.40568ZM9.47667 8.92495L9.44422 9.28195H8.56795C8.60041 9.15213 8.60041 9.02231 8.60041 8.8925C8.60041 8.73022 8.56795 8.56795 8.56795 8.40568H9.50913L9.47667 8.92495ZM7.72414 8.8925C7.72414 9.83367 6.97769 10.5801 6.03651 10.5801C5.09534 10.5801 4.34888 9.83367 4.34888 8.8925C4.34888 7.95132 5.09534 7.20487 6.03651 7.20487C6.97769 7.20487 7.72414 7.95132 7.72414 8.8925ZM8.92495 15.1562H3.18053L2.72617 10.1582H3.82961C4.28398 10.9371 5.09534 11.4564 6.03651 11.4564C6.97769 11.4564 7.8215 10.9371 8.24341 10.1582H9.34686L8.92495 15.1562ZM9.60649 7.52941H8.21095C7.75659 6.81542 6.94523 6.3286 6.03651 6.3286C5.12779 6.3286 4.31643 6.81542 3.86207 7.52941H2.49899L2.23935 4.60852H9.86613L9.60649 7.52941ZM11.1968 3.73225H10.3205H1.75254H0.876268V2.56389H2.17444H2.2069H2.23935H8.27586C8.50304 2.56389 8.69777 2.36917 8.69777 2.14199C8.69777 1.91481 8.50304 1.72008 8.27586 1.72008H2.6288V0.876268H9.47667V2.10953C9.47667 2.33671 9.6714 2.53144 9.89858 2.53144H11.1968V3.73225Z"
                  ></path>
                </svg>
                <p>75% Đường</p>
              </div>
              <div class="size-select">
                <input
                  type="radio"
                  name="sugar"
                  value="50sg"
                  v-model="this.sugar"
                />
                <svg
                  class="me-1"
                  viewBox="0 0 13 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="shape active"
                    d="M11.6511 1.68763H10.3529V0.421907C10.3529 0.194726 10.1582 0 9.93104 0H2.17444C1.94726 0 1.75254 0.194726 1.75254 0.421907V1.65517H0.454361C0.194726 1.68763 0 1.88235 0 2.10953V4.18661C0 4.41379 0.194726 4.60852 0.421907 4.60852H1.33063L1.72008 8.8925L1.78499 9.76876L2.30426 15.6105C2.33671 15.8377 2.49899 16 2.72617 16H9.28195C9.50913 16 9.70385 15.8377 9.70385 15.6105L10.2231 9.76876L10.288 8.8925L10.6775 4.60852H11.5862C11.8134 4.60852 12.0081 4.41379 12.0081 4.18661V2.10953C12.073 1.88235 11.8783 1.68763 11.6511 1.68763ZM2.56389 8.40568H3.50507C3.47262 8.56795 3.47262 8.73022 3.47262 8.8925C3.47262 9.02231 3.47262 9.15213 3.50507 9.28195H2.66126L2.6288 8.92495L2.56389 8.40568ZM9.47667 8.92495L9.44422 9.28195H8.56795C8.60041 9.15213 8.60041 9.02231 8.60041 8.8925C8.60041 8.73022 8.56795 8.56795 8.56795 8.40568H9.50913L9.47667 8.92495ZM7.72414 8.8925C7.72414 9.83367 6.97769 10.5801 6.03651 10.5801C5.09534 10.5801 4.34888 9.83367 4.34888 8.8925C4.34888 7.95132 5.09534 7.20487 6.03651 7.20487C6.97769 7.20487 7.72414 7.95132 7.72414 8.8925ZM8.92495 15.1562H3.18053L2.72617 10.1582H3.82961C4.28398 10.9371 5.09534 11.4564 6.03651 11.4564C6.97769 11.4564 7.8215 10.9371 8.24341 10.1582H9.34686L8.92495 15.1562ZM9.60649 7.52941H8.21095C7.75659 6.81542 6.94523 6.3286 6.03651 6.3286C5.12779 6.3286 4.31643 6.81542 3.86207 7.52941H2.49899L2.23935 4.60852H9.86613L9.60649 7.52941ZM11.1968 3.73225H10.3205H1.75254H0.876268V2.56389H2.17444H2.2069H2.23935H8.27586C8.50304 2.56389 8.69777 2.36917 8.69777 2.14199C8.69777 1.91481 8.50304 1.72008 8.27586 1.72008H2.6288V0.876268H9.47667V2.10953C9.47667 2.33671 9.6714 2.53144 9.89858 2.53144H11.1968V3.73225Z"
                  ></path>
                </svg>
                <p>50% Đường</p>
              </div>
            </div>
          </div>
          <div class="add-to-cart mt-5" @click="loadShopCart(aaaaa)">
            <svg
              class="me-1"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 0C14.5523 0 15 0.447715 15 1V1.999L20 2V8L17.98 7.999L20.7467 15.5953C20.9105 16.032 21 16.5051 21 16.999C21 19.2082 19.2091 20.999 17 20.999C15.1368 20.999 13.5711 19.7251 13.1265 18.0008L8.87379 18.0008C8.42948 19.7256 6.86357 21 5 21C3.05513 21 1.43445 19.612 1.07453 17.7725C0.435576 17.439 0 16.7704 0 16V3C0 2.44772 0.447715 2 1 2H8C8.55228 2 9 2.44772 9 3V11C9 11.5128 9.38604 11.9355 9.88338 11.9933L10 12H12C12.5128 12 12.9355 11.614 12.9933 11.1166L13 11V2H10V0H14ZM5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15ZM17 14.999C15.8954 14.999 15 15.8944 15 16.999C15 18.1036 15.8954 18.999 17 18.999C18.1046 18.999 19 18.1036 19 16.999C19 15.8944 18.1046 14.999 17 14.999ZM15.852 7.999H15V11C15 12.6569 13.6569 14 12 14H10C8.69412 14 7.58312 13.1656 7.17102 12.0009L1.99994 12V14.3542C2.73289 13.5238 3.80528 13 5 13C6.86393 13 8.43009 14.2749 8.87405 16.0003H13.1257C13.5693 14.2744 15.1357 12.999 17 12.999C17.2373 12.999 17.4697 13.0197 17.6957 13.0593L15.852 7.999ZM7 7H2V10H7V7ZM18 4H15V6H18V4ZM7 4H2V5H7V4Z"
                fill="white"
                fill-opacity="0.6"
              ></path>
            </svg>
            <p>Đặt giao tận nơi</p>
          </div>
        </div>
      </div>
      <hr />
      <div class="product-description pt-4">
        <h5>Mô tả sản phẩm</h5>
        <p>{{ aaaaa.description }}</p>
      </div>
      <hr />
      <div class="product-related pt-4">
        <h5>Sản phẩm liên quan</h5>
        <div class="row pt-4">
          <div class="col-2" v-for="item in this.products.loai" :key="item._id">
            <div class="product-related-img" @click="gotoDetailItem(item._id)">
              <!-- <router-link :to="'/detail/' + item._id" > -->
                <img :src="item.image" alt=""
              />
            <!-- </router-link> -->
            </div>
            <div class="product-related-info pt-3">
              <h6>
                <a href="">{{ item.name }}</a>
              </h6>
              <span>{{ item.price }} đ</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="commentByUser">
        <div>
          <h5>Bình luận</h5>
          <form @submit="pushComment()">
            <textarea
              name=""
              id=""
              cols="95"
              rows="5"
              placeholder="Mời bạn bình luận"
              v-model="this.comment"
            ></textarea>
            <button type="submit" :class="{'hide-submit-comment': !isCheckUser}">Gửi</button>
          </form>
          <hr>
          <div class="commented-byUser">
            <div class="row" v-for="bbb in this.bbbbb" :key="bbb._id">
              <div class="d-flex justify-content-center">
                <img :src="bbb.image" alt="">
                <div>
                  <h6>{{ bbb.nameus }}</h6>
                <p>{{ bbb.comment }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ItemService from "../../services/item.service";
import CmtService from "../../services/cmt.service";
export default {
  data() {
    return {
      IBestID: "",
      products: '',
      aaaaa: '',
      size: "S",
      priceSize: 0,
      sugar: "100",
      items: [],
      UserName: '',
      UserID: '',
      comment: '',
      UserImage: '',
      ItemComment: [],
      bbbbb: [], //san pham lien quan
      // itemLoai: [],
      isCheckUser: false,
    };
  },
  methods: {
    async gotoDetailItem(id) {
      if (id) {
        this.IBestID = id;
        try {
          this.products = await ItemService.get(this.IBestID);
          this.aaaaa = await this.products.product;
          this.bbbbb = await this.products.comments;
          const linkDT = '/detail/' +id;
          this.$router.replace({path: linkDT});
        } catch (error) {
          console.log(error);
        }
      }
    },
    isExistedInCart(item, arrCart) {
      let myIndex = -1;
      arrCart.forEach((itemCart, index) => {
        if (item.id == itemCart.id && item.size == itemCart.size) {
          myIndex = index;
        }
      });
      return myIndex;
    },
    loadShopCart(product) {
      let updatedCart = [];
      // console.log(product);
      // const linkClicked = evt.target;
      if (this.size == "m") {
        this.priceSize = 10000 + parseInt(product.price);
      } else if (this.size == "l") {
        this.priceSize = 16000 + parseInt(product.price);
      } else {
        this.priceSize = product.price;
      }
      if (this.sugar == "50sg") {
        this.sugar = "50%";
      } else if (this.sugar == "75sg") {
        this.sugar = "75%";
      } else {
        this.sugar = "100%";
      }
      alert("Đã thêm sản phẩm: " + product._id);
      if (typeof Storage !== undefined) {
        let newItem = {
          id: product._id,
          name: product.name,
          size: this.size,
          sugar: this.sugar,
          image: product.image,
          price: this.priceSize,
          quantity: 1,
        };
        //kiểm tra txem giỏ hàng , cartItems, đã tônf tại trong localStorage chưa, chưa tì tạo mới nó
        if (JSON.parse(localStorage.getItem("cartItems")) === null) {
          updatedCart.push(newItem);
          //console.log(updatedCart);
          localStorage.setItem("cartItems", JSON.stringify(updatedCart));
          //reset lại trang
          // window.location.reload();
        } else {
          const updatedCart = JSON.parse(localStorage.getItem("cartItems"));
          let index = this.isExistedInCart(newItem, updatedCart);
          if (index >= 0) {
            //console.log(index);
            updatedCart[index].quantity++;
            //console.log(updatedCart);
          } else {
            //console.log(newItem)
            updatedCart.push(newItem);
            //console.log(updatedCart);
          }
          //console.log(updatedCart);
          localStorage.setItem("cartItems", JSON.stringify(updatedCart));
          //reset lại trang
          // window.location.reload();
          location.reload();
        }
      } else {
        alert("Local Storage is not working on your browser!!!");
      }
    },
    getUser() {
      const user = JSON.parse(localStorage.getItem('users'))
      if (localStorage.getItem('users') != null) {
        this.UserName = user.name;
        this.UserID = user._id;
        this.UserImage = user.image;
        this.isCheckUser = true;
        // console.log(this.UserID, this.UserName)
      }
    },
    async pushComment() {
      const infoUserCommented = {
        nameus: this.UserName,
        comment: this.comment,
        idus: this.UserID,
        idpd: this.aaaaa._id,
        image: this.UserImage,
      }
      try {
        await CmtService.create(infoUserCommented);
      } catch(error) {
        console.log(error);
      }
    },

  },
  mounted() {
    // this.aaa();
    if (this.$route.params.id) {
      this.gotoDetailItem(this.$route.params.id);
        
      }
    this.getUser();
  },
};
</script>

<style scoped>
@import "@/assets/product-detail.css";
.commentByUser {
  width: 780px;
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
}
.commentByUser>div>h5 {
  padding-bottom: 10px;
  font: 14px/18px Arial,Helvetica,sans-serif;
  color: #222b45;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
}
.commented-byUser img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.commentByUser h6 {
  padding-left: 10px;
  padding-top: 10px;
  color: #222b45;
  font-weight: bold;
    font-size: 14px;
}
.commented-byUser p {
  font: 14px/18px Arial,Helvetica,sans-serif;
  margin-left: 10px;
}
.commentByUser form>textarea{
  border-radius: 8px;
    border: 1px solid #8f9bb3;
    height: 80px;
    padding: 6px 10px 6px;
}
.commentByUser>div>form>button {
  background-color: #eebc49;
  border: none;
  width: 150px;
  height: 30px;
  border-radius: 7px;
  color: #fff;
  float: right;
}
.hide-submit-comment {
  display: none;
}
</style>
