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
      <a href="##">優惠活動</a>
      <router-link to="/">首頁</router-link>
      <router-link to="/Login">會員登入</router-link>
    </nav>
    </div>
  </header>
  <main>  
    <div class="room_img">
      <img src="@/assets/sale.jpg" alt="img">
    </div>
    <div class="aboutus">
    <h2>Sale</h2>
    <p>歡慶開幕</p>
    <p>住一晚送一晚</p>
    </div>
  </main>
  </div>
</template>
<script>
export default{
  name:"Sale",
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
 text-align: center;
 margin: 80px 0;
}
main .aboutus p{
  color: white;
  font-size: 20px;
  line-height: 45px;
  text-align: center;
  letter-spacing: 20px;
   font-size: 50px;
}
</style>


