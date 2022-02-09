<template>
  <div class="homeIndex">
    <loading :active.sync="isLoading"></loading>
    <div class="container pt-4">
      <div class="row">
        <div class="cityCol col-sm-6 col-lg-4 mb-4" v-for="item in travelArea" :key="item.city">
          <router-link :to="item.linkTo">
            <div class="card text-dark text-center">
              <div class="card-head position-relative" style="height:200px">
                <img :src="item.pic" alt="" class="card-img-top h-100">
                <div class="overlay position-absolute text-center d-flex justify-content-center align-items-center w-100 h-100">
                  <div class="readmore text-white">
                      詳細資訊
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">{{ item.city }}</h3>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeIndex',
  data(){
    return {
      isLoading: false,
      travelArea: [
        {
          city: '台北市旅遊資訊',
          linkTo: '/taipei',
          pic: require('@/assets/pic/bannerTaipei.jpg'),
        },
        {
          city: '新北市旅遊資訊',
          linkTo: '/newTaipei',
          pic: require('@/assets/pic/bannerNewTaipei.jpg'),
        },
        {
          city: '台中市旅遊資訊',
          linkTo: '/taichung',
          pic: require('@/assets/pic/bannerTaichung.jpg'),
        },
        {
          city: '嘉義縣市旅遊資訊',
          linkTo: '/keelung',
          pic: require('@/assets/pic/bannerChiayi.jpg'),
        },
        {
          city: '台南市旅遊資訊',
          linkTo: '/tainan',
          pic: require('@/assets/pic/bannerTainan.jpg'),
        },
        {
          city: '高雄市旅遊資訊',
          linkTo: '/kaohsiung',
          pic: require('@/assets/pic/bannerKaohsiong.jpg'),
        },
        {
          city: '南投縣旅遊資訊',
          linkTo: '/nantou',
          pic: require('@/assets/pic/bannerNantou.jpg'),
        },
        {
          city: '花蓮縣旅遊資訊',
          linkTo: '/hualien',
          pic: require('@/assets/pic/bannerHualien.jpg'),
        },
        {
          city: '台東縣旅遊資訊',
          linkTo: '/taitung',
          pic: require('@/assets/pic/bannerTaitung.jpg'),
        },
      ]
    }
  },
  created(){
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    },500)
  }
}
</script>

<style scoped>
.cityCol a{
  text-decoration: none;
}
.card{
  transition: .5s;
}
.cityCol .card:hover{
  box-shadow: 3px 5px 5px 1px #aaaaaa;
}
.cityCol .card:hover .card-img-top{
  -webkit-filter:brightness(.6);
}
.cityCol .card:hover .overlay{
  opacity: 1;
}
.overlay{
  opacity: 0;
  top: 0%;
  left: 0%;
  transition: .8s;
}
.readmore{
  padding: 6px;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 28px;
  font-weight: bold;
}
</style>