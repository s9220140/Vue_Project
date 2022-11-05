<template>
    <div>
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3 sidebar-sticky">
                <h6
                    class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>管理員</span>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin/product"><i
                                class="fa-solid fa-table-list me-1"></i>產品列表
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin/coupons"><i class="fa-solid fa-ticket me-1"></i>優惠券
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin/orders"><i class="fa-solid fa-list-check me-1"></i>訂單列表
                        </router-link>
                    </li>
                </ul>

                <h6
                    class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>模擬功能</span>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/customer_order"><i
                                class="fa-solid fa-clipboard-list me-1"></i>模擬訂單</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
