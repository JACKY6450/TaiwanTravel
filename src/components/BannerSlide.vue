<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner position-relative" style="height: 600px">
      <div v-for="(item, index) in travelArea" :key="item.city" class="carousel-item" :class="{ 'active' : index === 0}">
        <img :src="item.pic" class="d-block w-100 h-100" alt="...">
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
</template>

<script>
export default {
  props: {
    travelArea:{
      type: Array
    }
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
</style>