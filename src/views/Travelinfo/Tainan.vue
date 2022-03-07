<template>
  <div class="kaosiungInfo">
    <loading :active.sync="isLoading"></loading>
    <header class="header">
      <div class="container text-center">
        <h1 class="text-white" style="margin-bottom: 95px">台中旅遊資訊</h1>
        <div class="row justify-content-center">
          <div class="col-sm-6">
            <select name="" id="" class="form-control input-lg" v-model="currentLocation" @change="changeLoading()">
              <option value="">-- 全部 --</option>
              <option :value="location" v-for="(location, index) in locations" :key="index">{{ location }}</option>
            </select>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <PopularDistrict 
        :popularSet="popularSet"
        @changeDistrict="changeDistrict"
      />
    </div>
    <div class="container">
      <hr class="my-5">
      <section>
        <div class="row">
          <ShowInfoCol
            v-for="(item, index) in filterData[currentPage]" :key="index" 
            :item="item" 
            @openModal="openModal"
          />
        </div>
      </section>
      <Pagination 
        :currentPage="currentPage"
        :pages="pages"
        @changePage="changePage"
      />
    </div>
    <InfoDetail 
      :dataTemp="dataTemp"
    />
  </div>
</template>

<script>
import $ from "jquery"
import {dataReturn} from '@/static/kaohZipCode.js'
import PopularDistrict from '@/components/PopularDistrict.vue'
import ShowInfoCol from '@/components/ShowInfoCol.vue'
import Pagination from '@/components/Pagination.vue'
import InfoDetail from '@/components/InfoDetail.vue'
export default {
  name: 'Kaohsiung',
  components: {
    PopularDistrict, Pagination, ShowInfoCol, InfoDetail
  },
  data() {
    return {
      data: [],
      locations: [],
      popularSet: [],
      dataTemp: {},
      currentLocation: '',
      currentPage: 0,
      pages: 0,
      isLoading: false,
      popularColor: ['btn-primary', 'btn-info', 'btn-purple', 'btn-success'],
    }
  },
  computed: {
    filterData() {
      const newData = []
      let items = []
      // 過濾地點
      if (this.currentLocation !== '') {
        items = this.data.filter((item) => item.Zone === this.currentLocation)
      } else {
        items = this.data
      }
      // 分頁製作
      items.forEach((item, i) => {
        if (i % 10 === 0) {
          newData.push([])
        }
        const page = parseInt(i / 10)
        newData[page].push(item)
      })
      return newData
    },
  },
  watch: {
    filterData(val) {
      this.pages = val.length // 分頁數量
      this.currentPage = 0
    }
  },
  methods: {
    handleAdminArea() {
      const zipAndZone = dataReturn.zipCodeToZone
      this.data.sort((a, b) => {
        return parseInt(a.Zipcode - b.Zipcode)
      })
      this.data.forEach((item) => {
        for(let i=0; i < zipAndZone.length ; i++){
          if(item.Zipcode == zipAndZone[i].Zipcode){
            item.Zone = zipAndZone[i].Zone;
            break
          }
        }
      })
    },  
    getUniqueList() {
      const locations = new Set(); // 使用 ES6 中的 set() 取出唯一值
      this.data.forEach((item) => {
        if(item.Zone !== '' && item.Zone !== undefined){
          locations.add(item.Zone)  //使用set.add一樣的元素會被過濾掉
        }
      })
      this.locations = Array.from(locations); //將set轉為一般陣列再存入locations 
      
    },
    setPopular() {
      let popularSet = [];
      this.locations.forEach((item) => {
        if(['安平區', '仁德區', '中西區', '北門區'].includes(item)){
          popularSet.push({
            Zone: item,
          });
        }
      })
      this.popularColor.forEach((item, index) => {
        popularSet[index] = {
          ...popularSet[index],
          ZoneColor: item,
        }
      })
      this.popularSet = popularSet;
    },
    changePage(page) {
      this.isLoading = true;
      this.currentPage = page;
      setTimeout(() => {
        this.isLoading = false;
      },500)
    },
    changeDistrict(Zone) {
      this.isLoading = true;
      this.currentLocation = Zone;
      setTimeout(() => {
        this.isLoading = false;
      },500)
    },
    changeLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      },500)
    },
    openModal(item){
      this.dataTemp = item;
      $('#infoModal').modal('show');
    },
  },
  created() {
    const apiUrl = '/data/scenic_spot_C_f.json';
    this.isLoading = true;
    this.$http.get(apiUrl).then((response) => {
      console.log('res', response)
      let data = response.data.XML_Head.Infos.Info;
      let tempData = data.filter((item) => {
        if(item.Region === '臺南市') return item
      })
      tempData.forEach((item) => {
        item.Zone = item.Town;
      })
      this.data = tempData;
      console.log('data', this.data);
      // this.handleAdminArea(); //data沒有區名只有zipCode時需要
      this.getUniqueList(); // 取得資料後，將地區的值取出來
      this.setPopular();
      setTimeout(() => {
        this.isLoading = false;
      },500)
    })
  }
}
</script>

<style scoped> 
  .header {
    background: url("../../assets/pic/bannerTaichung.jpg");
    background-size: cover;
    background-position: center center;
  }
</style>