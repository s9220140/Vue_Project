<template>
  <div class="shop">
    <Jumbotron>
      <template v-slot:content>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center fs-3 bg-dark">
            <router-link class="breadcrumb-item" to="/">首頁</router-link>
            <li class="breadcrumb-item active text-white">結帳</li>
          </ol>
        </nav>
      </template>
    </Jumbotron>
    <div class="container">
      <div class="row justify-content-center my-3">
        <div class="col-md-6">
          <h3>使用者資料</h3>
          <UserForm :form="form" @send="createOrder"></UserForm>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-12">
              <div class="cart-total p-4 my-2">
                <h3>購物車金額</h3>
                <p class="d-flex">
                  <span>小計</span><span>{{ cart.total | currency }}</span>
                </p>
                <p class="d-flex"><span>Delivery</span><span>0.00</span></p>
                <p class="d-flex"><span>Discount</span><span>0.00</span></p>
                <hr />
                <p class="d-flex justify-content-end m-0">
                  <span>總價</span
                  ><strong class="fs-5">{{ cart.total | currency }}</strong>
                </p>
                <p class="d-flex justify-content-end m-0 text-success">
                  <span>折扣價</span
                  ><strong class="fs-5">{{
                    cart.final_total | currency
                  }}</strong>
                </p>
              </div>
              <div class="input-group input-group-sm mt-3">
                <input
                  type="text"
                  class="form-control"
                  v-model="coupon_code"
                  placeholder="請輸入優惠碼"
                  @keyup.enter="addCouponCode"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="addCouponCode"
                  >
                    套用優惠碼
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-12">
              <div class="cart-total p-4 my-2">
                <h3>付款方式</h3>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                  <label class="form-check-label" for="flexRadioDefault1">
                    銀行轉帳
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                  <label class="form-check-label" for="flexRadioDefault2">
                    信用卡
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                  <label class="form-check-label" for="flexRadioDefault2">
                    Line Pay
                  </label>
                </div>
                <div class="form-check mt-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    我已讀過並同意購物條款
                  </label>
                </div>
              </div>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/frontend/Jumbotron.vue";
import UserForm from "@/components/UserForm.vue";

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
      cart: {},
      coupon_code: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
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
        console.log(response);
        vm.cart = response.data.data;
        console.log(vm.cart);
        // vm.isLoading = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.$http.post(url, { data: coupon }).then((response) => {
        console.log(response);
        if (response.data.success)
          vm.$bus.$emit("msg-pop", response.data.message, "success");
        else vm.$bus.$emit("msg-pop", response.data.message, "danger");
        vm.coupon_code = "";
        // 更新購物車
        vm.getCart();
      });
    },
    delCartItem(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.status.delete = id;
      vm.$http.delete(url).then((response) => {
        vm.$bus.$emit("msg-pop", response.data.message, "success");
        // 更新購物車
        vm.getCart();
        vm.status.delete = "";
      });
    },
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      // vm.isLoading = true
      vm.$http.post(url, { data: order }).then((response) => {
        if (response.data.success) {
          vm.$bus.$emit("msg-pop", response.data.message, "success");
          vm.$router.push(`/payorder/${response.data.orderId}`);
        }
        // vm.isLoading = false
      });
    },
  },
  created() {
    this.getCart();
  },
  components: { Jumbotron, UserForm },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  background-image: url(https://media.wbur.org/wp/2018/03/Gun-shop-cropped-1000x667.jpg);
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
