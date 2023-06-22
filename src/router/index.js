import { createWebHistory, createRouter } from "vue-router";
import HomeAdmin from "@/views/admin/HomeAdmin.vue";
import Home from "@/views/user/Home.vue";
import Menu from "@/views/user/showAllItem.vue";
import Detail from "@/views/user/item-detail.vue";
import Chuyennha from "@/views/user/chuyenha.vue";
import Tuyendung from "@/views/user/tuyendung.vue";
import Cuahang from "@/views/user/store.vue";
import Login from "@/views/user/login.vue";
import Cart from "@/views/user/cart.vue";
import Signup from "@/views/user/signup.vue";
import UserOder from "@/views/user/userOrder.vue";
import DetailUser from "@/views/user/detail-user.vue";
import searchProduct  from "@/views/user/ProductSearch.vue";
import Promotion  from "@/views/user/promotion.vue";
import HeaderUser from "../components/user-header.vue";
import HeaderCart from "../components/cart-header.vue";
import FooterUser from "../components/user-footer.vue";
import AppHeader from "../components/AppHeader.vue";
import ShowAllItem from "@/views/admin/ShowAllItem.vue";
import ItemEdit from "@/views/admin/ItemEdit.vue";
import ItemAdd from "@/views/admin/ItemAdd.vue";
import PromoAdd from "@/views/admin/PromoAdd.vue";
import ItemFavorite from "@/views/admin/ItemFavorite.vue";
import ShowAllPost from "@/views/admin/ShowAllPost.vue";
import PostAdd from "@/views/admin/PostAdd.vue";
import PostEdit from "@/views/admin/PostEditt.vue";
import Recruitment from "@/views/admin/recruitment.vue";
import RecAdd from "@/views/admin/RecAdd.vue";
import RecEdit from "@/views/admin/RecEdit.vue";
import StoreEdit from "@/views/admin/StoreEdit.vue";
import StoreAdd from "@/views/admin/StoreAdd.vue";
import ShowStore from "@/views/admin/ShowStore.vue";
import ShowOrders from "@/views/admin/ShowAllOrder.vue";
import ShowComment from "@/views/admin/ShowComment.vue";
import DoanhThu from '@/views/admin/DoanhThu.vue';
import ShowUser from '@/views/admin/QuanliUser.vue';
import ShowPromo from '@/views/admin/Promotion.vue';
const routes = [
  //Home
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    meta: {title: "Home"}
  },
  //detail item
  {
    path: "/detail/:id",
    name: "Detail",
    components: {
      default: Detail,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    props: true,
    meta: {title: "Chi tiết sản phẩm"}
  },
  //menu item
  {
    path: "/menuItem",
    name: "MenuItem",
    components: {
      default: Menu,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    props: true,
    meta: {title: "Tất cả sản phẩm"}
  },
  //chuyện nhà
  {
    path: "/chuyennha",
    name: "Chuyennha",
    components: {
      default: Chuyennha,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    props: true,
    meta: {title: "Chuyện cà phê và trà"}
  },
  //cửa hàng
  {
    path: "/store",
    name: "Cuahang",
    components: {
      default: Cuahang,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    props: true,
    meta: {title: "Danh sách cửa hàng"}
  },
  //tuyển dụng
  {
    path: "/tuyendung",
    name: "Tuyendung",
    components: {
      default: Tuyendung,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    props: true,
    meta: {title: "Danh sách cửa hàng"}
  },
  //login
  {
    path: "/Login",
    name: "Login",
    components: {
      default: Login,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    props: true,
    meta: {title: "Đăng nhập"}
  },
  //đăng kí
  {
    path: "/Signup",
    name: "Signup",
    components: {
      default: Signup,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    props: true,
    meta: {title: "Đăng kí"}
  },
  //giỏ hàng
  {
    path: "/cart",
    name: "Cart",
    components: {
      default: Cart,
      "user-header":HeaderCart,
      "user-footer":FooterUser,
    },
    props: true,
    meta: {title: "Giỏ hàng"}
  },
  //detail user
  {
    path: "/detail-user",
    name: "DetailUser",
    components: {
      default: DetailUser,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    props: true,
    meta: {title: "Chỉnh sửa thông tin cá nhân"}
  },
  //xem hoa don
  {
  path: "/userOrder",
    name: "UserOder",
    components: {
      default: UserOder,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    props: true,
    meta: {title: "Lịch sử mua hàng"}
  },
  //khuyen mai
  {
    path: "/voucher",
      name: "Promotion",
      components: {
        default: Promotion,
        "user-header":HeaderUser,
        "user-footer":FooterUser,
      },
      props: true,
      meta: {title: "Lịch sử mua hàng"}
    },
  //admin
  {
    path: "/admin",
    name: "HomeAdmin",
    components: {
      default: HomeAdmin,
      "user-header":AppHeader,
      // "user-footer":FooterUser,
    },
    props: true,
    meta: {title: "Trang chủ Admin"}
  },
  //Error
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  }, 
  //show all item   
  {
    path: "/items",
    name: "ShowAllItem",
    components: {
      default: ShowAllItem,
      "user-header":AppHeader,
    },
    props: true,
    meta: {title: "Tất cả sản phẩm"}
  },
  //Edit item
  {
    path: "/edit/:id",
    name: "item.edit",
    components: {
      default: ItemEdit,
      "user-header":AppHeader,
    },
    props: true ,
    meta: {title: "Chỉnh sửa sản phẩm"}
  },
  //sửa sản phẩm
  {
    path: "/post/:id",
    name: "post.edit",
    components: {
      default: PostEdit,
      "user-header":AppHeader,
    },
    props: true ,
    meta: {title: "Chỉnh sửa bài viết"}
  },
  {
    path: "/rec/:id",
    name: "rec.edit",
    components: {
      default: RecEdit,
      "user-header":AppHeader,
    },
    props: true ,
    meta: {title: "Chỉnh sửa tin tuyển dụng"}
  },
  {
    path: "/store/:id",
    name: "store.edit",
    components: {
      default: StoreEdit,
      "user-header":AppHeader,
    },
    props: true ,
    meta: {title: "Chỉnh sửa cửa hàng"}
  },
  //thêm sản phẩm
  {
    path: "/add",
    name: "item.add",
    components: {
      default: ItemAdd,
      "user-header":AppHeader,
    },
    props: true,
    meta: {title: "Thêm sản phẩm"}
  },
  {
    path: "/favorite",
    name: "item.favorite",
    components: {
      default: ItemFavorite,
      "user-header":AppHeader,
    },
    props: true,
    meta: {title: "Sản phẩm yêu thích"}
  },
  //thêm bài viết
  {
    path: "/posts/add",
    name: "post.add",
    components: {
      default: PostAdd,
      "user-header":AppHeader,
    },
    props: true,
    meta: {title: "Thêm bài viết"}
  },
  //Thêm tin tuyển dụng
  {
    path: "/recs/add",
    name: "rec.add",
    components: {
      default: RecAdd,
      "user-header":AppHeader,
    },
    props: true,
    meta: {title: "Thêm tin tuyển dụng"}
  },
  {
    path: "/store/add",
    name: "store.add",
    components: {
      default: StoreAdd,
      "user-header":AppHeader,
    },
    props: true ,
    meta: {title: "Thêm cửa hàng"}
  },
  {
    path: "/promo/add",
    name: "promo.add",
    components: {
      default: PromoAdd,
      "user-header":AppHeader,
    },
    props: true ,
    meta: {title: "Thêm mã khuyến mãi"}
  },
  {
    path: "/trash",
    name: "item.trash",
    component: () => import("@/views/ShowTrash.vue"),
    props: true,
  },
  //Show All Post
  {
    path: "/posts",
    name: "ShowAllPost",
    components: {
      default: ShowAllPost,
      "user-header":AppHeader,
    },
    props: true ,
    meta: {title: "Tất cả bài viết"}
  },
  //show tuyển dụng
  {
    path: "/recruitments",
    name: "Recruitment",
    components: {
      default: Recruitment,
      "user-header":AppHeader,
    },
    props: true,
    meta: {title: "Tất cả bài tuyển dụng"}
  },
  {
    path: "/stores",
    name: "ShowStore",
    components: {
      default: ShowStore,
      "user-header":AppHeader,
    },
    props: true ,
    meta: {title: "Tất cả cửa hàng"}
  },
  {
    path: "/orders",
    name: "ShowOrders",
    components: {
      default: ShowOrders,
      "user-header":AppHeader,
    },
    props: true ,
    meta: {title: "Tất cả đơn hàng"}
  },
  {
    path: "/comments",
    name: "ShowComment",
    components: {
      default: ShowComment,
      "user-header":AppHeader,
    },
    props: true ,
    meta: {title: "Tất cả bình luận"}
  },
  {
    path: "/search/:searchString",
    name: "product.search",
    components: {
      default: searchProduct,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    meta: { title: "Chi tiết sản phẩm" },
   props:true
  },
  //show Doanh THu 
  {
    path: "/doanhthu",
    name: "DoanhThu",
    components: {
      default: DoanhThu,
      "user-header":AppHeader,
    },
    meta: {title: "Doanh Thu"},
    props: true
  },
  //show User
  {
    path: "/user",
    name: "ShowUser",
    components: {
      default: ShowUser,
      "user-header":AppHeader,
    },
    meta: {title: "Người Dùng"},
    props: true
  },
  {
    path: "/promotion",
    name: "ShowPromo",
    components: {
      default: ShowPromo,
      "user-header":AppHeader,
    },
    meta: {title: "Khuyễn Mãi"},
    props: true
  }
    
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
  document.title = to.meta.title;
});
export default router;
