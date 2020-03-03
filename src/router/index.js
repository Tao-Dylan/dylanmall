import Vue from "vue";
import VueRouter from "vue-router";

/* 引入一级路由组件（底部导航）*/
import Navigation from "@/views/bottomnav/Navigation";

/* 懒加载引入二级路由组件（底部导航）*/
const Home = () => import("@/views/home/Home");
const Category = () => import("@/views/category/Category");
const Eat = () => import("@/views/eat/Eat");
const Cart = () => import("@/views/cart/Cart");
const Profile = () => import("@/views/profile/Profile");

const Order = () => import("@/views/order/Order");
const MyAddress = () => import("@/views/order/childComps/MyAddress");
const AddAddress = () => import("@/views/order/childComps/AddAddress");
const EditAddress = () => import("@/views/order/childComps/EditAddress");

Vue.use(VueRouter);

// 解决多次点击重复路由报错
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };
const routes = [
  {
    path: "/",
    redirect: "/navigation"
  },
  {
    path: "/navigation",
    name: "navigation",
    component: Navigation,
    children: [
      {
        path: "/navigation",
        redirect: "/navigation/home"
      },
      {
        path: "home",
        name: "home",
        component: Home
      },
      {
        path: "category",
        name: "category",
        component: Category
      },
      {
        path: "eat",
        name: "eat",
        component: Eat
      },
      {
        path: "cart",
        name: "cart",
        component: Cart
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      }
    ]
  },
  {
    path: "/order",
    name: "order",
    component: Order,
    children: [
      {
        path: "myAddress",
        name: "myAddress",
        component: MyAddress,
        children: [
          {
            path: "addAddress",
            name: "addAddress",
            component: AddAddress
          },
          {
            path: "editAddress",
            name: "editAddress",
            component: EditAddress
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
