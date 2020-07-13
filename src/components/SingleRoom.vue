<template>
  <div>
    <header>
    <div class="header_content">
    <h1>
    <router-link :to="{name:`App`}">Happy Space</router-link>
    </h1>
    <nav>
      <router-link to="/About">關於我們</router-link>
      <router-link to="/">房型介紹</router-link>
      <router-link to="/Sale">優惠活動</router-link>
      <router-link to="/">首頁</router-link>
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
    <p>房客人數限制：{{room.descriptionShort.GuestMax}}</p>
    <p>床型：{{room.descriptionShort.Bed[0]}}</p>
     <p>CheckIn的時間 : {{room.checkInAndOut.checkInEarly}}</p>
     <p>CheckOut的時間 : {{room.checkInAndOut.checkOut}} </p>
     <p style="text-align: justify;">{{room.description}}</p>
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
header a:hover{
  color: blue;
}
main{
  background-color:	#2b2d42;
  display: flex;
  justify-content: space-around;  
  padding: 50px 0;
}
main .room_img{
  background-color: #fffffc;
  padding:15px;
}
main .room_img .img img{
  width: 580px;
  height: 350px;
}
main .room_img .another_img{
  display: flex;
  justify-content: space-between;
}
main .room_img .another_img img{
  width: 285px;
  height: 215px;
}
main .room_feature {
  width:525px;
  padding: 25px;
}
main .room_feature h2{
 color: yellow;
 font-size: 50px;
}
main .room_feature p{
  color: white;
  font-size: 20px;
}
</style>