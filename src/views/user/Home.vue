<template>
  <main>
    <section class="banner__home">
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../assets/img/banner/banner1.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/img/banner/banner2.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/img/banner/banner3.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </button>
      </div>
    </section>
    <section class="menu__home">
      <div class="menu__home--container">
        <div class="">
          <div class="menu-list d-flex flex-wrap">
            <div class="menu-item menu-banner">
              <router-link to="/">
                <img src="../../assets/img/banner/banner4.webp" alt="" />
              </router-link>
            </div>
            <div
              class="menu-item"
              v-for="(IBest, index) in itemBests"
              :key="index"
            >
              <div class="menu__item--img">
                <router-link :to="'/detail/' + IBest._id">
                  <img :src="IBest.image" alt="" />
                </router-link>
              </div>
              <div class="menu__item--info">
                <h4>
                  <a href="product-detail.html">{{ IBest.name }}</a>
                </h4>
                <span class="item-price">{{ IBest.price }}đ</span>
              </div>
            </div>
          </div>
        </div>  
     </div>
    </section>
    <section class="introTea">
      <div class="container">
        <div class="row flex-box flex-w align-c justify-s ps-4 pe-4">
          <div class="img-block col-6">
            <img src="../../assets/img/banner/banner5.webp" alt="" />
          </div>
          <div class="info-block col-6">
            <div class="cloudtea-img">
              <img src="../../assets/img/banner/banner6.webp" alt="" />
            </div>
            <div class="cloudtea-description">
              Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, BST Trà Sữa CloudTea
              Hương Vị Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ. Chạm môi là
              foam béo mịn bồng bềnh, càng thêm đậm đà nhờ topping vụn bánh quy
              phô mai hoặc bột ca cao thơm lừng. Kế tiếp là tầng trà sữa sóng
              sánh, đậm hương, rõ vị. Và tầng thạch nguyên chất, dai giòn giúp
              giữ trọn vị trà sữa đến ngụm cuối cùng. 3 tầng hòa quyện, nhấp một
              ngụm là ghiền, nhớ mãi không thôi.
            </div>
            <div class="thuNgay"><a href="">Thử ngay</a></div>
          </div>
        </div>
      </div>
    </section>
    <section class="blog-home">
      <div class="blog-home-container pb-5">
        <div class="blog-home-title ">
          <img class="" src="https://file.hstatic.net/1000075078/file/coffee-2_2_92db24958ff14ac4b4249b3256f7a415.png" alt="" />
          <h2 class="pl-2">Chuyện Nhà</h2>
        </div>
        <div>
          <div>
            <h3 class="blog-home-blogtitle"><a href="">Coffeeholic</a></h3>
            <div class="row">
              <div class="col-4" v-for="(post, index) in posts" :key="index">
                <div v-if="post.loai === 'coffeeholic'">
                  <div class="blog-img">
                    <a href="">
                      <img :src="post.image" alt="" />
                    </a>
                  </div>
                  <div class="blog-info">
                    <div class="date">{{ post.date }}</div>
                    <h3>
                      {{ post.name }}
                    </h3>
                    <p>
                      {{ post.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="blog-home-blogtitle"><a href="">Teaholic</a></h3>
            <div class="row">
              <div class="col-4" v-for="(post) in posts" :key="post._id">
                <div v-if="post.loai === 'teaholic'">
                  <div class="blog-img">
                    <a href="">
                      <img :src="post.image" alt="" />
                    </a>
                  </div>
                  <div class="blog-info">
                    <div class="date">{{ post.date }}</div>
                    <h3>
                      {{ post.name }}
                    </h3>
                    <p>
                      {{ post.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ItemService from "@/services/item.service";
import PostService from "@/services/post.service";
export default {
  data() {
    return {
      itemBests: [],
      posts: [],
    };
  },
  methods: {
    async getItemBestSale() {
      try {
        this.itemBests = await ItemService.getItemBest();
      } catch (error) {
        console.log(error);
      }
    },
    async getPost() {
      try {
        this.posts = await PostService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getItemBestSale();
    this.getPost();
  },
};
</script>

<style scoped>
.menu__home--container {
  padding-left: 170px;
  padding-right: 170px;
}
.banner__home {
  transform: translateY(-60px);
  position: relative;
}

.menu-item {
  width: 255px;
  margin-right: 30px;
}
.menu-item img {
  border-radius: 10px;
  box-shadow: 0px 0px 13px 0px #00000040;
}
.menu-banner {
  /* flex: 0 0 calc(50% - 30px); */
  margin: 0 30px 40px 0;
  width: 570px;
}
.menu-banner img {
  box-shadow: 0px 4px 16px 0px #0000001f;
}
.menu-item img {
  width: 100%;
}
.menu__item--info {
  padding: 12px 0;
}
.menu__item--info h4 {
  font-weight: 600;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.menu__item--info a {
  text-decoration: none;
  color: #000;
  transition: 0.5s;
}
.menu__item--info a:hover {
  color: orange;
}
.item-price {
  font-size: 14px;
  color: #00000099;
  margin-bottom: 10px;
}
/* section 3 */
.introTea {
  padding-top: 125px;
  background: url(../../assets/img/backgrounds/brg1.webp) top center/cover
    no-repeat;
  font-family: "SF Pro Text", sans-serif;
  /* padding: 48px 0 45px; */
  font-weight: 400;
}
.info-block {
  padding-top: 90px;
}
.cloudtea-description {
  margin-top: 16px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(124, 84, 84, 0.85);
  font-family: "SF Pro Text", sans-serif;
}
.thuNgay a {
  text-decoration: none;
  color: #fff;
}
.thuNgay {
  display: block;
  max-width: 282px;
  background: #b3ddca;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
  padding: 0 15px;
  font-weight: 600;
  border-radius: 8px;
}
.thuNgay:hover {
  background: #8cb4a2;
}
/* section 4 */
.blog-home {
  background: #fff7e6;
}
.blog-home-container {
  margin: auto 175px;
}
.blog-home-title {
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding-top: 25px;
}
.blog-home-title h2 {
  font-family: "SF Pro Display", sans-serif;
  font-weight: 600;
  font-size: 26px;
}
.blog-home-title img {
  height: 25px;
}
.blog-home-blogtitle {
  font-weight: 600;
  font-family: "SF Pro Display", sans-serif;
  font-size: 24px;
  margin: 24px 0;
  padding-left: 12px;
  border-left: 4px solid #e57905;
}
.blog-home-blogtitle a {
  color: #191919;
  text-decoration: none;
  transition: 0.5s;
}
.blog-img {
  width: 370px;
  height: 170px;
}
.blog-img img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.blog-info {
  padding-right: 5px;
}
.date {
  color: #00000099;
  padding-top: 10px;
  padding-bottom: 10px;
}
.blog-info h3 {
  font-size: 18px;
  line-height: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000;
  font-weight: 600;
  font-family: "SF Pro Display", sans-serif;
}
.blog-info p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
