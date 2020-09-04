<template>
  <div>
    <div class="container">
      <navbar></navbar>
    </div>

    <!-- 訂單 Start -->
    <div class="container">
      <div class="row my-5">
        <div class="col-md-3 mx-auto text-center">
          <h2 class="formTitle text-gray mb-0">填寫資料</h2>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-8 mx-auto">
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="submitForm">
              <validation-provider rules="required" v-slot="{ errors, classes }">
                <div class="form-group">
                  <label for="name">姓名</label>
                  <input class="form-control" :class="classes" type="text" name="姓名" id="text" v-model="form.name">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </validation-provider>

              <validation-provider rules="required|email" v-slot="{ errors, classes }">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input class="form-control" :class="classes" type="email" name="Email" id="email" v-model="form.email">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </validation-provider>

              <validation-provider rules="required|integer" v-slot="{ errors, classes }">
                <div class="form-group">
                  <label for="tel">電話</label>
                  <input class="form-control" :class="classes" type="tel" name="電話" id="tel" v-model="form.tel">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </validation-provider>

              <validation-provider rules="required" v-slot="{ errors, classes }">
                <div class="form-group">
                  <label for="address">地址</label>
                  <input class="form-control" :class="classes" type="address" name="地址" id="address"
                    v-model="form.address">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </validation-provider>

              <validation-provider rules="required" v-slot="{ errors, classes }">
                <div class="form-group">
                  <label for="payment">付款方式</label>
                  <select class="form-control" :class="classes" id="payment" name="付款方式" v-model="form.payment">
                    <option value="" disabled>請選擇付款方式</option>
                    <option>WebATM</option>
                    <option>ATM</option>
                    <option>Barcode</option>
                    <option>Credit</option>
                    <option>ApplePay</option>
                    <option>GooglePay</option>
                  </select>
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </validation-provider>

              <div class="form-group">
                <label for="address">備註</label>
                <textarea class="form-control" name="message" id="message" v-model="form.message" cols="30"
                  rows="10"></textarea>
              </div>

              <button type="submit" class="btn btn-primary" :disabled="invalid">送出</button>
            </form>
          </validation-observer>
        </div>
      </div>
    </div>
    <!-- 訂單 End -->

    <myFooter></myFooter>

    <!-- 完成訂單 Modal start -->
    <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">完成訂單</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>恭喜你已完成訂單。</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="backToHome">關閉</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 完成訂單 Modal end -->
  </div>
</template>

<script>
/* global $ */
import navbar from '@/components/Navbar.vue'
import myFooter from '@/components/Footer.vue'

export default {
  components: {
    navbar,
    myFooter
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        tel: '',
        address: '',
        message: '',
        payment: ''
      }
    }
  },
  methods: {
    // 送出訂單
    submitForm () {
      // POST api/{uuid}/ec/orders
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`

      vm.axios.post(url, vm.form)
        .then((res) => {
          console.log('success')
          $('#orderModal').modal('show')
        })
        .catch((err) => {
          console.log(err.response)
          console.log('fail')
        })
    },
    backToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  .formTitle {
    border-bottom: .5px solid #C2C287;
    padding: 5px;
  }
</style>
