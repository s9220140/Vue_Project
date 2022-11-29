<template>
  <div class="shop">
    <Jumbotron>
      <template v-slot:content>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center fs-3 bg-dark">
            <router-link class="breadcrumb-item" to="/">首頁</router-link>
            <router-link class="breadcrumb-item active text-white" to="/shop">商品</router-link>
            <li class="breadcrumb-item active text-white">{{ product.title }}</li>
          </ol>
        </nav>
      </template>
    </Jumbotron>
    <section class="my-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="product-image">
              <a href="#">
                <img class="img-fluid" :src="product.imageUrl" :alt="product.title">
              </a>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="product-detail">
              <h3>{{ product.title }}</h3>
              <div class="rating d-flex">
                <p class="me-4"><a class="text-danger" href="#">5.0 <i class="fa-solid fa-star ms-1"></i><i
                      class="fa-solid fa-star ms-1"></i><i class="fa-solid fa-star ms-1"></i><i
                      class="fa-solid fa-star ms-1"></i><i class="fa-solid fa-star ms-1"></i></a></p>
                <p class="me-4"><a href="#" class="text-dark">100 <span class="text-secondary">rating</span></a></p>
                <p><a href="#" class="text-dark">500 <span class="text-secondary">Sold</span></a></p>
              </div>
              <div class="price mb-3">
                <strong class="fs-3">{{ product.price | currency }}</strong>
              </div>
              <p>{{ product.content }}</p>
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-5">
                  <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1"><i
                        class="fas fa-minus"></i></button>
                    <input value="1" min="1" max="10" type="text" class="form-control" placeholder=""
                      aria-label="Example text with button addon" aria-describedby="button-addon1">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1"><i
                        class="fas fa-plus"></i></button>
                  </div>
                </div>
                <p>80 piece available</p>
              </div>
              <button type="button" class="btn btn-outline-primary btn-lg me-2"
                @click="addCart(product.id, product.qty)"><i class="fas fa-spinner fa-spin me-1" v-if="status.addCart"></i>加入購物車</button>
              <button type="button" class="btn btn-primary btn-lg">馬上購買</button>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-12">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">商品簡介</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">規格</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">評價</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Modal>
      <template v-slot:modalTitle>
        {{ product.title }}
      </template>
      <template v-slot:modalBody>
        <div class="row">
          <div class="col-md-6">
            <img :src="product.imageUrl" class="img-fluid" :alt="product.title" />
          </div>
          <div class="col-md-6">
            <blockquote class="blockquote mt-3">
              <p class="mb-3">{{ product.content }}</p>
            </blockquote>
          </div>
        </div>

        <div class="d-flex justify-content-between align-items-baseline">
          <div class="h4" v-if="!product.price">
            {{ product.origin_price }} 元
          </div>
          <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
          <div class="h4 text-danger" v-if="product.price">
            現在只要 {{ product.price }} 元
          </div>
        </div>
        <select class="form-select mt-3" v-model="product.num">
          <option :value="num" v-for="num in 10" :key="num">
            選購 {{ num }} <span v-if="!product.unit">個</span>
            {{ product.unit }}
          </option>
        </select>
      </template>
      <template v-slot:modalFooter>
        <div class="text-muted text-nowrap me-3">
          小計 <strong>{{ product.num * product.price }}</strong> 元
        </div>
        <button type="button" class="btn btn-primary" @click="addCart(product.id, product.num)">
          <i class="fas fa-spinner fa-spin me-1" v-if="product.id === status.addCart"></i>
          加到購物車
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Jumbotron from "@/components/frontend/Jumbotron.vue";
// import * as bootstrap from "bootstrap";
import Modal from "@/components/Modal.vue";
import Pagination from "@/components/Pagination.vue";

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
        carts: []
      },
    };
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      vm.$http.get(url).then((response) => {
        vm.products = response.data.products;
        vm.pagination = response.data.pagination
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
      vm.$http.get(url).then(response => {
        vm.cart = response.data.data
        console.log(vm.cart);
        // vm.isLoading = false;
      });
    },
  },
  created() {
    this.getProduct()
  },
  components: { Jumbotron, Card, Modal, Pagination },
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

.list-group-item {
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 1rem;
  cursor: pointer;
}

.blog-img {
  display: block;
  width: 70px;
  height: 70px;
}

.breadcrumb {
  opacity: .85;
}

.product-image {
  box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.7);
}

.form-control {
  text-align: center;
}
</style>
