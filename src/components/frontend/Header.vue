<template>
    <div>
        <header class="p-3 bg-dark text-dark">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <h1>
                        <router-link class="text-white text-decoration-none" to="/">Logo</router-link>
                    </h1>
                    <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <router-link class="nav-link text-secondary" to="/">Home</router-link>
                        <router-link class="nav-link text-white" to="/shop">商店</router-link>
                    </ul>
                    <div class="inner">
                        <button type="button" class="btn btn-outline-danger me-3 wishlist">
                            <i class="fas fa-2x fa-heart"></i>
                            <span class="count">0</span>
                        </button>

                        <button type="button" class="btn btn-outline-info cart" @click="$router.push('/cart')">
                            <i class="fas fa-2x fa-shopping-cart"></i>
                            <span class="count">0</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
.wishlist,
.cart {
    position: relative;
}

.count {
    position: absolute;
    top: -15px;
    right: -15px;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: red;
    color: #fff;
}
</style>
