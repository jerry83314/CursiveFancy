<template>
  <div>
    <div class="position-relative">
      <div
        class="position-absolute"
        style="top:0; bottom:0; left:0; right:0; background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/vEBAJYO8qagEfUjp37ebyryp9xJs0XqeZrWAKc3oVeUBioi8F3N6zHbrYfBgUm6YMZNVVNaiaLEoYjp2sJvfYHYrchdTNY3BRCl0lUdM8k73G8BAN9G4nGlvXFOTX2rE.jpg);
      background-position: center center; opacity: 0.25;"
      ></div>
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <navbar></navbar>
        <div class="row justify-content-center my-auto">
          <div class="col-md-6 text-center">
            <h2 class="h1 title">遇扇坊</h2>
            <span class="titleEng">CursiveFancy</span>
            <p class="titleContent mb-0 mt-2">遇扇坊（CursiveFancy)，主營書法扇品。<br>我們的扇品，是書道人一筆一畫悉心而就，每一把筆走龍蛇墨氣舒健的作品，都帶著獨特韻味，淬冶著匠心溫度，以及對藝術的虔誠與熱愛。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <h2 class="mb-5">匠人的獨特韻味</h2>
      <div class="row mb-3">
        <div class="col-md-10 mx-auto">
          <div class="row align-items-center">
            <div class="col-md-7">
              <img data-aos="fade-right" width="100%" src="https://scontent.ftpe9-1.fna.fbcdn.net/v/t1.0-9/82831616_110659107127872_3216225503002230784_o.jpg?_nc_cat=101&_nc_sid=e3f864&_nc_ohc=QLJv6HQV_ycAX-xasHL&_nc_ht=scontent.ftpe9-1.fna&oh=16e71cf2cfb010aedb181deef77075e0&oe=5F7E456F" alt="">
            </div>
            <div class="col-md-5">
              <div class="p-4">
                <h4 class="text-gray mb-4 subTitle">書道人一筆一畫悉心而就</h4>
                <p class="text-main">書道人精心挑選紙張材質，進而嚴選石磨品質，精而一筆一畫促成每個文字，
                  逐一內容皆蘊含古色古香的文言，精緻的過程藉由書道人的溫度傳達。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row align-items-center">
            <div class="col-md-5">
              <div class="p-4">
                <h4 class="text-gray mb-4 subTitle">龍蛇墨氣舒健的創作</h4>
                <p class="text-main">漫遊藝術史的研究題材，讓靈感源源不絕，也從浮世繪去連結各個主題的圖像傳統，
                  集結陶淵明、李白、王維、松尾芭蕉等詩詞，行書及草書書寫內容，每首詩詞附有隸書標題，
                  而栩栩墨氣的作品就可安置在各裝飾上。
                </p>
              </div>
            </div>
            <div class="col-md-7">
              <img data-aos="fade-left" width="100%" src="https://scontent.ftpe9-1.fna.fbcdn.net/v/t1.0-9/96582307_164661005061015_1378655919008645120_o.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=ADjsk8eKjXUAX_ttYkw&_nc_ht=scontent.ftpe9-1.fna&oh=fcbd2e7b8754f5c5378de6d282980f31&oe=5F7E5970" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- background jumbotron -->
    <div class="jumbot position-relative">
      <p class="jumbot__content position-absolute text-white text-left mb-0">浩瀚無垠的藝術長流中
        <br>我們願是不忘初心的滄瀾之
      </p>
      <p class="jumbot__shop position-absolute text-white text-left mb-0">遇扇坊
        <br>為邂逅我們的每位客人
        <br>獻上一份耐人尋味的摯誠藝韻
      </p>
    </div>

    <!-- 商品類別 -->
    <div class="container my-4 my-sm-5">
      <div class="row mb-4 mb-sm-5">
        <div class="col-md-12">
          <h2>商品類別</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col-md-6 pr-sm-0">
              <img data-aos="fade-right" :src="itemImg.img_1" alt="" class="img-fluid">
            </div>
            <div class="col-md-6 m-auto text-center">
              <h4 class="mt-4">扇子</h4>
              <p class="text-muted">遇扇坊的扇品含摺扇、團扇等。提供客製化內容訂製，由收藏者指定文字內容與風格，或由書道家親自為收藏者選材，創作獨一無二的精緻雅件。輕巧而便利的扇品是時尚配件，既突顯每位執扇者的獨道品味，富有濃郁的生活美學底蘊，可作為餽贈雅物。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col-md-6 m-auto text-center order-2 order-sm-1">
              <h4 class="mt-4">書畫掛件</h4>
              <p class="text-muted">遇扇坊創作傳統書畫作品，含掛軸、卷軸、對聯等，作品尺寸、裝裱型制多樣。提供客製內容，或由書道家親自操刀，創作出每一幅值得收藏或適合居室擺飾的精彩之作。無論是收藏者們的個人珍藏，或作為親友之間或特殊節慶場合的饋贈之禮，皆是獨具一格的別致雅物。</p>
            </div>
            <div class="col-md-6 order-1 order-sm-2 pl-sm-0">
              <img data-aos="fade-left" :src="itemImg.img_2" alt="" class="img-fluid">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col-md-6 pr-sm-0">
              <img data-aos="fade-right" :src="itemImg.img_3" alt="" class="img-fluid">
            </div>
            <div class="col-md-6 m-auto text-center">
              <h4 class="mt-4">畫仙板</h4>
              <p class="text-muted">遇扇坊提供小型、輕巧而適合居家擺飾的畫仙板創作。偌大的室內空間中，置放一座簡約而富有深意的小品，為居家生活添一股雅逸的氣韻。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

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
  },
  data () {
    return {
      itemImg: {
        img_1: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/giq5obZEvBchFkyCRjZdm4OIUDLckRCyKeyegDuRduXKuIPX4ai5GSYuLoubAmHXK60r62Wvysvl1NBRbfgHOhDW2l6rFKtMSkcnEsm1KPtP64fdhO8ZmyExBt8c24NO.jpg',
        img_2: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/r7GRxcKQWvy0ovEj3ekniLljyxO3bqFdjRaigk9QlepiXjgzw29NAqhrTO9mrXBZvLpgVIJW0mW2T9r60BKBYsNfbaPxfmiR9Tzdh5ac5qw9PCGzhwUtviBWpz5TXG9S.jpg',
        img_3: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/NEZKseYLXIigygMIJ9wPr6JBm4nJtuJoW2UqUYflRPCwY4QqDrtxRpki8s4lkK0DeZRV7I9fq6Tc0yYcWjUGxi5MUBfSxQjwY8Xh8QZRqh0SMKY2xgflH0jhGnc7Byme.jpg'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .subTitle {
    border-bottom: 1px solid #C2C287;
    padding-bottom: 5px;
  }
  .title {
    margin-bottom: -10px;
  }
  .titleEng {
    text-shadow: 0 0 5px white;
    font-size: 28px;
    color: #C6A300;
  }
  .titleContent {
    color: #4a4a4a;
    font-weight: 600;
  }
  .jumbot {
    height: 400px;
    background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/GW5WWDIGwqp8EoQPUTH5MVSrcVao4boDf6R4yy6BsWMqDs5Xu3T1c9TLKMSKLbgSkKVOeuyZa7aQdh9UdijjkKIi3hoxP3FV52Zk9SyOa0sDs6CVq1XejskT6LJszNpt.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    &__content {
      left: 15%;
      top: 10%;
    }
    &__shop {
      right: 15%;
      bottom: 10%;
    }
  }
  @media (max-width: 576px) {
    .jumbot {
      background-attachment: scroll;
    }
  }
</style>
