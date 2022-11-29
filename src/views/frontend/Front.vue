<template>
  <div>
    <AlertMessage></AlertMessage>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/frontend/Header.vue";
import Footer from "@/components/frontend/Footer.vue";
import AlertMessage from "@/components/AlertMessage.vue";
export default {
  components: { Header, Footer, AlertMessage },
};
</script>
