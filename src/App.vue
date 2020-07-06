<template>
<div>
  <header>
  <div class="header_content">
    <h1>Happy Space</h1>
    <nav>
      <a href="##">關於我們</a>
      <a href="#rooms_ul">房型介紹</a>
      <a href="##">訂房服務</a>
      <a href="##">優惠活動</a>
    </nav>
    </div>
  </header>
  <main>
  <div class="banner"></div>
  <div class="main_content">
  <ul id="rooms_ul">
    <rooms v-for="item in rooms" :item="item"></rooms>
  </ul>
  </div>
  </main>
</div>
</template>
<script>
import rooms from "@/components/Rooms.vue"
export default{
  name:"App",
  components:{
    rooms,
  },
  data(){
    return{
      rooms:"",
    }
  },
  mounted(){
    this.axios("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{
      headers:{
         Authorization : "Bearer 7mVLFDwXZ7vbrKGVDJcRr9qXCjUjM8ZvPfQorXSY9jVnzYyYInJj07mIv2QE",
         accept:"application/json",
      }
    }).then(result=>{
      this.rooms =result.data.items;
      console.log(result.data.items.description)
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
  font-size: 22px; 
  border-left:2px solid blue;
  padding-left: 20px;
  margin:0 0 0 10px;
}
header nav a{
  font-size: 20px;
  display: inline-block;
  padding:20px 35px;
  text-decoration: none;
  color:black;
}
main {
	background-color:	#2b2d42;
}
main .banner{
  width: 100%;
  height: 600px;
  background:url("https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80") no-repeat 50% 75%;
}
main .main_content{
  width:80%;
  margin:auto;
}
main .main_content ul{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  margin:0;
  padding: 0;
}
</style>