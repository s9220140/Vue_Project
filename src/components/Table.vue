<template>
        <div class="table-responsive">
            <table class="table table-hover table-striped mt-4">
                <thead>
                    <slot name="thead">
                        <tr>
                            <th width="120">分類</th>
                            <th>產品名稱</th>
                            <th width="120">原價</th>
                            <th width="120">售價</th>
                            <th width="100">是否啟用</th>
                            <th width="120">編輯</th>
                        </tr>
                    </slot>
                </thead>
                <tbody>
                    <slot name="tbody">
                        <tr v-for="item in products" :key="item.id">
                            <td>{{ item.category }}</td>
                            <td>{{ item.title }}</td>
                            <td class="text-end">
                                {{ item.origin_price | currency }}
                            </td>
                            <td class="text-end">
                                {{ item.price | currency }}
                            </td>
                            <td>
                                <span v-if="item.is_enabled" class="text-success">啟用</span>
                                <span class="text-danger" v-else>未啟用</span>
                            </td>
                            <td>
                                <div class="d-flex">
    
                                    <button class="btn btn-outline-primary btn-sm me-1" @click="openModal(false, item)">
                                        編輯
                                    </button>
                                    <button class="btn btn-outline-danger btn-sm" @click="delModal(item)">
                                        刪除
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </slot>
                </tbody>
                <slot name="tfoot">
                    <tfoot></tfoot>
                </slot>
            </table>
        </div>
</template>

<script>
export default {
    props: ['item', 'products'],
    methods: {
        openModal(isNew, item) {
            this.$emit("edit", isNew, item);
        },
        delModal(item) {
            this.$emit("delete", item);
        },
    },
}
</script>