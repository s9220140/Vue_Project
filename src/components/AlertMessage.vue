<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      {{ item.message }}
      <button
        type="button"
        class="btn-close"
        @click="removeMessage(i)"
        aria-label="Close"
        data-bs-dismiss="alert"
      >

      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp,
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 1500);
    },
  },
  created() {
    const vm = this;
    // 自定義名稱 'message:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    vm.$bus.$on("msg-pop", (message, status = "warning") => {
      vm.updateMessage(message, status);
    });
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 10px;
  right: 20px;
  z-index: 1100;
}
</style>
