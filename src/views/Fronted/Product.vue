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
              <div class="d-flex align-items-center mb-3">
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
              <p class="text-main text-left mb-0">遇扇坊（CursiveFancy)，主營書法創作。我們的作品，是書道人一筆一畫悉心而就，每一件筆走龍蛇墨氣舒健之作，都帶著獨特韻味，淬冶著匠心溫度，以及對藝術的虔誠與熱愛。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="newsComponent my-4 my-sm-5">
      <div class="container">
        <div class="row">
          <div class="col-10 col-md-3 mx-auto">
            <h2 class="newsComponent__title text-gray my-4 my-sm-5 p-1">藝術史專欄文章</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-sm-5">
            <div data-aos="fade-up" class="news__item">
              <a target="_blank" href="http://www.artist-magazine.com/edcontent_d.php?lang=tw&tb=8&id=11682&fbclid=IwAR3MSo-2Rg8hjm0-KxFZdCBtZj3fMSK6SaZu3yRTMw4EgqmrPjY477LFPhs">
                <div class="bg-cover" style="width: 100%; height: 300px; background-image: url(http://www.artist-magazine.com/archive/image/edcontent8/54334502.jpg);"></div>
              </a>
              <div class="news__item__content d-flex">
                <div class="news__item__content__title">
                  <a target="_blank" href="http://www.artist-magazine.com/edcontent_d.php?lang=tw&tb=8&id=11682&fbclid=IwAR3MSo-2Rg8hjm0-KxFZdCBtZj3fMSK6SaZu3yRTMw4EgqmrPjY477LFPhs" class="d-block text-gray">離奇的神駒：歐洲藝術中的獨角獸母題</a>
                  <p class="text-main">「獨角獸」的形象早在西元前3000年已普遍出現在各種古文明。最早在希臘文學中對「獨角」動物的敘述出自活躍於西元前4世紀的史家克忒西阿斯（Ctesias），他描述的獨角獸是一種與馬等大、紫首、白身、藍眼、額前有肘長獸角，角尖處為朱色、中段為黑色、根底為白色的「印度野驢」（Indianwild ass）。</p>
                </div>
              </div>
              <div class="news__item__btn d-flex align-items-center mt-sm-3">
                <div class="line"></div>
                <a target="_blank" href="http://www.artist-magazine.com/edcontent_d.php?lang=tw&tb=8&id=11682&fbclid=IwAR3MSo-2Rg8hjm0-KxFZdCBtZj3fMSK6SaZu3yRTMw4EgqmrPjY477LFPhs" class="btn btn-more btn-gold rounded-0">READ MORE</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-4 mt-sm-0">
            <div data-aos="fade-up" class="news__item h-100">
              <a target="_blank" href="https://arthistorystrolls.com/2020/04/16/%e4%b8%8d%e6%b8%9b%e9%a2%a8%e9%9f%bb%ef%bc%9a-%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e4%b8%ad%e7%9a%84%e9%8f%a1%e7%be%8e%e4%ba%ba/?fbclid=IwAR3670rMkUBs89UC4SrdnEK6nB4b5KTbNBpMlw8_Fdmw072ul6emwHNsucs">
                <div class="bg-cover" style="width: 100%; height: 300px; background-image: url(https://arthistorystroll.files.wordpress.com/2020/03/1-1.jpg);"></div>
              </a>
              <div class="news__item__content d-flex">
                <div class="news__item__content__title">
                  <a target="_blank" href="https://arthistorystrolls.com/2020/04/16/%e4%b8%8d%e6%b8%9b%e9%a2%a8%e9%9f%bb%ef%bc%9a-%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e4%b8%ad%e7%9a%84%e9%8f%a1%e7%be%8e%e4%ba%ba/?fbclid=IwAR3670rMkUBs89UC4SrdnEK6nB4b5KTbNBpMlw8_Fdmw072ul6emwHNsucs" class="d-block text-gray">不減風韻：日本手工上色蛋白照片中的鏡美人</a>
                  <p class="text-main">曾有那麼一段時間，許多遊客藉著日本觀光之際，大肆採購在日本隨處可見的藥妝店流行產品。就筆者個人經驗與觀察，女性顧客所佔比例尤為大成。日本在時尚、彩妝方面的關注與投入，是世人有目共睹的。我想，這是除了在文化上所表現出的細膩講究，對精緻與美的追求，實則深深存於大和民族的遺傳因子之中。</p>
                </div>
              </div>
              <div class="news__item__btn d-flex align-items-center">
                <div class="line"></div>
                <a target="_blank" href="https://arthistorystrolls.com/2020/04/16/%e4%b8%8d%e6%b8%9b%e9%a2%a8%e9%9f%bb%ef%bc%9a-%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e4%b8%ad%e7%9a%84%e9%8f%a1%e7%be%8e%e4%ba%ba/?fbclid=IwAR3670rMkUBs89UC4SrdnEK6nB4b5KTbNBpMlw8_Fdmw072ul6emwHNsucs" class="btn btn-more btn-gold rounded-0">READ MORE</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-4 mt-sm-0">
            <div data-aos="fade-up" class="news__item">
              <a target="_blank" href="https://arthistorystrolls.com/2020/06/18/%e5%89%9d%e7%b9%ad%e6%8a%bd%e7%b5%b2%ef%bc%9a-%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e7%9a%84%e6%a1%91%e7%b9%94%e5%9c%96/">
                <div class="bg-cover" style="width: 100%; height: 300px; background-image: url(https://arthistorystroll.files.wordpress.com/2020/06/3-2.jpg);"></div>
              </a>
              <div class="news__item__content d-flex">
                <div class="news__item__content__title">
                  <a target="_blank" href="https://arthistorystrolls.com/2020/06/18/%e5%89%9d%e7%b9%ad%e6%8a%bd%e7%b5%b2%ef%bc%9a-%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e7%9a%84%e6%a1%91%e7%b9%94%e5%9c%96/" class="d-block text-gray">剝繭抽絲：日本手工上色蛋白照片的桑織圖</a>
                  <p class="text-main">伊薩貝拉‧露西‧博德（Isabella Lucy Bird，1831-1904）是19世紀的英國女探險家，當她途經栃木，在路途中看到叢叢桑樹：「足見當地有養蠶業。沿路可見白色和硫黃色的蠶繭，置於平盤上曝曬。」到了日本山形縣一個被稱作市野的小村落時，她再次記下眼前所見。</p>
                </div>
              </div>
              <div class="news__item__btn d-flex align-items-center">
                <div class="line"></div>
                <a target="_blank" href="https://arthistorystrolls.com/2020/06/18/%e5%89%9d%e7%b9%ad%e6%8a%bd%e7%b5%b2%ef%bc%9a-%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e7%9a%84%e6%a1%91%e7%b9%94%e5%9c%96/" class="btn btn-more btn-gold rounded-0">READ MORE</a>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-6 mt-4 mt-sm-0">
            <div data-aos="fade-up" class="news__item">
              <a target="_blank" href="https://arthistorystrolls.com/2020/03/12/%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e4%b8%ad%e7%9a%84%e7%9b%b8%e6%92%b2%e6%94%9d%e5%bd%b1/?fbclid=IwAR3VaXUMdOVu_HenElQNKDZ4MgWK9vdqvH2rJo8tekz718JZY40ABLRvYi4">
                <div class="bg-cover" style="width: 100%; height: 300px; background-image: url(https://arthistorystroll.files.wordpress.com/2020/03/e4bd9ae5908defbc8ce3808ae79bb8e692b2e6af94e8b3bde3808b.jpg);"></div>
              </a>
              <div class="news__item__content d-flex">
                <div class="news__item__content__title">
                  <a target="_blank" href="https://arthistorystrolls.com/2020/03/12/%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e4%b8%ad%e7%9a%84%e7%9b%b8%e6%92%b2%e6%94%9d%e5%bd%b1/?fbclid=IwAR3VaXUMdOVu_HenElQNKDZ4MgWK9vdqvH2rJo8tekz718JZY40ABLRvYi4" class="d-block text-gray">日本手工上色蛋白照片中的相撲攝影</a>
                  <p class="text-main">一個豔陽高照的爽朗日子，朱紅色的布幕禁錮著人們熱血的喧囂，也壓抑著激昂的咆嘯。此刻，空氣凝結，他們屏息，不敢造次，一眾目光利劍般端詳、尋思、忖度著自個兒的壓注，只見土俵場上兩名魁梧壯碩的力士屈著身，他們摩拳擦掌，鷹般的眼神敵視著對手無形的來勢洶洶。吐納之間，人們的體溫瀕臨沸騰！一旁年輕男孩擔綱行司，他高舉一把軍配團扇，正待最佳時機振手一揮。</p>
                </div>
              </div>
              <div class="news__item__btn d-flex align-items-center">
                <div class="line"></div>
                <a target="_blank" href="https://arthistorystrolls.com/2020/03/12/%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e4%b8%ad%e7%9a%84%e7%9b%b8%e6%92%b2%e6%94%9d%e5%bd%b1/?fbclid=IwAR3VaXUMdOVu_HenElQNKDZ4MgWK9vdqvH2rJo8tekz718JZY40ABLRvYi4" class="btn btn-more btn-gold rounded-0">READ MORE</a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>

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
.news {
  &__item {
    &__btn {
      .line {
        width: 100%;
        height: 1px;
        background-color: rgba(black, 0.1);
      }
      .btn-more {
        width: 120px;
        font-size: 13px;
        line-height: 18px;
        color: white;
      }
    }
    &__content {
      border-top: 4px solid #C2C287;
      margin-top: -2px;
      &__title {
        padding: 15px;
        a {
          font-size: 18px;
          line-height: 25px;
          letter-spacing: 1px;
          font-weight: 400;
        }
        p {
          font-size: 13px;
          line-height: 21px;
          letter-spacing: 1px;
          font-weight: 400;
          margin-top: 10px;
        }
      }
    }
  }
}
.newsComponent {
  &__title {
    border-bottom: .5px solid #C2C287;
  }
}
.bg-cover {
  background-position: center center;
  background-size: cover;
}
</style>
