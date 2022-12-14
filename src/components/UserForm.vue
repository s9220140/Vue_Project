<template>
    <div>
        <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="createOrder">
                <validation-provider rules="required|email" v-slot="{ errors, classes }">
                    <div class="mb-3">
                        <label for="useremail" class="form-label">Email *</label>
                        <input type="email" class="form-control" name="email" id="useremail" v-model="form.user.email"
                            placeholder="請輸入 Email" :class="classes">
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                    </div>
                </validation-provider>

                <validation-provider rules="required" v-slot="{ errors, classes }">
                    <div class="mb-3">
                        <label for="username" class="form-label">收件人姓名 *</label>
                        <input type="text" class="form-control" name="name" id="username" v-model="form.user.name"
                            placeholder="輸入姓名" :class="classes">
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                    </div>
                </validation-provider>

                <validation-provider
                    :rules="{ regex: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, required: { allowFalse: false } }"
                    v-slot="{ errors, classes }">
                    <div class="mb-3">
                        <label for="tel" class="form-label">收件人電話 *</label>
                        <input type="tel" class="form-control" id="tel" v-model="form.user.tel" placeholder="請輸入電話"
                            :class="classes">
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                    </div>
                </validation-provider>

                <validation-provider rules="required" v-slot="{ errors, classes }">

                    <div class="mb-3">
                        <label for="useraddress" class="form-label">收件人地址 *</label>
                        <input type="text" class="form-control" name="address" id="useraddress"
                            v-model="form.user.address" placeholder="請輸入地址" :class="classes">
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                    </div>
                </validation-provider>

                <div class="mb-3">
                    <label for="comment" class="form-label">留言</label>
                    <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"
                        placeholder="可選填"></textarea>
                </div>
                <div class="text-end">
                    <button class="btn btn-danger" :disabled="invalid"> <i class="fas fa-spinner fa-spin me-1"
                            v-if="status.send"></i>送出訂單</button>
                </div>
            </form>
        </validation-observer>
    </div>
</template>

<script>
export default {
    props: ['form'],
    data() {
        return {
            status: {
                send: false,
            },
        }
    },
    methods: {
        createOrder() {
            this.$emit('send')
        }
    },
}
</script>