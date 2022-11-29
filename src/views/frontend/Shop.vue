<template>
  <div class="shop">
    <loading :active.sync="isLoading"></loading>
    <Jumbotron>
      <template v-slot:content>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center fs-3 bg-dark">
            <li class="breadcrumb-item"><a class="text-secondary" href="#">首頁</a></li>
            <li class="breadcrumb-item active text-white" aria-current="page">商品</li>
          </ol>
        </nav>
      </template>
    </Jumbotron>
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-9 col-md-12">
          <div class="row mb-3">
            <div class="col-md-12 d-flex justify-content-between align-items-center">
              <h3>選擇商品種類</h3>
              <div class="dropdown open">
                <button class="btn btn-light dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  選擇商品
                </button>
                <div class="dropdown-menu" aria-labelledby="triggerId">
                  <button class="dropdown-item" href="#">Action</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-3" v-for="item in products" :key="item.id">
              <Card :item="item" :status="status" @getItem="getProduct(item.id)" @addCart="addCart(item.id)">
                <template v-slot:footer>
                  <div class="card-footer d-flex">
                    <button type="button" class="btn btn-outline-secondary btn-sm" @click="getProduct(item.id)">
                      <i class="fas fa-spinner fa-spin me-1" v-show="status.info === item.id"></i>
                      快速瀏覽
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm ms-auto" @click="addCart(item.id)">
                      <i class="fa-solid fa-sync fa-spin me-1" v-show="status.addCart === item.id"></i>
                      加到購物車
                    </button>
                  </div>
                </template>
              </Card>
            </div>
            <div class="d-flex justify-content-center my-3">
              <Pagination :pagination="pagination" @pageItem="getProducts"></Pagination>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-12">
          <div class="categories">
            <h3>商品種類</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item list-group-item-action">An item<span><i
                    class="fa-solid fa-chevron-right"></i></span></li>
              <li class="list-group-item list-group-item-action">A second item<span><i
                    class="fa-solid fa-chevron-right"></i></span></li>
              <li class="list-group-item list-group-item-action">A third item<span><i
                    class="fa-solid fa-chevron-right"></i></span></li>
              <li class="list-group-item list-group-item-action">A fourth item<span><i
                    class="fa-solid fa-chevron-right"></i></span></li>
              <li class="list-group-item list-group-item-action">And a fifth one<span><i
                    class="fa-solid fa-chevron-right"></i></span></li>
            </ul>
          </div>
          <div class="blog">
            <h3 class="my-3">Recent Blog</h3>
            <div class="d-flex mb-3">
              <img class="blog-img me-3"
                src="https://images.unsplash.com/photo-1633220744880-cdf6c2b39f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGd1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="">
              <div class="text">
                <p class="mb-2">Even the all-powerful Pointing has no control about the blind texts</p>
                <div class="date">
                  <span class="me-3"><i class="fa-solid fa-calendar-days me-1"></i> Apr. 18, 2020</span>
                  <span><i class="fa-solid fa-comment me-1"></i>19</span>
                </div>
              </div>
            </div>
            <div class="d-flex mb-3">
              <img class="blog-img me-3"
                src="https://images.unsplash.com/photo-1633220744880-cdf6c2b39f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGd1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="">
              <div class="text">
                <p class="mb-2">Even the all-powerful Pointing has no control about the blind texts</p>
                <div class="date">
                  <span class="me-3"><i class="fa-solid fa-calendar-days me-1"></i> Apr. 18, 2020</span>
                  <span><i class="fa-solid fa-comment me-1"></i>19</span>
                </div>
              </div>
            </div>
            <div class="d-flex mb-3">
              <img class="blog-img me-3"
                src="https://images.unsplash.com/photo-1633220744880-cdf6c2b39f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwd2l0aCUyMGd1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="">
              <div class="text">
                <p class="mb-2">Even the all-powerful Pointing has no control about the blind texts</p>
                <div class="date">
                  <span class="me-3"><i class="fa-solid fa-calendar-days me-1"></i> Apr. 18, 2020</span>
                  <span><i class="fa-solid fa-comment me-1"></i>19</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import * as bootstrap from "bootstrap";
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
    getProduct(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.info = id;
      vm.$http.get(url).then((response) => {
        vm.product = response.data.product;
        const myModal = new bootstrap.Modal("#modalComponent");
        myModal.show();
        vm.status.info = "";
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
        vm.hideModal();
      });
    },
  },
  created() {
    this.getProducts()
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

.breadcrumb{
  opacity: .85;
}
</style>
