<template>
  <div>
    <div class="d-flex justify-content-center">
      <loading :active.sync="isLoading"></loading>
    </div>
    <div class="text-end">
      <button class="btn btn-primary mt-3" @click="openModal(true)" v-if="!isLoading">
        建立新的優惠券
      </button>
    </div>
    <Table v-show="coupons.length > 0" :item="tempCoupon" :products="coupons" @edit="openModal" @delete="delModal">
      <template v-slot:thead>
        <tr>
          <th>名稱</th>
          <th>優惠碼</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date | date }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未起用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm me-2" @click="openModal(false, item)">
              編輯
            </button>
            <button class="btn btn-danger btn-sm" @click="delModal(item)">
              刪除
            </button>
          </td>
        </tr>
      </template>
    </Table>
    <div class="d-flex justify-content-center">
      <Pagination v-show="coupons.length > 0" :pagination="pagination" @pageItem="getCoupons"></Pagination>
    </div>

    <Modal :item="tempCoupon" :is-new="isNew" :status="status" @update="updateCoupon">
      <template v-slot:modalTitle>
        <span v-if="isNew">建立優惠券</span>
        <span v-else>修改優惠券</span>
      </template>
      <template v-slot:modalBody>
        <div class="mb-3">
          <label class="form-label" for="title">標題</label>
          <input type="text" class="form-control" id="title" v-model="tempCoupon.title" placeholder="請輸入標題" />
        </div>
        <div class="mb-3">
          <label class="form-label" for="coupon_code">優惠碼</label>
          <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code" placeholder="請輸入優惠碼" />
        </div>
        <div class="mb-3">
          <label class="form-label" for="due_date">到期日</label>
          <input type="date" class="form-control" id="due_date" v-model="due_date" />
        </div>
        <div class="mb-3">
          <label class="form-label" for="price">折扣百分比</label>
          <input type="number" class="form-control" id="price" v-model="tempCoupon.percent" placeholder="請輸入折扣百分比" />
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" :true-value="1" :false-value="0"
              v-model="tempCoupon.is_enabled" id="is_enabled" />
            <label class="form-check-label" for="is_enabled"> 是否啟用 </label>
          </div>
        </div>
      </template>
      <template v-slot:modalFooter>
      </template>
    </Modal>

    <DeleteModal :item="tempCoupon" :status="status" @delete="deleteCoupon"></DeleteModal>
  </div>
</template>

<script>
import * as bootstrap from "bootstrap";
import DeleteModal from '@/components/DeleteModal.vue';
import Modal from '@/components/Modal.vue';
import Pagination from '@/components/Pagination.vue';
import Table from '@/components/Table.vue';

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {
        title: "",
        is_enabled: 1,
        percent: 100,
        due_date: 0,
        code: "",
      },
      status: {
        update: false,
      },
      due_date: new Date(),
      isNew: false,
      pagination: {},
      isLoading: false,
    };
  },
  watch: {
    due_date() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    },
  },
  methods: {
    openModal(isNew, item) {
      const vm = this;
      vm.isNew = isNew;
      if (vm.isNew) {
        vm.tempCoupon = {};
      }
      else {
        vm.tempCoupon = Object.assign({}, item);
        const dateAndTime = new Date(vm.tempCoupon.due_date * 1000)
          .toISOString()
          .split("T");
        vm.due_date = dateAndTime[0];
      }
      const myModal = new bootstrap.Modal("#modalComponent");
      myModal.show();
    },
    delModal(item) {
      const vm = this;
      vm.tempCoupon = Object.assign({}, item);
      const myModal = new bootstrap.Modal("#delModal");
      myModal.show();
    },
    hideModal() {
      const myModal = document.querySelector("#modalComponent");
      const modal = bootstrap.Modal.getInstance(myModal);
      modal.hide();
    },
    hideDelModal() {
      const myModal = document.querySelector("#delModal");
      const modal = bootstrap.Modal.getInstance(myModal);
      modal.hide();
    },
    getCoupons(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(url, vm.tempCoupon).then(response => {
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
        console.log(response);
        vm.isLoading = false;
      });
    },
    updateCoupon() {
      const vm = this;
      vm.status.update = true
      let url;
      //  建立
      if (vm.isNew) {
        url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
        vm.isLoading = true;
        vm.$http.post(url, { data: vm.tempCoupon }).then(response => {
          vm.status.update = false
          vm.$bus.$emit("msg-pop", response.data.message, "success");
          vm.hideModal();
          vm.getCoupons();
          vm.isLoading = false;
        });
      }
      else {
        // 修改
        url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        vm.due_date = new Date(vm.tempCoupon.due_date * 1000);
        vm.isLoading = true;
        vm.$http.put(url, { data: vm.tempCoupon }).then(response => {
          vm.status.update = false
          vm.hideModal();
          vm.$bus.$emit("msg-pop", response.data.message, "success");
          vm.getCoupons();
          vm.isLoading = false;
        });
      }
    },
    deleteCoupon() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      vm.status.update = true
      vm.isLoading = true;
      vm.$http.delete(url).then(response => {
        vm.status.update = false
        vm.$bus.$emit("msg-pop", response.data.message, "success");
        vm.hideDelModal();
        vm.isLoading = false;
        vm.getCoupons();
      });
    },
  },
  created() {
    this.getCoupons();
  },
  components: { Modal, DeleteModal, Pagination, Table }
};
</script>
