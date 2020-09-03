<template>
  <div>
    <div class="container">
      <navbar></navbar>
    </div>

    <div class="container my-5">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row align-items-center">
            <div class="col-md-7">
              <!-- <img :src="`${ product.imageUrl }`" alt class="img-fluid" /> -->
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img :src="`${ product.imageUrl }`" class="d-block w-100" alt="" />
                  </div>
                  <div class="carousel-item">
                    <img :src="`${ product.imageUrl }`" class="d-block w-100" alt="" />
                  </div>
                  <div class="carousel-item">
                    <img :src="`${ product.imageUrl }`" class="d-block w-100" alt="" />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div class="col-md-5">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-white px-0 mb-0">
                  <li class="breadcrumb-item">
                    <router-link class="text-muted" to="/">首頁</router-link>
                  </li>
                  <li class="breadcrumb-item">
                    <router-link class="text-muted" to="/products">產品列表</router-link>
                  </li>
                  <li class="breadcrumb-item text-gold" aria-current="page">{{ product.title }}</li>
                </ol>
              </nav>
              <h2 class="font-weight-bold h1 my-2 text-gray text-left">{{ product.title }}</h2>
              <p class="text-main text-left">{{ product.content }}</p>
              <p class="mb-0 text-muted text-right">
                <del>NT$ {{ product.origin_price }}</del>
              </p>
              <p class="h4 font-weight-bold text-right">NT$ {{ product.price }}</p>
              <div class="d-flex align-items-center">
                <div class="input-group my-3 mr-2 bg-light rounded">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-gold border-0 py-2"
                      type="button"
                      id="button-addon1"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control border-0 text-center my-auto shadow-none bg-light"
                    placeholder
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    value="1"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-gold border-0 py-2"
                      type="button"
                      id="button-addon2"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <button type="button" class="btn btn-gold btn-block py-2" @click="addToCart(product)">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <myFooter></myFooter>
  </div>
</template>

<script>
/* global $ */
// import Loading from 'vue-loading-overlay'
import navbar from '@/components/Navbar.vue'
import myFooter from '@/components/Footer.vue'

export default {
  components: {
    // Loading,
    navbar,
    myFooter
  },
  data () {
    return {
      product: {},
      isLoading: false,
      status: {
        loadingItem: ''
      }
    }
  },
  created () {
    const vm = this
    const id = vm.$route.params.id
    const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`

    vm.isLoading = true

    vm.axios
      .get(url)
      .then(res => {
        vm.product = res.data.data
        vm.isLoading = false
      })
      .catch(err => {
        console.log(err)
        vm.isLoading = false
      })
  },
  methods: {
    addToCart (item, quantity = 1) {
      // POST api/{uuid}/ec/shopping
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`

      vm.status.loadingItem = item.id
      vm.isLoading = true

      const cart = {
        product: item.id,
        quantity: quantity
      }

      vm.axios.post(url, cart)
        .then((res) => {
          console.log(res)
          vm.status.loadingItem = ''
          vm.isLoading = false
          vm.getCarts()
        })
        .catch((err) => {
          console.log(err)
          $('#productModal').modal('hide')
          vm.status.loadingItem = ''
          vm.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss">
.img {
  width: 50%;
  text-align: center;
  margin: auto;
}
img {
  max-width: 100%;
}
</style>
