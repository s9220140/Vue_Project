<template>
  <div>
    <div
      class="modal fade"
      data-bs-backdrop="static"
      id="modalComponent"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title me-3" id="exampleModalLabel">
              <slot name="modalTitle">
                <span v-if="isNew">新增產品</span>
                <span v-else>編輯產品</span>
              </slot>
            </h5>
            <button
              type="button"
              class="btn-close bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <slot name="modalBody">
              <form>
                <div class="row">
                  <div class="col-sm-4">
                    <div>
                      <label class="col-form-label" for="image"
                        >輸入圖片網址</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="image"
                        v-model="item.imageUrl"
                        placeholder="請輸入圖片連結"
                      />
                    </div>
                    <div>
                      <label class="col-form-label" for="customFile"
                        >或 上傳圖片
                        <i
                          class="fa-solid fa-cog fa-spin"
                          v-show="status.upload_img"
                        ></i>
                      </label>
                      <input
                        type="file"
                        id="customFile"
                        class="form-control"
                        ref="files"
                        @change="uploadFile"
                      />
                    </div>
                    <img
                      class="img-fluid"
                      :src="item.imageUrl"
                      :alt="item.fileName"
                    />
                  </div>
                  <div class="col-sm-8">
                    <div>
                      <label class="col-form-label" for="title">標題</label>
                      <input
                        type="text"
                        class="form-control"
                        id="title"
                        v-model="item.title"
                        placeholder="請輸入標題"
                      />
                    </div>

                    <div>
                      <div class="col-md-6">
                        <label class="col-form-label" for="category"
                          >分類</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="category"
                          v-model="item.category"
                          placeholder="請輸入分類"
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="col-form-label" for="price">單位</label>
                        <input
                          type="unit"
                          class="form-control"
                          id="unit"
                          v-model="item.unit"
                          placeholder="請輸入單位"
                        />
                      </div>
                    </div>

                    <div>
                      <div class="col-md-6">
                        <label class="col-form-label" for="origin_price"
                          >原價</label
                        >
                        <input
                          type="number"
                          class="form-control"
                          id="origin_price"
                          v-model="item.origin_price"
                          placeholder="請輸入原價"
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="col-form-label" for="price">售價</label>
                        <input
                          type="number"
                          class="form-control"
                          id="price"
                          v-model="item.price"
                          placeholder="請輸入售價"
                        />
                      </div>
                    </div>
                    <hr />

                    <div>
                      <label class="col-form-label" for="description"
                        >產品描述</label
                      >
                      <textarea
                        type="text"
                        class="form-control"
                        id="description"
                        v-model="item.description"
                        placeholder="請輸入產品描述"
                      ></textarea>
                    </div>
                    <div>
                      <label class="col-form-label" for="content"
                        >說明內容</label
                      >
                      <textarea
                        type="text"
                        class="form-control"
                        id="content"
                        v-model="item.content"
                        placeholder="請輸入產品說明內容"
                        @keyup.alt.enter="updateProduct"
                      ></textarea>
                    </div>
                    <div class="mt-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="item.is_enabled"
                          :true-value="1"
                          :false-value="0"
                          id="is_enabled"
                        />
                        <label class="form-check-label" for="is_enabled">
                          是否啟用
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="modalFooter">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="updateData">
                <i class="fas fa-spinner fa-spin me-1" v-if="status.update"></i
                >確認
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "isNew", "status"],
  methods: {
    updateData() {
      this.$emit("update");
    },
    uploadFile() {
      console.log(this);
      const vm = this;
      const uploadedFile = vm.$refs.files.files[0];
      vm.item.fileName = uploadedFile.name;
      const formData = new FormData();
      formData.append("file-to-upload", uploadedFile);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      vm.status.upload_img = true;
      vm.$http
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          vm.status.upload_img = false;
          console.log(response.data);
          if (response.data.success)
            vm.$set(vm.item, "imageUrl", response.data.imageUrl);
          else vm.$bus.$emit("msg-pop", response.data.message, "danger");
          document.getElementById("customFile").value = "";
        });
    },
  },
};
</script>
