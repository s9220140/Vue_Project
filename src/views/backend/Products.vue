<template>
    <div>
        <div class="text-center">
            <loading :active.sync="isLoading"></loading>
        </div>
        <div class="text-end mt-4"  v-if="products.length > 0">
            <button class="btn btn-primary" @click="openModal">
                建立新的產品
            </button>
        </div>

        <Table :item="tempProduct" :products="products" @edit="openModal" @delete="delModal"  v-if="products.length > 0"></Table>
        <div class="d-flex justify-content-center">
            <Pagination :pagination="pagination" @pageItem="getProducts"  v-if="products.length > 0"></Pagination>
        </div>

        <Modal :item="tempProduct" :is-new="isNew" :status="status" @update="updateProduct"></Modal>

        <DeleteModal :item="tempProduct" :status="status" @delete="delProduct"></DeleteModal>
    </div>
</template>

<script>
</script>
<script>
import * as bootstrap from "bootstrap";
import Pagination from '@/components/Pagination.vue'
import Modal from "@/components/Modal.vue";
import DeleteModal from "@/components/DeleteModal.vue";
import Table from "@/components/Table.vue";
export default {
    components: { Pagination, Modal, DeleteModal, Table },
    data() {
        return {
            products: [],
            tempProduct: {},
            isNew: false,
            isLoading: false,
            status: {
                update: false,
                upload_img: false
            },
            pagination: {},
        };
    },
    methods: {
        getProducts(page = 1) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
            const vm = this;
            vm.isLoading = true;
            vm.$http.get(api).then(response => {
                vm.isLoading = false;
                vm.products = response.data.products;
                vm.pagination = response.data.pagination;
            });
        },
        openModal(isNew, item) {
            const vm=this
            if (isNew) {
                vm.tempProduct = {};
                vm.isNew = true;
            } else {
                vm.tempProduct = Object.assign({}, item);
                vm.isNew = false;
            }
            const myModal = new bootstrap.Modal("#modalComponent");
            myModal.show();
        },
        delModal(item) {
            this.tempProduct = Object.assign({}, item);
            const myModal = new bootstrap.Modal("#delModal");
            myModal.show();
        },
        updateProduct() {
            let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
            let httpMethod = "post";
            const vm = this;
            if (!vm.isNew) {
                api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
                httpMethod = "put";
            }
            vm.status.update = true;
            vm.$http[httpMethod](api, { data: vm.tempProduct }).then(response => {
                console.log(response.data);
                if (response.data.success)
                vm.$bus.$emit("msg-pop", response.data.message, "success");          
                else vm.$bus.$emit("msg-pop", response.data.message, "danger");
                vm.status.update = false;
                vm.getProducts();
                vm.hideModal();
            });
        },
        hideModal() {
            const myModal = document.querySelector("#modalComponent");
            const modal = bootstrap.Modal.getInstance(myModal);
            modal.hide();
        },
        hideDelModal() {
            const myModal = document.querySelector("#delModal");
            const modal = bootstrap.Modal.getInstance(myModal);
            modal.hide();
        },

        delProduct() {
            const vm = this;
            vm.status.update = true
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
            vm.$http.delete(api).then(response => {
                vm.status.update = false
                vm.$bus.$emit("msg-pop", response.data.message, "success");
                vm.hideDelModal();
                // 更新資料
                vm.getProducts();
            });
        }
    },
    created() {
        this.getProducts();
    },
};
</script>
