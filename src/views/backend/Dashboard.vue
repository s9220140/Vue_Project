<template>
    <div>
        <Header></Header>
        <Alert></Alert>
        <div class="container-fluid">
            <div class="row">
                <Sidebar></Sidebar>
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/backend/Header.vue';
import Sidebar from '@/components/backend/Sidebar.vue';
import Alert from '@/components/AlertMessage.vue';

export default {
    components: { Header, Sidebar, Alert },
    created() {
        const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        this.$http.defaults.headers.common.Authorization = myCookie;
    },
}
</script>

