<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>Chất lượng & phục vụ</h6>
          <p class="text-justify">
            The Coffe House đảm bảo chất lượng cho tất cả sản phẩm. The Coffee
            House cam kết chất lượng phục vụ tốt nhất, chuyên nghiệp nhất cho
            mọi khách hàng bằng chính sách hoàn tiền và tặng quà nếu nhân viên
            phục vụ quí khách không chu đáo.
          </p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Thông tin</h6>
          <ul class="footer-links">
            <li><a href="">> Giới thiệu</a></li>
            <li><a href="">> Tuyển dụng</a></li>
            <li><a href="">> Quy chế hoạt động</a></li>
            <li><a href="">> Chính sách và quy định</a></li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>FAQ</h6>
          <ul class="footer-links">
            <li><a href="">> Vận chuyển</a></li>
            <li><a href="">> Chính sách đổi trả</a></li>
            <li><a href="">> Chính sách bảo hành</a></li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">
            Copyright &copy; 2022 All Rights Reserved by
            <a href="#">The Coffee House</a>.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li>
              <a class="facebook" href="https://www.facebook.com/"
                ><i class="fa-brands fa-facebook"></i
              ></a>
            </li>
            <li>
              <a class="twitter" href="https://twitter.com/"
                ><i class="fa-brands fa-twitter"></i
              ></a>
            </li>
            <li>
              <a class="instagram" href="https://www.instagram.com/"
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </li>
            <li>
              <a class="tiktok" href="https://www.tiktok.com/"
                ><i class="fa-brands fa-tiktok"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* footer */
.site-footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}

.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}

.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}

.site-footer a {
  color: #737373;
}

.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}

.footer-links {
  padding-left: 0;
  list-style: none;
}

.footer-links li {
  display: block;
  padding-top: 0;
}

.footer-links a {
  color: #737373;
}

.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}

.site-footer .social-icons {
  text-align: right;
}

.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  /* line-height: 40px; */
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}

.copyright-text {
  margin: 0;
}

@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
  padding-top: 0;
}

.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a > i {
  padding-left: 11px;
  font-size: 18px;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}

.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}

.social-icons a.facebook:hover {
  background-color: #3b5998;
}

.social-icons a.twitter:hover {
  background-color: #00aced;
}

.social-icons a.instagram:hover {
  background-color: #ea4c89;
}

.social-icons a.tiktok:hover {
  background-color: #000;
}

@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
footer a {
  text-decoration: none;
}

/*# sourceMappingURL=footer.css.map */
</style>
