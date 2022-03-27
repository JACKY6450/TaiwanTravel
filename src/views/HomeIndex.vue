<template>
  <div class="homeIndex">
    <loading :active.sync="isLoading"></loading>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <!-- <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol> -->
      <div class="carousel-inner position-relative" style="height: 600px">
        <div class="carousel-item active" >
          <img src="@/assets/pic/bannerTaipei.jpg" class="d-block w-100 h-100" alt="...">
        </div>
        <div class="carousel-item" >
          <img src="@/assets/pic/bannerTaichung.jpg" class="d-block w-100 h-100" alt="...">
        </div>
        <div class="carousel-item" >
          <img src="@/assets/pic/bannerTainan.jpg" class="d-block w-100 h-100" alt="...">
        </div>
        <div class="carousel-item" >
          <img src="@/assets/pic/bannerHualien.jpg" class="d-block w-100 h-100" alt="...">
        </div>
        <div class="welcome h1 text-light position-absolute">
          <p style="font-size: 48px">Welcome To Travel Inform</p>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container pt-4">
      <hr class="my-4">
      <h2 class="mb-4 text-primary" style="font-weight: bold">熱門旅遊景點</h2>
      <div class="row">
        <div v-for="item in popularAttract" :key="item.Name" 
          class="attractCol col-sm-6 col-lg-3 mb-4">
          <div class="card shadow border-0  h-100">
            <div v-if="item.Picture1" 
              class="card-header bg-cover" 
              :style="{ backgroundImage: `url(${item.Picture1})` }"
              style="height: 155px;">
            </div>
            <div v-else 
              class="card-header bg-cover" 
              style="height: 155px; background-image: url('https://fakeimg.pl/600x400/?text=No%20image')">
            </div>
            <div class="card-body">
              <ul class="list-unstyled mb-0">
                <li class="d-flex mb-3" v-if="item.Name">
                  <div class="text-center" style="width: 30px">
                    <i class="fas fa-road text-info"></i>
                  </div>
                  {{ item.Name }}</li>
                <li class="d-flex limitLine" v-if="item.Add">
                  <div class="text-center" style="width: 30px">
                    <i class="fas fa-clock text-info"></i>
                  </div>
                  {{ item.Add }}</li>
              </ul>
            </div>
            <div class="card-footer bg-white border-top-0 px-5">
              <button class="btn btn-outline-info border-info w-100" 
                style="border: 3px solid; border-radius: 0.5rem"
                @click="openModal(item)">
                了解更多
              </button>
            </div>
          </div>
        </div>
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
export default {
  name: 'HomeIndex',
  components: {
    InfoDetail
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
.welcome{
  font-style: italic;
  top: 40%;
  left: 50%;
  transForm: translate(-50%, -50%);
}
.limitLine{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
}
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