<template>
    <div class="card h-100">
        <img :src="item.imageUrl" class="product-image pt-3 h-50 w-50 mx-auto" :alt="item.title"
            @click.prevent="$router.push(`/product/${item.id}`)">
        <div class="card-body">
            <h5 class="card-title">
                <a class="text-dark" href="#" @click.prevent="$router.push(`/product/${item.id}`)">{{ item.title }}</a>
            </h5>
            <div class="d-flex justify-content-between align-items-baseline">
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                <div class="h5 text-danger" v-if="item.price">現在只要 {{ item.price }} 元</div>
            </div>
        </div>
        <slot name="footer">
            <div class="card-footer d-flex">
                <button type="button" class="btn btn-outline-secondary btn-sm" @click="getProduct(item.id)">
                    <i class="fas fa-spinner fa-spin me-1" v-show="status.info === item.id"></i>
                    查看更多
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm ms-auto" @click="addCart(item.id)">
                    <i class="fa-solid fa-sync fa-spin me-1" v-show="status.addCart === item.id"></i>
                    加到購物車
                </button>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    props: ['item', 'status'],
    methods: {
        getProduct() {
            this.$emit('getItem')
        },
        addCart() {
            this.$emit('addCart')
        }
    },
}
</script>

<style lang="scss">
.product-image {
    cursor: pointer;
}

@media (max-width:576px) {
    .product-image {
        width: 100% !important;
        height: 100% !important;
    }
}

a {
    text-decoration: none;
}
</style>