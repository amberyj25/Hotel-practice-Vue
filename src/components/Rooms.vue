<template>
    <li>
     <a href="##" @click.prevent="updateUrl(item.id)">
        <img :src="item.imageUrl">
      </a>
      <a href="##" @click.prevent="updateUrl(item.id)">{{item.name}}</a>
      <p>平日：{{item.normalDayPrice}}元 / 假日：{{item.holidayPrice}}元</p>
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
}
li img{
  width: 350px;
  height: 250px;
}
li a{
  display: block;
  text-decoration: none;
  color: black;
  font-size: 20px;
}
li a:hover{
  color: blue;
}
</style>