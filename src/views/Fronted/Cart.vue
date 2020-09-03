<template>
  <div>
    <!-- <h2>購物車</h2>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/products">Products</router-link> |
            <router-link to="/cart">Cart</router-link> |
            <router-link to="/admin">後台登入</router-link>
    </div>-->
    <div class="container">
      <navbar></navbar>
    </div>

    <!-- 購物車頁面 start -->
    <div class="row justify-content-center my-5">
      <div class="col-md-6">
        <div class="text-right mb-3">
          <button type="button" class="btn btn-outline-danger btn-sm" @click="removeAllCartItem">
            <i class="far fa-trash-alt">刪除所有品項</i>
          </button>
        </div>
        <loading :active.sync="isLoading"></loading>
        <table class="table">
          <thead>
            <th>刪除</th>
            <th>品名</th>
            <th width="150px">數量</th>
            <th>單位</th>
            <th>單價</th>
          </thead>
          <tbody v-if="carts.length">
            <tr v-for="item in carts" :key="item.product.id">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.product.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-gold"
                      type="button"
                      @click="quantityUpdata(item.product.id, item.quantity + 1)"
                    >+</button>
                  </div>
                  <input
                    id="inlineFormInputGroupUsername"
                    type="text"
                    class="form-control text-center"
                    :value="item.quantity"
                    @keyup.enter="quantityUpdata(item.product.id, $event.target.value)"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-gold"
                      type="button"
                      @click="quantityUpdata(item.product.id, item.quantity - 1)"
                      :disabled="item.quantity === 1"
                    >-</button>
                  </div>
                </div>
              </td>
              <td class="align-middle">{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.product.price }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-right">總計</td>
              <td class="text-right">{{ cartTotal }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <!-- 購物車頁面 end -->

    <!-- 訂單 Start -->
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
import Loading from 'vue-loading-overlay'
import navbar from '@/components/Navbar.vue'
import myFooter from '@/components/Footer.vue'

export default {
  components: {
    Loading,
    navbar,
    myFooter
  },
  data () {
    return {
      carts: [],
      cartTotal: 0,
      isLoading: false,
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
  created () {
    const vm = this
    vm.getCarts()
  },
  methods: {
    // 取得購物車
    getCarts () {
      // GET api/{uuid}/ec/shopping
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`

      vm.axios
        .get(url)
        .then(res => {
          vm.carts = res.data.data
          vm.cartTotalCal()
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    // 更改購物車的數量
    quantityUpdata (id, num) {
      // 避免商品數量低於 0 個
      if (num <= 0) {
        return
      }

      // PATCH api/{uuid}/ec/shopping
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`

      vm.isLoading = true
      vm.cartTotal = 0

      const data = {
        product: id,
        quantity: num
      }

      vm.axios.patch(url, data)
        .then((res) => {
          vm.isLoading = false
          vm.getCarts()
        })
        .catch((err) => {
          console.log(err)
          vm.isLoading = false
        })
    },
    // 刪除購物車單一筆品項
    removeCartItem (id) {
      // DELETE api/{uuid}/ec/shopping/{pid}
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`

      vm.isLoading = true

      vm.axios.delete(url)
        .then((res) => {
          console.log(res)
          vm.getCarts()
          vm.isLoading = false
        })
        .catch((err) => {
          console.log(err.response)
          vm.isLoading = false
        })
    },
    // 刪除購物車所有資料
    removeAllCartItem () {
      // DELETE api/{uuid}/ec/shopping/all/product
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`

      vm.isLoading = true

      vm.axios.delete(url)
        .then((res) => {
          vm.isLoading = false
          vm.cartTotal = 0
          vm.getCarts()
        })
        .catch((err) => {
          console.log(err.response)
          vm.isLoading = false
        })
    },
    // 計算購物車總金額
    cartTotalCal () {
      const vm = this
      vm.cartTotal = 0
      vm.carts.forEach(function (item) {
        vm.cartTotal += item.product.price * item.quantity
      })
    },
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
