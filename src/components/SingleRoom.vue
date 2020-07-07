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
    <div class="room_img">
      <div class="img">
      <img :src="room.imageUrl[2]">
      </div>
      <div class="another_img">
        <img :src="room.imageUrl[0]">
        <img :src="room.imageUrl[1]">
      </div>
    </div>
    <div class="room_feature">
    <h2>{{room.name}}</h2>
    </div>
  </main>
  </div>
</template>
<script>
export default{
  name:"singleRoom",
  data(){
    return{
      room:""
    }
  },
  mounted(){
    let id=this.$route.params.id;
    this.axios(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`,{
      headers:{
         Authorization : "Bearer 7mVLFDwXZ7vbrKGVDJcRr9qXCjUjM8ZvPfQorXSY9jVnzYyYInJj07mIv2QE",
         accept:"application/json",
      }
    }).then(result=>{
      this.room=result.data.room[0];
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
main{
  background-color:	#2b2d42;
  display: flex;
  justify-content: space-around;  
}
main .room_img{
  background-color: #fffffc;
  padding:15px;
}
main .room_img .img img{
  width: 500px;
  height: 300px;
}
main .room_img .another_img{
  display: flex;
  justify-content: space-between;
}
main .room_img .another_img img{
  width: 245px;
  height: 150px;
}
main .room_feature h2{
 color: yellow;
}
</style>