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
import HeaderUser from "../components/user-header.vue";
import HeaderCart from "../components/cart-header.vue";
import FooterUser from "../components/user-footer.vue";
const routes = [
  {
    path: "/",
    components: {
      default: Home,
      "user-header":HeaderUser,
      "user-footer":FooterUser,
    },
    meta: {title: "Home"}
  },
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
  {
    path: "/admin",
    name: "HomeAdmin",
    component: HomeAdmin,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },    
  {
    path: "/items",
    name: "ShowAllItem",
    component: () => import('@/views/ShowAllItem.vue'),
    props: true,
  },
  {
    path: "/edit/:id",
    name: "item.edit",
    component: () => import("@/views/ItemEdit.vue"),
    props: true 
  },
  {
    path: "/post/:id",
    name: "post.edit",
    component: () => import("@/views/PostEdit.vue"),
    props: true 
  },
  {
    path: "/rec/:id",
    name: "rec.edit",
    component: () => import("@/views/RecEdit.vue"),
    props: true 
  },
  {
    path: "/store/:id",
    name: "store.edit",
    component: () => import("@/views/StoreEdit.vue"),
    props: true 
  },
  {
    path: "/add",
    name: "item.add",
    component: () => import("@/views/ItemAdd.vue"),
    props: true,
  },
  {
    path: "/posts/add",
    name: "post.add",
    component: () => import("@/views/PostAdd.vue"),
    props: true,
  },
  {
    path: "/recs/add",
    name: "rec.add",
    component: () => import("@/views/RecAdd.vue"),
    props: true,
  },
  {
    path: "/store/add",
    name: "store.add",
    component: () => import("@/views/StoreAdd.vue"),
    props: true,
  },
  {
    path: "/trash",
    name: "item.trash",
    component: () => import("@/views/ShowTrash.vue"),
    props: true,
  },
  {
    path: "/posts",
    name: "ShowAllPost",
    component: () => import("@/views/ShowAllPost.vue"),
    props: true,
  },
  {
    path: "/recruitments",
    name: "Recruiments",
    component: () => import("@/views/recruitment.vue"),
    props: true,
  },
  {
    path: "/stores",
    name: "ShowStore",
    component: () => import("@/views/ShowStore.vue"),
    props: true,
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
