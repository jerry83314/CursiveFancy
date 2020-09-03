<template>
  <div>
    <!-- <h2>關於我們</h2>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/products">Products</router-link>|
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/admin">後台登入</router-link>
    </div>-->
    <div class="container">
      <navbar></navbar>
    </div>

    <!-- Carousel -->
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            style="width: 100%; height: 600px; top:0; bottom: 0; left: 0; right: 0; background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/pBxq3oOiHPduPUpI0HETWZrVPZUi4aotaTDHQ7Sd35yrH3WVHFboT2ew3aozdBsQaBMpF7WIZEVZTRosOxMCZsmFiW1Gx7zDlUBmSjfWwyc4SQVtCtBbmPDAY3k6TZlF.jpg); background-position: center center; background-size: cover; background-repeat: no-repeat; opacity: 1;"
          ></div>
          <!-- <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/rb9rOjpjn2xyGjiazJyZr91vjk8k4iOcMIcDpGy7ZyMJsz9pDmCGlIWpaYmrcxWBbqYNgKnA5ImqkMTk0leXkTbjU7lOB0R3oKhahhDsEIOBAxDXallZ6UypLewyD21a.jpg" class="d-block w-100" alt="..." /> -->
        </div>
        <div class="carousel-item">
          <!-- https://hexschool-api.s3.us-west-2.amazonaws.com/custom/C2kCFX4gn9kLPGv2FE0CrYDAwwEEsMRv2Qo1z8Z27vU3FRJP6qgY2u8AY2yz8nfAoT5dNt3wvXCuxqMYSh1s73omTMEnSCCSa2mzSlTQwnvQTM1rBTAHKrcR3yqsdGiy.jpg -->
          <div
            style="width: 100%; height: 600px; top:0; bottom: 0; left: 0; right: 0; background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/C2kCFX4gn9kLPGv2FE0CrYDAwwEEsMRv2Qo1z8Z27vU3FRJP6qgY2u8AY2yz8nfAoT5dNt3wvXCuxqMYSh1s73omTMEnSCCSa2mzSlTQwnvQTM1rBTAHKrcR3yqsdGiy.jpg); background-position: center center; background-size: cover; background-repeat: no-repeat; opacity: 1;"
          ></div>
          <!-- <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/rb9rOjpjn2xyGjiazJyZr91vjk8k4iOcMIcDpGy7ZyMJsz9pDmCGlIWpaYmrcxWBbqYNgKnA5ImqkMTk0leXkTbjU7lOB0R3oKhahhDsEIOBAxDXallZ6UypLewyD21a.jpg" class="d-block w-100" alt="..." /> -->
        </div>
        <div class="carousel-item">
          <!-- <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/rb9rOjpjn2xyGjiazJyZr91vjk8k4iOcMIcDpGy7ZyMJsz9pDmCGlIWpaYmrcxWBbqYNgKnA5ImqkMTk0leXkTbjU7lOB0R3oKhahhDsEIOBAxDXallZ6UypLewyD21a.jpg" class="d-block w-100" alt="..." /> -->
          <div
            style="width: 100%; height: 600px; top:0; bottom: 0; left: 0; right: 0; background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/a8yAMH9KMWcakUmsL6eWatFnRfMf7kvdxFsoLUWwakIWP3N6KFw5ZvoZYdOch7CE4V3dXw7vEoY93Ly2v5cVuCzYsz0RwcmzD5NkX15mmDY8Aew5cEk4CuRIjct1CALr.jpg); background-position: center center; background-size: cover; background-repeat: no-repeat; opacity: 1;"
          ></div>
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

    <!-- 品牌介紹 -->
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3 mx-auto">
          <h2 class="newsComponent__title text-gray my-4 my-sm-5 p-1">品牌介紹</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/jD9ziga8DND7umdJDXNi6js77CvCv1YEJr2934t6OzLSLa3x3cfk1DJxCEfqRyQRfpA00y3tqNdsjSzuq4QQuRwoBczMzwmgg3u6bwgPux67hvWvEzCQDFDlKpGYIQx2.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-md-6 m-auto text-center">
          <p class="text-main mt-4 mt-sm-0 mb-0">遇扇坊（CursiveFancy)，主營書藝作品，包含扇類（如摺扇、團扇）、傳統書畫（如掛軸、卷軸、對聯），以及畫仙板等各類型制之作。<br>
            <br>我們的作品，是書道人一筆一畫悉心而就，每一幅筆走龍蛇墨氣舒健之作，皆蘊含獨特韻味，淬冶著書家職人的溫度，以及對藝術的虔誠與熱愛。<br>
            <br>遇扇坊，以「遇」字為精神核心。對我們而言，每件獨特作品與每位收藏者的邂逅，都出自緣分的連繫。欣賞一件佳作，猶如認識一位陪伴我們品味雅興的良友。因此，我們期望收藏者們能在遇扇坊找到專屬於你的典藏品。<br>
            <br>遇扇坊出品形式豐富多樣，內容除了提供客製服務，亦可託付書道家發揮靈感。我們的作品除了用於室內居家擺飾，亦經常作為收藏者與親友間的高雅餽贈之禮。無論是宜室、宜家、或宜人，傳遞著書道家與收藏者每份赤誠濃郁的心意。<br>
          </p>
        </div>
      </div>
    </div>

    <!-- 藝術史專欄文章 -->
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
          <div class="col-md-6 mb-sm-5">
            <div class="news__item">
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
          <div class="col-md-6 mt-4 mt-sm-0 mb-sm-5">
            <div class="news__item">
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
          <div class="col-md-6 mt-4 mt-sm-0">
            <div class="news__item">
              <a target="_blank" href="https://arthistorystrolls.com/2020/06/18/%e5%89%9d%e7%b9%ad%e6%8a%bd%e7%b5%b2%ef%bc%9a-%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e7%9a%84%e6%a1%91%e7%b9%94%e5%9c%96/">
                <div class="bg-cover" style="width: 100%; height: 300px; background-image: url(https://arthistorystroll.files.wordpress.com/2020/06/3-2.jpg);"></div>
              </a>
              <div class="news__item__content d-flex">
                <div class="news__item__content__title">
                  <a target="_blank" href="https://arthistorystrolls.com/2020/06/18/%e5%89%9d%e7%b9%ad%e6%8a%bd%e7%b5%b2%ef%bc%9a-%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e7%9a%84%e6%a1%91%e7%b9%94%e5%9c%96/" class="d-block text-gray">剝繭抽絲：日本手工上色蛋白照片的桑織圖</a>
                  <p class="text-main">伊薩貝拉‧露西‧博德（Isabella Lucy Bird，1831-1904）是19世紀的英國女探險家，當她途經栃木，在路途中看到叢叢桑樹：「足見當地有養蠶業。沿路可見白色和硫黃色的蠶繭，置於平盤上曝曬。」到了日本山形縣一個被稱作市野的小村落時，她再次記下眼前所見：「市野野是非常美麗的村落。村民勤奮工作，與別處村落一樣，專門飼養蠶，四處可見草蓆上擺著要曬乾的純白色和硫黃色的蠶繭。」</p>
                </div>
              </div>
              <div class="news__item__btn d-flex align-items-center">
                <div class="line"></div>
                <a target="_blank" href="https://arthistorystrolls.com/2020/06/18/%e5%89%9d%e7%b9%ad%e6%8a%bd%e7%b5%b2%ef%bc%9a-%e6%97%a5%e6%9c%ac%e6%89%8b%e5%b7%a5%e4%b8%8a%e8%89%b2%e8%9b%8b%e7%99%bd%e7%85%a7%e7%89%87%e7%9a%84%e6%a1%91%e7%b9%94%e5%9c%96/" class="btn btn-more btn-gold rounded-0">READ MORE</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-sm-0">
            <div class="news__item">
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
          </div>
        </div>
      </div>
    </section>

    <myFooter></myFooter>
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import myFooter from '@/components/Footer.vue'

export default {
  components: {
    navbar,
    myFooter
  }
}
</script>

<style lang="scss">
.bg-cover {
  background-position: center center;
  background-size: cover;
}
.carousel-inner {
  height: 500px;
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
</style>
