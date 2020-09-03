<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img width="40px" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DnwtumpOJ2m85hqBW4qNAMtnWtX4pCVh0OulvDC9B1TvKVdJnwKtR29rWQuYeMI67z6FVt8rZWgwfEN3LWoBPBPyArYp0D2Y0tTfhGIYgs2yP67tds3u3gzQudbc1EgQ.jpg" alt="">
          CursiveFancy
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
              <router-link class="nav-item nav-link mr-4" to="/about">關於品牌</router-link>
              <router-link class="nav-item nav-link mr-4" to="/products">產品列表</router-link>
              <router-link class="nav-item nav-link mr-4" to="/cart">購物車</router-link>
            </div>
        </div>
      </nav>
  </div>
</template>

<style lang="scss">
  .navbar-brand{
    font-weight: 500;
  }
  .nav-link{
    font-weight: bold;
  }
</style>
