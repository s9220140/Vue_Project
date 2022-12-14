<template>
  <div class="shop">
    <Jumbotron>
      <template v-slot:content>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center fs-3 bg-dark">
            <router-link class="breadcrumb-item" to="/">首頁</router-link>
            <li class="breadcrumb-item active text-white">購物車</li>
          </ol>
        </nav>
      </template>
    </Jumbotron>
    <div class="container" v-if="cartData.length > 0">
      <div class="cart-with-item">
        <Table>
          <template v-slot:thead>
            <tr>
              <th>&nbsp;</th>
              <th colspan="2">商品</th>
              <th>單價</th>
              <th>數量</th>
              <th>總價</th>
            </tr>
          </template>
          <template v-slot:tbody>
            <tr class="align-middle" v-for="item in cartData" :key="item.product_id">
              <td>
                <button type="button" class="btn btn-sm btn-outline-danger" @click="deleteCart(item)">
                  <i class="fas fa-spinner fa-spin me-1" v-if="status.delete"></i>
                  <i class="fa-solid fa-trash-can" v-else></i>
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
                <!-- <p class="text-success mb-0" v-if="item.coupon">已套用優惠券</p> -->
              </td>
              <td>{{ item.price | currency }}</td>
              <td>
                <select class="form-select" v-model="item.qty" @change="getTotal">
                  <option :value="qty" v-for="qty in 10" :key="qty">{{ qty }}</option>
                </select>
              </td>
              <!-- <td>{{ item.qty }}</td> -->
              <td>{{ item.price * item.qty | currency }}</td>
            </tr>
          </template>
          <template v-slot:tfoot>
            <tfoot>
              <tr>
                <td colspan="5" class="text-end">總計</td>
                <td class="text-end">{{ subTotal | currency }}</td>
              </tr>
              <!-- <tr v-if="cart.final_total !== cart.total">
                <td colspan="5" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ cart.final_total | currency }}</td>
              </tr> -->
            </tfoot>
          </template>
        </Table>
        <div class="row justify-content-end">
          <div class="col-md-5">
            <div class="cart-total p-4 mt-2">
              <h3>購物車金額</h3>
              <p class="d-flex">
                <span>小計</span><span>{{ subTotal | currency }}</span>
              </p>
              <!-- <p class="d-flex"><span>Delivery</span><span>0.00</span></p> -->
              <!-- <p class="d-flex" v-for="item in cart.carts" :key="item.coupon.id">
                <span>Discount</span><span>-{{ 100 - item.coupon.percent }}%</span>
              </p> -->
              <hr />
              <p class="d-flex justify-content-end m-0">
                <span>總價</span><strong class="fs-5">{{ subTotal | currency }}</strong>
              </p>
              <!-- <p class="d-flex justify-content-end m-0 text-success" v-if="cart.final_total !== cart.total">
                <span>折扣價</span><strong class="fs-5">{{ cart.final_total | currency }}</strong>
              </p> -->
            </div>
            <!-- <div class="input-group input-group-sm mt-3" v-show="cart.carts.length > 0">
              <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼"
                @keyup.enter="addCouponCode">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                  套用優惠碼
                </button>
              </div>
            </div> -->
            <button type="button" class="btn w-100 btn-primary my-2" @click="addCart">結帳</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container" v-if="cartData.length > 0">
      <div class="cart-with-item">
        <Table>
          <template v-slot:thead>
            <tr>
              <th>&nbsp;</th>
              <th colspan="2">商品</th>
              <th>單價</th>
              <th>數量</th>
              <th>總價</th>
            </tr>
          </template>
          <template v-slot:tbody>
            <tr class="align-middle" v-for="item in cart.carts" :key="item.id">
              <td>
                <button type="button" class="btn btn-sm btn-outline-danger" @click="delCartItem(item.id)">
                  <i class="fas fa-spinner fa-spin me-1" v-if="status.delete"></i>
                  <i class="fa-solid fa-trash-can" v-else></i>
                </button>
              </td>
              <td>
                <a href="#" @click.prevent="$router.push(`/product/${item.product.id}`)">
                  <img class="product-image" :src="item.product.imageUrl" :alt="item.product.title" />
                </a>
              </td>
              <td>
                <h3><a class="text-dark" href="#" @click.prevent="$router.push(`/product/${item.product.id}`)"> {{
                    item.product.title
                }}</a></h3>
                <p class="text-success mb-0" v-if="item.coupon">已套用優惠券</p>
              </td>
              <td>{{ item.product.price | currency }}</td>
              <td>{{ item.qty }}</td>
              <td>{{ item.total | currency }}</td>
            </tr>
          </template>
          <template v-slot:tfoot>
            <tfoot>
              <tr>
                <td colspan="5" class="text-end">總計</td>
                <td class="text-end">{{ cart.total | currency }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="5" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ cart.final_total | currency }}</td>
              </tr>
            </tfoot>
          </template>
        </Table>
        <div class="row justify-content-end">
          <div class="col-md-5">
            <div class="cart-total p-4 mt-2">
              <h3>購物車金額</h3>
              <p class="d-flex">
                <span>小計</span><span>{{ cart.total | currency }}</span>
              </p>
              <p class="d-flex"><span>Delivery</span><span>0.00</span></p>
              <p class="d-flex" v-for="item in cart.carts" :key="item.coupon.id">
                <span>Discount</span><span>-{{ 100 - item.coupon.percent }}%</span>
              </p>
              <hr />
              <p class="d-flex justify-content-end m-0">
                <span>總價</span><strong class="fs-5">{{ cart.total | currency }}</strong>
              </p>
              <p class="d-flex justify-content-end m-0 text-success" v-if="cart.final_total !== cart.total">
                <span>折扣價</span><strong class="fs-5">{{ cart.final_total | currency }}</strong>
              </p>
            </div>
            <div class="input-group input-group-sm mt-3" v-show="cart.carts.length > 0">
              <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼"
                @keyup.enter="addCouponCode">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                  套用優惠碼
                </button>
              </div>
            </div>
            <button type="button" class="btn w-100 btn-primary my-2" @click="$router.push('/checkout')">結帳</button>
          </div>
        </div>
      </div>
    </div> -->
    <div class="container-fluid px-0" v-else>
      <div class="cart-without-item">
        <div class="p-lg-5 p-0  mb-4 bg-light bg-cart">
          <div class="container-fluid py-5 transbox">
            <h1 class="display-5 fw-bold text-center">購物車無商品</h1>
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
    // addCart(id, qty = 1) {
    //   const vm = this;
    //   const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
    //   vm.status.addCart = id;
    //   const cart = {
    //     product_id: id,
    //     qty,
    //   };
    //   vm.$http.post(url, { data: cart }).then((response) => {
    //     vm.$bus.$emit("msg-pop", response.data.message, "success");
    //     vm.status.addCart = "";
    //     vm.getCart();
    //   });
    // },

    // addCouponCode() {
    //   const vm = this;
    //   const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
    //   const coupon = {
    //     code: vm.coupon_code
    //   }
    //   vm.$http.post(url, { data: coupon }).then(response => {
    //     console.log(response);
    //     if (response.data.success)
    //       vm.$bus.$emit("msg-pop", response.data.message, "success");
    //     else vm.$bus.$emit("msg-pop", response.data.message, "danger");
    //     vm.coupon_code = ''
    //     // 更新購物車
    //     vm.getCart();
    //   });
    // },
    delCartItem(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.status.delete = id
      vm.$http.delete(url).then((response) => {
        vm.$bus.$emit("msg-pop", response.data.message, "success");
        // 更新購物車
        vm.getCart();
        vm.status.delete = ''
      });
    },
    deleteCart(item) {
      const vm = this
      vm.cartData.splice(vm.cartData.indexOf(item), 1)
      vm.getTotal();
      // 更新localStorage
      localStorage.setItem('cartData', JSON.stringify(vm.cartData))
      // 更新cart icon數量
      vm.$bus.$emit('local-pop')
      vm.$bus.$emit('msg-pop', '已刪除', 'success')
    },
    // getTotal() {
    //   const vm = this
    //   vm.cartData.forEach(item => {
    //     vm.subTotal += Number(item.price * item.qty)
    //   })
    // },
    getTotal() {
      const vm = this
      vm.subTotal = 0
      vm.cartData.forEach(item => {
        vm.subTotal += Number(item.price * item.qty)
      })
    },
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.$http.get(url).then((response) => {
        vm.cart = response.data.data;
        console.log(vm.cart);
      });
    },
  },

  created() {
    // this.getCart();
    this.getTotal();
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
