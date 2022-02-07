<template>
  <div class="home">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">台灣旅遊資訊</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active mr-1">
            <router-link class="nav-link" to="taipei">台北市</router-link>
          </li>
          <li class="nav-item active mr-1">
            <router-link class="nav-link" to="newTaipei">新北市</router-link>
          </li>
          <li class="nav-item active mr-1">
            <router-link class="nav-link" to="taichung">台中市</router-link>
          </li>
          <li class="nav-item active mr-1">
            <router-link class="nav-link" to="tainan">台南市</router-link>
          </li>
          <li class="nav-item active mr-1">
            <router-link class="nav-link" to="kaohsiung">高雄市</router-link>
          </li>
          <li class="nav-item active mr-1">
            <router-link class="nav-link" to="nantou">南投縣</router-link>
          </li>
          <li class="nav-item active mr-1">
            <router-link class="nav-link" to="hualien">花蓮縣</router-link>
          </li>
          <li class="nav-item active mr-1">
            <router-link class="nav-link" to="taitung">台東縣</router-link>
          </li>
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
      </div>
    </nav>
    <router-view />
    <footer class="text-center bg-primary text-white py-4">
      <div>台灣旅遊資訊</div>
      <div>資料來源：政府資料開放平台/景點-觀光資訊資料庫</div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      
    }
  },
  computed: {
    
  }
}
</script>
<style scoped>
#nav {
  padding: 20px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  background-color: #009ffc;
  color: white;
  /* background-color: white; */
}
#nav .nav-link:hover{
  background-color: #009ffc;
  color: white;
  opacity: .9;
}
</style>