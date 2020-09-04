<template>
  <div>
    <div class="container">
      <navbar></navbar>
    </div>

    <!-- 購物車頁面 start -->
    <div class="row justify-content-center my-5" v-if="carts.length">
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
        <div class="row">
          <div class="col-md-4 ml-auto">
            <router-link to="/order" class="btn btn-gold btn-block mt-4">
              結帳去
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 購物車頁面 end -->

    <div class="container h-100" v-else>
      <div class="row p-5" >
        <div class="col-md-8 mx-auto text-center py-5">
          <h3 class="mb-5">您的購物車沒有商品唷，請回商品頁面選購吧～</h3>
          <router-link to="/products" class="text-gold">
            <i class="far fa-arrow-alt-circle-left text-gold"></i> 繼續購物
          </router-link>
        </div>
      </div>
    </div>

    <myFooter></myFooter>

  </div>
</template>

<script>
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
      isLoading: false
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
    }
  }
}
</script>
