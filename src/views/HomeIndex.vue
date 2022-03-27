<template>
  <div class="homeIndex">
    <loading :active.sync="isLoading"></loading>
    <BannerSlide 
      :travelArea="travelArea"
    />
    <div class="container pt-4">
      <hr class="my-4">
      <h2 class="mb-4 text-primary" style="font-weight: bold">熱門旅遊景點</h2>
      <div class="row">
        <PopularAttract 
          v-for="item in popularAttract" 
          :key="item"
          :item="item"
          @openModal="openModal"
        />
      </div>
      <hr class="my-4">
      <h2 class="mb-4 text-primary" style="font-weight: bold">各縣市旅遊資訊</h2>
      <div class="row">
        <div class="cityCol col-sm-6 col-lg-3 mb-4" v-for="item in travelArea" :key="item.city">
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
    <InfoDetail 
      :dataTemp="dataTemp"
    />
  </div>
</template>

<script>
import $ from "jquery"
import InfoDetail from '@/components/InfoDetail.vue'
import BannerSlide from '@/components/BannerSlide.vue'
import PopularAttract from '@/components/PopularAttract.vue'
export default {
  name: 'HomeIndex',
  components: {
    InfoDetail, BannerSlide, PopularAttract
  },
  data(){
    return {
      isLoading: false,
      travelArea: [
        {
          city: '北部旅遊資訊',
          linkTo: '/northCity',
          pic: require('@/assets/pic/bannerTaipei.jpg'),
        },
        {
          city: '中部旅遊資訊',
          linkTo: '/midCity',
          pic: require('@/assets/pic/bannerTaichung.jpg'),
        },
        {
          city: '南部旅遊資訊',
          linkTo: '/southCity',
          pic: require('@/assets/pic/bannerTainan.jpg'),
        },
        {
          city: '東部旅遊資訊',
          linkTo: '/eastCity',
          pic: require('@/assets/pic/bannerHualien.jpg'),
        },
      ],
      popularAttract: [],
      dataTemp: {}
    }
  },
  methods: {
    init(response){
      let data = response.data.XML_Head.Infos.Info;
      let highAttract = [];
      console.log('res', data);
      data.forEach((item) => {
        if(item.Level >= 9 && item.Picture1 !== '' && item.Picture1 !== undefined){
          highAttract.push(item)
        }
      })
      console.log(highAttract);
      for(let i=0 ; i<8 ; i++){
        let randIndex =Math.floor(Math.random()*highAttract.length);
        this.popularAttract.push(highAttract[randIndex]);
        highAttract.splice(randIndex, 1);
      }
      console.log(this.popularAttract); 
    },
    openModal(item){
      this.dataTemp = item;
      $('#infoModal').modal('show');
    },
    recall(){
      const apiUrl = 'https://jacky6450.github.io/TaiwanTravel/data/scenic_spot_C_f.json';
      this.$http.get(apiUrl).then((response) => {
        this.init(response);
      })
    },
  },
  created(){
    const apiUrl = '/data/scenic_spot_C_f.json';
    this.isLoading = true;
    this.$http.get(apiUrl).then((response) => {
      this.init(response);
    }).catch((error) => {
      if(error.response.status === 404){
        this.recall(); //給githubPage用
      }
    })
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