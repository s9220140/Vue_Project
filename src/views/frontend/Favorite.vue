<template>
  <div class="shop">
    <Jumbotron>
      <template v-slot:content>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center fs-3 bg-dark">
            <router-link class="breadcrumb-item" to="/">首頁</router-link>
            <li class="breadcrumb-item active text-white">收藏商品</li>
          </ol>
        </nav>
      </template>
    </Jumbotron>
    <div class="container" v-if="wishData.length > 0">
      <div class="cart-with-item">
        <Table>
          <template v-slot:thead>
            <tr>
              <th>&nbsp;</th>
              <th colspan="2">商品</th>
              <th>單價</th>
            </tr>
          </template>
          <template v-slot:tbody>
            <tr class="align-middle" v-for="item in wishData" :key="item.product_id">
              <td>
                <button type="button" class="btn btn-sm btn-outline-danger" @click="deleteWish(item)">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </td>
              <td>
                <a href="#" @click.prevent="$router.push(`/product/${item.product_id}`)">
                  <img class="product-image" :src="item.imageUrl" :alt="item.name" />
                </a>
              </td>
              <td>
                <h3><a class="text-dark" href="#" @click.prevent="$router.push(`/product/${item.product_id}`)"> {{
                    item.name
                }}</a></h3>
              </td>
              <td>{{ item.price | currency }}</td>
            </tr>
          </template>
        </Table>
      </div>
    </div>
    <div class="container-fluid px-0" v-else>
      <div class="cart-without-item">
        <div class="p-lg-5 p-0  mb-4 bg-light bg-cart">
          <div class="container-fluid py-5 transbox">
            <h1 class="display-5 fw-bold text-center">無收藏商品</h1>
            <button class="btn btn-outline-primary btn-lg d-block mx-auto" type="button"
              @click="$router.push('/shop')">繼續去購物</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Card from "@/components/Card.vue";
import Jumbotron from "@/components/frontend/Jumbotron.vue";
import Table from "@/components/Table.vue";
// import * as bootstrap from "bootstrap";
// import Pagination from "@/components/Pagination.vue";

export default {
  data() {
    return {
      isLoading: false,
      products: [],
      product: {},
      status: {
        info: "",
        addCart: "",
        delete: "",
      },
      pagination: {},
      cart: {
        carts: [],
      },
      coupon_code: '',
      cartData: JSON.parse(localStorage.getItem('cartData')) || [], // localStorage data
      wishData: JSON.parse(localStorage.getItem('wishData')) || [], // localStorage data
      subTotal: 0,
      cacheData: [],
      cache: {}
    };
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      vm.$http.get(url).then((response) => {
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
        console.log(vm.products);
      });
    },
    getProduct() {
      const vm = this;
      const id = vm.$route.params.id;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.$http.get(url).then((response) => {
        vm.product = response.data.product;
        // console.log(vm.product);
      });
    },
    addCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.cartData.forEach(item => {
        vm.cache = {
          product_id: item.product_id,
          qty: item.qty,
        };
        vm.$http.post(url, { data: vm.cache }).then((response) => {
          console.log(response);
          vm.$bus.$emit("msg-pop", response.data.message, "success");
        });
      });
      vm.$router.push('/checkout')
    },

    deleteWish(item) {
      const vm = this
      vm.wishData.splice(vm.wishData.indexOf(item), 1)
      // 更新localStorage
      localStorage.setItem('wishData', JSON.stringify(vm.wishData))
      // 更新cart icon數量
      vm.$bus.$emit('local-pop')
      vm.$bus.$emit('msg-pop', '已移除收藏', 'success')
    },
  },


  components: { Jumbotron, Table },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  background-image: url(https://i.shgcdn.com/684bfc4f-333f-4a1a-9f44-690617508c17/-/format/auto/-/preview/3000x3000/-/quality/lighter/);
  height: 35vh;
}

a {
  text-decoration: none;
}

.breadcrumb {
  opacity: 0.85;
}

.product-image {
  width: 65px;
  height: 65px;
}

.cart-total {
  border: 1px solid rgba(0, 0, 0, 0.2);

  span {
    width: 50%;
    font-size: 1rem;
  }
}

hr {
  border-color: rgba(0, 0, 0, 0.5);
}

.bg-cart {
  background-image: url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  background-size: cover;
  background-position: center center;
}

.transbox {
  background-color: #ffffff;
  opacity: 0.85;
  font-weight: bold;
  color: #000000;
}
</style>
