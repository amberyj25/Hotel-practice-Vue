<template>
    <li>
     <a href="##" @click.prevent="updateUrl(item.id)" class="li_img">
        <img :src="item.imageUrl">
      </a>
      <div class="li_inner">
        <a href="##" @click.prevent="updateUrl(item.id)" class="li_text">{{item.name}}</a>
        <p>平日：{{item.normalDayPrice}}元 / 假日：{{item.holidayPrice}}元</p>
        <div class="more">
          <a href="##" @click.prevent="updateUrl(item.id)">點擊看更多介紹</a>
        </div>
      </div>
    </li>
</template>

<script>
export default{
  name:"Rooms",
  props:["item"],
  methods:{
    updateUrl(id){
      this.$router.push(`/SingleRoom/${id}`)
    }
  }
}
</script>
<style scoped>
li{
  list-style: none;
  margin: 12px;
  background-color: #fffffc;
  padding: 15px;
  position: relative;
  height: 320px;
  overflow: hidden;
}
li img{
  width: 350px;
  height: 250px;
}
li .li_inner{
  background-color: white;
  position: absolute;
  bottom:0;
  width: 350px;
  height: 80px;
  transition: all 0.5s;
}
li .li_inner:hover{
  height: 120px;
}
li .li_inner .more{
  position:absolute;
  width:100%;
  height: 20px;
  bottom: -21px;
  transition: all 1s;
} 
li .li_inner:hover .more{
  bottom: 15px;
}
li .li_inner .more a{
  text-decoration: none;
  color: #0033FF;
  font-size: 18px;
  letter-spacing: 5px;
}
li .li_inner .more a:hover{
  color: #0000CD;
}
li .li_text{
  display: block;
  text-decoration: none;
  color: black;
  font-size: 20px;
}
li .li_text:hover{
  color: blue;
}
li .li_img:hover{
  opacity: 0.8;
}
</style>