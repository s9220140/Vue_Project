<template>
  <div>
    <Alert></Alert>
    <main class="form-signin w-100 m-auto">
      <form @submit.prevent="signin">
        <h1 class="h3 mb-3 fw-normal text-center">管理者登入</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="user.username" />
          <label for="email">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="password" placeholder="Password" v-model="user.password" />
          <label for="password">Password</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">
          <i class="fa-solid fa-cog fa-spin" v-if="showIcon"></i>
          登入
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import Alert from "@/components/AlertMessage.vue";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      showIcon: false,
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      vm.showIcon = true;
      vm.$http.post(api, vm.user).then(response => {
        vm.showIcon = false;
        if (response.data.success) {
          const token = response.data.token;
          const expired = response.data.expired;
          document.cookie = `myToken=${token}; expires=${new Date(
            expired
          )}; SameSite=None; Secure`;
          vm.$router.push("/admin/products");
        } else vm.$bus.$emit("msg-pop", response.data.message, "danger");
      });
    },
  },
  components: { Alert },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
