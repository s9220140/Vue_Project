<template>
  <div v-show="orders.length > 0">
    <Table>
      <template v-slot:thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ item.create_at | date }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <ul class="mb-0">
              <li v-for="item in item.products" :key="item.id">{{ item.product.title }}</li>
            </ul>
          </td>
          <td class="text-end">{{ item.total | currency }}</td>
          <td>
            <p class="text-success" v-if="item.is_paid">已付款</p>
            <p class="text-danger" v-else>未付款</p>
          </td>
          <td>
            <button type="button" class="btn btn-outline-primary" @click="openModal(item)">
              編輯
            </button>
          </td>
        </tr>
      </template>
      <template v-slot:tfoot> </template>
    </Table>
    <div class="d-flex justify-content-center" v-show="orders.length > 0">
      <Pagination :pagination="pagination" @pageItem="getOrders"></Pagination>
    </div>

    <Modal :item="tempOrder" :status="status" @update="updateOrder">
      <template v-slot:modalTitle>
        <h4>編輯訂單</h4>
      </template>
      <template v-slot:modalBody>
        <div class="row">
          <div class="col-sm-6">
            <div class="mb-3">
              <label class="form-label" for="email">信箱</label>
              <input v-model="tempOrder.user.email" type="email" class="form-control" name="" id="email"
                aria-describedby="emailHelpId" placeholder="" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="address">地址</label>
              <input v-model="tempOrder.user.address" type="text" name="" id="address" class="form-control"
                placeholder="" aria-describedby="helpId" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="name">姓名</label>
              <input v-model="tempOrder.user.name" type="text" name="" id="name" class="form-control" placeholder=""
                aria-describedby="helpId" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="tel">電話</label>
              <input v-model="tempOrder.user.tel" type="tel" name="" id="tel" class="form-control" placeholder=""
                aria-describedby="helpId" />
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="" id="" value="checkedValue"
                  v-model="tempOrder.is_paid" />是否已付款
              </label>
            </div>
            <div class="mb-3">
              <label class="form-label" for="total">應付金額</label>
              <input type="number" name="" id="total" class="form-control" placeholder="" aria-describedby="helpId"
                v-model.number="tempOrder.total" />
            </div>
          </div>
          <div class="col-sm-6" v-for="item in tempOrder.products" :key="item.id">
            <div class="mb-3">
              <label class="form-label" for="qty">數量</label>
              <input v-model.number="item.qty" type="text" name="" id="name" class="form-control" placeholder=""
                aria-describedby="helpId" />
            </div>
          </div>
        </div>
      </template>
      <template v-slot:modalFooter> </template>
    </Modal>
  </div>
</template>

<script>
import * as bootstrap from "bootstrap";
import Modal from "@/components/Modal.vue";
import Table from "@/components/Table.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  components: { Table, Modal, Pagination },
  data() {
    return {
      orders: {},
      tempOrder: {
        user: {},
      },
      status: {
        update: false,
      },
      pagination: {}
    };
  },
  methods: {
    getOrders() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders`;
      const vm = this;
      vm.$http.get(api).then((response) => {
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(item) {
      const vm = this;
      vm.tempOrder = Object.assign({}, item);
      console.log(vm.tempOrder);
      const myModal = new bootstrap.Modal("#modalComponent");
      myModal.show();
    },
    hideModal() {
      const myModal = document.querySelector("#modalComponent");
      const modal = bootstrap.Modal.getInstance(myModal);
      modal.hide();
    },
    updateOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${vm.tempOrder.id}`;
      vm.isLoading = true;
      vm.$http.put(api, { data: vm.tempOrder }).then(response => {
        vm.$bus.$emit("msg-pop", response.data.message, "success");
        vm.isLoading = false;
        vm.hideModal();
        vm.getOrders();
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
