<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="row mt-3 g-4">
            <div class="col-lg-3 col-md-4 col-6" v-for="item in products" :key="item.id">
                <Card :item="item" :status="status" @getItem="getProduct(item.id)" @addCart="addCart(item.id)"></Card>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <Pagination :pagination="pagination" @pageItem="getProducts"></Pagination>
        </div>

        <div class="my-5 row justify-content-center">
            <div v-if="cart.carts.length === 0" class="default-page">
                <h2 class="text-center">購物車沒有商品</h2>
            </div>
            <div v-else class="cart-page">
                <Table>
                    <template v-slot:thead>
                        <tr>
                            <th width="20"></th>
                            <th class="ps-2">品名</th>
                            <th width="60">數量</th>
                            <th width="60" class="text-end pe-2">單價</th>
                        </tr>
                    </template>
                    <template v-slot:tbody>
                        <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
                            <td class="align-middle">
                                <a href="#" class="btn btn-outline-danger btn-sm" role="button"
                                    @click.prevent="delCartItem(item.id)">
                                    <span v-if="status.delete === item.id"><i class="fas fa-spinner fa-spin"></i></span>
                                    <span v-else><i class="far fa-trash-alt"></i></span>
                                </a>
                            </td>
                            <td class="align-middle">
                                {{ item.product.title }}
                                <div class="text-success" v-if="item.coupon">
                                    已套用優惠券
                                </div>
                            </td>
                            <td class="align-middle">{{ item.qty }} <span v-show="item.product.unit"> / {{
                                    item.product.unit
                            }}</span></td>
                            <td class="align-middle text-end">{{ item.final_total | currency }}</td>
                        </tr>
                    </template>
                    <template v-slot:tfoot>
                        <tfoot>
                            <tr>
                                <td colspan="3" class="text-end">總計</td>
                                <td class="text-end">{{ cart.total | currency }}</td>
                            </tr>
                            <tr v-if="cart.final_total !== cart.total">
                                <td colspan="3" class="text-end text-success">折扣價</td>
                                <td class="text-end text-success">{{ cart.final_total | currency }}</td>
                            </tr>
                        </tfoot>
                    </template>
                </Table>

                <div class="input-group mb-3 input-group-sm">
                    <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼"
                        @keyup.enter="addCouponCode">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                            套用優惠碼
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- form -->
        <div v-show="cart.carts.length > 0" class="my-5 row justify-content-center">
            <div class="col-md-6">
                <UserForm :form="form" @send="createOrder"></UserForm>
            </div>
        </div>

        <Modal>
            <template v-slot:modalTitle>
                {{ product.title }}
            </template>
            <template v-slot:modalBody>
                <img :src="product.imageUrl" class="img-fluid" :alt="product.title">
                <blockquote class="blockquote mt-3">
                    <p class="mb-3">{{ product.content }}</p>
                    <footer class="blockquote-footer text-end" v-show="product.content !== product.description">
                        {{ product.description }}</footer>
                </blockquote>
                <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
                    <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
                    <div class="h4 text-danger" v-if="product.price">現在只要 {{ product.price }} 元</div>
                </div>
                <select class="form-select mt-3" v-model="product.num">
                    <option :value="num" v-for="num in 10" :key="num">
                        選購 {{ num }} <span v-if="!product.unit">個</span> {{ product.unit }}
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
import * as bootstrap from "bootstrap";
import Pagination from '@/components/Pagination.vue'
import Card from "@/components/Card.vue";
import Table from "@/components/Table.vue";
import UserForm from "@/components/UserForm.vue";
import Modal from "@/components/Modal.vue";


export default {
    components: { Pagination, Card, Table, UserForm, Modal },
    data() {
        return {
            products: [],
            product: {},
            defaultNum: 1,
            isLoading: false,
            status: {
                info: '',
                addCart: '',
                delete: ''
            },
            pagination: {},
            cart: {
                carts: []
            },
            coupon_code: '',
            form: {
                user: {
                    name: "",
                    email: "",
                    tel: "",
                    address: "",
                },
                message: ''
            }
        }
    },
    methods: {
        getProducts(page = 1) {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
            vm.isLoading = true;
            vm.$http.get(url).then(response => {
                vm.products = response.data.products;
                vm.pagination = response.data.pagination
                console.log(response);
                vm.isLoading = false;
            });
        },
        getProduct(id) {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
            vm.status.info = id;
            vm.$http.get(url).then(response => {
                vm.product = response.data.product;
                const myModal = new bootstrap.Modal("#modalComponent");
                myModal.show();
                console.log(response);
                vm.status.info = '';
            });
        },
        addCart(id, qty = 1) {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            vm.status.addCart = id;
            const cart = {
                product_id: id,
                qty
            }
            vm.$http.post(url, { data: cart }).then(response => {
                vm.$bus.$emit("msg-pop", response.data.message, "success");
                console.log(response);
                vm.status.addCart = '';
                vm.getCart()
                vm.hideModal()
            });
        },
        hideModal() {
            const myModal = document.querySelector("#modalComponent");
            const modal = bootstrap.Modal.getInstance(myModal);
            // 避免快速加入購物車出現錯誤
            if (myModal.classList.contains('show')) {
                modal.hide();
            }
        },
        getCart() {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            vm.isLoading = true;
            vm.$http.get(url).then(response => {
                vm.cart = response.data.data
                console.log(vm.cart);
                vm.isLoading = false;
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
        addCouponCode() {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
            const coupon = {
                code: vm.coupon_code
            }
            vm.$http.post(url, { data: coupon }).then(response => {
                if (response.data.success)
                    vm.$bus.$emit("msg-pop", response.data.message, "success");
                else vm.$bus.$emit("msg-pop", response.data.message, "danger");
                vm.coupon_code = ''
                // 更新購物車
                vm.getCart();
            });
        },
        createOrder() {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
            const order = vm.form;
            vm.isLoading = true
            vm.$http.post(url, { data: order }).then(response => {
                if (response.data.success) {
                    vm.$bus.$emit("msg-pop", response.data.message, "success");
                    vm.$router.push(`/customer_checkout/${response.data.orderId}`);
                }
                vm.isLoading = false
            });
        },
    },
    created() {
        const vm = this
        vm.getProducts()
        vm.getCart()
    },
}
</script>


