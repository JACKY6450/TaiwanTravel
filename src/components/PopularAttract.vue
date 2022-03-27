<template>
  <div class="attractCol col-sm-6 col-lg-3 mb-4">
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
          <li class="d-flex mb-3 textli" v-if="item.Name">
            <div class="text-center mr-2" >
              <i class="fas fa-road text-info"></i>
            </div>
            <span class="textlimit1">
              {{ item.Name }}
            </span>
          </li>
          <li class="d-flex " v-if="item.Opentime">
            <div class="text-center mr-2">
              <i class="fas fa-clock text-info"></i>
            </div>
            <span class="textlimit1">
              {{ item.Opentime }}
            </span>
            </li>
        </ul>
      </div>
      <div class="card-footer bg-white border-top-0 px-5">
        <button class="btn btn-outline-info border-info w-100" 
          style="border: 3px solid; border-radius: 0.5rem"
          @click="viewMore(item)">
          了解更多
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
   methods: {
    viewMore(item){
      this.$emit('openModal', item)
    }
  }
}
</script>

<style>
.textlimit1{
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>