<template>
  <div>
    <header>
    <div class="header_content">
    <h1>
    <router-link :to="{name:`App`}">Happy Space</router-link>
    </h1>
    <nav>
      <a href="##">關於我們</a>
      <router-link to="/">房型介紹</router-link>
      <a href="##">優惠活動</a>
      <router-link to="/">首頁</router-link>
    </nav>
    </div>
  </header>
  <main>  
    <div class="room_img">
      <img src="@/assets/aboutimg.jpg" alt="img">
    </div>
    <div class="aboutus">
    <h2>About Us</h2>
    <p>A wonderful vacation on dream.
    The beach with the breeze, enjoying the sunset in summer, and bathing the stars at midnight.
    What an amazing thing when you wake up in the morning with the view formed the sky, the mountains and the ocean in front of you. You can totally relax yourself with the bright and tidy room, the astonishing scene, and our sweet service.
    Faraway from the noist city right now.</p>
    </div>
  </main>
  </div>
</template>
<script>
export default{
  name:"about",
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
header a{
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
main .room_img img{
  width: 750px;
  height: 550px;
}
main .aboutus {
  width:525px;
  padding: 25px;
}
main .aboutus h2{
 color: yellow;
 font-size: 50px;
}
main .aboutus p{
  color: white;
  font-size: 20px;
  line-height: 45px;
  text-align:justify;
}
</style>


