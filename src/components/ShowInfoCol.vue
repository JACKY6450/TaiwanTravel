<template>
  <div class="infoCol col-md-6 mb-4" @click="openModal()">
    <div class="card shadow-sm border-0 h-100">
      <div class="card-header bg-cover" 
        :style="{ backgroundImage: `url(${item.Picture1})` }"
        style="height: 155px;">
      </div>
      <div class="card-body ">
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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowInfoCol',
  props: {
    item: {
      type: Object,
    }
  },
  methods: {
    openModal(){
      const item = this.item
      this.$emit('openModal', item)
    }
  }
}
</script>

<style>
.infoCol:hover{
  box-shadow: 3px 5px 5px 1px #aaaaaa;
  cursor: pointer;
}
</style>