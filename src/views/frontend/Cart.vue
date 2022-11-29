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
    <div class="container">
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
              <span>Discount</span><span>-{{100 - item.coupon.percent }}%</span></p>
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
      coupon_code: ''
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
    addCart(id, qty = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.status.addCart = id;
      const cart = {
        product_id: id,
        qty,
      };
      vm.$http.post(url, { data: cart }).then((response) => {
        vm.$bus.$emit("msg-pop", response.data.message, "success");
        vm.status.addCart = "";
        vm.getCart();
      });
    },
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      // vm.isLoading = true;
      vm.$http.get(url).then((response) => {
        vm.cart = response.data.data;
        console.log(vm.cart);
        // vm.isLoading = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code
      }
      vm.$http.post(url, { data: coupon }).then(response => {
        console.log(response);
        if (response.data.success)
          vm.$bus.$emit("msg-pop", response.data.message, "success");
        else vm.$bus.$emit("msg-pop", response.data.message, "danger");
        vm.coupon_code = ''
        // 更新購物車
        vm.getCart();
      });
    },
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
  },
  created() {
    this.getCart();
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
</style>
