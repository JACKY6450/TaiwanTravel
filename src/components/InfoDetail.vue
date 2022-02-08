<template>
  <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header bg-success text-light">
          <h5 class="modal-title" id="exampleModalLabel">{{ item.Name }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modalpic mb-3" style="height: 250px">
            <img v-if="item.Picture1" :src="item.Picture1" alt="" class="h-100 w-100">
            <img v-else src="https://picsum.photos/600/400" alt="" class="h-100 w-100">
          </div>
          <ul class="list-unstyled mb-0">
            <li class="d-flex" v-if="item.Name">
              <div class="text-center" style="width: 30px">
                <i class="fas fa-road text-primary"></i>
              </div>
              {{ item.Name }}</li>
            <li class="d-flex" v-if="item.Opentime">
              <div class="text-center" style="width: 30px">
                <i class="fas fa-clock text-dark"></i>
              </div>
              {{ item.Opentime }}</li>
            <li class="d-flex" v-if="item.Add">
              <div class="text-center" style="width: 30px">
                <i class="fas fa-map-marker text-warning"></i>
              </div>
              {{ item.Add }}</li>
            <li class="d-flex" v-if="item.Tel">
              <div class="text-center" style="width: 30px">
                <i class="fas fa-mobile-alt text-info"></i>
              </div>
              {{ item.Tel }}</li>
            <li class="d-flex" v-if="item.Ticketinfo">
              <div class="text-center" style="width: 30px">
                <i class="fas fa-ticket-alt text-success"></i>
              </div>
              {{ item.Ticketinfo }}</li>
            <li class="d-flex" v-if="item.Travellinginfo">
              <div class="text-center" style="width: 30px">
                <i class="fas fa-bus text-purple"></i>
              </div>
              {{ item.Travellinginfo }}</li>
            <li v-if="item.Toldescribe">
              <h5 class="mt-3">景點描述: </h5>
              <p>
                {{ item.Toldescribe }}
              </p>
            </li>
            <li class="text-secondary" v-if="item.Website">
              詳細請參考: <a :href="item.Website" target="_blank">{{ item.Website }}</a>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoDetail',
  props: {
    dataTemp: {
      type: Object,
    }
  },
  data(){
    return {
      item: {}
    }
  },
  watch: {
    dataTemp(val){
      this.item = {...val};
      console.log('da', this.item);
    }
  }
}
</script>

<style scoped>
.modalpic{
  background-size: cover !important;
  background-position: center center !important;
}
</style>