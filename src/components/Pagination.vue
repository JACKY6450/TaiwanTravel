<template>
  <nav class="my-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li 
        class="page-item"
        :class="{disabled: currentPage === 0 }" >
        <a class="page-link" href="#" @click.prevent = "$emit('changePage', 0)">首頁</a>
      </li>
      <li 
        class="page-item"
        :class="{disabled: currentPage === 0 }" >
        <a class="page-link" href="#" @click.prevent = "$emit('changePage', currentPage-1)">上一頁</a>
      </li>
      <!-- 分頁渲染 -->
      <li  
        v-for="page in renderPages" :key="page"
        class="page-item" 
        :class="{active: currentPage === page - 1}">
        <a class="page-link" href="#" @click.prevent = "$emit('changePage', page-1)">{{ page }}</a>
      </li>
      <!--  -->
      <li 
        class="page-item"
        :class="{disabled: currentPage === pages -1 }">
        <a class="page-link" href="#" @click.prevent = "$emit('changePage', currentPage+1)">下一頁</a>
      </li>
      <li 
        class="page-item"
        :class="{disabled: currentPage === pages -1 }">
        <a class="page-link" href="#" @click.prevent = "$emit('changePage', pages-1)">尾頁</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: null,
    },
    pages: {
      type: Number,
      default: null,
    },
  },
  data(){
    return{
      pageUnProcess: []
    }
  },
  watch: {
    pages(val){
      for(let i=0 ;i< val; i++){
        this.pageUnProcess.push(i+1);
      }
    }
  },
  computed: {
    renderPages(){
      return this.pageUnProcess.filter((item) => {
        if((this.currentPage+1) < 3){
          if(item <= 5) return item
        }
        else{
          if(Math.abs((this.currentPage+1)-item) < 3){
            return item
          }
        } 
      })
    }
  }
}
</script>

<style>

</style>