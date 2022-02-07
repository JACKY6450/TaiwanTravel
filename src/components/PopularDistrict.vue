<template>
  <div class="popularDistrict">
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="bg-white p-3 shadow-sm">
          <h4>熱門行政區</h4>
          <div class="row">
            <div 
              class="col-sm-6 col-lg-3 text-center mb-3" 
              v-for="item in popularSet" :key="item.ZoneColor">
              <button 
                class="btn px-4 w-100" :class="item.ZoneColor" 
                @click="changeDistrict(item.Zone)">
                {{item.Zone}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularDistrict',
  props: {
    popularSet: {
      type: Array,
    }
  },
  methods: {
    changeDistrict(Zone){
      const currentLocation = Zone
      this.$emit('changeDistrict', currentLocation)
    }
  }
}
</script>

<style>

</style>