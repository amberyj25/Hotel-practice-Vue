<template>
<div>
  <header>
  <loading :active.sync="isLoading"></loading>
  <div class="header_content">
    <h1><router-link to="/">Happy Space</router-link></h1>
    <nav>
      <router-link to="/About">關於我們</router-link>
      <a href="#rooms_ul">房型介紹</a>
      <router-link to="/Sale">優惠活動</router-link>
      <router-link to="/Login">會員登入</router-link>
    </nav>
    </div>
  </header>
  <main>
  <div class="banner">
    <div class="img"></div>
  </div>
  <div class="main_content">
    <ul id="rooms_ul">
      <Rooms v-for="(item,key) in rooms" :item="item" :key="index"></Rooms>
    </ul>
  </div>
  </main>
</div>
</template>
<script>
import Rooms from "@/components/Rooms.vue"
export default{
  name:"App",
  components:{
    Rooms,
  },
  data(){
    return{
      rooms:"",
      isLoading: false,
    }
  },
  mounted(){
    this.isLoading = true;
    this.axios.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{
      headers:{
         Authorization : "Bearer 7mVLFDwXZ7vbrKGVDJcRr9qXCjUjM8ZvPfQorXSY9jVnzYyYInJj07mIv2QE",
         accept:"application/json",
      }
    }).then(result=>{
      this.rooms =result.data.items;
      this.isLoading = false;
    })
  },
}
</script>

<style scoped>
header{
  background-color: #a5a58d;
}
header .header_content{
  width:80%;
  display: flex;
  justify-content:space-between;
  margin: auto;
  padding: 15px 0;
}
header h1{
  width:50px;
  border-left:2px solid blue;
  padding-left: 20px;
  margin:0 0 0 10px;
}
header h1 a{
  text-decoration: none;
  color: black;
  font-size: 25px;
  display: inline-block;
}
header nav a{
  font-size: 20px;
  display: inline-block;
  padding:20px 35px;
  text-decoration: none;
  color:black;
}
header nav a:hover{
  color: blue;
}
main {
	background-color:	#2b2d42;
}
main .banner{
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
}
main .banner .img{
  width: 100%;
  height: 100%;
  background:url("https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80") no-repeat 28% 78%;
  background-size: cover;
  position: absolute;
  transition: transform 1s;
}
main .banner .img:hover{
  transform: scale(1.2);
}
main .main_content{
  width:85%;
  margin: auto;
}
main .main_content ul{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  margin: 0;
  padding: 5px 0;
}
</style>