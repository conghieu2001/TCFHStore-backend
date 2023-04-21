<template>
  <main>
    <div class="page-head-title pt-4">
      <h2>Chuyện Nhà</h2>
      <div class="head-content">
        The Coffee House sẽ là nơi mọi người xích lại gần nhau, đề cao giá trị
        kết nối con người và sẻ chia thân tình bên những tách cà phê, ly trà
        đượm hương, truyền cảm hứng về lối sống hiện đại.
      </div>
      <ul class="head-tabs">
        <li><a class="tab-filter active" href="">Tất cả</a></li>
        <li><a class="tab-filter" href="">Coffeeholic</a></li>
        <li><a class="tab-filter" href="">Teaholic</a></li>
        <li><a class="tab-filter" href="">Blog</a></li>
      </ul>
    </div>
    <section class="section-container pt-4">
            <div class="row">
                <div class="col-8">
                    <div class="blog-img-left">
                        <a href="">
                            <img src="../../assets/img/banner/banner8.webp" alt="">
                        </a>
                    </div>
                    <div class="blog-info">
                        <h4>CŨNG LÀ ĂN BÁNH, THƯỞNG TRÀ, NGẮM TRĂNG - GEN Z LÀM GÌ CHO BỚT NHẠT?</h4>
                        <div class="blog-info-date">22/08/2022</div>
                        <div class="blog-info-des">
                            <p>Trung thu là dịp mà bất kỳ ai cũng có thể “bé lại” để niềm háo hức đón Tết Đoàn viên, ăn bánh, thưởng trà… vẫn đầy ắp trong lòng. Và nếu biết cách, bạn sẽ nhận ra Trung thu nay vẫn “đậm đà” như những mùa trăng cũ.</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="blog-img-right">
                        <a href="">
                            <img src="../../assets/img/banner/banner9.webp" alt="">
                        </a>
                    </div>
                    <div class="blog-info">
                        <h4>NHỮNG LOẠI TRÀ CÓ HƯƠNG VÀ VỊ “ĐỔ GỤC” KHÁCH THĂM XUÂN NHÀ BẠN</h4>
                        <div class="blog-info-date">21/01/2022</div>
                        <div class="blog-info-des2">
                            <p>Tết đang “lấp ló đầu ngõ” và bạn đang chuẩn bị cho một năm mới an khang, sum vầy. Tìm kiếm những thức trà, thức bánh thật ngon để tiếp đãi khách đến thăm nhà. Nếu vậy, Nhà sẽ bật mí những loại trà có hương và vị “đổ gục” những vị khách đến thăm xuân nhà bạn nhé!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <section class="section-coffeeholic row">
      <div class="coffeeholic-banner col-6">
        <img src="../../assets/img/banner/banner10.webp" alt="" />
      </div>
      <div class="coffeeholic-news col-6 pt-5 pb-5">
        <h3 class="coffeeholic-news-title">Coffeeholic</h3>
        <div class="d-flex pb-4" v-for="postC in postsC" :key="postC._id">
          <div class="news-img">
            
              <img
                :src="postC.image"
                alt=""
              />
            
          </div>
          <div class="news-info">
            <h4>{{ postC.name }}</h4>
            <div class="news-info-date">{{ postC.date }}</div>
            <p>
              {{ postC.description }}
            </p>
          </div>
        </div>
        
        <div class="page-detail"><a href="">Tìm hiểu thêm</a></div>
      </div>
    </section>
    <section class="section-teaholic row">
      <div class="teaholic-news col-6 pt-5 pb-5">
        <h3 class="teaholic-news-title">Teaholic</h3>
        <div class="d-flex pb-4" v-for="postT in postsT" :key="postT._id">
          <div class="news-img">

              <img
                :src="postT.image"
                alt=""
              />
  
          </div>
          <div class="news-info">
            <h4>{{postT.name}}</h4>
            <div class="news-info-date">{{postT.date}}</div>
            <p>
              {{ postT.description }}
            </p>
          </div>
        </div>
        <div class="page-detail"><a href="">Tìm hiểu thêm</a></div>
      </div>
      <div class="teaholic-banner col-6">
        <img src="../../assets/img/banner/banner11.jpg" alt="" />
      </div>
    </section>
    <section class="section-blog row">
      <div class="blog-banner col-6">
        <img src="https://file.hstatic.net/1000075078/file/blog_94b05e56224646bc86c6e72c73ac4258.jpg" alt="" />
      </div>
      <div class="blog-news col-6 pt-5 pb-5">
        <h3 class="blog-news-title">Blog</h3>
        <div class="d-flex pb-4" v-for="postB in postsB" :key="postB._id">
          <div class="news-img">

              <img
                :src="postB.image"
                alt=""
              />
  
          </div>
          <div class="news-info">
            <h4>{{ postB.name }}</h4>
            <div class="news-info-date">{{ postB.date }}</div>
            <p>
              {{ postB.description }}
            </p>
          </div>
        </div>
        
        <div class="page-detail"><a href="">Tìm hiểu thêm</a></div>
      </div>
    </section>
  </main>
</template>

<script>
import PostService from "@/services/post.service";
export default {
  data() {
    return {
      postsC: [],
      postsT: [],
      postsB: [],
    };
  },
  methods: {
    async getPostC() {
      try {
        this.postsC = await PostService.getAllCoffee();
      } catch (error) {
        console.log(error);
      }
    },
    async getPostT() {
      try {
        this.postsT = await PostService.getAllTea();
      } catch (error) {
        console.log(error);
      }
    },
    async getPostB() {
      try {
        this.postsB = await PostService.getAllBlog();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getPostC();
    this.getPostT();
    this.getPostB();
  },
};
</script>

<style scoped>
@import '@/assets/chuyennha.css';
</style>
