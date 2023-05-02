<template>
  <main>
    <div class="hiring-contact">
      <div class="contact-box">
        <h4>Liên hệ với chúng tôi</h4>
        <div class="contact-method">
          <div class="contact-email">
            <i class="fa-solid fa-envelope mr-2"></i>
            <address>
              <a href="mailto:conghieu16st@gmail.com.com"
                >thecoffeehouse@gmail.com</a
              >
            </address>
          </div>
          <div class="contact-phonenumber">
            <i class="fa-solid fa-phone mr-2"></i>
            <address><a href="tel:0907580331">0907 580 331</a></address>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-container">
      <div class="row">
        <div class="col-6 pb-4" v-for="td in tds" :key="td._id">
          <div class="hiring-block">
            <div class="hiring-img">
              <img
                :src="td.image"
                alt=""
              />
            </div>
            <div class="hiring-info">
              <h3 class="pt-4">{{ td.title }}</h3>
              <ul>
                <li>{{ td.description1 }}</li>
                <li>{{ td.description2 }}</li>
                <li>{{ td.description3 }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-6"></div>
      </div>
      <div class="job-show-all mt-4">
        <p>Xem tất cả</p>
      </div>
    </div>
  </main>
</template>

<script>
import Tuyendung from '@/services/requiment.service';
export default {
    data() {
        return {
            tds: [],
        }
    },
    methods: {
        async getAllTD() {
            try {
                this.tds = await Tuyendung.getAll();
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getAllTD();
    }
}
</script>

<style scoped>
@import "@/assets/tuyendung.css";
</style>